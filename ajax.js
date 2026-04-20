// baby's first AJAX request! Fetches contents of a text document.
function request1 () {
    fetch("hello.txt")
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
        })
}


function request2 () {
    let word = document.querySelector("#wordbox").value;
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
}