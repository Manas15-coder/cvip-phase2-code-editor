
const html_code = document.querySelector('.html-code');
const css_code = document.querySelector('.css-code');
const js_code = document.querySelector('.js-code');
const result = document.querySelector('#result')
function run() {
    //local storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;

function downloadCode() {
    const htmlCode = document.querySelector('.html-code').value;
    const cssCode = document.querySelector('.css-code').value;
    const jsCode = document.querySelector('.js-code').value;

    const code = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${cssCode}</style>
</head>
<body>${htmlCode}</body>
<script>${jsCode}</script>
</html>`;

    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a')
    link.href = url;
    link.download = 'Code.html'
    link.click();

    URL.revokeObjectURL(url)

}

const changeTheme = () => {
    document.body.classList.toggle('dark');

}