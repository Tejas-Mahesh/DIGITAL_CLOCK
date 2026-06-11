let is24Hour = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    // 12/24 format
    if (!is24Hour) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    // Format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
    // Highlight day
    const days = document.querySelectorAll(".days span");
    days.forEach(day => day.classList.remove("active"));
    days[now.getDay()].classList.add("active");

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);

    // Timezone
    document.getElementById("timezone").textContent =
        Intl.DateTimeFormat().resolvedOptions().timeZone;


}

// Toggle format
document.getElementById("toggleFormat").addEventListener("click", () => {
    is24Hour = !is24Hour;
    document.getElementById("toggleFormat").textContent =
        is24Hour ? "Switch to 12H" : "Switch to 24H";
});

// Run
setInterval(updateClock, 1000);
updateClock();
