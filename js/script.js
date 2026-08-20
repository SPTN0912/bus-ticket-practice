const searchForm = document.getElementById("searchForm");
const busResults = document.getElementById("busResults");

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;

    busResults.innerHTML = `
        <h3>Available Buses</h3>

        <div class="bus-card">

            <h4>${from} → ${to}</h4>

            <p>Date: ${date}</p>

            <p>Departure: 8:00 AM</p>

            <p>Price: Rs. 500</p>

            <button onclick="bookBus('${from}', '${to}', '${date}', '8:00 AM')">
                Book Now
            </button>

        </div>

        <div class="bus-card">

            <h4>${from} → ${to}</h4>

            <p>Date: ${date}</p>

            <p>Departure: 10:00 AM</p>

            <p>Price: Rs. 550</p>

            <button onclick="bookBus('${from}', '${to}', '${date}', '10:00 AM')">
                Book Now
            </button>

        </div>
    `;
});
function bookBus(from, to, date, time) {

    const name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    const booking = {
        name: name,
        from: from,
        to: to,
        date: date,
        time: time
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking successful!");

    displayBookings();
}
function displayBookings() {

    const bookingList = document.getElementById("bookingList");

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {

        bookingList.innerHTML = "<p>No bookings yet.</p>";

        return;
    }

    bookingList.innerHTML = "";

    bookings.forEach(function(booking, index) {

        bookingList.innerHTML += `
            <div class="booking-card">

                <h4>Booking ${index + 1}</h4>

                <p>Name: ${booking.name}</p>

                <p>Route: ${booking.from} → ${booking.to}</p>

                <p>Date: ${booking.date}</p>

                <p>Time: ${booking.time}</p>

            </div>
        `;
    });
}

displayBookings();