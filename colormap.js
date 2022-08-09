const rainbow = ['#6801d2', '#6702d3', '#6604d3', '#6605d3', '#6506d4', '#6408d4', '#6309d4', '#620bd5', '#620cd5', '#610ed5', '#600fd6', '#5f11d6', '#5e12d6', '#5e14d7', '#5d15d7', '#5c17d7', '#5b18d8', '#5a1ad8', '#5a1bd8', '#591dd9', '#581ed9', '#5720d9', '#5621da', '#5623da', '#5524da', '#5426db', '#5327db', '#5229db', '#522adc', '#512cdc', '#502ddc', '#4f2fdd', '#4e30dd', '#4e32dd', '#4d33de', '#4c35de', '#4b36de', '#4b38df', '#4a39df', '#493bdf', '#483ce0', '#473ee0', '#473fe0', '#4641e1', '#4542e1', '#4444e1', '#4345e2', '#4347e2', '#4248e2', '#414ae3', '#404be3', '#3f4de3', '#3f4ee4', '#3e50e4', '#3d51e4', '#3c53e5', '#3b54e5', '#3b56e5', '#3a57e6', '#3959e6', '#385ae6', '#375ce7', '#375de7', '#365fe7', '#3560e8', '#3462e8', '#3363e8', '#3365e9', '#3266e9', '#3168e9', '#3069ea', '#2f6bea', '#2f6cea', '#2e6eeb', '#2d6feb', '#2c71eb', '#2c72ec', '#2b74ec', '#2a75ec', '#2977ed', '#2878ed', '#287aed', '#277bee', '#267dee', '#257eee', '#2480ef', '#2481ef', '#2383ef', '#2284f0', '#2186f0', '#2087f0', '#2089f1', '#1f8af1', '#1e8cf1', '#1d8df2', '#1c8ff2', '#1c90f2', '#1b92f3', '#1a93f3', '#1995f3', '#1996f3', '#1997f3', '#1a98f3', '#1a99f2', '#1b9af2', '#1b9bf2', '#1c9cf1', '#1c9df1', '#1d9ef0', '#1d9ff0', '#1ea0f0', '#1ea0ef', '#1fa1ef', '#1fa2ef', '#20a3ee', '#20a4ee', '#21a5ed', '#21a6ed', '#22a7ed', '#22a8ec', '#23a9ec', '#23aaec', '#24abeb', '#25aceb', '#25acea', '#26adea', '#26aeea', '#27afe9', '#27b0e9', '#28b1e9', '#28b2e8', '#29b3e8', '#29b4e7', '#2ab5e7', '#2ab6e7', '#2bb7e6', '#2bb8e6', '#2cb9e6', '#2cb9e5', '#2dbae5', '#2dbbe4', '#2ebce4', '#2ebde4', '#2fbee3', '#2fbfe3', '#30c0e3', '#30c1e2', '#31c2e2', '#31c3e2', '#32c4e1', '#32c5e1', '#33c5e0', '#33c6e0', '#34c7e0', '#34c8df', '#35c9df', '#35cadf', '#36cbde', '#36ccde', '#37cddd', '#37cedd', '#38cfdd', '#39d0dc', '#39d1dc', '#3ad2dc', '#3ad2db', '#3bd3db', '#3bd4da', '#3cd5da', '#3cd6da', '#3dd7d9', '#3dd8d9', '#3ed9d9', '#3edad8', '#3fdbd8', '#3fdcd7', '#40ddd7', '#40ded7', '#41ded6', '#41dfd6', '#42e0d6', '#42e1d5', '#43e2d5', '#43e3d4', '#44e4d4', '#44e5d4', '#45e6d3', '#45e7d3', '#46e8d3', '#46e9d2', '#47ead2', '#47ead2', '#48ebd1', '#48ecd1', '#49edd0', '#49eed0', '#4aefd0', '#4af0cf', '#4bf1cf', '#4bf2cf', '#4cf2ce', '#4df2ce', '#4ef2cd', '#4ff2cc', '#50f2cc', '#51f2cb', '#52f2cb', '#53f2ca', '#55f2c9', '#56f2c9', '#57f2c8', '#58f2c8', '#59f2c7', '#5af2c7', '#5bf2c6', '#5cf2c5', '#5df2c5', '#5ef2c4', '#5ff2c4', '#60f2c3', '#61f2c3', '#62f2c2', '#63f2c1', '#64f2c1', '#65f2c0', '#66f2c0', '#67f2bf', '#68f2bf', '#69f2be', '#6af2bd', '#6bf2bd', '#6cf2bc', '#6df2bc', '#6ef2bb', '#6ff2bb', '#70f2ba', '#72f2b9', '#73f2b9', '#74f2b8', '#75f2b8', '#76f2b7', '#77f2b7', '#78f2b6', '#79f2b5', '#7af2b5', '#7bf2b4', '#7cf2b4', '#7df2b3', '#7ef2b3', '#7ff2b2', '#80f2b1', '#81f2b1', '#82f2b0', '#83f2b0', '#84f2af', '#85f2af', '#86f2ae', '#87f2ad', '#88f2ad', '#89f2ac', '#8af2ac', '#8bf2ab', '#8cf2ab', '#8df2aa', '#8ff2a9', '#90f2a9', '#91f2a8', '#92f2a8', '#93f2a7', '#94f2a7', '#95f2a6', '#96f2a5', '#97f2a5', '#98f2a4', '#99f2a4', '#9af2a3', '#9bf2a3', '#9cf2a2', '#9df2a1', '#9ef2a1', '#9ff2a0', '#a0f2a0', '#a1f29f', '#a2f29e', '#a3f29e', '#a4f29d', '#a5f29d', '#a6f29c', '#a7f29c', '#a8f29b', '#a9f29a', '#aaf29a', '#acf299', '#adf299', '#aef298', '#aff298', '#b0f297', '#b1f296', '#b2f296', '#b3f295', '#b4f295', '#b4f194', '#b5f093', '#b6ef92', '#b7ee92', '#b7ed91', '#b8ec90', '#b9eb90', '#baea8f', '#bbe98e', '#bbe88d', '#bce78d', '#bde68c', '#bee58b', '#bee48b', '#bfe48a', '#c0e389', '#c1e288', '#c1e188', '#c2e087', '#c3df86', '#c4de85', '#c4dd85', '#c5dc84', '#c6db83', '#c7da83', '#c8d982', '#c8d881', '#c9d780', '#cad680', '#cbd57f', '#cbd47e', '#ccd37d', '#cdd27d', '#ced17c', '#ced07b', '#cfcf7b', '#d0cf7a', '#d1ce79', '#d1cd78', '#d2cc78', '#d3cb77', '#d4ca76', '#d5c976', '#d5c875', '#d6c774', '#d7c673', '#d8c573', '#d8c472', '#d9c371', '#dac270', '#dbc170', '#dbc06f', '#dcbf6e', '#ddbe6e', '#debd6d', '#debc6c', '#dfbb6b', '#e0ba6b', '#e1b96a', '#e2b969', '#e2b868', '#e3b768', '#e4b667', '#e5b566', '#e5b466', '#e6b365', '#e7b264', '#e8b163', '#e8b063', '#e9af62', '#eaae61', '#ebad61', '#ebac60', '#ecab5f', '#edaa5e', '#eea95e', '#efa85d', '#efa75c', '#f0a65b', '#f1a55b', '#f2a45a', '#f2a459', '#f3a359', '#f4a258', '#f5a157', '#f5a056', '#f69f56', '#f79e55', '#f89d54', '#f89c53', '#f99b53', '#fa9a52', '#fb9951', '#fc9851', '#fc9750', '#fd964f', '#fe954e', '#ff944e', '#ff934d', '#ff924c', '#ff904b', '#ff8f4b', '#ff8d4a', '#ff8c49', '#ff8a48', '#ff8948', '#ff8847', '#ff8646', '#ff8545', '#ff8344', '#ff8244', '#ff8043', '#ff7f42', '#ff7d41', '#ff7c41', '#ff7a40', '#ff793f', '#ff773e', '#ff763d', '#ff743d', '#ff733c', '#ff713b', '#ff703a', '#ff6e3a', '#ff6d39', '#ff6b38', '#ff6a37', '#ff6836', '#ff6736', '#ff6635', '#ff6434', '#ff6333', '#ff6133', '#ff6032', '#ff5e31', '#ff5d30', '#ff5b30', '#ff5a2f', '#ff582e', '#ff572d', '#ff552c', '#ff542c', '#ff522b', '#ff512a', '#ff4f29', '#ff4e29', '#ff4c28', '#ff4b27', '#ff4926', '#ff4825', '#ff4625', '#ff4524', '#ff4423', '#ff4222', '#ff4122', '#ff3f21', '#ff3e20', '#ff3c1f', '#ff3b1e', '#ff391e', '#ff381d', '#ff361c', '#ff351b', '#ff331b', '#ff321a', '#ff3019', '#ff2f18', '#ff2d18', '#ff2c17', '#ff2a16', '#ff2915', '#ff2714', '#ff2614', '#ff2413', '#ff2312', '#ff2211', '#ff2011', '#ff1f10', '#ff1d0f', '#ff1c0e', '#ff1a0d', '#ff190d', '#ff170c', '#ff160b', '#ff140a', '#ff130a', '#ff1109', '#ff1008', '#ff0e07', '#ff0d06', '#ff0b06', '#ff0a05', '#ff0804', '#ff0703', '#ff0503', '#ff0402', '#ff0201', '#ff0100', '#ff0000'];

