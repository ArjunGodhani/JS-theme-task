// function setTheme(themeName) {
//     document.body.className = themeName;
// }

function setTheme(themeName) {
    // Remove all theme classes from body
    document.body.classList.remove('red-theme', 'orange-theme', 'yellow-theme', 'green-theme', 'blue-theme', 'indigo-theme', 'violet-theme');

    // Add the selected theme class to body
    document.body.classList.add(themeName);
}