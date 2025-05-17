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