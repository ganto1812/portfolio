const checkboxes = document.querySelectorAll(`.inbox [type="checkbox"]`);

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("In Between!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

// checkboxes.addEventListener("click", function() {
//   console.log(this);
// });
