/* JS Document */

function activatePlacesSearch() {
    var input = document.getElementById('search_input');
    var autocomplete = new google.maps.places.Autocomplete(input);
}
function SelectAll(id) { 
    document.getElementById(id).focus();
    document.getElementById(id).select();
} 
