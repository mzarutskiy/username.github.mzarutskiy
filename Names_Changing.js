const node_for_click = document.getElementById("for_click")

function find_edit() {
    const p0 = document.getElementsByTagName('p0')[0]
    console.log(p0.innerText)
    p0.innerText = 'Zarutskiy'

    const p1 = document.getElementsByTagName('p1')[0]
    console.log(p1.innerText)
    p1.innerText = 'Mikhail'

    const p2 = document.getElementsByTagName('p2')[0]
    console.log(p2.innerText)
    p2.innerText = 'Alekseevich'

}

node_for_click.addEventListener("click", find_edit)