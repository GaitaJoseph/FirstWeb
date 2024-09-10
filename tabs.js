

// const bars = document.getElementById("bar-container");

// // Assign an event listener to the bars element
// bars.onclick = function() {
//     const menu = document.getElementById('menu-container');
    
//     // Check the current display style of the menu
//     const currentDisplay = menu.style.display;
    
//     // Toggle the menu display
//     if (currentDisplay === "block") {
//         menu.style.display = "none"; // Hide the menu
//     } else {
//         menu.style.display = "block"; // Show the menu
//     }
// };

const bars = document.getElementById("bar-container");
const bar_singles=bars.children;
const bar1=bar_singles[0]
const bar2=bar_singles[1]
const bar3=bar_singles[2]

// Assign an event listener to the bars element
bars.onclick = function() {
    const menu = document.getElementById('menu-container');
    
    // Check the current display style of the menu
   //  const currentDisplay = menu.style.display;
   const currHeight=menu.style.height;
   
    console.log(currHeight)
    // Toggle the menu display
   //  if (currentDisplay === "block") {
   //      menu.style.display = "none"; // Hide the menu
   //  } else {
   //      menu.style.display = "block"; // Show the menu
   //  }
   
   if(currHeight=="100%")
   {
      menu.style.height='0px';
      menu.style.opacity='0%'
      bar2.style.display='block'

      bar3.style.transform="rotate(0deg)"
      // bar3.style.translate="0px -13px"

      bar1.style.transform="rotate(0deg)"
      bar1.style.translate="0px 0px"

   } else{
      menu.style.height='100%'
      menu.style.opacity='100%'
      bar2.style.display='none'

      bar3.style.transform="rotate(45deg)"
      // bar3.style.translate="0px -13px"

      bar1.style.transform="rotate(-45deg)"
      bar1.style.translate="0px 7px"
      
   }
};