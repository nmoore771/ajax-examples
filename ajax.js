// baby's first AJAX request! Fetches contents of a text document.
function request1 () {
    fetch("hello.txt")
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
        });
}

// Asynchronous Communication is Asynchronous!  This does not always return values in the order you expect! 
function request2 () {
    fetch("hello.txt")
      .then(resp => resp.text())
      .then(data => console.log(data));

    fetch("goodbye.txt")
      .then(resp => resp.text())
      .then(data => console.log(data));
}

// Decoding JSON data
function request3 () {
    let word = document.querySelector("#wordbox").value;
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        });
}
