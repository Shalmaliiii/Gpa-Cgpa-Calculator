function Calculate_gpa(grades,credits){
    var gpa = 0, tcreds = 0;
    for (let i = 0; i < grades.length ; i++) {
        gpa += (parseInt(grades[i].value, 10) * parseInt(credits[i].value, 10));
        tcreds += parseInt(credits[i].value, 10);
    }
    gpa = gpa/tcreds;
    display(insertText_gpa, gpa);
}

function Calculate_cgpa(semester, credits){
    var cgpa = 0, tcreds = 0, n = 0;
    for(let i=0; i < semester.length; i++){
        if (semester[i].value == "" || credits[i].value == ""){
            n = i;
            break;
        }
        if (isValid(semester[i].value, 0)) return;
        if (isValid(credits[i].value, 1)) return;
    }
    for(let i=0; i < n; i++){
        cgpa += (parseInt(semester[i].value, 10) * parseInt(credits[i].value, 10));
        tcreds += parseInt(credits[i].value, 10);  
    } 
    cgpa = cgpa/tcreds;
    display(insertText_cgpa, cgpa);
}

function display(Text, total){
    Text.innerText = total.toFixed(2);
}

function isValid(value, flag){
    if (flag !== 1 && (value<0 || value>10)){
        alert("Gpa should be in range 0-10 only!");
        return
    } if (flag && (value<1 || value>50)){
        alert("Total credits should be in range 1-50 only!");
        return
    }
}

function DisplayContent(){
    const select1 = document.querySelector('.gpabox')
    const select2 = document.querySelector('.cgpabox')
    if(document.getElementById('gpa').checked) {
        select1.style.display = "block";
        select2.style.display = "none";
    }else if(document.getElementById('cgpa').checked) {
        select1.style.display = "none";
        select2.style.display = "block";
    }
}

const grades = document.querySelectorAll('.grades') 
const credits = document.querySelectorAll('.credits') 
const sem_credits = document.querySelectorAll('.TotalCredit') 
const previousCgpa = document.querySelectorAll('.PreviousCgpa') 
const submit_gpa = document.querySelector('#submit_gpa')
const submit_cgpa = document.querySelector('#submit_cgpa')
const insertText_gpa = document.querySelector('#DisplayGpa')
const insertText_cgpa = document.querySelector('#DisplayCgpa')

submit_gpa.addEventListener('click', () =>{
    Calculate_gpa(grades,credits);
    insertText_gpa.style.display = "flex";
})

submit_cgpa.addEventListener('click', () =>{
    Calculate_cgpa(previousCgpa, sem_credits);
    insertText_cgpa.style.display = "flex";
}) 