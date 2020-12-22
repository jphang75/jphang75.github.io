function BookNow(guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/5ed1058f5a3d217f25701ff8f18f4b48/bookingApp/bookings'
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(json =>{
        alert(json.booking.name + " added!");
    });
}


window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
    let userName = document.getElementById("guestName").value;
    let userEmail = document.getElementById("guestEmail").value;
    let userPax = document.getElementById("guestPax").value;
    let userRemarks = document.getElementById("guestRemarks").value;

    BookNow(userName, userEmail, userPax, userRemarks);
    });
});