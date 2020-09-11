const popup = document.getElementById("cookie-popup");

if (localStorage.getItem("AcceptCookies") != "t") {

    popup.style.display = "block";

    const btn_opts = document.getElementById("c-btn-1");
        let clicked_opts = false;
    const btn_accept = document.getElementById("c-btn-2");

    btn_opts.addEventListener('click', ()=> {
        if (!clicked_opts) {
            let newElem = document.createElement("img");
            newElem.setAttribute("src", "https://image.flaticon.com/icons/svg/845/845648.svg");
            newElem.style.height = "32px";
            newElem.style.width = "32px";
            newElem.style.marginLeft = "132px";
            btn_opts.textContent = "Functionality not implemented ;-;";
            btn_opts.style.fontSize = "11.5px";
            btn_opts.appendChild(newElem);
            clicked_opts = !clicked_opts;
        }
    });

    btn_accept.addEventListener('click', ()=> {
        localStorage.setItem("AcceptCookies", "t");
        popup.style.display = "none";
    });

} else {
    popup.style.display = "none";
}