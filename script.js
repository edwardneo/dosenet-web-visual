const map = L.map('testMap').setView([37.8757, -122.2593], 17);
const layerControl = L.control.layers().addTo(map);
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
layerControl.addBaseLayer(osm, "OpenStreetMap");

let datatypes = []; // [datatype, ...]
let uploads = {}; // {filename: {points: [{data, marker}, ...], overlay, viewMarkers, datatypes}}
let extrema = {}; // {datatype: [min, max]}
let view = L.featureGroup();

$("#render-data").click(() => {
    $('#data-input').parse({
		config: {
            header: true,
            complete: plot,
		},
		error: function(err, file)
		{
			console.log("ERROR:", err, file);
		},
		complete: function()
		{
			console.log("Done with all files");
		}
	});
});

$("#clear-data").click(() => {
    const targetFn = $('#overlays option:selected').val();

    if (targetFn === "All" || $("#overlays").children().length === 2) {
        datatypes = [];
        extrema = {};
        view = L.featureGroup();
        
        Object.values(uploads).reduce((overlays, upload) => overlays.concat([upload.overlay]), [])
            .forEach(overlay => {
                overlay.removeFrom(map);
                layerControl.removeLayer(overlay);
        });

        uploads = {};

        $("#sensors").empty();

        $("#overlays").empty();
        $("#overlays").append($(`<option value="All">All</option>`));
    } else {
        const oldDatatypes = Object.keys(uploads)
            .reduce((prevDatatypes, filename) => filename === targetFn ? prevDatatypes : prevDatatypes.concat(uploads[filename].datatypes), []);
        const newDatatypes = uploads[targetFn].datatypes.filter(datatype => !oldDatatypes.includes(datatype));

        datatypes = datatypes.filter(datatype => !newDatatypes.includes(datatype));

        uploads[targetFn].overlay.removeFrom(map);
        layerControl.removeLayer(uploads[targetFn].overlay);
        uploads[targetFn].viewMarkers.forEach(marker => view.removeLayer(marker));

        delete uploads[targetFn];
        
        extrema = findExtrema();

        resetDesc();

        map.flyToBounds(view.getBounds());

        resetRadio(getDisplayedData());

        $('#overlays option:selected').remove();
    }
});

const plot = (results, file) => {
    // Consolidate data
    const data = results.data.filter(datapoint => parseFloat(datapoint["Latitude"]) && parseFloat(datapoint["Longitude"]));
    const fileDatatypes = results.meta.fields.filter(datatype => datatype !== "Latitude" && datatype !== "Longitude");
    const newDatatypes = !fileDatatypes.every(datatype => datatypes.includes(datatype));
    datatypes.push(...fileDatatypes.filter(datatype => !datatypes.includes(datatype)));
    const overlay = L.featureGroup();
    uploads[file.name] = {
        points: [],
        overlay: overlay,
        viewMarkers: [],
        datatypes: fileDatatypes,
    };

    // Find datatype to display
    const displayedData = getDisplayedData();

    // Find extrema
    extrema = {...extrema, ...fileDatatypes.map(datatype => { // Sorts data by type
        const dataByType = data.map(datapoint => datapoint[datatype]);
        return [datatype, extrema[datatype] ? dataByType.concat(extrema[datatype]) : dataByType];
    }).reduce((rangeObj, dataByType) => { // Finds extrema for each datatype
        rangeObj[dataByType[0]] = [Math.min(...dataByType[1]), Math.max(...dataByType[1])];
        return rangeObj;
    }, {})};

    // Plot and store points
    uploads[file.name].points = data.map(datapoint => {
        const lat = parseFloat(datapoint["Latitude"]);
        const lon = parseFloat(datapoint["Longitude"]);

        const viewMarker = L.marker([lat, lon]);
        const visualMarker = L.circle([lat, lon], {
            fillOpacity: 0.5,
            radius: 5,
        }).bindPopup("");

        viewMarker.addTo(view);
        visualMarker.addTo(overlay);

        uploads[file.name].viewMarkers.push(viewMarker);

        return {
            data: datapoint,
            marker: visualMarker,
        };
    });

    // Update colors and descriptions
    resetColors(displayedData);
    resetDesc();

    // Add overlay to map
    overlay.addTo(map);
    layerControl.addOverlay(overlay, file.name);

    // Set view
    $("#sensors").children() > 0 ? map.flyToBounds(view.getBounds()) : map.fitBounds(view.getBounds());

    // Create radio buttons
    resetRadio(displayedData);

    // Add to dropdown
    $("#overlays").append($(`<option value="${file.name}">${file.name}</option>`));
}

const findExtrema = () => {
    const datapoints = Object.values(uploads).reduce((datapoints, upload) => datapoints.concat(upload.points.map(point => point.data)), []);
    const dataByType = datatypes.reduce((dataByTypeObj, datatype) => {
        const dataByTypeArr = datapoints.reduce((dataByTypeArr, datapoint) => {
            if (!isNaN(datapoint[datatype])) dataByTypeArr.push(datapoint[datatype]);
            return dataByTypeArr;
        }, []);
        dataByTypeObj[datatype] = dataByTypeArr;
        return dataByTypeObj;
    }, {});
    return datatypes.reduce((extremaObj, datatype) => {
        extremaObj[datatype] = [Math.min(...dataByType[datatype]), Math.max(...dataByType[datatype])];
        return extremaObj;
    }, {});
};

const resetColors = datatype => {
    Object.values(uploads).reduce((pointArr, upload) => pointArr.concat(upload.points), [])
        .forEach(point => {
            const pointColor = !isNaN(point.data[datatype])
                ? rainbow(normalize(parseFloat(point.data[datatype]), ...extrema[datatype]))
                : "gray";
            point.marker.setStyle({ color: pointColor });
    });
};

const resetDesc = () => {
    Object.values(uploads).reduce((pointArr, upload) => pointArr.concat(upload.points), [])
        .forEach(point => {
            const description = datatypes.reduce((descStr, datatype) => descStr += datatype + ": " + (point.data[datatype] || "N/A") + "<br>", "");
            point.marker.setPopupContent(description);
    });
};

const resetRadio = displayedData => {
    $("#sensors").empty();
    
    datatypes.forEach(datatype => {
        $("#sensors").append($(`<input type="radio" name="sensor" class="sensor-radio-btn" value="${datatype}">`))
            .append(`<label for="${datatype}">${datatype}</label></div>`)
            .append(`<br>`);
    });

    const radioButtons = $(".sensor-radio-btn");
    const radioToCheck = radioButtons.filter(index => {
        return radioButtons[index].value === displayedData
    });

    $(".sensor-radio-btn").click(() => {
        const selectedDatatype = getDisplayedData();
        resetColors(selectedDatatype);
    });

    if (radioToCheck.length === 1) {
        radioToCheck[0].checked = true;
        radioToCheck[0].click();
    } else if (radioButtons.length > 0 && radioToCheck.length === 0) {
        radioButtons[0].checked = true;
        radioButtons[0].click();
    } else {
        console.log("No radio buttons generated");
    }
};

const getDisplayedData = () => $("#sensors").children().length > 0 ? $('input[name="sensor"]:checked').val() : datatypes[0];

const normalize = (value, min, max) => (value - min) / (max - min);