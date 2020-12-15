function GetBookings () {
    let url = "https://api.sheety.co/5ed1058f5a3d217f25701ff8f18f4b48/bookingApp/bookings"
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        console.log(json.bookings);
    });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function(){
    GetBookings();
});