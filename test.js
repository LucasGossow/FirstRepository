var myArray = [1, 2, 3, 4, "hans", "meier", 7, 8 ,9];
alert(myArray.length);
myArray.splice(2,1);
var erg = myArray.indexOf("meier");
myArray.splice(erg, 1);
myArray.unshift("beginning")
myArray.push("end")













//Geben Sie die Anzahl der Elemente in diesem Array aus.
//Löschen Sie das Element mit dem Index 2. (Elementinhalt: 3)
//Ermitteln Sie den Index des Elements "meier" und speichern Sie diesen in eine Variable ab.
//Löschen Sie das Element mit dem Inhalt "meier" aus dem Array.
//Fügen Sie ein neues Element ("anfang") an dem Array-Anfang ein.
//Fügen Sie ein neues Element ("ende") an dem Array an.