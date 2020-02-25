const buttons = document.querySelectorAll("button");

function createRipple(e) {
  const circle = document.createElement("span");
  circle.classList.add("ripple");
  this.appendChild(circle);

  const d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + "px";
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
  circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";
}

Array.prototype.slice.call(buttons).forEach(function(btn) {
  btn.addEventListener("click", createRipple);
  btn.addEventListener("webkitAnimationEnd", function(e) {
    if (e.animationName === "ripple" && e.target) {
      e.target.remove();
    }
  });
  btn.addEventListener("animationend", function(e) {
    if (e.animationName === "ripple" && e.target) {
      e.target.remove();
    }
  });
});
