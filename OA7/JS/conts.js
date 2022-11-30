((d) => {
  const $contcust = document.getElementById("cont-cust"),
    $contjobs = document.getElementById("cont-jobs");
  d.addEventListener("scroll", (e) => {
    let c = 0,
      j = 0;
    let cntc = setInterval(() => {
      $contcust.innerHTML = "";
      $contcust.innerHTML = ` <b>+${c}</b>`;
      c++;
      if (c === 51) {
        clearInterval(cntc);
      }
    }, 10);
    let cntj = setInterval(() => {
      $contjobs.innerHTML = "";
      $contjobs.innerHTML = ` <b>+${j}</b>`;
      j++;
      if (j === 101) {
        clearInterval(cntj);
      }
    }, 10);
  });
})(document);
