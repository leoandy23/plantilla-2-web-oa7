((d) => {
  const $btnLanguage = d.querySelector(".btn-languaje");

  $btnLanguage.addEventListener("click", (e) => {
    let lan = $btnLanguage.checked;
    let tkPage = location.href.split("/");
    let Page = tkPage[tkPage.length - 1];
    if (lan == true) {
      location.href = `En-Page/${Page}`;
    } else {
      location.href = `../${Page}`;
    }
  });
})(document);
