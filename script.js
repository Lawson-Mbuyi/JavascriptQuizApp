// List of fifteen questions
let questions_db=[
    {
    question_text:"L'extension utilisée par les fichiers javascrypt est?",
    answer_text:".js",
    a:".js",
    b:".py",
    c:".php",
    d:".jar",
    },
    {
    question_text:"L'acronyme DOM signifie:",
    answer_text:"Document Object Model",
    a:"Document Object Model",
    b:"Domaine Origin Model",
    c:"Document Original Model",
    d:"Document Object Manipulation",
    },
    {
    question_text:"Une des réponses fait partie des conventions de nommage de variables en javascrypt;laquelle?:",
    answer_text:"Sensibilité à la casse",
    a:"L'utilisation des mots reservés",
    b:"Commencer par un chiffre",
    c:"Sensibilité à la casse",
    d:"Définition du type d'article",
    },
    {
    question_text:"La fonction native CharAt retourne:",
    answer_text:"Le caractère à l'index spécifié",
    a:"Joind deux ou plusieurs chaines",
    b:"Le caractère à l'index spécifié",
    c:"Appelle une fonction pour chaque élement du tableau",
    d:"La longueur de la chaine",
    },
    {
    question_text:"La declaration de la vaiable en javascrypt se fait par sauf ?",
    answer_text:"integer",
    a:"integer",
    b:"var",
    c:"const",
    d:"let",
    },
    {
    question_text:"La fonction native forEach retourne: ?",
    answer_text:"Appelle une fonction pour chaque élement du tableau",
    a:"Joind deux ou plusieurs chaines",
    b:"Le caractère à l'index spécifié",
    c:"Appelle une fonction pour chaque élement du tableau",
    d:"La longueur de la chaine",
    },
    {
    question_text:"Les avantages de javascrypt sont sauf?",
    answer_text:"",
    a:"Peu d'interaction avec le serveur",
    b:"fidback immedia au visiteur",
    c:"L'interactivité augmentée",
    d:"Les interfaces plus riches",
    },
    {
    question_text:"Les caracteristiques de javascrypt sont sauf?",
    answer_text:"",
    a:"Un langage interpreté et leger",
    b:"Open et cross plateforme",
    c:"Centré sur le réseau",
    d:"Un langage integré",
    },
    {
    question_text:"L'acronyme JSON signifie: ?",
    answer_text:"javascrypt object notation",
    a:"javascrypt server on node js",
    b:"javascrypt object notation",
    c:"javascrypt new scrypt",
    d:"javascrypt server on ngix",
    },
    {
    question_text:"Les codes javascrypts peuvent être integrés dans un document html par sauf",
    answer_text: "Le style personnalisé",
    a:"Le style en ligne",
    b:"Le style du document",
    c:"Le style externe",
    d:"Le style personnalisé",
    },
    {
    question_text:"L'accès à un élément html en js peu se faire par sauf ?",
    answer_text:"",
    a:"getElementById(‘idname’)",
    b:"getElementsByClass(‘classname’)",
    c:"getElementsByTagName(‘tagname’)",
    d:"querySelector()",
    },
    {
    question_text:"Tous ces frameworks sont écrits en javascrypt sauf?",
    answer_text:"Django",
    a:"Angular",
    b:"Django",
    c:"React",
    d:"Vue",
    },
    {
    question_text:"La fonction native 'reverse()' retourne:",
    answer_text:"Un tableau dans l'ordre inversé",
    a:"Joind deux ou plusieurs chaines",
    b:"Le caractère à l'index spécifié",
    c:"Appelle une fonction pour chaque élement du tableau",
    d:"Un tableau dans l'ordre inversé",
    },
    {
    question_text:"La fonction native 'indexOf()' retourne:",
    answer_text:"L'index de la première ocurrence de la valeur spécifiée dans une chaine",
    a:"Joind deux ou plusieurs chaines",
    b:"Le caractère à l'index spécifié",
    c:"L'index de la première ocurrence de la valeur spécifiée dans une chaine",
    d:"Un tableau dans l'ordre inversé",
    },
    {
    question_text:"Javascrypt supporte les types de données suivants sauf ?",
    answer_text:"",
    a:"Symbol",
    b:"Objet",
    c:"Undefined",
    d:"String",
    },
    ]
    // Global varibles declaration
    const question_text = document.querySelector(".question_text");
    const start_modal = document.querySelector(".start_modal");
    const start_form = document.querySelector(".start_form");
    const questions_box = document.querySelector(".questions_box");
    const progressbar = document.querySelector(".progress-bar");
    const timer = document.querySelector(".timer");
    const answer_options = document.querySelectorAll(".answer");
    const success_box = document.querySelector(".success");
    const chess_box = document.querySelector(".chess");
    const input_name = document.querySelector(".name");
    const input_mail = document.querySelector(".email");
    const chess_name = document.querySelector(".chess_name");
    const chess_mail = document.querySelector(".chess_email");
    const home1 = document.querySelector(".home1");
    const home2 = document.querySelector(".home2");

    const success_name = document.querySelector(".success_name");
    const success_mail = document.querySelector(".success_email");
    const next_question = document.querySelector(".continu");
    const nth_question_show = document.querySelector(".nth_question");
