"use strict";const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),miniImg=document.querySelector(".js__profile-image"),maxImg=document.querySelector(".js__profile-preview");function getImage(e){const n=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(n)}function writeImage(){miniImg.style.backgroundImage=`url(${fr.result})`,maxImg.style.backgroundImage=`url(${fr.result})`,infoPerson.photo=fr.result}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);let infoPerson={palette:0,name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};const resetButton=document.querySelector(".reset__button-js"),submitButton=document.querySelector(".article__share__button"),paletteA=document.querySelector(".color1-js"),paletteB=document.querySelector(".color2-js"),paletteC=document.querySelector(".color3-js"),fullName=document.querySelector(".fullName-js"),job=document.querySelector(".job-js"),selectImagen=document.querySelector(".addImage-js"),email=document.querySelector(".email-js"),telephone=document.querySelector(".telephone-js"),linkedIn=document.querySelector(".linkedIn-js"),gitHub=document.querySelector(".gitHub-js"),previewFullName=document.querySelector(".previewFullName-js"),previewJob=document.querySelector(".previewJob-js"),previewTelephone=document.querySelector(".previewTelephone-js"),previewEmail=document.querySelector(".previewEmail-js"),previewLinkedIn=document.querySelector(".previewLinkedIn-js"),previewGitHub=document.querySelector(".previewGitHub-js"),previewIcon1=document.querySelector(".previewIconBorder1-js"),previewIcon2=document.querySelector(".previewIconBorder2-js"),previewIcon3=document.querySelector(".previewIconBorder3-js"),previewIcon4=document.querySelector(".previewIconBorder4-js"),formOpenDesign=document.querySelector(".form__open__design"),formCloseDesign=document.querySelector(".form__closed__design"),divArrowDesign=document.querySelector(".form__arrow--design"),formOpenFill=document.querySelector(".form__open__fill"),formCloseFill=document.querySelector(".form__closed__fill"),divArrowFill=document.querySelector(".form__arrow--fill"),formOpenShare=document.querySelector(".form__open__share"),formCloseShare=document.querySelector(".form__closed__share"),divArrowShare=document.querySelector(".form__arrow--share"),startButton=document.querySelector(".container__btn-js"),previewCard=document.querySelector(".preview"),palettes=document.querySelectorAll(".palette-js"),steps=document.querySelectorAll(".steps-js"),twitterContainer=document.querySelector(".article__share__create"),twitterButton=document.querySelector(".article__twitter__button");function valueInput(){infoPerson.name=fullName.value,infoPerson.job=job.value,infoPerson.email=email.value,infoPerson.phone=Number(telephone.value),infoPerson.linkedin=linkedIn.value,infoPerson.github=gitHub.value,localStorage.setItem("infoPerson",JSON.stringify(infoPerson))}function hideDesign(){formOpenDesign.classList.toggle("hidden"),divArrowDesign.classList.toggle("closed")}function hideFill(){formOpenFill.classList.toggle("hidden"),divArrowFill.classList.toggle("closed")}function hideShare(){formOpenShare.classList.toggle("hidden"),divArrowShare.classList.toggle("closed")}function handleUpdateFullName(){infoPerson.name=fullName.value,previewFullName.innerHTML=""===infoPerson.name?"Nombre Apellido":infoPerson.name}function handleUpdateJob(){infoPerson.job=job.value,previewJob.innerHTML=""===infoPerson.job?"Front-end developer":infoPerson.job}function handleUpdateEmail(){infoPerson.email=email.value;const e=email.value;return previewEmail.href="mailto:"+e}function handleUpdateTelephone(){infoPerson.phone=telephone.value;const e=telephone.value;return previewTelephone.href="tel:"+e}function handleUpdateLinkedIn(){infoPerson.linkedin=linkedIn.value;const e=linkedIn.value;return previewLinkedIn.href="https://www.linkedin.com/in/"+e}function handleUpdateGitHub(){infoPerson.github=gitHub.value;const e=gitHub.value;return previewGitHub.href="https://github.com/"+e}function changeColors(e){previewCard.classList.remove("palette1-js"),previewCard.classList.remove("palette2-js"),previewCard.classList.remove("palette3-js"),infoPerson.palette=Number(e.target.value),previewCard.classList.add(`palette${infoPerson.palette}-js`)}fullName.addEventListener("keyup",valueInput),job.addEventListener("keyup",valueInput),selectImagen.addEventListener("change",valueInput),email.addEventListener("keyup",valueInput),telephone.addEventListener("keyup",valueInput),linkedIn.addEventListener("keyup",valueInput),gitHub.addEventListener("keyup",valueInput),formCloseDesign.addEventListener("click",hideDesign),formCloseFill.addEventListener("click",hideFill),formCloseShare.addEventListener("click",hideShare),fullName.addEventListener("keyup",handleUpdateFullName),job.addEventListener("keyup",handleUpdateJob),email.addEventListener("keyup",handleUpdateEmail),telephone.addEventListener("keyup",handleUpdateTelephone),linkedIn.addEventListener("keyup",handleUpdateLinkedIn),gitHub.addEventListener("keyup",handleUpdateGitHub);for(const e of palettes)e.addEventListener("change",changeColors);function resetForm(){infoPerson.palette=0,infoPerson.name="",infoPerson.job="",infoPerson.addImg="",infoPerson.email="",infoPerson.telephone="",infoPerson.linkedin="",infoPerson.github="",fullName.value="",job.value="",email.value="",telephone.value="",linkedIn.value="",gitHub.value="",previewFullName.innerHTML="Nombre Apellido",previewJob.innerHTML="Front-End Developer",localStorage.removeItem("infoPerson")}function resetImgPreview(){maxImg.style.backgroundImage="",miniImg.style.backgroundImage=""}function resetComplete(e){resetForm(),resetImgPreview()}function validateForm(){infoPerson.name.length<1||infoPerson.job.length<1||infoPerson.email.length<1||infoPerson.phone.length<1||infoPerson.linkedin.length<1||infoPerson.github.length<1?submitButton.setAttribute("disabled","disabled"):(submitButton.removeAttribute("disabled"),submitButton.classList.remove("cursor__btn__submit"))}resetButton.addEventListener("click",resetComplete),fullName.addEventListener("keyup",()=>{valueInput(),validateForm()}),job.addEventListener("keyup",()=>{valueInput(),validateForm()}),selectImagen.addEventListener("change",()=>{}),email.addEventListener("keyup",()=>{valueInput(),validateForm()}),telephone.addEventListener("keyup",()=>{valueInput(),validateForm()}),linkedIn.addEventListener("keyup",()=>{valueInput(),validateForm()}),gitHub.addEventListener("keyup",()=>{valueInput(),validateForm()}),resetButton.addEventListener("click",resetForm),submitButton.addEventListener("click",sendData);const responseURL=document.querySelector(".response");function sendData(e){e.preventDefault(),sendRequest(infoPerson)}function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e),twitterContainer.classList.remove("hidden")})).catch((function(e){console.log(e)}))}function showURL(e){const n=document.querySelector(".child");if(e.success){responseURL.innerHTML="<a href="+e.cardURL+">"+e.cardURL+"</a>";const t="Hola Adalaber, aquí tienes tu tarjeta de presentación! 🌸";twitterButton.setAttribute("href",`https://twitter.com/intent/tweet?url=${t} ${e.cardURL}`),twitterButton.setAttribute("target","_blank"),twitterButton.appendChild(n)}else responseURL.innerHTML="ERROR:"+e.error}const recoverInfo=()=>{const e=localStorage.getItem("infoPerson"),n=JSON.parse(e);null!==n&&(infoPerson.fullName=n.name,fullName.value=n.name,handleUpdateFullName(),infoPerson.job=n.job,job.value=n.job,handleUpdateJob(),infoPerson.email=n.email,email.value=n.email,handleUpdateEmail(),phone.value=n.phone,infoPerson.phone=n.phone,handleUpdateTelephone(),infoPerson.photo=n.photo,maxImg.style.backgroundImage=`url(${n.photo})`,miniImg.style.backgroundImage=`url(${n.photo})`,infoPerson.linkedin=n.linkedin,linkedIn.value=n.linkedin,handleUpdateLinkedIn(),gitHub.value=n.github,infoPerson.github=n.github,handleUpdateGitHub())};recoverInfo();