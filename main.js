const steps = document.getElementsByClassName("step-items");
const backBtn = document.getElementById("back-btn");
const submitBtn = document.getElementById("submit");
const descriptionText = document.getElementById("descript");
let currentStepNumber = 1;
let setFinalBtn = false;

let stepDescriptions = [
  "Choose title",
  "Choose description content",
  "Are you happy now?",
  "Okay, we're done. Thanks for sending your data.",
];

const initiateApp = () => {
  steps[0].classList.add("active");
  descriptionText.textContent = stepDescriptions[0];
  //backBtn.style.display = "none";
};

initiateApp();

Array.from(steps).forEach((item, currentIndex) => {
  item.addEventListener("click", function () {
    if (currentIndex > 1 && !steps[1].classList.contains("active")) {
    } else if (currentIndex > 1 && steps[1].classList.contains("active")) {
      item.classList.add("active");
      descriptionText.textContent = stepDescriptions[2];
      submitBtn.textContent = "Yes, go ahead";
      backBtn.textContent = "No, go back";
      currentStepNumber = currentIndex;
      setFinalBtn = true;
    } else {
      if (
        currentIndex === 0 &&
        steps[currentIndex + 1].classList.contains("active")
      ) {
        currentStepNumber = currentIndex;
        steps[currentIndex + 1].classList.remove("active");
        steps[currentIndex + 2].classList.remove("active");
        descriptionText.textContent = stepDescriptions[0];
        backBtn.textContent = "Back";
        submitBtn.textContent = "Submit title";
        setFinalBtn = false;
      } else if (steps[currentIndex + 1].classList.contains("active")) {
        steps[currentIndex + 1].classList.remove("active");
        currentStepNumber = currentIndex;
        
      } else {
        item.classList.add("active");
        descriptionText.textContent = stepDescriptions[1];
        submitBtn.textContent = "Submit description";
        currentStepNumber = currentIndex;
      }
    }
  });
});

submitBtn.addEventListener("click", function () {
  if (setFinalBtn) {
    descriptionText.textContent = stepDescriptions[3];
    submitBtn.style.display = "none";
    backBtn.style.display = "none";
  } else if (currentStepNumber === 1) {
    steps[currentStepNumber].classList.add("active");
    descriptionText.textContent = stepDescriptions[currentStepNumber];
    submitBtn.textContent = "Submit description";
    currentStepNumber = currentStepNumber + 1;
  } else if (currentStepNumber === 2) {
    steps[currentStepNumber].classList.add("active");
    descriptionText.textContent = stepDescriptions[2];
    submitBtn.textContent = "Yes, go ahead";
    backBtn.textContent = "No, go back";
    setFinalBtn = true;
  }
});

backBtn.addEventListener("click", function () {
  if (currentStepNumber === 2) {
    steps[currentStepNumber].classList.remove("active");
    descriptionText.textContent = stepDescriptions[currentStepNumber - 1];
    submitBtn.textContent = "Submit description";
    backBtn.textContent = "Back";
    currentStepNumber = currentStepNumber - 1;
    setFinalBtn = false;
  } else if (currentStepNumber === 1) {
    steps[currentStepNumber].classList.remove("active");
    descriptionText.textContent = stepDescriptions[currentStepNumber - 1];
    submitBtn.textContent = "Submit title";
    backBtn.textContent = "Back";
  }
});
