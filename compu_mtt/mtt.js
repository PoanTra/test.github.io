
var shiftTime = {
    "ចន្ទ-សុក្រ":{
        "07h00-08h00":[],
        "11h30-12h30":[],
        "12h30-13h30":[],
        "16h00-17h00":[],
        "17h30-18h30":[],
        "18h30-19h30":[],
        "19h30-20h30":[],
        "20h30-21h30":[],
    },

    "សៅរ៍-អាទិត្យ":{
        "09h00-11h00":[],
        "13h00-15h00":[],
        "15h00-17h00":[],
        "17h30-19h30":[],
    },
    "សុក្រ-អាទិត្យ":{
        "14h00-16h00":[],
    },
    "ចន្ទ-ពុធ-សុក្រ":{
        "09h00-10h30":[],
    },
    "ចន្ទ-អង្គារ-ពុធ":{
        "17h00-18h30":[],
    },
    "ពុធ-សៅរ៏-អាទិត្យ":{
        "15h00-17h00":[],
    }
}
var languageSelectinfo = {
    បារាំង:{
        A1:["A1-1", "A1-2", "A1-3","A1-4","A1-5" , "A1-6"],
        A2:["A2-1", "A2-2", "A2-3","A2-4","A2-5" , "A2-6"],
        B1:["B1-1", "B1-2", "B1-3","B1-4","B1-5" , "B1-6"],
        B2:["B2-1", "B2-2", "B2-3","B2-4","B2-5" , "B2-6"],
    },
    អង់គ្លេស:{
        Beginner:["BGN1", "BGN2", "BGN3"],
        Elementary:["ELE1", "ELE2", "ELE3"],
        "Pre-Intermediate":["PRE-INTER1", "PRE-INTER2", "PRE-INTER3"],
        Intermediate:["INTER1", "INTER1", "INTER1"],
        "Upper-Intermediate":["UPPER1", "UPPER2", "UPPER3"],
    },
    ចិន:{
        "Easy Steps to chinese 1":["GCP1","GCP2","GCP3"],
        "Easy Steps to chinese 2":["GCP4","GCP5","GCP6"],
        "Easy Steps to chinese 3":["GCP7","GCP8","GCP9"],
        "Easy Steps to chinese 4":["GCP10","GCP11","GCP12"],
        "Easy Steps to chinese 5":["GCP13","GCP14","GCP15"],
    }
}


window.onload = function(){
    
    const selectLanguage = document.getElementById('Language');
    const selectLevel = document.getElementById('Lavel');
    const selectTerm = document.getElementById('Term');
    const select = document.querySelectorAll('select');
 
    selectLevel.disabled = true;
    selectTerm.disabled = true;

    select.forEach(select => {
        if(select.disabled == true){
            select.style.cursor = "auto"
        }
    })
    for(let language in languageSelectinfo){
        console.log(language);
        selectLanguage.options[selectLanguage.options.length] = new Option(language, language)
    }
    selectLanguage.onchange = (e) => {
        selectLevel.disabled = false
        selectTerm.disabled = true

        selectLevel.length = 1
        selectTerm.length = 1
        
        for(let level in languageSelectinfo[e.target.value]){
            console.log(level);
            selectLevel.options[selectLevel.options.length] = new Option(level, level)
        }
    }
    selectLevel.onchange = (e) => {
        selectTerm.disabled = false

        selectTerm.length = 1

        let term = languageSelectinfo[selectLanguage.value][e.target.value]

        for(let i=0; i<term.length; i++){
            selectTerm.options[selectTerm.options.length] = new Option(term[i], term[i])
        }
    }


    const selectCompu = document.getElementById('Shift');
    const selectRoom = document.getElementById('Time');

    selectRoom.disabled = true;
    
    for(let Compu in shiftTime){
        console.log(Compu);
        selectCompu.options[selectCompu.options.length] = new Option(Compu, Compu)
    }
    selectCompu.onchange = (e) => {
        selectRoom.disabled = false

        selectRoom.length = 1 

        for(let Room in shiftTime[e.currentTarget.value]){
            console.log(Room);
            selectRoom.options[selectRoom.options.length] = new Option(Room, Room)
        }
    }
}

const form = document.querySelector('#Form')

