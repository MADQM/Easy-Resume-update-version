'use strict';


window.onload = function () {
  document.getElementById('download').addEventListener('click', () => {
    event.preventDefault();
    const downloadPdf = this.document.getElementById('downloadPdf');
    // console.log(downloadPdf);
    // console.log(window);
    let opt = {
      margin:.005,
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(downloadPdf).set(opt).save();
  });
};
const colors = [
  '#DE354C',
  '#3C1874',
  '#283747',
  '#F3F3F3',
  '#B73225',
  '#004E7C',
  '#591COB',
  '#5C5F58',
  '#DCE1E3',
  '#DDAF94',
  '#E8CEBF',
  '#266150',
  '#4F4846',
  '#FDF8F5',
  '#12232E',
  '#007CC7',
  '#4DA8DA',
  '#203647',
  '#EEFBFB',
  '#202020',
  '#3F3F3F',
  '#707070',
  '#FFD6C',
  '#FFFFFF',
  '#164A41',
  '#4D774E',
  '#9DC88D',
  '#F1B24A',
  '#A3BCB6',
  '#39603D',
  '#3C403D',
  '#DADED4',
];
let colorIndex = 0 ; //to hold the random number for the index
function randomNumber(min, max)
{
  let random ;
  for(;;) //to loop untill the random number became not the same as the previous
  {
    random = Math.floor(Math.random()*(max-min)+min);
    if(colorIndex !==random ) //check if is it the same as the previous
      return random ;
  }
}

document.getElementById('font').addEventListener('change',function(){
  document.getElementsByClassName('leftSection')[0].style.fontSize= `${document.getElementById('font').value}px`;
  document.getElementsByClassName('rightSection')[0].style.fontSize= `${document.getElementById('font').value}px` ;
} );

//to check if the user clicked the change color button for the left section , so it will change the color
document.getElementById('changeColorLeft').addEventListener('click', function(){
  event.preventDefault();
  colorIndex = randomNumber(0, colors.length - 0.5) ;
  document.getElementsByClassName('leftSection')[0].style.backgroundColor = colors[colorIndex];
});

//to check if the user clicked the change font color button for the left section , so it will change the color
document.getElementById('changeFontColorLeft').addEventListener('click', function(){
  event.preventDefault();
  colorIndex = randomNumber(0, colors.length - 0.5) ;
  document.getElementsByClassName('leftSection')[0].style.color = colors[colorIndex];
});

//to check if the user clicked the change color button for the right section, so it will change the color
document.getElementById('changeColorRight').addEventListener('click', function(){
  event.preventDefault();
  colorIndex = randomNumber(0, colors.length - 0.5) ;
  document.getElementsByClassName('rightSection')[0].style.backgroundColor = colors[colorIndex];
});

//to check if the user clicked the change font color button for the right section, so it will change the color
document.getElementById('changeFontColorRight').addEventListener('click', function(){
  event.preventDefault();
  colorIndex = randomNumber(0, colors.length - 0.5) ;
  document.getElementsByClassName('rightSection')[0].style.color = colors[colorIndex];
});

//to get the input color value and assign it
document.getElementById('leftColorForm').addEventListener('click', function(){
  event.preventDefault();
  document.getElementsByClassName('leftSection')[0].style.backgroundColor = document.getElementById('custColorLeft').value;
  // document.getElementById('custColorLeft').value='';
  for(let i = 0 ; i<document.getElementsByClassName('rated').length ; i++)
  {
    document.getElementsByClassName('rated')[i].style.color=document.getElementById('custColorLeft').value;
  }
});

//to get the input color value and assign it
document.getElementById('leftFontColorForm').addEventListener('click', function(){
  event.preventDefault();
  document.getElementsByClassName('leftSection')[0].style.color = document.getElementById('custFontColorLeft').value;
  // document.getElementById('custFontColorLeft').value='';
});

//to get the input color value and assign it
document.getElementById('rightColorForm').addEventListener('click', function(){
  event.preventDefault();
  document.getElementsByClassName('rightSection')[0].style.backgroundColor = document.getElementById('custColorRight').value;
  // document.getElementById('custColorRight').value='';
});

//to get the input color value and assign it
document.getElementById('rightFontColorForm').addEventListener('click', function(){
  event.preventDefault();
  document.getElementsByClassName('rightSection')[0].style.color = document.getElementById('custFontColorRight').value;
  // document.getElementById('custFontColorRight').value='';
});


//to reset to default colors
document.getElementById('reset').addEventListener('click' , function(){
  document.getElementsByClassName('leftSection')[0].style.backgroundColor = '#FCB11C';
  document.getElementsByClassName('leftSection')[0].style.color = 'black';
  document.getElementsByClassName('rightSection')[0].style.backgroundColor = '#f5e0e042';
  document.getElementsByClassName('rightSection')[0].style.color = 'black';


});



////get the data from the form and put it into the resume :

let personalInfo ;
if(localStorage.getItem('personality')!='undefined' && localStorage.getItem('personality')!=null) //we check to make sure the local storage has data so, that will not make any problem
{
  personalInfo = JSON.parse(localStorage.getItem('personality'));
  document.getElementById('userName').innerHTML = personalInfo.firstName +' ' + personalInfo.lastName ;
  document.getElementById('bio').innerHTML = personalInfo.bioInfo ;
  document.getElementById('email').innerHTML = personalInfo.eMail;
  document.getElementById('phone').innerHTML = personalInfo.telephonePersonal; //locAddress
  document.getElementById('address').innerHTML = personalInfo.locAddress; //skillName
}
let education;
if(localStorage.getItem('Education')!='undefined' && localStorage.getItem('Education')!=null) //we check to make sure the local storage has data so, that will not make any problem
{
  education = JSON.parse(localStorage.getItem('Education'));
  //for education , we use loop becasue may we have more than education
  for(let i = 0 ; i < education.unMajor.length ; i++)
  {
    if(i > 3 ) //the number of majors I have in the template right now , we can change it later
      break;
    const majorId = `major${i+1}` ;
    const studyId = `study${i+1}` ;
    document.getElementById(majorId).innerHTML = education.unMajor[i];
    document.getElementById(studyId).innerHTML = education.unName[i] + ' graduated at ' + education.yearOfGraduate[i];
  }
}

let languages;
if(localStorage.getItem('Language')!='undefined' && localStorage.getItem('Language')!=null) //we check to make sure the local storage has data so, that will not make any problem
{
  languages = JSON.parse(localStorage.getItem('Language'));
  for(let i = 0 ; i < languages.langSelected.length ; i++)
  {
    if(i > 3 ) //the number of languages I have in the template right now , we can change it later
      break;
    const langId = `lang${i+1}`;
    const langLevelId = `lang${i+1}Level`;
    document.getElementById(langId).innerHTML = languages.langSelected[i] ;
    document.getElementById(langLevelId).innerHTML = languages.rateLanguage[i] ;
  }
}

let experience ;
if(localStorage.getItem('Experiance')!='undefined' && localStorage.getItem('Experiance')!=null) //we check to make sure the local storage has data so, that will not make any problem
{
  experience = JSON.parse(localStorage.getItem('Experiance'));
  //for experience , we use loop becasue may we have more than one experience
  for(let i = 0 ; i < experience.tiJob.length ; i++ )
  {
    if(i > 3 ) //the number of experiences I have in the template right now , we can change it later
      break;
    const expId = `exp${i+1}` ;
    document.getElementById(expId).innerHTML = experience.tiJob[i] + ' ' + experience.orgName[i] + ' ' + experience.starAt[i] + ' ' + experience.finishAt[i] ;
    if(i==(experience.tiJob.length-1))
      document.getElementById('userTitle').innerHTML = experience.tiJob[i];
  }

}

let skills ;
if(localStorage.getItem('Skills')!='undefined' && localStorage.getItem('Skills')!=null )
{
  skills = JSON.parse(localStorage.getItem('Skills'));
  //for skills , we use loop becasue may we have more than one skill
  for(let i = 0 ; i < skills.skillName.length ; i++)
  {
    if(i > 3 ) //the number of skills I have in the template right now , we can change it later
      break;
    const id = `skill${i+1}` ;
    document.getElementById(id).innerHTML = skills.skillName[i];

  }
}


//functions :

//once the user hover on this div , it will appear the edit and delete options
function hoverIn(editId, deleteId)
{
  const editEl = document.getElementById(editId);
  const deleteEl = document.getElementById(deleteId);
  editEl.style.display = 'inline';
  deleteEl.style.display = 'inline';
}

//once the user hover out from this div , it will disappear the edit and delete options
function hoverOut(editId , deleteId)
{
  const editEl = document.getElementById(editId);
  const deleteEl = document.getElementById(deleteId);
  editEl.style.display = 'none';
  deleteEl.style.display = 'none';
}

//to show the input box to let the user edit
function editFun(dataId, inputId)
{
  const dataEl = document.getElementById(dataId);
  const inputEl = document.getElementById(inputId);
  dataEl.style.display = 'none';
  inputEl.style.display = 'inline';

}

//to make the element disappear and it will look like it deleted
function deleteFun(dataId, inputId)
{
  const dataEl = document.getElementById(dataId);
  const inputEl = document.getElementById(inputId);
  dataEl.style.display='none';
  inputEl.style.display='none';
}

//to check if the user wrote in the input box and clicked enter
function changeName(event, dataId, inputId)
{
  const dataEl = document.getElementById(dataId);
  const inputEl = document.getElementById(inputId);
  if(event.code === 'Enter')
  {
    dataEl.textContent = inputEl.value;
    inputEl.style.display = 'none';
    dataEl.style.display = 'inline';
  }
}



//////to upload an image
document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){
  document.getElementById('imageLabel').style.display='inline';
  document.getElementById('userImg').style.display = 'inline';
});

