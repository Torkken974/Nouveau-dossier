// document.getElementById("exemple").innerHTML = "NOUVEAU TEXTE";
var element_exemple = document.getElementById("exemple");
var element_clic = document.getElementById("clic");
var cpt = 0;

var f1 = function(){
    cpt ++;//cpt = cpt + 1;
    element_clic.innerHTML = cpt ++;

}
element_exemple.addEventListener('click',f1);