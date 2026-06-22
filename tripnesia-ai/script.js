function generateTrip(){

let destinationElement = document.getElementById("destination");

let destination =
destinationElement ?
destinationElement.value :
window.location.pathname.includes("bali") ? "Bali" :
window.location.pathname.includes("yogyakarta") ? "Yogyakarta" :
"Belitung";

let days = document.getElementById("days").value;
let budget = document.getElementById("budget").value;

document.getElementById("result").innerHTML = `
<h3>Your ${destination} Itinerary</h3>

<p><strong>Duration:</strong> ${days}</p>
<p><strong>Travel Style:</strong> ${budget}</p>

<ul>
<li>Day 1 – Arrival & Exploration</li>
<li>Day 2 – Main Attractions</li>
<li>Day 3 – Local Experiences</li>
</ul>
`;
}