const form = document.querySelector('#Form')

form.addEventListener("submit" , (e) =>{ e.preventDefault()

    var txtkhmer = document.querySelector("#NameKh").value;
    var txtenglish = document.querySelector("#NameEng").value;
    var txtgender = document.querySelector("#Gender").value;
    var txtuniversity = document.querySelector("#University").value;
    var txtmajor = document.querySelector("#Major").value;
    var txtyear = document.querySelector("#Year").value;
    var txtphone = document.querySelector("#Phone").value;

    var my_text = `- ឈ្មោះជាអក្សរខ្មែរ : ${txtkhmer}
    %0A - ឈ្មោះជាអក្សរឡាតាំង : ${txtenglish}
    %0A - ភេទ : ${txtgender} 
    %0A - គ្រឹះស្ថានផ្សេងដែលកំពុងសិក្សា : ${txtuniversity}
    %0A - ជំនាញ : ${txtmajor}
    %0A - ឆ្នាំទី : ${txtyear}
    %0A - លេខទូរសព្ទ : ${txtphone}`

    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";

    var chat_id = "-4743634585";

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
})

function showlink(){
    const hidebtn = document.getElementById('btn');
    hidebtn.style.display = 'none';
    const showlink = document.getElementById('link');
    showlink.style.display = 'flex';
    const hideinput = document.getElementById('input');
    hideinput.style.display = 'none';
}