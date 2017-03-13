// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var url = "json/content.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Actividades;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
 
function myFunction(arr) {
    var section = document.getElementById("id01");
    var fila = document.createElement("div");
    fila.setAttribute("class", "row");

    for (i = 0; i < arr.length; i++) {
        if (arr[i].Disponible == "si") {

            // VARIABLES //

            var proyecto = document.createElement("article");
            var footer = document.getElementById("id02");
            var divisor = document.getElementById("id03");
            var imagen = document.createElement("img");
            var icono = document.createElement("i");
            var enlace = document.createElement("a");
            var titulo = document.createElement("h3");
            var enlace2 = document.createElement("a");
            var p = document.createElement("p");
            var nodoTitulo = document.createTextNode(arr[i].Titulo);
            var nodoDesc = document.createTextNode(arr[i].Descripcion);
            var nodoDestacado = arr[i].Destacado;
            var nodoDisponible = arr[i].Disponible;

            // ATRIBUTOS //
            section.insertBefore(fila, divisor);
            fila.appendChild(proyecto);
            proyecto.setAttribute("class", "col-md-4");
            enlace.setAttribute("href", arr[i].Link);
            enlace2.setAttribute("href", arr[i].Link);
            imagen.setAttribute("class", "img-responsive");
            imagen.setAttribute("src", arr[i].Foto);
            imagen.setAttribute("alt", "imagen");
            icono.setAttribute("class", "fa fa-star fa-3");
            icono.setAttribute("aria-hidden", "true");

            enlace.appendChild(imagen);
            enlace2.appendChild(nodoTitulo);
            p.appendChild(nodoDesc);
            proyecto.appendChild(enlace);
            proyecto.appendChild(titulo);
            titulo.appendChild(enlace2);

            //Destacado o no
            if (arr[i].Destacado == true) {
                titulo.appendChild(icono);
            }

            proyecto.appendChild(p);

        }

    }
 
}