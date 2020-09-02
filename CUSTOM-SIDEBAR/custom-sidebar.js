const button = document.getElementById("btn-menuburger");
const sidebar = document.getElementById("side-menu");
const blocker = document.getElementById("page-blocker");

//Optional: Offset the page when the menu slides out
let offsetPage = true;
const page = document.getElementById("page-wrapper");
if (offsetPage) {
    page.classList.add('page-default');
}
const body = document.getElementsByTagName("body")[0];

//Button makes sidebar/blocker appear
button.addEventListener('click', (e)=> {
    sidebar.classList.add('menu-open');
    blocker.classList.add('blocker-shown');
    if (offsetPage) {
        page.classList.add('page-offset');
    }
    body.style.position = "fixed";
});
//Clicking on blocker makes sidebar/blocker disappear
blocker.addEventListener('click', (e)=> {
    sidebar.classList.remove('menu-open');
    blocker.classList.remove('blocker-shown');
    if (offsetPage) {
        page.classList.remove('page-offset');
    }
    body.style.position = "relative";
});