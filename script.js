function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format (add 0 if needed)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Highlight current day
    const days = document.querySelectorAll(".days span");
    days.forEach(day => day.classList.remove("active"));

    const today = now.getDay(); // 0 = Sunday
    days[today].classList.add("active");
}

// Run every second
setInterval(updateClock, 1000);

// Run once immediately
updateClock();