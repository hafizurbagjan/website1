alert("You are barred from copying the content of the site!");
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());