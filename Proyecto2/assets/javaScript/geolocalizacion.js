function cargaGeolocalizacion() {
    navigator.geolocation.getCurrentPosition(obtenerCoordenadas,MuestraError,{timeout: 10000});
}

function obtenerCoordenadas(posicion) {
    var longitud = posicion.coords.longitude;
    var latitud = posicion.coords.latitude;
    var enlace = "http://maps.google.com.ar/?ll=" + latitud + "," + longitud + "&z=18";
    document.getElementById('long').innerHTML = "Longitud: " + longitud;
    document.getElementById('lat').innerHTML = "Latitud: " + latitud;
    document.getElementById('enlace').href = enlace;
}

function MuestraError(error) {
    alert(error.code);
}