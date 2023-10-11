function checkVowel() {
    const character = document.getElementById('character').value.toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
        document.getElementById('result').textContent = 'The character is a vowel.';
    } else {
        document.getElementById('result').textContent = 'The character is not a vowel.';
    }
}