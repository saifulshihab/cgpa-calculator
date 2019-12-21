$(document).ready(function() {
  var e;
  $("#semester_select").change(function() {
    e = $("#semester_select").val();
    createForm(e);
  });
});

function createForm(m) {
  document.getElementById("calform").innerHTML = "";
  var i;
  var e;
  for (i = 0; i < m; i++) {
    var x = document.createElement("input");
    x.type = "text";
    x.name = "sgpa";
    x.placeholder = "Enter SGPA " + (i + 1) + "";
    x.setAttribute("class", "form-control");
    x.classList.add("mb-3");
    x.classList.add("sgpa");

    var y = document.createElement("input");
    y.type = "text";
    y.name = "credit";
    y.placeholder = "Enter semester " + (i + 1) + " Credit";
    y.setAttribute("class", "form-control");
    y.classList.add("mb-3");
    y.classList.add("credit");

    e = document.getElementById("calform");
    e.appendChild(x);
    e.appendChild(y);
  }
}
function cgpaCalculate() {
  var sgpa = document.getElementsByName("sgpa");
  var credit = document.getElementsByName("credit");
  var result1 = 0,
    result2 = 0;
  for (var i = 0; i < sgpa.length; i++) {
    result1 += parseFloat(sgpa[i].value) * parseFloat(credit[i].value);
    result2 += parseFloat(credit[i].value);
  }
  document.getElementById("result").innerHTML =
    "Your CGPA : " + parseFloat(result1 / result2).toFixed(2);
}
