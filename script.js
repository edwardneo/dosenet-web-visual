const map = L.map('testMap').setView([37.8757, -122.2593], 17);
let range = {};
const points = [];
const datatypes = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

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

const plot = results => {
    // Clean and parse data
    const data = results.data.filter(dataPoint => parseFloat(dataPoint["Latitude"]) && parseFloat(dataPoint["Longitude"]));
    datatypes.push(...results.meta.fields.filter(datatype => datatype !== "Latitude" && datatype !== "Longitude" && !datatypes.includes(datatype)));
    range = datatypes.map(datatype => { // Sorts data by type
        const dataByType = data.map(dataPoint => dataPoint[datatype]);
        return [datatype, range[datatype] ? dataByType.concat(range[datatype]) : dataByType];
    }).reduce((rangeObj, dataByType) => { // Finds extrema for each datatype
        rangeObj[dataByType[0]] = [Math.min(...dataByType[1]), Math.max(...dataByType[1])];
        return rangeObj;
    }, {});

    // Set display parameters
    const latAvg = data.reduce((prev, dataPoint) => prev + parseFloat(dataPoint["Latitude"]), 0) / data.length;
    const lonAvg = data.reduce((prev, dataPoint) => prev + parseFloat(dataPoint["Longitude"]), 0) / data.length;
    map.setView([latAvg, lonAvg], 17);
    resetColors(datatypes[0]);

    const displayedData = $("#sensors").children().length > 0 ? $('input[name="sensor"]:checked').val() : datatypes[0];

    // Plot points
    points.push(...data.map(dataPoint => {
        const lat = parseFloat(dataPoint["Latitude"]);
        const lon = parseFloat(dataPoint["Longitude"]);
        const description = datatypes.reduce((descStr, datatype) => descStr += datatype + ": " + dataPoint[datatype] + "<br>", "");
        const pointColor = rainbow(normalize(parseFloat(dataPoint[displayedData]), ...range[displayedData]));

        return [
            L.circle([lat, lon], {
                color: pointColor,
                fillOpacity: 0.5,
                radius: 5
            }).addTo(map)
            .bindPopup(description),
            dataPoint,
        ];
    }));

    // Create radio buttons
    $("#sensors").empty();
    
    datatypes.forEach(datatype => {
        $("#sensors").append($(`<input type="radio" id="${clean(datatype)}" name="sensor" value="${datatype}">`))
            .append(`<label for="${datatype}">${datatype}</label></div>`)
            .append(`<br>`);
    });

    $(`#${clean(displayedData)}`).prop("checked", true);

    $("input[type=radio][name=sensor]").change(() => {
        const datatype = $('input[name="sensor"]:checked').val();
        resetColors(datatype);
    });
}

const resetColors = datatype => {
    points.forEach(pointData => {
        if (!isNaN(pointData[1][datatype])) {
            const pointColor = rainbow(normalize(parseFloat(pointData[1][datatype]), ...range[datatype]));
            pointData[0].setStyle({ color: pointColor });
        } else {
            pointData[0].setStyle({ color: "gray" });
        }
    });
}

const normalize = (value, min, max) => (value - min) / (max - min);

const clean = string => [" ", "(", ")"].reduce((prevStr, char) => prevStr.replace(char, ""), string);