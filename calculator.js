const calculate_btn = document.getElementById("cal-btn");

$(document).ready(function () {
  $("#checkb").hide();
  $("#semester_select").change(function () {
    const nof_semester = $("#semester_select").val();
    createForm(nof_semester);
    $("#checkb").show();
  });
});

const createForm = (s) => {
  document.getElementById("calform").innerHTML = "";
  let i;
  for (i = 0; i < s; i++) {
    const x = document.createElement("input");
    x.type = "text";
    x.placeholder = "SGPA " + (i + 1) + "";
    x.setAttribute("class", "sgpa");
    x.classList.add("mb-1");

    const y = document.createElement("input");
    y.type = "text";
    y.placeholder = "Credit " + (i + 1);
    y.setAttribute("class", "credit");
    y.classList.add("mb-1");

    const e = document.getElementById("calform");
    e.appendChild(x);
    e.appendChild(y);
  }
};
const cgpaCalculate = () => {
  const sgpa = document.querySelectorAll(".sgpa");
  const credit = document.querySelectorAll(".credit");
  let result1 = 0,
    result2 = 0;
  for (let i = 0; i < sgpa.length; i++) {
    if (sgpa[i].value == "" || credit[i].value == "") {
      alert("Fill all input box.");
      return;
    } else if (sgpa[i].value == "" && credit[i].value == "") {
      alert("Fill all input box.");
      return;
    } else if (!+sgpa[i].value || !+credit[i].value) {
      alert("Invalid input!");
      return;
    } else {
      result1 += parseFloat(sgpa[i].value) * parseFloat(credit[i].value);
      result2 += parseFloat(credit[i].value);
      document.getElementById("result").innerHTML =
        "Your CGPA : " + parseFloat(result1 / result2).toFixed(2);
    }
  }
};

document.getElementById("diustd").onclick = function () {
  let credit = document.querySelectorAll(".credit");
  let cdit = ["11", "13", "13", "12", "14", "13", "13", "14", "14", "15", "7"];
  if (this.checked) {
    for (let i = 0; i < credit.length; i++) {
      credit[i].value = cdit[i];
    }
  } else {
    for (let i = 0; i < credit.length; i++) {
      credit[i].value = "";
    }
  }
};

calculate_btn.addEventListener("click", cgpaCalculate);
