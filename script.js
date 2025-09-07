document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const display = document.getElementById('display');
    const signImage = document.getElementById('signImage');
 
    
    if (key >= 'a' && key <= 'z') {
        display.textContent = `You pressed: ${key.toUpperCase()}`;

        // Update the image source with the corresponding alphabet image
        signImage.src = `signs/${key}.png`;
        signImage.alt = `Sign language for ${key.toUpperCase()}`;
        signImage.style.display = 'block';
    } else {
        display.textContent = 'Please press a letter key (A-Z)';
        signImage.style.display = 'none';
    }
});
