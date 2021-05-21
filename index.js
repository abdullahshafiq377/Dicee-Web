function myfunction()
{
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var imgSrc1 = "images/dice" + randomNumber1 + ".png"
    var imgSrc2 = "images/dice" + randomNumber2 + ".png"

    document.querySelector(".img1").setAttribute("src", imgSrc1);
    document.querySelector(".img2").setAttribute("src", imgSrc2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "<em># Player 1 Wins</em>";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "<em>Player 2 Wins #</em>";
    } else {
        document.querySelector("h1").innerHTML = "<em>Draw</em>";
    }
}