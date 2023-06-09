function updateTime() {
    const dateandtime = new Date();
    const time = dateandtime.toLocaleTimeString();
    const dateString = dateandtime.toLocaleDateString();
    const timeTextObject = document.querySelector('span#time');
    const dateTextObject = document.querySelector('span#date');

    timeTextObject.textContent = time;
    dateTextObject.textContent = dateString;
    setTimeout(updateTime, 1)
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



    const desktop = document.getElementById('desktop');
    const taskbar = document.getElementById('taskbar');
    const timeAndDate = document.getElementById('timeanddate');
    const bgCookie = getCookie('bg');
  
    if (desktop.display === 'block') {
        setTimeout(() => {
        if (bgCookie) {
            desktop.style.background = `url(${bgCookie}) !important`;
        }
            setUpTheme();
        }, Math.floor(Math.random() * 4500) + 500);
      
    }

  
  function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : '';
  }
  

  const themeSwitchButton = document.getElementById('themeSwitchButton');

// Add event listener to the theme switch button
themeSwitchButton.addEventListener('click', () => {
  // Get the desktop element
  const desktop = document.getElementById('desktop');

  // Toggle the theme attribute of the desktop element
  if (desktop.getAttribute('theme') === 'light') {
    desktop.setAttribute('theme', 'dark');
  } else {
    desktop.setAttribute('theme', 'light');
  }

  // Update the theme cookie
  const theme = desktop.getAttribute('theme');
  document.cookie = `theme=${theme}; path=/; expires=Thu, 01 Jan 2099 00:00:00 UTC`;

  // You can also update any other styles or classes based on the theme here
});

