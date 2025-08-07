(() => {
  const refs = {
    rightBtn: document.querySelector("[data-right]"),
    centerBtn: document.querySelector("[data-center]"),
    leftBtn: document.querySelector("[data-left]"),
    listOverlay: document.querySelector("[data-overlay]"),
  };
  let rightCount = false;
  let centerCount = true;
  let leftCount = false;

  refs.listOverlay.classList.toggle("center");

  refs.rightBtn.addEventListener("click", right);
  refs.centerBtn.addEventListener("click", center);
  refs.leftBtn.addEventListener("click", left);

  function center() {
    if (centerCount) {
      return;
    }
    refs.listOverlay.classList.toggle("center");
    centerCount = true;
    if (rightCount) {
      refs.listOverlay.classList.toggle("right");
      rightCount = false;
    } else if (leftCount) {
      refs.listOverlay.classList.toggle("left");
      leftCount = false;
    }
  }

  function right() {
    if (rightCount) {
      return;
    }
    refs.listOverlay.classList.toggle("right");
    rightCount = true;
    if (centerCount) {
      refs.listOverlay.classList.toggle("center");
      centerCount = false;
    } else if (leftCount) {
      refs.listOverlay.classList.toggle("left");
      leftCount = false;
    }
  }

  function left() {
    if (leftCount) {
      return;
    }
    refs.listOverlay.classList.toggle("left");
    leftCount = true;
    if (centerCount) {
      refs.listOverlay.classList.toggle("center");
      centerCount = false;
    } else if (rightCount) {
      refs.listOverlay.classList.toggle("right");
      rightCount = false;
    }
  }
})();
