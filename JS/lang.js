const tabelElement = document.getElementById('table');
tabelElement.addEventListener('click', removeItemFromCart);
// function Language (langSelected,rateLanguage)
// {
//   this.langSelected = langSelected;
//   this.rateLanguage= rateLanguage;

//   this.headerRander = function()
//   {



//     const tableRow2 = document.createElement('tr');
//     tabelElement.appendChild(tableRow2);
//     const tableData = document.createElement('td');
//     tableRow2.appendChild(tableData);

//     let buttonEl = document.createElement('button');
//     let expDetails =[this.langSelected,this.rateLanguage];
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
  langSelected.splice(event.target.name-1,1);
  rateLanguage.splice( event.target.name-1,1);
  newLanguage = new Language (langSelected,rateLanguage);
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
  tableHeader.textContent='Language';

  const tableHeader2 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader2);
  tableHeader2.textContent='Rate';

}

let langSelected = [];
let rateLanguage =[];
let newLanguage ;
let myForm = document.getElementById('langForm');
let formSection = document.getElementById('formSection');
let counterClick = 0;
myForm.addEventListener('submit',addNewLanguage);

function addNewLanguage(event)
{


  event.preventDefault();
  console.log(event.target.langSelected.value);
  counterClick++;
  if(counterClick<=1){
    table();
  }
  langSelected.push(event.target.langSelected.value);
  rateLanguage.push(event.target.rateLanguage.value);



  newLanguage = new Language (langSelected,rateLanguage);



  newLanguage.headerRander();
  //   newEducation.render();
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
        { let data= JSON.stringify(newLanguage);
          localStorage.setItem('Language',data);}
      } else {
        alert('please reconsidering your inputs');
      }
    }
    
  }

}

