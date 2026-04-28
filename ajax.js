// baby's first AJAX request! Fetches contents of a text document.
function request1() {
    fetch("hello.txt")
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
        });
}

// Asynchronous Communication is Asynchronous!  This does not always return values in the order you expect!
function request2() {
    fetch("hello.txt")
        .then(resp => resp.text())
        .then(data => console.log(data));

    fetch("goodbye.txt")
        .then(resp => resp.text())
        .then(data => console.log(data));
}

function request3() {
    let word = document.querySelector("#wordbox").value;
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
        });
}

// Decoding JSON data
function request4() {
    let word = document.querySelector("#wordbox").value;
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        });
}

// sending JSON data
function request5() {
    const obj =
        {
            id: 1,
            title: "A Summer's Day",
            body: "It was hot",
            userID: 7,
        };
    fetch("https://jsonplaceholder.typicode.com/posts/1"
        , {
              method: "POST",
              body: JSON.stringify(obj),
              headers: {
                'Content-type': 'application/json'
            }
          })
        .then(resp => resp.json())
        .then(data => console.log(data))
}
