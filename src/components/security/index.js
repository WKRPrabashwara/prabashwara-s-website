// Disable Right-Click and prevent dragging on images
document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName === 'IMG') {
        event.preventDefault(); // Disable right-click on images
    } else {
        event.preventDefault(); // Disable right-click globally
    }
});

// Disable specific keyboard shortcuts
document.addEventListener('keydown', function(event) {
    const forbiddenKeys = [
        { ctrlKey: true, key: 'S' },  // Prevent Save
        { ctrlKey: true, key: 'C' },  // Prevent Copy
        { ctrlKey: true, key: 'U' },  // Prevent View Source
        { ctrlKey: true, key: 'P' },  // Prevent Print
        { ctrlKey: true, shiftKey: true, key: 'I' }, // Prevent DevTools
        { key: 'F12' } // Prevent F12
    ];

    forbiddenKeys.forEach(combo => {
        if (Object.keys(combo).every(k => event[k] === combo[k])) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});

// Anti-debugging: detect dev tools via console and window size
(function() {
    const threshold = 160;

    function detectDevTools() {
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold ||
            (window.console && (console.firebug || (console.table && /firebug/i.test(console.table()))))) {
            alert('Developer tools detected. Please close them.');
            window.location.href = 'about:blank';
        }
    }

    window.addEventListener('resize', detectDevTools);
    setInterval(detectDevTools, 1000);
})();

// Prevent dragging of images and selected text
document.addEventListener('dragstart', function(event) {
    if (event.target.tagName === 'IMG' || window.getSelection().toString()) {
        event.preventDefault();
    }
});
