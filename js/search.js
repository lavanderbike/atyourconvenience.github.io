/* JS Document */

function activatePlacesSearch() {
    var input = document.getElementById('search_input');
    var autocomplete = new google.maps.places.Autocomplete(input);
}
function onClickSelect() { 
            document.getElementById("search_input").select(); 
} 
