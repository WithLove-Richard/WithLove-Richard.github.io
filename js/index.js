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
  
// Select all window elements
const windows = document.getElementsByClassName('window');

// Loop through each window and attach the event listeners for dragging
windows.forEach(windowElement => {
  const windowTopBar = windowElement.querySelector('.window-top-bar');
  windowTopBar.addEventListener('mousedown', startDrag);

  function startDrag(event) {
    event.preventDefault();

    const initialX = event.clientX;
    const initialY = event.clientY;

    const windowRect = windowElement.getBoundingClientRect();
    const offsetX = initialX - windowRect.left;
    const offsetY = initialY - windowRect.top;

    window.addEventListener('mousemove', dragWindow);
    window.addEventListener('mouseup', stopDrag);

    function dragWindow(event) {
      const currentX = event.clientX;
      const currentY = event.clientY;

      const newLeft = currentX - offsetX;
      const newTop = currentY - offsetY;

      windowElement.style.left = `${newLeft}px`;
      windowElement.style.top = `${newTop}px`;
    }

    function stopDrag() {
      window.removeEventListener('mousemove', dragWindow);
      window.removeEventListener('mouseup', stopDrag);
    }
  }
});
