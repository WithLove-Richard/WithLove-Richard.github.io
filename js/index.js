function updateTime() {
    const dateandtime = new Date();
    const time = dateandtime.toLocaleTimeString();
    const dateString = dateandtime.toLocaleDateString();

    document.querySelector('#time').textContent = time;
    document.querySelector('#date').textContent = dateString;
    setInterval(updateTime, 1);
}

function setUpTheme() {
    const desktop = document.getElementById('desktop');
    const themeCookie = document.cookie.split('; ')
       .find(cookie => cookie.startsWith('theme='));
    if (themeCookie) {
       const theme = themeCookie.split('=')[1];
       desktop.setAttribute('theme', theme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        desktop.setAttribute('theme', "dark");
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        desktop.setAttribute('theme', "light");
    }
}