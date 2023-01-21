
/*
Add the following to any .md file to run this script:
<script src="../main.js"></script>
*/

function main() {
  console.log('Welcome to the console!');
  changeFavicon('/favicon.ico');
}

/* Test */
// function changeFavicon(link) {
//   let $favicon = document.querySelector('link[rel="icon"]')
//   // If a <link rel="icon"> element already exists,
//   // change its href to the given link.
//   if ($favicon !== null) {
//     $favicon.href = link
//   // Otherwise, create a new element and append it to <head>.
//   } else {
//     $favicon = document.createElement("link")
//     $favicon.rel = "icon"
//     $favicon.href = link
//     document.head.appendChild($favicon)
//   }
// }

/* Wait for the page to load before running the main function */
window.onload = main;
