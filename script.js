// Create ACE editor instance
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

// Update output box with HTML code from editor
editor.session.on("change", function() {
    var htmlCode = editor.getValue();
    document.getElementById("output").innerHTML = htmlCode;
});

// Save button click event
document.getElementById("save-btn").addEventListener("click", function() {
    var htmlCode = editor.getValue();
    var blob = new Blob([htmlCode], {type: "text/html;charset=utf-8"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "output.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Theme change button click event
var currentTheme = "monokai"; // Variable to keep track of the current theme
document.getElementById("theme-btn").addEventListener("click", function() {
    if (currentTheme === "monokai") {
        // Change to light theme
        editor.setTheme("ace/theme/chrome");
        document.querySelector("h1").style.color = "black";
        document.getElementById("output").style.borderColor = "white";
        document.body.style.backgroundColor = "white";
        document.getElementById("theme-btn").style.color = "blue";
        document.getElementById("save-btn").style.color = "blue";
        document.getElementById("output").classList.add("light-theme"); // Add the light-theme class
        currentTheme = "chrome";
    } else {
        // Change to dark theme
        editor.setTheme("ace/theme/monokai");
        document.querySelector("h1").style.color = "white";
        document.getElementById("output").style.borderColor = "black";
        document.body.style.backgroundColor = "black";
        document.getElementById("theme-btn").style.color = "white";
        document.getElementById("save-btn").style.color = "white";
        document.getElementById("output").classList.remove("light-theme"); // Remove the light-theme class
        currentTheme = "monokai";
    }
});
