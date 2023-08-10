let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}


function openmenu(){
    document.getElementById('sidemenu').style.right = "0";
}
function closemenu(){
    document.getElementById('sidemenu').style.right = "-200px";
}

function message(){
    let msg = document.getElementById('msg');
    msg.innerText = 'Message sent successfully';
    setTimeout(()=>msg.innerText = '', 2500);
    form.reset;
}