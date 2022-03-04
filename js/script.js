let gender, date;
const form = document.getElementsByTagName("form")[0];

let akan_name = document.getElementById('akan-name');

// akan_name.innerHTML = "Dave"

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Submit...");
    gender = form.elements["gender"].value;
    date = form.elements["date"].value;
    console.log(gender, date);
    date = date.split("-");
    console.log(date);

    const cc = parseInt(date[0].slice(0, 2));
    const yy = parseInt(date[0].slice(2));

    const mm = parseInt(date[1]);

    const dd = parseInt(date[2]);

    let day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

    day = Math.floor(day);


    console.log(day);

    console.log(cc, yy, mm, dd);


})