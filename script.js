document.addEventListener("DOMContentLoaded", function() {
    typeWriter(document.getElementById('main-text').innerText, 0, 'main-text');
});

function typeWriter(text, i, elementId) {
    if (i < text.length) {
        document.getElementById(elementId).innerText = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, elementId), 50);
    }
}

document.getElementById('searchButton').addEventListener('click', function() {
    window.open("https://www.google.com/search?q=What+is+anon+in+web3%3F", "_blank");
});
