// JavaScript to update label text and image
function showContent(content) {
    const label = document.getElementById('label');
    const image = document.getElementById('main-image');

    label.textContent = content; // Updates the label with content
    image.src = content === 'Content 1' ? 'cat.jpg' : 'cat2.jpg'; // Change the image based on the button clicked
}
