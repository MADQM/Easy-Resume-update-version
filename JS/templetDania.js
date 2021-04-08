window.onload = function () {
  document.getElementById('download')
    .addEventListener('click', () => {
      const downloadPdf = this.document.getElementById('downloadPdf');
      console.log(downloadPdf);
      console.log(window);
      let opt = {
        margin:.05,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(downloadPdf).set(opt).save();
    });
};

// console.log(localStorage.getItem('Experiance'));
// console.log(localStorage.getItem('Education'));
// console.log(localStorage.getItem('Experiance'));
// console.log(localStorage.getItem('personality'));
// console.log(localStorage.getItem('Skills'));
// console.log(localStorage.getItem('Language'));



let education=JSON.parse(localStorage.getItem('Education'));
let experiance=JSON.parse(localStorage.getItem('Experiance'));
let personality=JSON.parse(localStorage.getItem('personality'));
let skills=JSON.parse(localStorage.getItem('Skills'));
let languges=JSON.parse(localStorage.getItem('Language'));

let usern=document.getElementById('username');
usern.innerHTML=personality.firstName+ ' '+ personality.lastName;

let phone=document.getElementById('phone');
phone.innerHTML='Phone Number:'+personality.telephonePersonal;

let email=document.getElementById('email');
email.innerHTML='Email:'+personality.eMail;

let addres=document.getElementById('add1');
addres.innerHTML='Adress:'+personality.locAddress;
let aboutMe=document.getElementById('me');
aboutMe.innerHTML='I was born in:'+' '+personality.bDate+' '+personality.bioInfo;

// console.log(education.unMajor.length)


for(let i=0;i<education.unMajor.length;i++){
  let edu=document.getElementById('edu');

  const liEl=document.createElement('li');
  edu.appendChild(liEl);

  liEl.innerHTML=education.unName[i]+' '+education.unMajor[i]+' '+education.yearOfGraduate[i]+' '+education.unDegree[i];
}

for(let i=0;i<experiance.tiJob.length;i++){

  let exp=document.getElementById('exp');

  let liEl2=document.createElement('li');
  exp.appendChild(liEl2);
  liEl2.innerHTML=experiance.tiJob+' '+experiance.orgName+' ' +experiance.starAt+' '+experiance.finishAt;
}


for(let i=0;i<skills.starAt.length;i++){

  let skil=document.getElementById('skill');
  let liEl3=document.createElement('li');
  skil.appendChild(liEl3);
  liEl3.innerHTML=skills.skillName+' '+skills.placeOfLearning+' '+skills.starAt+' '+skills.finishAt;
}
for(let i=0;i<languges.langSelected.length;i++){

  let lan=document.getElementById('lan');
  let liEL4=document.createElement('li');
  lan.appendChild(liEL4);
  liEL4.innerHTML=languges.langSelected+' '+languges.rateLanguage;
}





// console.log(experiance.orgName);
// let x=document.getElementById('username');
// x.textContent=experiance.orgName;
