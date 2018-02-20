var counter = -1;

/*TRANSFER/EXCHANGE PAGE*/

var exchangeContainer = document.querySelector("#exchangeContainer");
console.log(exchangeContainer)

var transferContainer = document.querySelector('#transferContainer');
var exchangeText = document.querySelector('#exchangeText');
var transferText = document.querySelector('#transferText');

var info1 = document.querySelector('#info1');
var info2 = document.querySelector('#info2');
var info3 = document.querySelector('#info3');
var info4 = document.querySelector('#info4');

var internText = document.querySelector('#internText');
var cheatingText = document.querySelector('#cheatingText');
var attendanceText = document.querySelector('#attendanceText');
var teachingText = document.querySelector('#teachingText');

exchangeContainer.addEventListener("click", chooseExchange);
transferContainer.addEventListener("click", chooseTransfer);
info1.addEventListener("click", chooseInfo1);
info2.addEventListener("click", chooseInfo2);
info3.addEventListener("click", chooseInfo3);
info4.addEventListener("click", chooseInfo4);


function chooseExchange() {
    counter = 1;
    spanText();
}

function chooseTransfer() {
    counter = 2;
    spanText();
}
function chooseInfo1() {
    console.log("are you here fucker?");
    counter = 3;
    spanText();
}

function chooseInfo2() {
    counter = 4;
    spanText();
}

function chooseInfo3() {
    counter = 5;
    spanText();
}

function chooseInfo4() {
    counter = 6;
    spanText();
}


function spanText() {
    console.log("span text");
    switch (counter) {
        case 1:
            //exchangeText.classList.toggle("openText");
            exchangeText.classList.toggle("closeText");
            break;
        case 2:
            //transferText.classList.toggle("openText");
            transferText.classList.toggle("closeText");
            break;
        case 3:
            console.log("what about now?")
            //internText.classList.toggle("openText");
            internText.classList.toggle("closeText");
            break;
        case 4:
            //cheatingText.classList.toggle("openText");
            cheatingText.classList.toggle("closeText");
            break;
        case 5:
            //attendanceText.classList.toggle("openText");
            attendanceText.classList.toggle("closeText");
            break;
        case 6:
            //teachingText.classList.toggle("openText");
            teachingText.classList.toggle("closeText");
            break;
    }


}

/*GENERAL INFORMATIONS*/

