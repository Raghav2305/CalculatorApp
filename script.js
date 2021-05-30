function displayScreen(param){
    document.getElementById('result').value += param
}

function clearScreen(){
    document.getElementById('result').value = ""
}

function changeTheme(){
    let dark = document.getElementById('dark-mode');
    let theme = document.getElementById('theme');
    if(theme.getAttribute('href') === 'light.css' ){
        theme.href = 'dark.css';
        dark.innerHTML = 'Light Mode ☀'
    } 
    else{
        theme.href = 'light.css';
        dark.innerHTML = 'Dark Mode 🌙'
    }
}