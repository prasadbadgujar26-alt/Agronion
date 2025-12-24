import { ref, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { db } from "./firebase.js";

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  const nameV = document.getElementById("name").value;
  const locationV = document.getElementById("location").value;
  const contactV = document.getElementById("contact").value;
  const wasteTypeV = document.getElementById("wasteType").value;
  const quantityV = document.getElementById("quantity").value;
  const deliveryTimeV = document.getElementById("deliveryTime").value;

  if (
    !nameV ||
    !locationV ||
    !contactV ||
    !wasteTypeV ||
    !quantityV ||
    !deliveryTimeV
  ) {
    alert("Please fill all fields ❗");
    return;
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

  // Reset form
  document.getElementById("wasteForm").reset();

  // Show success popup
  document.getElementById("successMessage").style.display = "flex";
  document.getElementById("blurScreen").style.display = "block";

  // Auto hide after 3 seconds
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("blurScreen").style.display = "none";
  }, 3000);
});




