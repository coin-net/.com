    // Block pinch-to-zoom only
    document.addEventListener('touchmove', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });

    // Block double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
    
    
    
    function setFullScreenSize() {
  document.body.style.width = window.innerWidth + 'px';
  document.body.style.height = window.innerHeight + 'px';
}

// Run on load
window.addEventListener('load', setFullScreenSize);

// Run on resize/orientation change
window.addEventListener('resize', setFullScreenSize);
window.addEventListener('orientationchange', setFullScreenSize);








  // Create notification element
  const offlineNotification = document.createElement('div');
  offlineNotification.style.position = 'fixed';
  offlineNotification.style.bottom = '30px';  // some space from bottom
  offlineNotification.style.left = '50%';
  offlineNotification.style.transform = 'translateX(-50%)';
  offlineNotification.style.backgroundColor = '#ff4444';
  offlineNotification.style.color = 'white';
  offlineNotification.style.padding = '8px 16px';  // reduced padding
  offlineNotification.style.borderRadius = '8px';
  offlineNotification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  offlineNotification.style.fontWeight = '600';  // slightly lighter weight
  offlineNotification.style.zIndex = '9999';
  offlineNotification.style.fontSize = '14px';    // smaller font size
  offlineNotification.style.maxWidth = '85vw';  // 85% viewport width
  offlineNotification.style.minWidth = '250px';  // slightly smaller min-width
  offlineNotification.style.textAlign = 'center';
  offlineNotification.style.display = 'flex';
  offlineNotification.style.alignItems = 'center';
  offlineNotification.style.justifyContent = 'center';
  offlineNotification.style.gap = '10px';
  offlineNotification.style.display = 'none';

  // Wi-Fi off icon SVG
  const wifiIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  wifiIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  wifiIcon.setAttribute('width', '20');   // smaller icon
  wifiIcon.setAttribute('height', '20');
  wifiIcon.setAttribute('viewBox', '0 0 24 24');
  wifiIcon.setAttribute('fill', 'none');
  wifiIcon.setAttribute('stroke', 'white');
  wifiIcon.setAttribute('stroke-width', '2');
  wifiIcon.setAttribute('stroke-linecap', 'round');
  wifiIcon.setAttribute('stroke-linejoin', 'round');

  wifiIcon.innerHTML = `
    <path d="M1 9a15 15 0 0 1 22 0" />
    <path d="M4.22 12.22a10 10 0 0 1 15.56 0" />
    <path d="M8.53 16.11a5 5 0 0 1 6.95 0" />
    <line x1="18" y1="18" x2="22" y2="22" />
    <line x1="22" y1="18" x2="18" y2="22" />
  `;

  const textNode = document.createElement('span');
  textNode.textContent = 'You are currently offline';

  offlineNotification.appendChild(wifiIcon);
  offlineNotification.appendChild(textNode);
  document.body.appendChild(offlineNotification);

  function updateOnlineStatus() {
    if (!navigator.onLine) {
      offlineNotification.style.display = 'flex';
    } else {
      offlineNotification.style.display = 'none';
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  updateOnlineStatus();