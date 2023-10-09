function incrementFontSizeAndColor() {
    var paragraph = document.getElementById('paragraph');
    var currentFontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    var currentColor = window.getComputedStyle(paragraph).color;

    var newFontSize = currentFontSize + 2;
    var newColor = generateRandomColor();

    paragraph.style.fontSize = newFontSize + 'px';
    paragraph.style.color = newColor;
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}