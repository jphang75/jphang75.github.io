function GetBookings () {
    let url = "https://api.sheety.co/5ed1058f5a3d217f25701ff8f18f4b48/bookingApp/bookings"
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        //console.log(json.bookings);
        let bookingList = document.getElementById("booking-list");
        let bookingIds = [];
        
        for(let i =0; i < json.bookings.length;i++){
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPax = json.bookings[i].pax;
            let gId = json.bookings[i].id;
            let gRemarks = json.bookings[i].remarks;
            let buttonId = "delete" + gId;

            let row = bookingList.insertRow(bookingList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(0).innerHTML = gName;
            row.insertCell(0).innerHTML = gEmail;
            row.insertCell(0).innerHTML = gPax;
            row.insertCell(0).innerHTML = gRemarks;
            row.insertCell(0).innerHTML = "<button id'" + buttonId + "' class='btn btn-dange'>Delete</button>";

            bookingIds.push(buttonId);

        }

        for(let j =0; j < bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click", function(){
                let theId = bookingIds[j].replace("delete", "");
                alert(theId);
            });
        }
    });
}

window.addEventListener("load", function() {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
    })