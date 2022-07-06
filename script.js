var gender;
var personality;
var personalityinc;
var attractiontotal;
var badp;
var yespc;
var nopc;
$(".female").click(function() {
    gender= "female";
});
$(".male").click(function() {
    gender= "male";
});
$(".gp").click(function() {
    if (typeof gender === "female"){
        personalityinc = 1.31061598951;
        attractiontotal= 0 + personalityinc;
    }
    else{
        personalityinc = 1.6716064019;
        attractiontotal = 0 + personalityinc;
    }
    
  
});
$(".bp").click(function() {
const bp = document.querySelectorAll("bp");
if (bp.checked === false && typeof gender === "female"){
    badp += 1.31061598951;
}
    else if (bp.checked === false && typeof gender === "male"){
        badp += 1.6716064019;
}
    else{
      badp += 0;
    }
});
$(".pcy").click(function() {
    if (typeof gender ==="female"){
        yespc += 10.8256880734;
    }
    else{
        yespc+= 8.29875518672;
    }
});
$(".pcy").click(function() {
    nopc+= 0;
});