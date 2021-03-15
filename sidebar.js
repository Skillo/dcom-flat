document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#nav-toggle').onclick = function() {
        document.body.classList.toggle('nav-is-open');
    };
    document.querySelector('.mobile-sidebar-shadow').onclick = function() {
        document.body.classList.toggle('nav-is-open');
    };
});