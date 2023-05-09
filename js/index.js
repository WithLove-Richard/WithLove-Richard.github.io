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


function startLoading() {
    const desktop = document.getElementById('desktop');
    const taskbar = document.getElementById('taskbar');
    const timeAndDate = document.getElementById('timeanddate');
    
    if (desktop.style.display === 'block') {
        setTimeout(() => {
            const bgCookie = getCookie('bg');
            if (bgCookie) {
                desktop.style.background = `url(${bgCookie})`;
            }
            setUpTheme();
        }, 500);
        
        setTimeout(() => {
            taskbar.style.display = 'flex';
        }, Math.floor(Math.random() * 1500));
        
        setTimeout(() => {
            timeAndDate.style.display = 'flex';
        }, Math.floor(Math.random() * 2000));
    }
}

  
  function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : '';
  }
  