var hody = [];

var tlacitko = document.getElementById('game');

document.getElementById('game').addEventListener('click',
    
    function(){
        tlacitko.hidden = true;
        hod();
        zvuk();
        console.log(hody);
    }
);


function suma(cisla) {
    
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}


function maximum(cisla) {
    
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}


function minimum(cisla) {
    
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}


function average(sum, count) {
    return (sum / count).toFixed(2);
}


function hod() {
    
    let nahodneCislo;
    let obrazek = ["img/kostka1.png","img/kostka2.png","img/kostka3.png","img/kostka4.png","img/kostka5.png","img/kostka6.png"]
    let Interval = window.setInterval(function(){
        
        nahodneCislo = Math.floor(Math.random()*obrazek.length);
        document.getElementById('cube').src = obrazek[nahodneCislo];
    },100)
    window.setTimeout(function(){
        window.clearInterval(Interval);
    },3000
    )


    window.setTimeout(function(){
    
    
        var h = Math.ceil(Math.random() * 6);
    hody.push(h);
        if (h < 6)
        zvuk2();
        if(h == 6)
        zvuk3();
    


    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
    return h;},3000)
}


function zvuk (){
    
    let zvuk=document.getElementById('ajns');
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
        tlacitko.hidden = false;
    }
    ,3000
    )}


function zvuk2 (){

let zvuk = document.getElementById('cvaj');
zvuk.currentTime = 0;
zvuk.volume = 0.25;
zvuk.play();
window.setTimeout(function(){
zvuk.pause();
},5000);
}

function zvuk3 () {

let zvuk = document.getElementById('draj');
zvuk.currentTime = 0;
zvuk.volume = 0.5;
zvuk.play();
window.setTimeout(function(){
zvuk.pause();
},2000);
}