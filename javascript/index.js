
function updateTime(){
//Boston
let bostonElement = document.querySelector("#boston");
if (bostonElement)
    {
    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("MMMM Do, YYYY");
    bostonTimeElement.innerHTML = bostonTime.format("h:mm:ss [<small>]A[</small>]");
    }

//Dublin
let dublinElement = document.querySelector("#dublin");
    if (dublinElement)
    {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
    dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
    };
};

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_" , " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
            </div>
                <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format(" A")}</small>
                </div>
    </div>
    `;
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


