
var darkMode;

function saveVarOnLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}

function init() {
    darkMode = window.localStorage.getItem('darkMode');

    if(darkMode === null || darkMode === undefined) {
       saveVarOnLocalStorage('darkMode', 'light');
    }
    darkModeToggle(darkMode);

}


function darkModeToggle(modo) {
    darkMode = modo;
    saveVarOnLocalStorage('darkMode', darkMode);
    document.getElementById('principal').attributes.getNamedItem('data-bs-theme').value = darkMode;
    
}

init();