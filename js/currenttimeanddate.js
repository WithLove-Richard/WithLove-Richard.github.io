function updateTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString();

    document.querySelector('#time').textContent = time;
    document.querySelector('#date').textContent = dateString;
    updateTime()
}