document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function(){
  document.getElementById('imageLabel').style.display='none';
  document.getElementById('userImg').style.display = 'block';
});

let loadFile = function(event) {
  let image = document.getElementById('userImg');
  image.src = URL.createObjectURL(event.target.files[0]);
};

////////////////////////



/////for the user name field
//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){hoverIn('edit1', 'delete1');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function() {hoverOut('edit1', 'delete1');} );


//to check if the user click the edit or the delete option
document.getElementById('edit1').addEventListener('click', function(){editFun('userName', 'nameInput');});
document.getElementById('delete1').addEventListener('click', function(){deleteFun('userName', 'nameInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('nameInput').addEventListener('keyup', function(){changeName(event, 'userName', 'nameInput');} );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for the job title field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){hoverIn('edit2', 'delete2');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function() {hoverOut('edit2', 'delete2');} );


//to check if the user click the edit or the delete option
document.getElementById('edit2').addEventListener('click', function(){editFun('userTitle', 'titleInput');});
document.getElementById('delete2').addEventListener('click', function(){deleteFun('userTitle', 'titleInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('titleInput').addEventListener('keyup', function(){changeName(event, 'userTitle', 'titleInput');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for email field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseover', function(){hoverIn('edit3', 'delete3');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseout', function() {hoverOut('edit3', 'delete3');} );


//to check if the user click the edit or the delete option
document.getElementById('edit3').addEventListener('click', function(){editFun('email', 'emailInput');});
document.getElementById('delete3').addEventListener('click', function(){deleteFun('emailItem', 'emailInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('emailInput').addEventListener('keyup', function(){changeName(event, 'email', 'emailInput');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for phone field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseover', function(){hoverIn('edit4', 'delete4');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseout', function() {hoverOut('edit4', 'delete4');} );


//to check if the user click the edit or the delete option
document.getElementById('edit4').addEventListener('click', function(){editFun('phone', 'phoneInput');});
document.getElementById('delete4').addEventListener('click', function(){deleteFun('phoneItem', 'phoneInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('phoneInput').addEventListener('keyup', function(){changeName(event, 'phone', 'phoneInput');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for address field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseover', function(){hoverIn('edit5', 'delete5');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseout', function() {hoverOut('edit5', 'delete5');} );


//to check if the user click the edit or the delete option
document.getElementById('edit5').addEventListener('click', function(){editFun('address', 'addressInput');});
document.getElementById('delete5').addEventListener('click', function(){deleteFun('addressItem', 'addressInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('addressInput').addEventListener('keyup', function(){changeName(event, 'address', 'addressInput');} );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for linkedin field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseover', function(){hoverIn('edit6', 'delete6');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('contactPart')[0].addEventListener('mouseout', function() {hoverOut('edit6', 'delete6');} );


//to check if the user click the edit or the delete option
document.getElementById('edit6').addEventListener('click', function(){editFun('linkedin', 'linkedinInput');});
document.getElementById('delete6').addEventListener('click', function(){deleteFun('linkedinItem', 'linkedinInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('linkedinInput').addEventListener('keyup', function(){changeName(event, 'linkedin', 'linkedinInput');} );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for skill1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseover', function(){hoverIn('edit7', 'delete7');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseout', function() {hoverOut('edit7', 'delete7');} );


//to check if the user click the edit or the delete option
document.getElementById('edit7').addEventListener('click', function(){editFun('skill1', 'skill1Input');});
document.getElementById('delete7').addEventListener('click', function(){deleteFun('skill1', 'skill1Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('skill1Input').addEventListener('keyup', function(){changeName(event, 'skill1', 'skill1Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for skill 2 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseover', function(){hoverIn('edit8', 'delete8');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseout', function() {hoverOut('edit8', 'delete8');} );


//to check if the user click the edit or the delete option
document.getElementById('edit8').addEventListener('click', function(){editFun('skill2', 'skill2Input');});
document.getElementById('delete8').addEventListener('click', function(){deleteFun('skill2', 'skill2Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('skill2Input').addEventListener('keyup', function(){changeName(event, 'skill2', 'skill2Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for skill 3 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseover', function(){hoverIn('edit9', 'delete9');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseout', function() {hoverOut('edit9', 'delete9');} );


//to check if the user click the edit or the delete option
document.getElementById('edit9').addEventListener('click', function(){editFun('skill3', 'skill3Input');});
document.getElementById('delete9').addEventListener('click', function(){deleteFun('skill3', 'skill3Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('skill3Input').addEventListener('keyup', function(){changeName(event, 'skill3', 'skill3Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for skill 4 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseover', function(){hoverIn('edit10', 'delete10');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('skillsPart')[0].addEventListener('mouseout', function() {hoverOut('edit10', 'delete10');} );


//to check if the user click the edit or the delete option
document.getElementById('edit10').addEventListener('click', function(){editFun('skill4', 'skill4Input');});
document.getElementById('delete10').addEventListener('click', function(){deleteFun('skill4', 'skill4Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('skill4Input').addEventListener('keyup', function(){changeName(event, 'skill4', 'skill4Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for major 1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit11', 'delete11');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit11', 'delete11');} );


//to check if the user click the edit or the delete option
document.getElementById('edit11').addEventListener('click', function(){editFun('major1', 'major1Input');});
document.getElementById('delete11').addEventListener('click', function(){deleteFun('majorD1', 'major1Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('major1Input').addEventListener('keyup', function(){changeName(event, 'major1', 'major1Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for study 1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit12', 'delete12');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit12', 'delete12');} );


//to check if the user click the edit or the delete option
document.getElementById('edit12').addEventListener('click', function(){editFun('study1', 'study1Input');});
document.getElementById('delete12').addEventListener('click', function(){deleteFun('study1', 'study1Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('study1Input').addEventListener('keyup', function(){changeName(event, 'study1', 'study1Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for major 2 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit13', 'delete13');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit13', 'delete13');} );


//to check if the user click the edit or the delete option
document.getElementById('edit13').addEventListener('click', function(){editFun('major2', 'major2Input');});
document.getElementById('delete13').addEventListener('click', function(){deleteFun('majorD2', 'major2Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('major2Input').addEventListener('keyup', function(){changeName(event, 'major2', 'major2Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for study 1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit14', 'delete14');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit14', 'delete14');} );


//to check if the user click the edit or the delete option
document.getElementById('edit14').addEventListener('click', function(){editFun('study2', 'study2Input');});
document.getElementById('delete14').addEventListener('click', function(){deleteFun('study2', 'study2Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('study2Input').addEventListener('keyup', function(){changeName(event, 'study2', 'study2Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for major 3 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit15', 'delete15');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit15', 'delete15');} );


//to check if the user click the edit or the delete option
document.getElementById('edit15').addEventListener('click', function(){editFun('major3', 'major3Input');});
document.getElementById('delete15').addEventListener('click', function(){deleteFun('majorD3', 'major3Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('major3Input').addEventListener('keyup', function(){changeName(event, 'major3', 'major3Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for study 3 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit16', 'delete16');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit16', 'delete16');} );


//to check if the user click the edit or the delete option
document.getElementById('edit16').addEventListener('click', function(){editFun('study3', 'study3Input');});
document.getElementById('delete16').addEventListener('click', function(){deleteFun('study3', 'study3Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('study3Input').addEventListener('keyup', function(){changeName(event, 'study3', 'study3Input');} );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for major 4 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit17', 'delete17');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit17', 'delete17');} );


//to check if the user click the edit or the delete option
document.getElementById('edit17').addEventListener('click', function(){editFun('major4', 'major4Input');});
document.getElementById('delete17').addEventListener('click', function(){deleteFun('majorD4', 'major4Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('major4Input').addEventListener('keyup', function(){changeName(event, 'major4', 'major4Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for study 4 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseover', function(){hoverIn('edit18', 'delete18');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementsByClassName('educationPart')[0].addEventListener('mouseout', function() {hoverOut('edit18', 'delete18');} );


//to check if the user click the edit or the delete option
document.getElementById('edit18').addEventListener('click', function(){editFun('study4', 'study4Input');});
document.getElementById('delete18').addEventListener('click', function(){deleteFun('study4', 'study4Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('study4Input').addEventListener('keyup', function(){changeName(event, 'study4', 'study4Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for experience 1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('expPart').addEventListener('mouseover', function(){hoverIn('edit19', 'delete19');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('expPart').addEventListener('mouseout', function() {hoverOut('edit19', 'delete19');} );


//to check if the user click the edit or the delete option
document.getElementById('edit19').addEventListener('click', function(){editFun('exp1', 'exp1Input');});
document.getElementById('delete19').addEventListener('click', function(){deleteFun('exp1Item', 'exp1Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('exp1Input').addEventListener('keyup', function(){changeName(event, 'exp1', 'exp1Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for experience 2 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('expPart').addEventListener('mouseover', function(){hoverIn('edit20', 'delete20');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('expPart').addEventListener('mouseout', function() {hoverOut('edit20', 'delete20');} );


//to check if the user click the edit or the delete option
document.getElementById('edit20').addEventListener('click', function(){editFun('exp2', 'exp2Input');});
document.getElementById('delete20').addEventListener('click', function(){deleteFun('exp2Item', 'exp2Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('exp2Input').addEventListener('keyup', function(){changeName(event, 'exp2', 'exp2Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for experience 3 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('expPart').addEventListener('mouseover', function(){hoverIn('edit21', 'delete21');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('expPart').addEventListener('mouseout', function() {hoverOut('edit21', 'delete21');} );


//to check if the user click the edit or the delete option
document.getElementById('edit21').addEventListener('click', function(){editFun('exp3', 'exp3Input');});
document.getElementById('delete21').addEventListener('click', function(){deleteFun('exp3Item', 'exp3Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('exp3Input').addEventListener('keyup', function(){changeName(event, 'exp3', 'exp3Input');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for experience 4 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('expPart').addEventListener('mouseover', function(){hoverIn('edit22', 'delete22');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('expPart').addEventListener('mouseout', function() {hoverOut('edit22', 'delete22');} );


//to check if the user click the edit or the delete option
document.getElementById('edit22').addEventListener('click', function(){editFun('exp4', 'exp4Input');});
document.getElementById('delete22').addEventListener('click', function(){deleteFun('exp4Item', 'exp4Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('exp4Input').addEventListener('keyup', function(){changeName(event, 'exp4', 'exp4Input');} );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for bio field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('aboutPart').addEventListener('mouseover', function(){hoverIn('edit23', 'delete23');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('aboutPart').addEventListener('mouseout', function() {hoverOut('edit23', 'delete23');} );


//to check if the user click the edit or the delete option
document.getElementById('edit23').addEventListener('click', function(){editFun('bio', 'bioInput');});
document.getElementById('delete23').addEventListener('click', function(){deleteFun('aboutPart', 'bioInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('bioInput').addEventListener('keyup', function(){changeName(event, 'bio', 'bioInput');} );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 1 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit24', 'delete24');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit24', 'delete24');} );


//to check if the user click the edit or the delete option
document.getElementById('edit24').addEventListener('click', function(){editFun('lang1', 'lang1Input');});
document.getElementById('delete24').addEventListener('click', function(){deleteFun('lang1Item', 'lang1Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang1Input').addEventListener('keyup', function(){changeName(event, 'lang1', 'lang1Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 1 level field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit25', 'delete25');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit25', 'delete25');} );


//to check if the user click the edit or the delete option
document.getElementById('edit25').addEventListener('click', function(){editFun('lang1Level', 'lang1LevelInput');});
document.getElementById('delete25').addEventListener('click', function(){deleteFun('lang1Level', 'lang1LevelInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang1LevelInput').addEventListener('keyup', function(){changeName(event, 'lang1Level', 'lang1LevelInput');} );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 2 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit26', 'delete26');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit26', 'delete26');} );


//to check if the user click the edit or the delete option
document.getElementById('edit26').addEventListener('click', function(){editFun('lang2', 'lang2Input');});
document.getElementById('delete26').addEventListener('click', function(){deleteFun('lang2Item', 'lang2Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang2Input').addEventListener('keyup', function(){changeName(event, 'lang2', 'lang2Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 2 level field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit27', 'delete27');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit27', 'delete27');} );


//to check if the user click the edit or the delete option
document.getElementById('edit27').addEventListener('click', function(){editFun('lang2Level', 'lang2LevelInput');});
document.getElementById('delete27').addEventListener('click', function(){deleteFun('lang2Level', 'lang2LevelInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang2LevelInput').addEventListener('keyup', function(){changeName(event, 'lang2Level', 'lang2LevelInput');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 3 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit28', 'delete28');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit28', 'delete28');} );


//to check if the user click the edit or the delete option
document.getElementById('edit28').addEventListener('click', function(){editFun('lang3', 'lang3Input');});
document.getElementById('delete28').addEventListener('click', function(){deleteFun('lang3Item', 'lang3Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang3Input').addEventListener('keyup', function(){changeName(event, 'lang3', 'lang3Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 3 level field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit29', 'delete29');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit29', 'delete29');} );


//to check if the user click the edit or the delete option
document.getElementById('edit29').addEventListener('click', function(){editFun('lang3Level', 'lang3LevelInput');});
document.getElementById('delete29').addEventListener('click', function(){deleteFun('lang3Level', 'lang3LevelInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang3LevelInput').addEventListener('keyup', function(){changeName(event, 'lang3Level', 'lang3LevelInput');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 4 field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit30', 'delete30');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit30', 'delete30');} );


//to check if the user click the edit or the delete option
document.getElementById('edit30').addEventListener('click', function(){editFun('lang4', 'lang4Input');});
document.getElementById('delete30').addEventListener('click', function(){deleteFun('lang4Item', 'lang4Input');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang4Input').addEventListener('keyup', function(){changeName(event, 'lang4', 'lang4Input');} );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for language 3 level field

//once the user hover on this div , it will appear the edit and delete options
document.getElementById('langPart').addEventListener('mouseover', function(){hoverIn('edit31', 'delete31');} );


//once the user hover out from this div , it will disappear the edit and delete options
document.getElementById('langPart').addEventListener('mouseout', function() {hoverOut('edit31', 'delete31');} );


//to check if the user click the edit or the delete option
document.getElementById('edit31').addEventListener('click', function(){editFun('lang4Level', 'lang4LevelInput');});
document.getElementById('delete31').addEventListener('click', function(){deleteFun('lang4Level', 'lang4LevelInput');});


//to check if the user wrote in the input box and clicked enter
document.getElementById('lang4LevelInput').addEventListener('keyup', function(){changeName(event, 'lang4Level', 'lang4LevelInput');} );





///////////////////////////////////////////////

