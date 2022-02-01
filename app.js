
// get element

const skills = document.querySelectorAll('.skills');
const all_item = document.querySelector('.all-items');

skills.forEach(skill =>{

    skill.addEventListener('change', function(){

        let all_data = document.querySelectorAll('.skills:checked');

        let skill_arr = [];

        all_data.forEach(data =>{
            skill_arr.push(data.value)
        });

        let list = '';
        skill_arr.map(data =>{
            list += ` <li class="list-group-item">${data}</li>`
        });
        all_item.innerHTML = list;
    });


});


//end instant data change
// Analog Clocck start

const secDiv = document.querySelector('#sec');
const minDiv = document.querySelector('#min');
const hourDiv = document.querySelector('#hour');

setInterval(initClock, 1000)

function initClock(){

    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;


    secDiv.style.transform= "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform= "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform= "rotate(" + (hour * 360) + "deg)";
}
initClock();



//Analog clock design 1 end
//Analog clock design start

const second_div = document.querySelector('#s');
const minute_div = document.querySelector('#m');
const hour_div = document.querySelector('#h');



setInterval(init_clock, 1000);
function init_clock(){

    let date = new Date();
    let ssec = date.getSeconds() / 60;
    let mmin = (date.getMinutes() + ssec) / 60;
    let hhour = (date.getHours() + mmin) / 12;



    second_div.style.transform= "rotate(" + (ssec * 360) + "deg)";
    minute_div.style.transform= "rotate(" + (mmin * 360) + "deg)";
    hour_div.style.transform= "rotate(" + (hhour * 360) + "deg)";
}
init_clock();


// Analog Clock end
// Calculator start


const main_monitor = document.querySelector('.main-monitor');
const top_monitor = document.querySelector('.top-monitor');
const off = document.querySelector('#off');
const on = document.querySelector('#on');

on.addEventListener('click',function(){
   
    data_cal=[];
    main_monitor.innerHTML= '0';
    top_monitor.innerHTML= '0';
});
off.addEventListener('click',function(){
    main_monitor.innerHTML= '';
    top_monitor.innerHTML= '';
});

let data_cal = [];
let dataValue = (value) =>{

    data_cal.push(value);
   
    document.querySelector('.top-monitor').innerHTML= data_cal.join('');
    document.querySelector('.main-monitor').innerHTML= `0`;
}

let back = () =>{
    data_cal.pop();
    document.querySelector('.top-monitor').innerHTML= data_cal.join('');
    document.querySelector('.main-monitor').innerHTML= ``;

}

let alclear = () =>{
    data_cal = []
    document.querySelector('.top-monitor').innerHTML= `0`;
    document.querySelector('.main-monitor').innerHTML= ``;
}


let final_result = () =>{

    let data_strr = data_cal.join('');
    document.querySelector('.main-monitor').innerHTML= eval(data_strr);

}