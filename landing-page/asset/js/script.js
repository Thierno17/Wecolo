$(".btn-rejoindre").on("click", () => {
    console.log("On a cliqué sur le bouton recommencer"); // On affiche un message dans la console*
    $(".formulaire").fadeIn();
    $(".masque").fadeIn(); //shift + alt + fleche (haut ou bas) = duplique la ligne
 });



$(".exit").on("click" ,()=>{
    $(".formulaire").fadeOut();
    $(".masque").fadeOut();

})