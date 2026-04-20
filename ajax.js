// baby's first AJAX request! Fetches contents of a text document.
function request1 () {
    fetch("hello.txt")
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
        })
}