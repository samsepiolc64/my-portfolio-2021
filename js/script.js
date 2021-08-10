function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active'); //dodaje dodatkowa klase active do przycisku, po kliknieciu w niego
    sidebar.classList.toggle('active');
}