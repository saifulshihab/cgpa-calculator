const calculate_btn = document.getElementById("cal-btn");
const c_form = document.getElementById("calform");
const selected_semester = document.getElementById("semester_select");
const lightThemeCheckBtn = document.getElementById("lightThemeCheck");
const darkThemeCheckBtn = document.getElementById("darkThemeCheck");
const setTheme = localStorage.getItem("theme");

selected_semester.addEventListener("change", () => {
  const nof_semester = selected_semester.value;
  createForm(nof_semester);
  document.getElementById("checkb").classList.add("visible");
});

const createForm = s => {
  c_form.innerHTML = "";
  document.getElementById("diustd").checked = false;
  document.getElementById("result").innerHTML = "";
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

    c_form.appendChild(x);
    c_form.appendChild(y);
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
    } else if (+sgpa[i].value > 4) {
      alert("SGPA can't be greater then 4!");
      return;
    } else {
      result1 += parseFloat(sgpa[i].value) * parseFloat(credit[i].value);
      result2 += parseFloat(credit[i].value);
      document.getElementById("result").innerHTML =
        "Your CGPA : " + parseFloat(result1 / result2).toFixed(2);
    }
  }
};

lightThemeCheckBtn.addEventListener("click", () => {
  swapStyleSheet("app.css");
});
darkThemeCheckBtn.addEventListener("click", () => {
  swapStyleSheet("darkmode.css");
});

const swapStyleSheet = selectedSheet => {
  document.getElementById("appStyleSheet").href = selectedSheet;
  localStorage.setItem("theme", selectedSheet);
};

if (setTheme == null) {
  swapStyleSheet("app.css");
} else {
  swapStyleSheet(setTheme);
}

document.getElementById("diustd").onclick = function() {
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

setTimeout(() => {
  document.querySelector(".lower-third").classList.toggle("visible");
}, 3000);
document.getElementById("lower-close-btn").addEventListener("click", () => {
  document.querySelector(".lower-third").classList.remove("visible");
});

calculate_btn.addEventListener("click", cgpaCalculate);
