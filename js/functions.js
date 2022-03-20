window.addEventListener("load", pageLoaded);

// Page Load
function pageLoaded() {
    // Focus on the textbox
    document.getElementById('terminalInput').focus();

    // Welcome Message
    printResult("Welcome to myPortfolio v1.0.0");
    printResult("Type \"help\" to view the available commands");

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault();
        terminalCommands();
        document.getElementById('terminalInput').value = "";
        window.scrollTo(0, 150);
    }
}

// Terminal Commands
function terminalCommands() {
    input = document.getElementById('terminalInput').value.trim().toLowerCase();
    if (input != "") {
        printResult("<p class='userInput'>> root@admin:~$ " + input + "</p>");
        switch (input) {
            case "help":
                help();
                break;
            case "about":
                about();
                break;
            case "skills":
                skills();
                break;
            case "contacts":
                contacts();
                break;
            case "projects":
                projects();
                break;
            case "clear":
                clearTerminal();
                break;
            default:
                invalidCommand(input);
        }
    }
}

// Display the list of commands
function help() {
    let helpList = [
        "Here are the list of the available commands: ",
        "&emsp; 'about' - About Me",
        "&emsp; 'skills' - My Skills",
        "&emsp; 'contacts' - Contact Information",
        "&emsp; 'projects' - Projects List"
    ].join('<br />');
    printResult(helpList);
}

// Display developer's information
function about() {
    let about = [
        "Hi, I'm Lester",
        "A software developer",
        "Based in Manila, Philippines",
        "Loves music, video games, anime, and programming."
    ].join('<br />');
    printResult(about);
}

// Display skills and expertise
function skills() {
    let skills = [
        "List of my skills/expertise: ",
        `&emsp; ├── <img id="icon" src="img/java.svg"/> Java`,
        `&emsp; ├── <img id="icon" src="img/python.svg"/> Python`,
        `&emsp; ├── <img id="icon" src="img/html5.svg"/> HTML`,
        `&emsp; ├── <img id="icon" src="img/css3.svg"/> CSS`,
        `&emsp; ├── <img id="icon" src="img/javascript.svg"/> JavaScript`,
        `&emsp; └── <img id="icon" src="img/git.svg"/> Git / <img id="icon" src="img/github.svg"/> GitHub`
    ].join('<br />');
    printResult(skills);
}

// Display contact information
function contacts() {
    let skills = [
        "List of my contact informations (hyperlinks): ",
        `&emsp; ├── <img id="icon" src="img/email.svg"/> <a href="mailto:lester.cuadra24@gmail.com" target="_blank">E-mail</a>`,
        `&emsp; ├── <img id="icon" src="img/facebook.svg"/> <a href="https://www.facebook.com/adromedemon/" target="_blank">Facebook</a>`,
        `&emsp; └── <img id="icon" src="img/github.svg"/> <a href="https://github.com/ChickenCombo/" target="_blank">GitHub</a>`
    ].join('<br />');
    printResult(skills);
}

// Display projects
function projects() {
    let skills = [
        `S:\>_ Android Weather App`,
        `&emsp; └── <a href="https://github.com/ChickenCombo/Weather-App" target="_blank">GitHub</a>`
    ].join('<br />');
    printResult(skills);
}

// Invalid command error message
function invalidCommand(input) {
    let invalid = [
        `The term '${input}' is an invalid command.`,
        `Type "help" to view the available commands.`
    ].join('<br />');
    printResult(invalid);
}

// Automatically scrolls down to the bottom of the terminal
function scrollBottom() {
    let terminalResultsDiv = document.getElementById('terminalOutput');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

// Append the results on the terminal
function printResult(text) {
    document.getElementById('terminalOutput').innerHTML += "<p>" + text + "</p>";
    scrollBottom();
}

// Clear Terminal
function clearTerminal() {
    document.getElementById("terminalOutput").innerHTML = "";
}