const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

// Live text update with smooth transition
inputField.addEventListener("keyup", () => {
  outputField.classList.remove("fade-in");

  // Trigger reflow to restart animation
  void outputField.offsetWidth;

  outputField.classList.add("fade-out");

  setTimeout(() => {
    outputField.innerHTML = inputField.value || "Output";
    outputField.classList.remove("fade-out");
    outputField.classList.add("fade-in");
  }, 200);
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = outputField.innerHTML;

    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = text.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = text.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      outputField.innerHTML =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      outputField.style.fontWeight = "900";
    } else if (btn.classList.contains("italic")) {
      outputField.style.fontStyle = "italic";
    } else if (btn.classList.contains("underline")) {
      outputField.style.textDecoration = "underline";
    }

    // Re-trigger animation
    outputField.classList.remove("fade-in");
    void outputField.offsetWidth;
    outputField.classList.add("fade-in");
  });
});
