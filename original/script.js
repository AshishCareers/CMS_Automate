let btn = document.querySelector("#add_exam_score");
let adm = document.querySelector("#id_no_fresh_admission-styled");
let ss = document.querySelector("#id_no_fresh_admission");
//taking the admission status id 
if(adm && ss){  
    ss.value = 0;
    adm.value = "Open"
    removeClass(adm);
    adm.focus();
   //setting the admission status as open
}

//setting table fee start

let intNAt = document.querySelector("#id_ints")

let local = document.querySelector("#id_ls")


if(intNAt){
    
    intNAt.addEventListener('change', function(){
        let feeTableInt = document.querySelector("#id_tempcoursefeeduration_set-0-tempcoursefeeamounttype_set-0-ints");
        // intNAt.value = intNAt.value*2
        feeTableInt.value = intNAt.value;
    })
}

if(local){
    
    local.addEventListener('change', function(){
        let feeTableLocal = document.querySelector("#id_tempcoursefeeduration_set-0-tempcoursefeeamounttype_set-0-ls")
        // let feeTableInt = document.querySelector("#id_tempcoursefeeduration_set-0-tempcoursefeeamounttype_set-0-ints");
        
        // local.value = local.value * 2;
        feeTableLocal.value = local.value;
        // feeTableInt.value = local.value;
        // intNAt.value = local.value;
        // removeClass(intNAt)
    })
}




//setting table fee auto end


function removeClass(rr){
    rr.classList.remove("empty")
}

//get link
window.addEventListener("keydown", function(e){
    console.log(e.keyCode)
    if(e.keyCode === 192){
        setTimeout(()=>{
            window.navigator.clipboard.writeText(window.location.href)
        },0)
           
            
    }
})

// degree automate

let courseName = document.querySelector("#id_course_name")
let relateDegree = document.querySelector("#id_degree")

let relate_and_Degree = {
    "BS": "BS [Bachelor of Science]",
    "BA": "B.A. [Bachelor of Arts]",
    "B.Sc": "B.Sc. [Bachelor of Science]",
    "MS": "M.S [Master of Science]",
    "M.Sc": "M.Sc. [Master of Science]",
    "BBA": "B.B.A [Bachelor of Business Administration]",
    "B.Sc Hons": "B.Sc.(Hons) [Bachelor of Science with Honours]",
    "BA Hons": "B.A.(Hons) [Bachelor of Arts with Honours]",
    "B.Ed": "B.Ed. [Bachelor of Education]",
    "BFA": "B.F.A. [Bachelor of Fine Arts]",
    "BE": "B.E /B.Tech [Bachelor of Engineering, Bachelor of Technology]",

        
}
if(courseName && relateDegree){
    courseName.addEventListener("change", function(){
        let name_of_course = courseName.value;
        let rgx = /BS|BA Hons|BA|B.Sc Hons|B.Sc|MS|M.Sc|BBA|B.Ed|BFA|BE/;
        let degree_relate = name_of_course.match(rgx);
        if(degree_relate){
            degree_relate = name_of_course.match(rgx)[0];
            relateDegree.value  = relate_and_Degree[degree_relate];
        }
        
        removeClass(relateDegree);
    })
    
}




//function to set the score when we press corresponding key
function setScore(id){
    setTimeout(function(){
    let ex = document.querySelector(`#id_exam_score-${id}-exams_new`)
    let es = document.querySelector(`#id_exam_score-${id}-exam_score_accepted`)
    removeClass(ex);
    removeClass(es);


    if(ex && es){
    //duo
        if(id===0){
            ex.focus();
        }
        // ex.addEventListener("change", function(){
        if(id<keyScore.length){
            ex.value = keyScore[id][49+id]
            es.value = keyScore[id][id];
        }
        // })
        }
        // console.log(keyScore.length)
    if(id === keyScore.length-1 && adm){
            adm.focus();
        }
    },0);
    
}

//as 1 btn is already created so while loading the page we call the seScore(0) with 0 value 
// window.onload = function(){
//     if(btn){
//         setScore(0);
//     }
// }


let cnt = 0;
if(btn){
     btn.addEventListener("click", function(){
     cnt+=1;
     setScore(cnt);
});
}

let keyScore = [
    { 49: "International English Language Testing System", 0: 6 },
    
    { 50: "Test of English as Foreign Language", 1: 80 },

    //{ 51: "Graduate Record Exam", 2: '' },

    // { 51: "Pearson Test of English Academic", 2: 50},

    //{ 52: "Graduate Management Admission Test", 3: '' },
     { 51: "Duolingo English Test", 2: 110 },
    // { 51: "Scholastic Assessment Test", 2: "" },
    // { 52: "American College Testing", 3: "" },
   
]

//taking the key 
// window.onkeydown = examName;


// function examName(e){


//     if(e.shiftKey === true){
// 	return;
// }   

//     let uniIndex = parseInt(e.key)-1;
//    if (uniIndex >= 0 && uniIndex < keyScore.length) {
//     let code = e.keyCode
//     let uni = keyScore[uniIndex][code];
//     if(uni!==undefined){
//         e.preventDefault();
//         document.execCommand("insertText",false,uni)    
//      }
// }
// }


let ctrlkey = false;
window.addEventListener("keydown", function(e){
        if(e.key === "Control"){
	       ctrlkey = true;
       }
})


window.addEventListener("keyup", function(e){
        if(e.key === "Control"){
	       ctrlkey = false;
       }
})


window.onmouseup = testing;
function testing() {

    if(!ctrlkey){
	return;
        }


    let val = window.getSelection().toString();
    // converting selected text into all lower below code
    if (val != '') {
        val = val.toLowerCase();
        // console.log(val);
        let n = val.length;
        // navigator.clipboard.writeText(val)
        let copyAns = "";
        copyAns = val[0].toUpperCase();
        // console.log(copyAns);

        for (let i = 1; i < n; i++) {
            // val = val.toUpperCase();
            if (val[i - 1] == " ") {
                copyAns += val[i].toUpperCase();
            }
            else {
                copyAns += val[i];
            }
        }
        //navigator.clipboard.writeText(copyAns)

        // t.select();
        
        let replaceArr = [" With ", " For ", " Focus ", ","];
        replaceArr.map((item) => {
            copyAns = copyAns.replaceAll(item, "")
        })
        copyAns = copyAns.replaceAll("&","and")
        copyAns = copyAns.replaceAll(" And "," and ")
        console.log(copyAns);
        navigator.clipboard.writeText(copyAns)
                // Create a message element
                const messageElement = document.createElement('div');
                messageElement.innerHTML = 'Text modified and copied to clipboard!';
                messageElement.style.position = 'absolute';
                messageElement.style.backgroundColor = '#4CAF50';
                messageElement.style.color = '#fff';
                messageElement.style.padding = '10px';
                messageElement.style.borderRadius = '5px';
        
                // Get the selection range
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                // alert(rect.top)
                // Position the message element above the selection
                // messageElement.style.top = rect.top - messageElement.offsetHeight - 15 + 'px';
                messageElement.style.top = rect.top + 24 + "px";
                messageElement.style.left = rect.left + "px";
        
                // Append the message element to the body
                document.body.appendChild(messageElement);
        
                // Remove the message element after a certain time (e.g., 1 seconds)
                setTimeout(function () {
                    document.body.removeChild(messageElement);
                }, 1000);
    }



    // alert("copied")
}
