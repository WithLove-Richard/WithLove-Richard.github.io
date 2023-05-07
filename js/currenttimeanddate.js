function updateTime() {
    const dateandtime = new Date();
    const time = dateandtime.toLocaleTimeString();
    const dateString = dateandtime.toLocaleDateString();

    document.querySelector('#time').textContent = time;
    document.querySelector('#date').textContent = dateString;
    updateTime()
}