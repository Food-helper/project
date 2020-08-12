

const menuToggle = document.querySelector('.header__menu-toggle');
console.log(menuToggle)
console.log(menuToggle.checked)
menuToggle.onclick = function () {
    if (menuToggle.checked) {
        console.log("checked")
        menuToggle.setAttribute('aria-pressed', true);
        menuToggle.setAttribute('aria-expanded', true);
    } else {

        console.log("not_checked")
        menuToggle.setAttribute('aria-pressed', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
}