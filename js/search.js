/* JS Document */

function activatePlacesSearch() {
    var input = document.getElementById('search_input');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

function SelectAll() { 
    document.getElementById('search_input').focus();
    document.getElementById('search_input').select();
} 

function myFunction() {
  document.getElementById('search_input').style.color = "red";
}