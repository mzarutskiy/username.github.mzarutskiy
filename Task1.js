function verify() {

    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    if (a < b && b < c) {
        let result = "выполняется неравенство A < B < C";
        document.getElementById('result').innerText = result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else if (a > b && b > c) {
        let result = "выполняется неравенство A > B > C";
        document.getElementById('result').innerText = result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        let result = "ни одно из неравенств не выполняется";
        document.getElementById('result').innerText = result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementById('result').innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Повторите ввод");
    }
}

function verify_send() {
    verify();
    send();
}

let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('input', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('input', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send);