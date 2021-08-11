'use strict';

// let headerArr = ['Donator Name ', 'Donation Amount', 'age'];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let DonationArr = [];


function Donation(donatorName, donationAmount) {

  this.donatorName = donatorName;
  this.donationAmount = donationAmount;
  this.minAge = 20;
  this.MaxAge = 60;
  this.age = 0;
  DonationArr.push(this);
}

Donation.prototype.randomNumber = function () {
  this.age = getRndInteger(this.minAge, this.MaxAge);


};

// console.log(getRndInteger(20,60));




let table = document.getElementById('table');
let headerrow = document.createElement('th');
table.appendChild(headerrow);
headerrow.textContent = 'Donator Name';
let headerrow1 = document.createElement('th');
table.appendChild(headerrow1);
headerrow1.textContent = 'Donation Amount';
let headerrow2 = document.createElement('th');
table.appendChild(headerrow2);
headerrow2.textContent = 'age';

// let Neww = new Donation('ahmad', '100');
// console.log(Neww);




let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  //   console.log(event);
  let name = event.target.donationName.value;
  let donationAmount1 = event.target.donationAmount.option1;
  let donationAmount2 = event.target.donationAmount.option2;
  let donationAmount3 = event.target.donationAmount.option3;
  //   console.log(DonationArr);
  updateStorage();


}


Donation.prototype.render = function () {
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);


  let dataRow1 = document.createElement('td');
  dataRow.appendChild(dataRow1);
  dataRow1.textContent = this.donatorName;
  let dataRow2 = document.createElement('td');
  dataRow.appendChild(dataRow2);
  dataRow2.textContent =this.donationAmount;

  let dataRow3 = document.createElement('td');
  dataRow.appendChild(dataRow3);
  dataRow3.textContent = this.age;







};
for (let i = 0; i < DonationArr.length; i++) {

  DonationArr[i].render();
}

function updateStorage(){
  let StorageArr=JSON.stringify(DonationArr);
  localStorage.setItem('DonationInfo',DonationArr);

}


function storage (){

  let data=localStorage.getItem('DonationInfo');
  let parrsArr=JSON.parse(data);


  if(parrsArr !==null)
  {
    for (let i = 0; i < parrsArr.length; i++) {

      new Donation (parrsArr[i].donatorName,parrsArr[i].donationAmount[i],parrsArr[i].age);

    }

  }
}



storage();

