/*

        * JavaScript: Exercise 07_02
        * Fan Trick Fine Art Photography
        * Digital 101 web page
        * Author:
        * Date:

         * Filename: ft.js
 */

 // sets all form field values to defaults
function resetForm() {
        document.getElementById("photognum").value = 1;
        document.getElementById("photoghrs").value = 2;
        document.getElementById("membook").checked = false;
        document.getElementById("reprodrights").checked = false;
        document.getElementById("distance").value = 0;
}

// resets form when page is loaded
window.addEventListener("load", resetForm, false);
