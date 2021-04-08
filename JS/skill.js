
const tabelElement = document.getElementById('table');
tabelElement.addEventListener('click', removeItemFromCart);
// function Skills (skillName,placeOfLearning,starAt,finishAt)
// {
//   this.skillName = skillName;
//   this.placeOfLearning= placeOfLearning;
//   this.starAt=starAt;
//   this.finishAt=finishAt;
//   this.headerRander = function()
//   {



//     const tableRow2 = document.createElement('tr');
//     tabelElement.appendChild(tableRow2);
//     const tableData = document.createElement('td');
//     tableRow2.appendChild(tableData);

//     let buttonEl = document.createElement('button');
//     let expDetails =[this.skillName,this.placeOfLearning,this.starAt,this.finishAt];
//     tableData.appendChild(buttonEl);
//     buttonEl.textContent = 'X';

//     for (let i = 0; i < expDetails.length; i++){
//       buttonEl.setAttribute('type', 'submit');
//       buttonEl.setAttribute('name', 0);
//       const tableData1 = document.createElement('td');

//       tableRow2.appendChild(tableData1);



//       tableData1.textContent=expDetails[i];

//     }



//   };
// }

let counterConfirm = 0;

function removeItemFromCart(event)
{
  // tabelElement.deleteRow(event.target.name);
  let row = document.getElementById(`row${event.target.name}`);
  row.parentNode.removeChild(row);
  skillName.splice(event.target.name-1,1);
  placeOfLearning.splice( event.target.name-1,1);
  starAt.splice( event.target.name-1,1);
  finishAt.splice( event.target.name-1,1);
  newSkills = new Skills (skillName,placeOfLearning,starAt,finishAt);
}
const section = document.getElementById('formSection');
const articleElement = document.createElement('article');
section.appendChild(articleElement);


function table()
{


  articleElement.appendChild(tabelElement);
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);
  const tableHeader5 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader5);
  tableHeader5.textContent='Remove';
  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);
  tableHeader.textContent='Skill Name';

  const tableHeader2 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader2);
  tableHeader2.textContent='Place of The Learning The Skill';
  const tableHeader3 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader3);
  tableHeader3.textContent='Start At';
  const tableHeader4 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader4);
  tableHeader4.textContent='Finish At';
}
let skillName = [];
let placeOfLearning = [];
let starAt = [];
let finishAt = [];
let newSkills ; 

let myForm = document.getElementById('skillForm');
let formSection = document.getElementById('formSection');
let counterClick = 0;
myForm.addEventListener('submit',addNewSkill);

function addNewSkill(event)
{


  event.preventDefault();
  counterClick++;
  if(counterClick<=1){
    table();
  }
  skillName.push(event.target.skillName.value);
  placeOfLearning.push(event.target.placeOfLearning.value);
  starAt.push(event.target.starAt.value);
  finishAt.push(event.target.finishAt.value);


  newSkills = new Skills (skillName,placeOfLearning,starAt,finishAt);
  newSkills.headerRander();
  //   newEducation.render();
  // let data= JSON.stringify(newSkills);
  // localStorage.setItem('Skills',data);
  myForm.reset();
  let confirmWarning = document.getElementById('connfirm');
  let connnfirm = document.getElementById('connnfirm');
  confirmWarning.addEventListener('submit',warningConfirm);
  function warningConfirm()
  {
    counterConfirm++;
    if(counterConfirm === 1 )
    {
      let confirmm = confirm('Are You Sure ?');
      if (confirmm === true) {
        { let data= JSON.stringify(newSkills);
          localStorage.setItem('Skills',data);}
      } else {
        alert('please reconsidering your inputs');
      }
    }
  }
}
