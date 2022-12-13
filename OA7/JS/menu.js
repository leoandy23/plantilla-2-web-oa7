/************** Menu ************/

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });

  setInterval(function () {
    if (window.innerWidth <= 800) {
      const $btnSubmenu = d.querySelector(".btn-submenu"),
        $submenu = d.getElementById("submenu");
      $btnSubmenu.addEventListener("click", (e) => {
        $submenu.classList.toggle("none");
      });
    }
  }, 1);
})(document);
