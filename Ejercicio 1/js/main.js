
$(document).ready(function () {
    $.getJSON("js/data.js", function (data) {
    });

    // get the genres an fill the dropdown
    var genres = $.map(data, function (n, i) {
        return i;
    });
    makeDropDown(genres);

    // make the chart
    $("a").on("click", function () {
        createChart(this.id);
    });


});

// fill the genre dropdown
function makeDropDown(genreList) {
    $.each(genreList, function (i) {
        $("#genreList").append("<li><a href='#' id='" + genreList[i] + "'>" + genreList[i] + "</li>");
    });
    $("a").css("textTransform", "capitalize");
}

// make the chart
function createChart(genre) {
    var genreArtists = data[genre];

    // get the label and data for the chart
    getLabelData(genreArtists, genre);
}

function getLabelData(genreArtists, genre) {
    var artists = [];
    var durations = [];

    // get the label and data
    $.each(genreArtists, function (i) {
        artists.push(genreArtists[i].artist);
        durations.push(genreArtists[i].duration);
    });

    // draw the chart
    drawChart(artists, durations, genre);
}

// draw the chart
function drawChart(artists, durations, genre) {

    // remove all the iframes
    removeIframes();

    // clear the canvas and the title for the new chart
    $("canvas").remove();
    $("#genreTitle").remove();
    $("body").append("<h3 id='genreTitle'>" + genre + "</h3>");
    $("#genreTitle").css("textTransform", "capitalize");
    $("body").append("<canvas id='myChart'>");

    var option = {
        responsive: true,
    };

    var ctx = $("#myChart");
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: artists,
            datasets: [{
                label: "Duration",
                data: durations,
                backgroundColor: 'rgba(215, 40, 40, 0.9)',
                strokeColor: "rgba(215,40,40,0.8)",
                highlightFill: "rgba(215,40,40,0.75)",
                highlightStroke: "rgba(215,40,40,1)"
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

function removeIframes() {
    var iframes = document.querySelectorAll("iframe");
    $.each(iframes, function (i) {
        iframes[i].parentNode.removeChild(iframes[i]);
    })
}