// Dots
dots = document.getElementsByClassName("-dots");
for (let i = 0; i < dots.length; i++) {
  dots[i].innerHTML = `<span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <br>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <br>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>`;
}

// Menu
menu = document.getElementsByClassName("-menu")[0];
dropdown = document.getElementsByClassName("-dropdown")[0];
hamburger = document.getElementsByClassName("fa-stream")[0];
menu.onclick = () => {
  dropdown.classList.toggle("-active");
  document.body.classList.toggle("-no-scroll");
  hamburger.classList.toggle("fa-times");
};
