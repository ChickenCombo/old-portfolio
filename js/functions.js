window.addEventListener("load", pageLoaded);

// Page Load
function pageLoaded() {
    // Focus on the textbox
    document.getElementById('terminalInput').focus();

    // Welcome Message
    printResult("Welcome to myPortfolio v1.0.0!");
    printResult("Type \"help\" to get started.");

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
        "An aspiring Software Engineer",
        "Based in Quezon City, Philippines",
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
        `&emsp; ├── <img id="icon" src="img/email.svg"/> <a href="mailto:johnlestercuadra.dev@gmail.com" target="_blank">E-mail</a>`,
        `&emsp; ├── <img id="icon" src="img/linkedin.svg"/> <a href="https://linkedin.com/in/johnlestercuadra" target="_blank">LinkedIn</a>`,
        `&emsp; └── <img id="icon" src="img/github.svg"/> <a href="https://github.com/ChickenCombo/" target="_blank">GitHub</a>`
    ].join('<br />');
    printResult(skills);
}

// Display projects
function projects() {
    let skills = [
        `S:\>_ Android Weather App`,
        `&emsp; └── <a href="https://github.com/ChickenCombo/weather-app" target="_blank">GitHub</a> | <a href="https://github.com/ChickenCombo/weather-app/releases/tag/v1.0.0" target="_blank">Demo</a>`,
        `S:\>_ Higher or Lower: Anime Edition`,
        `&emsp; └── <a href="https://github.com/ChickenCombo/higher-or-lower" target="_blank">GitHub</a> | <a href="https://higherorlower-anime.netlify.app/" target="_blank">Demo</a>`,
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