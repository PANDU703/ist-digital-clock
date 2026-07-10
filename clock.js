function updateClock() {
    const now = new Date();

    // Current Time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate Degrees
    const secondDeg = seconds * 6;
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const hourDeg = ((hours % 12) * 30) + (minutes * 0.5);

    // Rotate Hands
    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;

    // Digital Clock (12-Hour Format)
    let h = hours % 12;
    h = h ? h : 12;

    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    const ampm = hours >= 12 ? "PM" : "AM";

    document.getElementById("digital").textContent =
        `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;

}

// Initial Call
updateClock();

// Update Every Second
setInterval(updateClock, 1000);
