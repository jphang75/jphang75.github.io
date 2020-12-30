function BookNow(guestName, guestEmail, guestDate, guestSlot, guestRemarks) {
    let url = 'https://api.sheety.co/5ed1058f5a3d217f25701ff8f18f4b48/bookingApp/bookings'
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            date: guestDate,
            timeslot: guestSlot,
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
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userDate = document.getElementById("userDate").value;
    let userSlot = document.getElementById("userSlot").value;
    let userRemarks = document.getElementById("userRemarks").value;

    BookNow(userName, userEmail, userDate, userSlot, userRemarks);
    });

  
});