document.addEventListener("DOMContentLoaded", function() {
    const mainText = document.getElementById('main-text');
    typeWriter(mainText);
});

function typeWriter(element) {
    element.classList.add("typewriter");
}

document.getElementById('searchButton').addEventListener('click', function() {
    window.open("https://www.google.com/search?q=What+is+anon+in+web3%3F", "_blank");
});
