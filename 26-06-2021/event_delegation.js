// event delegation
document.getElementById('ul').addEventListener('click', function (e) {
    console.log(e.target.innerText)
    if (e.target.tagName == "LI") {
        window.location.href = '/' + e.target.innerText
    }
})
