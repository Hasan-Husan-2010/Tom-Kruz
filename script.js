let form = document.querySelector('.form')
let input = document.querySelector('.input')
let box = document.querySelector('.box')
let p = document.querySelector('.p')
let img = document.querySelector('.pic')

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let x =  Number(input.value);
    if(x < 61){
        p.textContent = 'NOTO`G`RI!kattaroq yosh kiriting'
        p.classList.add('jk')
        p.classList.remove('j')
        p.classList.remove('jj')
        img.src = 'tom-cruise-kid.jpeg'
        img.classList.add('op')
        img.classList.add('ko')
        p.classList.remove('pp')
    } else if(x > 61){
        p.textContent = 'NOTO`G`RI!Kichikroq yosh kiriting'
        p.classList.add('j')
        p.classList.remove('jj')
        p.classList.remove('jk')
        img.src = 'tom-cruise-old.jpeg'
        img.classList.remove('op')
        img.classList.add('kl')
        p.classList.remove('pp')
    }else if(x === 61){
        p.textContent = "TO`G`RI!Topdingiz"
        p.classList.add('jj')
        p.classList.remove('j')
        p.classList.remove('jk')
        img.src = 'tom-cruise-great.jpeg'
        img.classList.add('op')
        p.classList.remove('pp')
    }if(x < 0){
        p.textContent = "Aldamang!"
        p.classList.add('pp')
        p.classList.remove('jk')
        img.src = 'baby.gif';
        img.classList.remove('ko')
        img.classList.remove('kl')
    }
});