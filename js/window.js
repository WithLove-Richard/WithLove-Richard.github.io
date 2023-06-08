setWindow(document.getElementById("ilymessengerWindowHost"));

function setWindow(window, minWidth = 400, minHeight = 300) {
  dragElement(window);
  resizeElement(window, minWidth, minHeight);
}
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt.querySelector(".window-top-bar")) {
      // if present, the header is where you move the DIV from:
      elmnt.querySelector(".window-top-bar").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      if (elmnt.dataset.minimized === 'true' || elmnt.dataset.maximized === 'true') { closeDragElement(); return; }
      
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}
  
function resizeElement(elmnt, minWidth, minHeight) {
  const resizeHandleTopLeft = elmnt.querySelector('.resize-handle-top-left');
  resizeHandleTopLeft.addEventListener('mousedown', startResizeTopLeft);
  const resizeHandleTopRight = elmnt.querySelector('.resize-handle-top-right');
  resizeHandleTopRight.addEventListener('mousedown', startResizeTopRight);
  const resizeHandleBottomLeft = elmnt.querySelector('.resize-handle-bottom-left');
  resizeHandleBottomLeft.addEventListener('mousedown', startResizeBottomLeft);
  const resizeHandleBottomRight = elmnt.querySelector('.resize-handle-bottom-right');
  resizeHandleBottomRight.addEventListener('mousedown', startResizeBottomRight);
  const resizeHandleTop = elmnt.querySelector('.resize-handle-top');
  resizeHandleTop.addEventListener('mousedown', startResizeTop);
  const resizeHandleBottom = elmnt.querySelector('.resize-handle-bottom');
  resizeHandleBottom.addEventListener('mousedown', startResizeBottom);
  const resizeHandleLeft = elmnt.querySelector('.resize-handle-left');
  resizeHandleLeft.addEventListener('mousedown', startResizeLeft);
  const resizeHandleRight = elmnt.querySelector('.resize-handle-right');
  resizeHandleRight.addEventListener('mousedown', startResizeRight);


 // Variables to track the initial state
let startMouseX;
let startMouseY;
let startWidth;
let startHeight;
let startTop;
let startLeft;

function startResizeTopLeft(e) {
  e.preventDefault();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startWidth = elmnt.offsetWidth;
  startHeight = elmnt.offsetHeight;
  startTop = elmnt.offsetTop;
  startLeft = elmnt.offsetLeft;

  window.addEventListener('mousemove', resizeTopLeft);
  window.addEventListener('mouseup', stopResize);
}
  
// Function to handle resizing the window from the top left corner
function resizeTopLeft(e) {
  e.preventDefault();

  const deltaX = startMouseX - e.clientX;
  const deltaY = startMouseY - e.clientY;

  const newWidth = startWidth + deltaX;
  const newHeight = startHeight + deltaY;

  const newTop = startTop - deltaY;
  const newLeft = startLeft - deltaX;

  if (newWidth <= minWidth && newHeight <= minHeight) {
    elmnt.style.width = `${newWidth}px`;
    elmnt.style.height = `${newHeight}px`;
    elmnt.style.left = `${startLeft}px`;
    elmnt.style.top = `${startTop}px`;
  } else {
    // Update the window element with the new size and position
    elmnt.style.width = newWidth + 'px';
    elmnt.style.height = newHeight + 'px';
    elmnt.style.top = newTop + 'px';
    elmnt.style.left = newLeft + 'px'
  }
}

function startResizeTopRight(e) {
  e.preventDefault();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startWidth = elmnt.offsetWidth;
  startHeight = elmnt.offsetHeight;
  startTop = elmnt.offsetTop;
  startLeft = elmnt.offsetLeft;

  window.addEventListener('mousemove', resizeTopRight);
  window.addEventListener('mouseup', stopResize);
  }
  
// Function to handle resizing the window from the top right corner
function resizeTopRight(e) {
  e.preventDefault();

  const deltaX = e.clientX - startMouseX;
  const deltaY = startMouseY - e.clientY;

  const newWidth = startWidth + deltaX;
  const newHeight = startHeight + deltaY;

  const newTop = startTop - deltaY;
  const newLeft = startLeft;

  if (newWidth <= minWidth && newHeight <= minHeight) {
    elmnt.style.width = `${newWidth}px`;
    elmnt.style.height = `${newHeight}px`;
    elmnt.style.top = `${startTop}px`;
  } else {
    // Update the window element with the new size and position
    elmnt.style.width = newWidth + 'px';
    elmnt.style.height = newHeight + 'px';
    elmnt.style.top = newTop + 'px';
    elmnt.style.left = newLeft + 'px'
  }
}

function startResizeBottomLeft(e) {
    e.preventDefault();
  
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    startWidth = elmnt.offsetWidth;
    startHeight = elmnt.offsetHeight;
    startTop = elmnt.offsetTop;
    startLeft = elmnt.offsetLeft;
  
    window.addEventListener('mousemove', resizeBottomLeft);
    window.addEventListener('mouseup', stopResize);
  }

// Function to handle resizing the window from the bottom left corner
function resizeBottomLeft(e) {
  e.preventDefault();

  const deltaX = startMouseX - e.clientX;
  const deltaY = e.clientY - startMouseY;

  const newWidth = startWidth + deltaX;
  const newHeight = startHeight + deltaY;

  const newTop = startTop;
  const newLeft = startLeft - deltaX;

  if (newWidth <= minWidth && newHeight <= minHeight) {
    elmnt.style.width = `${newWidth}px`;
    elmnt.style.height = `${newHeight}px`;
    elmnt.style.left = `${startLeft}px`;
  } else {
    // Update the window element with the new size and position
    elmnt.style.width = newWidth + 'px';
    elmnt.style.height = newHeight + 'px';
    elmnt.style.top = newTop + 'px';
    elmnt.style.left = newLeft + 'px';
  }
  }
  
  
function startResizeBottomRight(e) {
    e.preventDefault();
  
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    startWidth = elmnt.offsetWidth;
    startHeight = elmnt.offsetHeight;
    startTop = elmnt.offsetTop;
    startLeft = elmnt.offsetLeft;
  
    window.addEventListener('mousemove', resizeBottomRight);
    window.addEventListener('mouseup', stopResize);
  }
  
// Function to handle resizing the window from the bottom right corner
function resizeBottomRight(e) {
  e.preventDefault();

  const deltaX = e.clientX - startMouseX;
  const deltaY = e.clientY - startMouseY;

  const newWidth = startWidth + deltaX;
  const newHeight = startHeight + deltaY;

  const newTop = startTop;
  const newLeft = startLeft;

  // Update the window element with the new size and position
  elmnt.style.width = newWidth + 'px';
  elmnt.style.height = newHeight + 'px';
  elmnt.style.top = newTop + 'px';
  elmnt.style.left = newLeft + 'px';
  }
  
  function startResizeTop(e) {
    e.preventDefault();
  
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    startWidth = elmnt.offsetWidth;
    startHeight = elmnt.offsetHeight;
    startTop = elmnt.offsetTop;
    startLeft = elmnt.offsetLeft;
  
    window.addEventListener('mousemove', resizeTop);
    window.addEventListener('mouseup', stopResize);
  }

// Function to handle resizing the window from the top side
  function resizeTop(e) {
    e.preventDefault();

    const deltaY = startMouseY - e.clientY;

    const newHeight = startHeight + deltaY;
    const newTop = startTop - deltaY;

    if (newHeight <= minHeight) {
      elmnt.style.height = `${newHeight}px`;
      elmnt.style.top = `${startTop}px`;
    } else {
      // Update the window element with the new size and position
      elmnt.style.height = newHeight + 'px';
      elmnt.style.top = newTop + 'px';
    }
  }

function startResizeRight(e) {
  e.preventDefault();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startWidth = elmnt.offsetWidth;
  startHeight = elmnt.offsetHeight;
  startTop = elmnt.offsetTop;
  startLeft = elmnt.offsetLeft;

  window.addEventListener('mousemove', resizeRight);
  window.addEventListener('mouseup', stopResize);
}
// Function to handle resizing the window from the right side
function resizeRight(e) {
  e.preventDefault();

  const deltaX = e.clientX - startMouseX;

  const newWidth = startWidth + deltaX;

  // Update the window element with the new size
  elmnt.style.width = newWidth + 'px';
}

function startResizeBottom(e) {
  e.preventDefault();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startWidth = elmnt.offsetWidth;
  startHeight = elmnt.offsetHeight;
  startTop = elmnt.offsetTop;
  startLeft = elmnt.offsetLeft;

  window.addEventListener('mousemove', resizeBottom);
  window.addEventListener('mouseup', stopResize);
}
// Function to handle resizing the window from the bottom side
function resizeBottom(e) {
  e.preventDefault();

  const deltaY = e.clientY - startMouseY;

  const newHeight = startHeight + deltaY;

  // Update the window element with the new size
  elmnt.style.height = newHeight + 'px';
}

function startResizeLeft(e) {
  e.preventDefault();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startWidth = elmnt.offsetWidth;
  startHeight = elmnt.offsetHeight;
  startTop = elmnt.offsetTop;
  startLeft = elmnt.offsetLeft;

  window.addEventListener('mousemove', resizeLeft);
  window.addEventListener('mouseup', stopResize);
}
// Function to handle resizing the window from the left side
function resizeLeft(e) {
  e.preventDefault();

  const deltaX = startMouseX - e.clientX;

  const newWidth = startWidth + deltaX;
  const newLeft = startLeft - deltaX;

  if (newWidth <= minWidth) {
    elmnt.style.width = `${newWidth}px`;
    elmnt.style.left = `${startLeft}px`;
  } else {
    // Update the window element with the new size and position
    elmnt.style.width = newWidth + 'px';
    elmnt.style.left = newLeft + 'px'
  }
  }
  
  function stopResize() {
    window.removeEventListener('mousemove', resizeTopLeft);
    window.removeEventListener('mousemove', resizeTopRight);
    window.removeEventListener('mousemove', resizeBottomLeft);
    window.removeEventListener('mousemove', resizeBottomRight);
    window.removeEventListener('mousemove', resizeTop);
    window.removeEventListener('mousemove', resizeRight);
    window.removeEventListener('mousemove', resizeBottom);
    window.removeEventListener('mousemove', resizeLeft);
    window.removeEventListener('mouseup', stopResize);
  }

}