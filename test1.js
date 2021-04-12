//Schreibe einen Taschenrecherner in Javascript, welcher über PopUp-Boxen 2 Zahlen und den Operator(+,-,*,/,%)
//einliest und dann den Wert ausgibt. Es sollte außerdem eine Fehlerbehandlung programmiert werden ob es sich bei
//der Eingabe um Zahlen handelt und das Teilen durch 0 sollte abgefangen werden

function init(){
     
            var ergEingabe = eingabe();
         
            if(ergEingabe[3]){
                alert("Das Ergebnis ist: "+rechne(ergEingabe));
            }else{
                alert(ergEingabe[4]);
            }
             
             
         
        }
     
        function rechne(ergEingabe){
            switch(ergEingabe[1]) {
                case '+':
                    return parseFloat(ergEingabe[0]) + parseFloat(ergEingabe[2]);
                break;
                case '-':
                    return ergEingabe[0] - ergEingabe[2];
                break;
                case '/':
                    return ergEingabe[0] / ergEingabe[2];
                break;
                case '*':
                    return ergEingabe[0] * ergEingabe[2];
                break;
                default:
                    return 0;
    }
        }
     
        function eingabe(){
             
            var daten = new Array(4);
             
            daten[0] = prompt("Bitte geben Sie die erste Zahl ein:","");    
            daten[1] = prompt("Bitte geben Sie einen Operator ein:","");    
            daten[2] = prompt("Bitte geben Sie die zweite Zahl ein:","");
         
            if(isNaN(daten[0])){
                daten[4] = "Die erste Eingabe ist keine Zahl!";
                daten[3] = false;
            }
             
            if(isNaN(daten[2])){
                daten[4] = "Die zweite Eingabe ist keine Zahl!";
                daten[3] = false;
            }
             
            if(daten[1] != "/" && daten[1] != "*" && daten[1] != "+" && daten[1] != "-"){
                daten[4] = "Kein gültiger Operator!";
                daten[3] = false;
            }
             
            if(daten[1] == "/" && daten[2] == "0"){
                daten[3] = false;
                daten[4] = "Es soll nicht durch 0 geteilt werden!";
            }
             
             (daten[3] == false) ? daten[3] = false : daten[3] = true
             
            return daten;
        }
         
        init();