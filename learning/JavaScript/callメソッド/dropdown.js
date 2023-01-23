document.addEventListener("DOMContentLoaded", function () {
  var nodelist = document.querySelectorAll(".dropdown-trigger");
  var elements = Array.prototype.slice.call(nodelist, 0);

  // Dropdownを開く処理
  elements.forEach(function (element) {
    var button = element.querySelector("button");
    var dropdown = element.parentNode;

    button.addEventListener("click", function (event) {
      dropdown.classList.add("is-active");
    });
  });

  // Dropdownを閉じる処理
  window.onclick = function (event) {
    elements.forEach(function (element) {
      var button = element.querySelector("button");
      var dropdown = element.parentNode;
      var menu = document.querySelector(
        "#" + button.getAttribute("aria-controls")
      );

      // 自身のTriggerButtonクリック時はMenuを閉じない
      if (event.target && element.contains(event.target)) {
        return;
      }

      if (event.target && !menu.contains(event.target)) {
        dropdown.classList.remove("is-active");
      }
    });
  };
});
