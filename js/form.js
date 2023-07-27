function insertForm(id) {
    const inp = document.getElementById(id)
    let title = inp.cells[1].innerText
    let desc = inp.cells[2].innerText
    let ids = inp.cells[4].innerText
    console.log(ids, title, desc)

    document.getElementsByName('title')[0].value = title;
    document.getElementsByName('desc')[0].value = desc;
    document.getElementsByName('url')[0].value = ids
}

