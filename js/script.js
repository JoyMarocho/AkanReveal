let gender, date;
const form = document.getElementsByTagName("form")[0];

let akan_name = document.getElementById('akan-name');

// akan_name.innerHTML = "Joy"
const male_akan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const female_akan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Submit...");
    gender = form.elements["gender"].value;
    date = form.elements["date"].value;
    console.log(date)
    console.log(gender, date);
    // date = date.split("-");
    const d = new Date(date);
    day = d.getDay(d);
    // console.log(`day of week is ${d.getDay()}`);
    // const cc = parseInt(date[0].slice(0, 2));
    // const yy = parseInt(date[0].slice(2));

    // const mm = parseInt(date[1]);

    // const dd = parseInt(date[2]);

    // let day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;


    let akan;
    // day = Math.floor(day);
    if(gender === "male"){
        akan = male_akan[day]
    }
    else if(gender === "female"){
        akan = female_akan[day];
    }

    akan_name.innerHTML = akan;

    console.log(day);

    // console.log(cc, yy, mm, dd);


})