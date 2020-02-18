alert("Attention JEU TRES ADDICTIF !")

var scoreOrdi = 0;
var myScore = 0;
document.getElementById("yourscore").innerHTML = myScore;
document.getElementById("PCscore").innerHTML = scoreOrdi;


function choixFunction(choix) {
    rand = Math.floor(Math.random() * 2);
    console.log(rand);
    if (rand == 0) {
        document.getElementById("idPiece").src = "images/face.png";
    } else {
        document.getElementById("idPiece").src = "images/pile.png";
    }
    if (choix == rand) {
        document.getElementById("resultat").innerHTML = "Gagné ! ";
        myScore = myScore + 1
            //document.getElementById("yourscore").innerHTML = myScore;
    } else {
        document.getElementById("resultat").innerHTML = "Perdu.. ";
        scoreOrdi = scoreOrdi + 1
            //document.getElementById("PCscore").innerHTML = scoreOrdi;
    }
    if (myScore == 10) {
        alert("BRAVO VOUS AVEZ GAGNE !");
        myScore = 0;
        scoreOrdi = 0;
    } else if (scoreOrdi == 10) {
        alert("HAHAHAHAHA C PERDU");
        myScore = 0;
        scoreOrdi = 0;
    } else {}
    document.getElementById("yourscore").innerHTML = myScore;
    document.getElementById("PCscore").innerHTML = scoreOrdi;
}