const addColorbar = (map, datatype, min, max) => {
    const colormap = d3.scale.threshold()
        .domain(linspace(min, max))
        .range(rainbow);
    
    const x = d3.scale.linear()
        .domain([min, max])
        .range([0, 400]);
    
    const legend = L.control({position: "bottomleft"});
    legend.onAdd = map => L.DomUtil.create("div", "legend");
    legend.addTo(map);

    const xAxis = d3.svg.axis()
        .scale(x)
        .orient("top")
        .tickSize(3, 1)
        .ticks(6);
    
    if (datatype === "Epoch time") {
        xAxis.tickFormat(d => {
            const date = new Date(d * 1000);
            const timeZone = "America/Los_Angeles";
            const formatter = new Intl.DateTimeFormat("en-US", {
                hour12: true,
                timeStyle: "medium",
                timeZone: timeZone,
            })
            return formatter.format(date);
        });
    }
    
    const svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", "legend")
        .attr("width", 450)
        .attr("height", 40);
    
    const g = svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");
    
    g.selectAll("rect")
        .data(colormap.range().map((d, i) => ({
            x0: i ? x(colormap.domain()[i - 1]) : x.range()[0],
            x1: i < colormap.domain().length ? x(colormap.domain()[i]) : x.range()[1],
            z: d,
        })))
        .enter().append("rect")
        .attr("height", 10)
        .attr("x", d => d.x0)
        .attr("width", d => d.x1 - d.x0)
        .style("fill", d => d.z);
    
    g.call(xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text(datatype);
    
    d3.selectAll(".tick").select("line").style("stroke", "black");
    
    svg[0][0].style.display = "block";

    return { colormap: colormap, legend: legend };
}

const linspace = (start, stop, num=500) => {
    const arr = [];
    const increment = (stop - start) / (num - 1);
    for (let value = start; value <= stop; value += increment) arr.push(value);
    return arr;
}

const truncate = value => {
    const length = value.toString().replace(".", "").length;
    if (length > 4) {
        const order = Math.log10(value)
        if (order < -3 || order >= 4) {
            return value.toExponential(3);
        } else {
            return value.toString().substring(value.toString().includes (".") ? 5 : 4);
        }
    } else {
        return value;
    }
}