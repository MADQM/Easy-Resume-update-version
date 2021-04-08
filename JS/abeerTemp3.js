let info;
let edu;
let exp;
let skill;
let lang;
// let eddu=[];
function loadPersonality() {
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Personality(normalObject);
  console.log(info);
}
function loadEducation() {
  const normalObject = JSON.parse(localStorage.getItem('Education')) || [];
  edu = new Education(normalObject);
  console.log(edu);
}
function loadExperiance() {
  const normalObject = JSON.parse(localStorage.getItem('Experiance')) || [];
  exp = new Experiance(normalObject);
  console.log(exp);
}
function loadSkills() {
  const normalObject = JSON.parse(localStorage.getItem('Skills')) || [];
  skill = new Skills(normalObject);
  console.log(skill);
}
function loadLanguage() {
  const normalObject = JSON.parse(localStorage.getItem('Language')) || [];
  lang = new Language(normalObject);
  console.log(lang);
}

// loadPersonality();
// loadEducation();
// loadExperiance();
// loadSkills();
// loadLanguage();
// console.log(info.getname());
// console.log(edu.getEduname().unName[0]);
// console.log(exp.getExpname());
// console.log(skill.getSkillname());
// console.log(lang.getLangname());
// console.log(info.getname());



// let major = document.getElementById('currentllyMajor');
// major.textContent=edu.getEduname().unName;
/*
the Id in HTML :
fullName
currentllyMajor
aboutMe
bDate
eMail
telephone
localAddress

eduMajor1
eduUN1
eduGraduate1

*/
function showPersonalityInformation() {
  loadPersonality();

  let fullName = document.getElementById('fullName');
  fullName.textContent = ` ${info.getname().firstName} ${info.getname().lastName}`;
  let birthDate = document.getElementById('bDate');
  birthDate.textContent = `${info.getname().bDate}`;
  let emailAddress = document.getElementById('eMail');
  emailAddress.textContent = `${info.getname().eMail}  `;
  let telephone = document.getElementById('telephone');
  telephone.textContent = `${info.getname().telephonePersonal}  `;
  let localAddress = document.getElementById('localAddress');
  localAddress.textContent = `${info.getname().locAddress}  `;
}



function showEducationalInformation() {

  loadEducation();
  let currentllyMajor = document.getElementById('currentllyMajor');
  currentllyMajor.textContent = edu.getEduname().unMajor[0];



  let eduUN1 = document.getElementById('eduUN1');
  eduUN1.textContent = edu.getEduname().unName[0];
  let eduUN2 = document.getElementById('eduUN2');
  eduUN2.textContent = edu.getEduname().unName[1];
  let eduUN3 = document.getElementById('eduUN3');
  eduUN3.textContent = edu.getEduname().unName[2];

  let eduMajor1 = document.getElementById('eduMajor1');
  eduMajor1.textContent = edu.getEduname().unMajor[0];
  let eduMajor2 = document.getElementById('eduMajor2');
  eduMajor2.textContent = edu.getEduname().unMajor[1];
  let eduMajor3 = document.getElementById('eduMajor3');
  eduMajor3.textContent = edu.getEduname().unMajor[2];


  let eduGraduate1 = document.getElementById('eduGraduate1');
  eduGraduate1.textContent = edu.getEduname().yearOfGraduate[0];
  let eduGraduate2 = document.getElementById('eduGraduate2');
  eduGraduate2.textContent = edu.getEduname().yearOfGraduate[1];
  let eduGraduate3 = document.getElementById('eduGraduate3');
  eduGraduate3.textContent = edu.getEduname().yearOfGraduate[2];




}

// console.log(exp.getExpname().orgName[0]);
function showExperianceInformation() {

  loadExperiance();















  let exp1 = document.getElementById('exp1');
  exp1.textContent = `${exp.getExpname().tiJob[0]} `;
  let exp2 = document.getElementById('exp2');
  exp2.textContent = `${exp.getExpname().tiJob[1]} `;
  let exp3 = document.getElementById('exp3');
  exp3.textContent = `${exp.getExpname().tiJob[2]} `;


  let expOrg1 = document.getElementById('expOrg1');
  expOrg1.textContent = exp.getExpname().orgName[0];
  let expOrg2 = document.getElementById('expOrg2');
  expOrg2.textContent = exp.getExpname().orgName[1];
  let expOrg3 = document.getElementById('expOrg3');
  expOrg3.textContent = exp.getExpname().orgName[2];


  let expStartAndFinish1 = document.getElementById('expStartAndFinish1');
  expStartAndFinish1.textContent = ` ${exp.getExpname().starAt[0]} /     ${exp.getExpname().finishAt[0]}`;
  let expStartAndFinish2 = document.getElementById('expStartAndFinish2');
  expStartAndFinish2.textContent = ` ${exp.getExpname().starAt[1]} /  ${exp.getExpname().finishAt[1]}`;
  let expStartAndFinish3 = document.getElementById('expStartAndFinish3');
  expStartAndFinish3.textContent = ` ${exp.getExpname().starAt[2]} /     ${exp.getExpname().finishAt[2]}`;


}

function showSkillsInformation() {

  loadSkills();
  let skillsfather = document.getElementById('skillsfather');
  skillsfather.setAttribute('class', 'col-md-6');





  for (let i = 0; i < skill.getSkillname().skillName.length; i++) {

    let div1 = document.createElement('div');
    let span = document.createElement('span');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div1.setAttribute('class', 'mb-3');
    span.setAttribute('class', 'fw-bolder');
    div2.setAttribute('class', 'progress my-2 rounded');
    div2.setAttribute('style', 'height: 20px');
    div3.setAttribute('class', 'progress-bar bg-info');
    div3.setAttribute('style', 'width: 95%');
    let nameOfSkill = skill.getSkillname().skillName[i];
    let tagOfSpan = '<span  class="fw-bolder">' + nameOfSkill + '</span>  ';
    // div3.setAttribute ('class' , 'progress-bar bg-info' );
    div3.setAttribute('role', 'progressbar');
    span.innerHTML = tagOfSpan;
    skillsfather.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div2.appendChild(div3);






  }


}

function showLanguageInformation() {
  loadLanguage();
  let skillsfather = document.getElementById('skillsfather');
  skillsfather.setAttribute('class', 'col-md-6');

  // console.log(lang.getLangname().langSelected[i]);
  for (let i = 0; i < lang.getLangname().langSelected.length; i++) {

    let div1 = document.createElement('div');
    let span = document.createElement('span');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div1.setAttribute('class', 'mb-3');
    span.setAttribute('class', 'fw-bolder');
    div2.setAttribute('class', 'progress my-2 rounded');
    div2.setAttribute('style', 'height: 20px');
    div3.setAttribute('class', 'progress-bar bg-secondary');
    div3.setAttribute('style', 'width: 95%');
    let nameOfLanguage = lang.getLangname().langSelected[i];
    let tagOfSpan = '<span  class="fw-bolder">' + nameOfLanguage + '</span>  ';
    // div3.setAttribute ('class' , 'progress-bar bg-info' );
    div3.setAttribute('role', 'progressbar');
    span.innerHTML = tagOfSpan;
    skillsfather.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div2.appendChild(div3);






  }


}


showPersonalityInformation();
showEducationalInformation();
showExperianceInformation();
showSkillsInformation();
showLanguageInformation();

