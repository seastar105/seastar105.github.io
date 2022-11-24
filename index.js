$(document).ready(function () {
    renderCurrentTime();
    // renderQuote();
    renderBook();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}

function renderBook() {
    let url = `https://us-central1-bookquotes.cloudfunctions.net/getRandomBook`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let title = `- ${data['title']} -`;
            let author = `- ${data['author']} -`;
            let content = `" ${data['paragraph']} "`;
            $('#title').text(title);
            $('#author').text(author);
            $('#content').text(content);
        });
}