form.addEventListener("submit" , (e) =>{ e.preventDefault()

    var Text_Kname = document.querySelector("#KName").value;
    var Text_Ename = document.querySelector("#EName").value;
    var Text_Gensder = document.querySelector("#Gender").value;
    var Text_Birth = document.querySelector("#Birht").value;
    Text_Birth = Text_Birth.split("-").reverse().join("-");
    var Text_Number = document.querySelector("#Number").value;
    var Text_Address = document.querySelector("#Address").value;
    var Text_StudentNO = document.querySelector("#StudentNO").value;
    var Test_Class = document.querySelector("#Class").value;
    var Text_Shift = document.querySelector("#Shift").value;
    var Text_Time = document.querySelector("#Time").value;
    var Text_Language = document.querySelector("#Language").value;
    var Text_Term = document.querySelector("#Term").value;
    var Text_University = document.querySelector("#University").value;
    var Text_Major = document.querySelector("#Major").value;
    var Text_Year = document.querySelector("#Year").value;
    var Text_MoreUS = document.querySelector("#MoreUS").value;


    var my_text = ` - ឈ្មោះជាអក្សរខ្មែរ : ${Text_Kname} 
    %0A - ឈ្មោះជាអក្សរឡាតាំង : ${Text_Ename}
    %0A - ភេទ : ${Text_Gensder}
    %0A - ថ្ងៃខែឆ្នាំកំណើត : ${Text_Birth} 
    %0A - លេខទូរសព្ទ : ${Text_Number}
    %0A - ជាសិស្ស : ${Text_StudentNO}
    %0A - សិក្សានៅថ្នាក់ : ${Test_Class}
    %0A - វេនសិក្សា : ${Text_Shift}
    %0A - ម៉ោងសិក្សា : ${Text_Time}
    %0A - រៀនភាសា : ${Text_Language}
    %0A - វគ្គសិក្សា : ${Text_Term}
    %0A - គ្រឹះស្ថានផ្សេងដែលកំពុងសិក្សា : ${Text_University} ${Text_MoreUS}
    %0A - ជំនាញ : ${Text_Major}
    %0A - ឆ្នាំទី : ${Text_Year}
    %0A - ទីលំនៅបច្ចុប្បន្ន : ${Text_Address}`

    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";

    var chat_id = "-4565877642";

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
})

const txt1 = document.getElementById('KName');
const txt2 = document.getElementById('EName');
const txt3 = document.getElementById('Gender');
const txt4 = document.getElementById('Birht');
const txt5 = document.getElementById('Number');
const txt6 = document.getElementById('Address');
const txt7 = document.getElementById('StudentNO');
const txt8 = document.getElementById('Class');
const txt9 = document.getElementById('Shift');
const txt10 = document.getElementById('Time');
const txt11 = document.getElementById('Language');
const txt13 = document.getElementById('Term');
const txt14 = document.getElementById('University');
const txt15 = document.getElementById('Major');
const txt16 = document.getElementById('Year');
const txt17 = document.getElementById('MoreUS');

const btn1 = document.getElementById('MySubmit');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerText = `
    - ឈ្មោះជាអក្សរខ្មែរ : ${txt1.value}
    - ឈ្មោះជាអក្សរឡាតាំង : ${txt2.value}
    - ភេទ : ${txt3.value}
    - ថ្ងៃខែឆ្នាំកំណើត : ${txt4.value} 
    - លេខទូរសព្ទ : ${txt5.value}
    - ទីលំនៅបច្ចុប្បន្ន : ${txt6.value} 

    - ជាសិស្ស : ${txt7.value}
    - សិក្សានៅថ្នាក់ : ${txt8.value}
    - វេនសិក្សា : ${txt9.value}
    - ម៉ោងសិក្សា : ${txt10.value}
    - រៀនភាសា : ${txt11.value}
    - វគ្គសិក្សា : ${txt13.value}

    - គ្រឹះស្ថានផ្សេងដែលកំពុងសិក្សា : ${txt14.value} ${txt17.value}
    - ជំនាញ : ${txt15.value}
    - ឆ្នាំទី : ${txt16.value}`
}

btn1.addEventListener('click',fun1);

function copyText() {
    // Copy the text to the clipboard using navigator.clipboard API
    navigator.clipboard.writeText(out1.innerText).then(() => {
        alert("text copied!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
function hidebtn(){
    const hidebtn = document.querySelector('.button')
    hidebtn.style.display = 'none';
    const showcopy = document.querySelector('.pp')
    showcopy.style.display = 'block';
}