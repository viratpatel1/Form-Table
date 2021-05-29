var first = document.getElementById('validationDefault01').value;
var last = document.getElementById('validationDefault02').value;
var addd = document.getElementById('inputAddress').value;
var city = document.getElementById('validationDefault03').value;
var state  = document.getElementById('validationDefault04').value;
var pin = document.getElementById('validationDefault05').value;
var male = document.getElementById('M_gender').value;
var female = document.getElementById('F_gender').value;
// alert(female,male);
var btnClear = document.querySelector('button');
var inputs = document.querySelectorAll('input');

var entry = document.getElementById('entry');
entry.addEventListener("click",display);


//Will Call this Function when Submit is Clicked
var row = 1;
function display(event){
    var first = document.getElementById('validationDefault01').value;
    var last = document.getElementById('validationDefault02').value;
    var addd = document.getElementById('inputAddress').value;
    var city = document.getElementById('validationDefault03').value;
    var state  = document.getElementById('validationDefault04').value;
    var pin = document.getElementById('validationDefault05').value;

    //If Field is Empty Give an Alert
    if((first && last && addd && city && state && pin) == ''){
        alert('Please Filled the Form Completely')
        event.preventDefault();

    }else{
        var detail  = document.getElementById('details');

        //To Create new Row when Button is press
        var NewRow = detail.insertRow(row);
    
        //To Create new cell when Button is press
        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        var cel5 = NewRow.insertCell(4);
        var cel6 = NewRow.insertCell(5);
        
        //To Put the Information in the cell.
        cel1.innerHTML = `${first} ${last}`;
        cel2.innerHTML = addd;
        cel3.innerHTML = city;
        cel4.innerHTML = state;
        cel5.innerHTML = pin;
        cel6.innerHTML = trans;
    
        row++;
        event.preventDefault();

    }
};

//To Check the gender
var trans = '';
function top1(value){
    trans = 'Male';

}
function top2(value){
    trans = 'Female';
}



//To Clear the field every time when button is pressed
btnClear.addEventListener('click',() => {
    inputs.forEach(input => input.value = '');
});


















// fetch("https://www.guvi.in/model/v2/verify-mobile.php", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,mr;q=0.8",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.guvi.in/dashboard",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "myData=%7B%22requestType%22%3A%22verifyAccount%22%2C%22authtoken%22%3A%22018b297211a3e036d61b0f6fcf21fd70bde03319f766920c0f8647ad36b34eb148a4b588363f32e1d8af83818638de7d82b9607338156276ad393bc0acda8294%22%7D",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// }).then(data => data.json())
// .josn(x => console.log(x))