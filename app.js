const moi = document.getElementById('moi');
const projets = document.getElementById('projet');
const formation = document.getElementById('formation');
const contact = document.getElementById('contact');
const cv = document.getElementById('cv');
const links_pro = document.querySelectorAll('.nav-pro a');
const links = document.querySelectorAll('.sec-nav a');
const voir_plus = document.getElementById('voir_plus');
const AsideProfile = document.getElementById('AsideProfile');
const ProInfos = document.getElementById('ProInfos');
function ShowSection(id) {
    const sections = document.querySelectorAll(".sec_presentation .anchor_content");
    sections.forEach((sec) => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}


links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

links_pro.forEach(link=>{
    link.addEventListener('click',function(){
        links_pro.forEach(l=>l.classList.remove("active_pro"));
        this.classList.add("active_pro");
    });
})

function ShowProjet(id){
    const projetctType = document.querySelectorAll('.project-type .pro');

    projetctType.forEach((pro)=>{
        pro.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        if (this.value.trim() !== "") {
            this.classList.add("typing");
        } else {
            this.classList.remove("typing");
        }
    });
});

const sendMailForm = document.querySelector('form'); // Sélectionne le formulaire

sendMailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const full_name = document.getElementById('full_name').value;
    const object = document.getElementById('object').value;
    const message = document.getElementById('mes').value;

    const myMail = "victoirelucngami@gmail.com";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myMail)}&su=${encodeURIComponent(object)}&body=Salut, je suis ${encodeURIComponent(full_name)}, j'ai besoin de ${encodeURIComponent(message)}`;
    window.open(gmailLink,"_blank");
    
});

voir_plus.addEventListener('click',()=>{
    AsideProfile.classList.toggle("AsideBig");
    ProInfos.classList.toggle('ProfVisible');
});