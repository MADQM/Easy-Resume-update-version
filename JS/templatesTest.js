let info;
let edu;
let exp;
let skill;
let lang;

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


function showPersonalityInformation (){
  loadPersonality();

  let fullName = document.getElementById('fullName');
  fullName.textContent=` ${info.getname().firstName} ${info.getname().lastName}`;
  let birthDate = document.getElementById('bDate');
  birthDate.textContent = `${info.getname().bDate}`;
  let emailAddress = document.getElementById('eMail');
  emailAddress.textContent=`${info.getname().eMail}  `;
  let telephone = document.getElementById('telephone');
  telephone.textContent = `${info.getname().telephonePersonal}  `;
  let localAddress = document.getElementById('localAddress');
  localAddress.textContent = `${info.getname().locAddress}  `;
}



function showEducationalInformation()
{

  loadEducation();

  let eduFather = document.getElementById('eduFather');

  for (let i = 0; i <edu.getEduname().unName.length; i++) {
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');

    let div1 = document.createElement('div');
    let span = document.createElement('span');
    let div2 = document.createElement('div');

    div4.setAttribute('class', 'timeline-card timeline-card-primary card shadow-sm');
    div3.setAttribute('class', 'card-body');
    div1.setAttribute('class', 'h5 mb-1');
    span.setAttribute('class', 'text-muted h6');
    div2.setAttribute('class', 'text-muted text-small mb-2');
    div1.innerText = edu.getEduname().unName[i];
    span.innerHTML =edu.getEduname().unMajor[i];
    let date = edu.getEduname().yearOfGraduate[i];
    div2.innerHTML=date;

    eduFather.appendChild(div4);
    div4.appendChild(div3);

    div3.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div3.appendChild(div2);






  }



}


function showExperianceInformation ()
{

  loadExperiance();

  let expFather = document.getElementById('expFather');

  for (let i = 0; i < exp.getExpname().orgName.length; i++) {
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div1 = document.createElement('div');
    let span = document.createElement('span');
    let div2 = document.createElement('div');
    div4.setAttribute('class', 'timeline-card timeline-card-primary card shadow-sm');
    div3.setAttribute('class', 'card-body');
    div1.setAttribute('class', 'h5 mb-1');
    span.setAttribute('class', 'text-muted h6');
    div2.setAttribute('class', 'text-muted text-small mb-2');

    div1.innerText = exp.getExpname().tiJob[i];
    span.innerHTML =exp.getExpname().orgName[i];
    let date = ` ${exp.getExpname().starAt[i]} /     ${exp.getExpname().finishAt[i]}`;
    div2.innerHTML=date;


    expFather.appendChild(div4);
    div4.appendChild(div3);
    div3.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div3.appendChild(div2);



  }


}

function showSkillsInformation ()
{

  loadSkills();

  loadLanguage();
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
    div3.setAttribute('role', 'progressbar');
    span.innerHTML = tagOfSpan;
    skillsfather.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div2.appendChild(div3);

  }


}

showPersonalityInformation ();
showEducationalInformation();
showExperianceInformation ();
showSkillsInformation ();
showLanguageInformation();
