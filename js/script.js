// Booking Form Submission Alert
function bookRide(event) {
  event.preventDefault();

  let name = document.getElementById("fullname").value;
  let pickup = document.getElementById("pickup").value;
  let destination = document.getElementById("destination").value;

  alert(
    "Booking Successful!\n\n" +
    "Name: " + name + "\n" +
    "Pickup: " + pickup + "\n" +
    "Destination: " + destination + "\n\n" +
    "RideMate will contact you shortly."
  );
}
