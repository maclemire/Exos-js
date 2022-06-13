let el = document.querySelector("#validate");
el.onclick = function () {
  let elInput1 = document.getElementById("num1").value;
  let elInput2 = document.getElementById("num2").value;
  console.log("elInput1:", typeof Number(elInput1));
  console.log("elInput2:", typeof Number(elInput2));

  let total = Number(elInput1) + Number(elInput2);

  console.log("Total :", total);

  if (elInput1 == "" && elInput2 == "") {
    document.querySelector("#error1").innerHTML = "*Obligatoire";
    document.querySelector("#error2").innerHTML = "*Obligatoire";
  } else if (elInput1 == "") {
    document.querySelector("#error1").innerHTML = "*Obligatoire";
    document.querySelector("#error2").innerHTML = "";
  } else if (elInput2 == "") {
    document.querySelector("#error2").innerHTML = "*Obligatoire";
    document.querySelector("#error1").innerHTML = "";
  } else {
    document.getElementById("result").textContent = total;
    document.querySelector("#error1").innerHTML = "";
    document.querySelector("#error2").innerHTML = "";
  }

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
};

