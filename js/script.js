document.querySelector("#menu-opener").addEventListener("click", () => {
  let guardaMenuArea = document.querySelector("#menu-area");

  !guardaMenuArea.style.width || guardaMenuArea.style.width === "0px"
    ? addPx(guardaMenuArea)
    : removePx(guardaMenuArea);
});

const addPx = (e) => {
  e.style.width = "250px";
};

const removePx = (e) => {
  e.style.width = "0px";
};
