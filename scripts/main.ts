import { series } from './data.js';
import { Serie } from './Serie.js';

document.addEventListener("DOMContentLoaded", () => {
    const seriesTable = document.getElementById("series-list")!;
    const averageSeasonsElement = document.getElementById("average-seasons")!;
    const seriesDetail = document.getElementById("series-detail")!;
    const seriesImage = document.getElementById("series-image") as HTMLImageElement;
    const seriesTitle = document.getElementById("series-title")!;
    const seriesDescription = document.getElementById("series-description")!;
    const seriesLink = document.getElementById("series-link") as HTMLAnchorElement;

    displaySeriesInTable(series);
    const averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = `Seasons average: ${averageSeasons.toFixed(2)}`;

    function displaySeriesInTable(series: Serie[]): void {
        series.forEach((serie) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${serie.id}</td>
                <td><a href="#" class="series-link">${serie.name}</a></td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            `;
            row.querySelector(".series-link")?.addEventListener("click", (event) => {
                event.preventDefault();
                showSeriesDetail(serie);
            });
            seriesTable.appendChild(row);
        });
    }

    function showSeriesDetail(serie: Serie): void {
        seriesImage.src = serie.imageUrl;
        seriesTitle.textContent = serie.name;
        seriesDescription.textContent = serie.description;
        seriesLink.href = serie.link;
        seriesDetail.style.display = "block"; 
    }

    function calculateAverageSeasons(series: Serie[]): number {
        const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
        return totalSeasons / series.length;
    }
});