const quit = document.querySelector(".quit");

    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    
    // Quiz initialisation function
    function quizInit(){
        start_form.addEventListener("submit", function(e){
            e.preventDefault();
            const inputData = this.elements;
            if(inputData[0].value==""){
                required_name.innerText="noubliez pas de renseigner votre nom avant de commence le quiz";
            }else if(inputData[1].value==""){
                required_mail.innerText="noubliez pas de renseigner votre mail avant de commence le quiz";
            }else{
                input_name.value = inputData[0].value;
                input_mail.value = inputData[1].value;
                start_modal.style.display="none";
                questions_box.style.display="block";
                timeProcess(60);

            }   
        })
    
    }
    quizInit();
    next_question.disabled=true;
    
    // timer setting function implementation
    let counter=0;
    let time_amount=60;
    function timeProcess(time){
        counter=setInterval(set_timer,1000);
        function set_timer(){
            timer.textContent = time; 
            time -=1;
            progressbar.style.width = time*1.667 +"%";
            if (time < 0) {
                next_question.disabled=false;
                nth_question +=1;
                if(nth_question<questions_db.length){
                    load_nth_question();    
                    clearInterval(counter);
                    timeProcess(time_amount);
                }else{
                  scoreCompute();
                }
            }
        }
    }

    // get the selected radion button and enable the continue button
    const disableNextBtn=()=>{
    const radios = document.querySelectorAll('.option');
    for ( let radio of radios) {
        radio.onclick=()=>{
            next_question.disabled=false;
        }
    }
}
disableNextBtn();


// dataloading function implementation
    
let nth_question = 0;
const load_nth_question =()=>{
  if(nth_question<questions_db.length){
    current_question_db = questions_db[nth_question];
    
    question_text.innerText=
    questions_db[nth_question].question_text;
    nth_question_show.innerText = nth_question +1+ '/' + questions_db.length; 

    a_text.innerText = current_question_db.a;
    b_text.innerText = current_question_db.b;
    c_text.innerText = current_question_db.c;
    d_text.innerText = current_question_db.d;
  }

}
load_nth_question();


//getting the selected radio button function implementation
const getSelectedAnswer = ()=>{
    let user_answer;
    answer_options.forEach(current_option =>{
        if (current_option.checked) {
            user_answer = current_option.parentElement.textContent; 
        }
    });
    return user_answer;
}
//deselecting selected radio button function implementation
const uncheckSelectedOption=()=>{
    answer_options.forEach(current_options=>current_options.checked=false);
}
//user score computing function implementation 
function scoreCompute(){
    let user_percent = Math.round((user_score * 100)/15);
    if(user_percent >= 50){
        const success_score = document.getElementById("success_score");
        success_name.innerText=input_name.value;
        success_mail.innerText =input_mail.value;
        success_score.innerText= user_score+ "/"+questions_db.length;
        success_box.style.display = "block";
        questions_box.style.display ="none";  
    }else{
        const chess_score = document.getElementById("chess_score");
        chess_name.innerText=input_name.value;
        chess_mail.innerText =input_mail.value;
        chess_score.innerText = user_score+"/"+questions_db.length;
        chess_box.style.display = "block";
        questions_box.style.display ="none"; 
      }
}

//listning next question clicking event
let user_score=0;
next_question.addEventListener("click", ()=>{
    clearInterval(counter); 
    timeProcess(time_amount);
    const user_answer = getSelectedAnswer();
    if (user_answer==questions_db[nth_question].answer_text) {
        user_score += 1;  
    }

    nth_question += 1;
    uncheckSelectedOption();
    if (nth_question < questions_db.length) {
      load_nth_question(); 
      nth_question_show.innerText = nth_question +1+ '/' + questions_db.length; 
    }else{
        scoreCompute();
    }
})
// page refreshment codes
home1.onclick=()=>{
  document.location.reload();
}
home2.onclick=()=>{
    document.location.reload();
}
quit.onclick=()=>{
    if(confirm("Do you want to quit current window ?")){
        window.close();

    }
}
