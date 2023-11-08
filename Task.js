function verify() {

    let a = parseInt(document.getElementById("a").innerText);
    let b = parseInt(document.getElementById("b").innerText);
    let c = parseInt(document.getElementById("c").innerText);

    if (a < b && b < c) {
        document.getElementById('result').innerText = "выполняется неравенство A < B < C";
    } else if (a > b && b > c) {
        document.getElementById('result').innerText = "выполняется неравенство A > B > C";
    } else {
        document.getElementById('result').innerText = "ни одно из неравенств не выполняется";
    }
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);