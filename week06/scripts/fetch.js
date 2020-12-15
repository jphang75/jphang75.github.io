function GetBookings () {
    let url = "https://api.sheety.co/5ed1058f5a3d217f25701ff8f18f4b48/bookingApp/bookings"
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        console.log(json.bookings);
        let bookingList = document.getElementById("bookingList");
        bookingList.innerHTML = "";

        let jsonDIV = document.getElementById("json");
        jsonDIV.innerHTML = "";
        jsonDIV.innerHTML = json.bookings;
        
        for(let i =0; i < json.bookings.length;i++){
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPax = json.bookings[i].pax;
            let gId = json.bookings[i].id;

            bookingList.innerHTML += gId + "-" + gName + ", " +
            gEmail + ", pax:" + gPax + "<br>";
        }
    });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function(){
    GetBookings();
});