

const bars = document.getElementById("bar-container");

// Assign an event listener to the bars element
bars.onclick = function() {
    const menu = document.getElementById('menu-container');
    
    // Check the current display style of the menu
    const currentDisplay = menu.style.display;
    
    // Toggle the menu display
    if (currentDisplay === "block") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "block"; // Show the menu
    }
};