import { series } from './data.js';
document.addEventListener("DOMContentLoaded", function () {
    var seriesTable = document.getElementById("series-list");
    var averageSeasonsElement = document.getElementById("average-seasons");
    var seriesDetail = document.getElementById("series-detail");
    var seriesImage = document.getElementById("series-image");
    var seriesTitle = document.getElementById("series-title");
    var seriesDescription = document.getElementById("series-description");
    var seriesLink = document.getElementById("series-link");
    displaySeriesInTable(series);
    var averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = "Seasons average: ".concat(averageSeasons.toFixed(2));
    function displaySeriesInTable(series) {
        series.forEach(function (serie) {
            var _a;
            var row = document.createElement("tr");
            row.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td><a href=\"#\" class=\"series-link\">").concat(serie.name, "</a></td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n            ");
            (_a = row.querySelector(".series-link")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
                event.preventDefault();
                showSeriesDetail(serie);
            });
            seriesTable.appendChild(row);
        });
    }
    function showSeriesDetail(serie) {
        seriesImage.src = serie.imageUrl;
        seriesTitle.textContent = serie.name;
        seriesDescription.textContent = serie.description;
        seriesLink.href = serie.link;
        seriesDetail.style.display = "block"; 
    }
    function calculateAverageSeasons(series) {
        var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
        return totalSeasons / series.length;
    }
});
