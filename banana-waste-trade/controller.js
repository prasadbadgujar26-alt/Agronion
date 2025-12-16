import { ref, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { db } from "./firebase.js";

document.getElementById("submit").onclick = function () {
  const nameV = document.getElementById("name").value;
  const locationV = document.getElementById("location").value;
  const contactV = document.getElementById("contact").value;
  const wasteTypeV = document.getElementById("wasteType").value;
  const quantityV = document.getElementById("quantity").value;
  const deliveryTimeV = document.getElementById("deliveryTime").value;

  if (
    nameV === "" ||
    locationV === "" ||
    contactV === "" ||
    wasteTypeV === "" ||
    quantityV === "" ||
    deliveryTimeV === ""

) {
    alert("Please fill all fields❗");
    return;     // ⛔ stops here → data NOT inserted
}



  const newRef = push(ref(db, "users"));
  set(newRef, { 
    name: nameV, 
    location: locationV,
    contact: contactV,
    wasteType: wasteTypeV,
    quantity: quantityV,
    deliveryTime: deliveryTimeV,

 });


  document.getElementById("name").value = "";
  document.getElementById("location").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("wasteType").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("deliveryTime").value = "";

  document.getElementById("successMessage").style.display = "flex";
  document.getElementById("blurScreen").style.display = "block";
}

document.getElementById("menu").onclick = function () {

  document.getElementById("sidebar").style.display = "flex";

}


