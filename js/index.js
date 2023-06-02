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



    const desktop = document.getElementById('desktop');
    const taskbar = document.getElementById('taskbar');
    const timeAndDate = document.getElementById('timeanddate');
    const bgCookie = getCookie('bg');
  
    if (desktop.style.display === 'block') {
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
  
  const windowElement = document.getElementById('myWindow');
const resizeHandles = [
  document.getElementById('resize-handle-top-left'),
  document.getElementById('resize-handle-top-right'),
  document.getElementById('resize-handle-bottom-left'),
  document.getElementById('resize-handle-bottom-right')
];
let isResizing = false;
let startX;
let startY;
let startWidth;
let startHeight;

resizeHandles.forEach(handle => {
  handle.addEventListener('mousedown', startResize);
});

function startResize(e) {
  e.preventDefault();
  isResizing = true;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(document.defaultView.getComputedStyle(windowElement).width, 10);
  startHeight = parseInt(document.defaultView.getComputedStyle(windowElement).height, 10);
  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', stopResize);
}

function resize(e) {
  if (!isResizing) return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  const corner = e.target.classList[1];

  switch (corner) {
    case 'top-left':
      windowElement.style.width = `${startWidth - deltaX}px`;
      windowElement.style.height = `${startHeight - deltaY}px`;
      windowElement.style.left = `${startX + deltaX}px`;
      windowElement.style.top = `${startY + deltaY}px`;
      break;
    case 'top-right':
      windowElement.style.width = `${startWidth + deltaX}px`;
      windowElement.style.height = `${startHeight - deltaY}px`;
      windowElement.style.top = `${startY + deltaY}px`;
      break;
    case 'bottom-left':
      windowElement.style.width = `${startWidth - deltaX}px`;
      windowElement.style.height = `${startHeight + deltaY}px`;
      windowElement.style.left = `${startX + deltaX}px`;
      break;
    case 'bottom-right':
      windowElement.style.width = `${startWidth + deltaX}px`;
      windowElement.style.height = `${startHeight + deltaY}px`;
      break;
  }
}

function stopResize() {
  isResizing = false;
  window.removeEventListener('mousemove', resize);
  window.removeEventListener('mouseup', stopResize);
}
