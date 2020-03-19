$(document).ready(function() {
  $("#checkb").hide();
  var e;
  $("#semester_select").change(function() {
    e = $("#semester_select").val();
    createForm(e);
    $("#checkb").show();
  });
});

function createForm(m) {
  document.getElementById("calform").innerHTML = "";
  var i;
  var e;
  for (i = 0; i < m; i++) {
    var x = document.createElement("input");
    x.type = "text";
    x.id = "sgpa";
    x.name = "sgpa";
    x.placeholder = "SGPA " + (i + 1) + "";
    x.setAttribute("class", "inputf");
    x.classList.add("mb-1");
    x.classList.add("sgpa");

    var y = document.createElement("input");
    y.type = "text";
    y.name = "credit";
    y.id = "credit";
    y.placeholder = "Credit " + (i + 1);
    y.setAttribute("class", "inputf");
    y.classList.add("mb-1");
    y.classList.add("credit");

    e = document.getElementById("calform");
    e.appendChild(x);
    e.appendChild(y);
  }
  var chk = document.createElement("input");
  chk.type = "checkbox";
  chk.setAttribute("data-toggle", "toggle");
}
function cgpaCalculate() {
  var sgpa = document.getElementsByName("sgpa");
  var credit = document.getElementsByName("credit");
  var result1 = 0,
    result2 = 0;
  for (var i = 0; i < sgpa.length; i++) {
    if (sgpa[i].value == "" || credit[i].value == "") {
      alert("Fill all input box.");
      break;
    } else if (sgpa[i].value == "" && credit[i].value == "") {
      alert("Fill all input box.");
      break;
    } else {
      result1 += parseFloat(sgpa[i].value) * parseFloat(credit[i].value);
      result2 += parseFloat(credit[i].value);
      document.getElementById("result").innerHTML =
    "Your CGPA : " + parseFloat(result1 / result2).toFixed(2);
    }
  }  
}

function btn() {
  var credit = document.getElementsByName("credit");
  var cdit = ["11", "13", "13", "12", "14", "13", "13", "13"];
  for (var i = 0; i < credit.length; i++) {
    credit[i].value = cdit[i];
    console.log(cdit[i]);
  }
  alert("sdsdsd");
}

document.getElementById("diustd").onclick = function() {
  let credit = document.getElementsByName("credit");
  let cdit = ["11", "13", "13", "12", "14", "13", "13", "13", "14", "14", "11"];
  if ( this.checked ) {
    for (let i = 0; i < credit.length; i++) {
      credit[i].value = cdit[i];     
    }
  } else {
    for (let i = 0; i < credit.length; i++) {
      credit[i].value = '';     
    }
  }
};