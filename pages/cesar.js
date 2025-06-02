document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const key = parseInt(document.getElementById('key').value)
    const desc = document.getElementById('desc').value;

    const result = cesar(desc, key);
    document.getElementById('result').textContent = result;
    console.log(result);
});

function cesar(desc, key) {
    let result = '';
    for (let i = 0; i < desc.length; i++) {
        let char = desc[i];
        if (char.match(/[a-z]/i)) {
            const code = desc.charCodeAt(i);
            if (char === char.toUpperCase()) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}
