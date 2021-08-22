document.getElementById("add-button").addEventListener("click", function () {
    const headingFieldOne = document.getElementById("heading-field-one");
    const headingOneText = headingFieldOne.innerText;
    let headingOneValue = parseInt(headingOneText);
    headingOneValue = headingOneValue + 1;
    headingFieldOne.innerText = headingOneValue;
    //---------------------------------------------------------------------
  
    if (headingOneValue == 5) {
      document.getElementById("add-button").setAttribute("disabled", true);
      document.getElementById("heading-field-one").style.backgroundColor =
        "#c5c5c5";
      const headingFieldTwo = document.getElementById("heading-field-two");
      let headingTwoText = headingFieldTwo.innerText;
      headingTwoText = "Task Completed";
      headingFieldTwo.innerText = headingTwoText;
    }
  });
  
  document.getElementById("reset-button").addEventListener("click", function () {
    parseInt((document.getElementById("heading-field-one").innerText = "0"));
    parseInt((document.getElementById("heading-field-two").innerText = ""));
    document.getElementById("add-button").removeAttribute("disabled", true);
  });
  