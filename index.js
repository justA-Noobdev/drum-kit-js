let len = document.querySelectorAll('.drum').length;

for(let i=0; i<len; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});    


function makeSound(event) {
    switch(event) {
        case 'w':
            let w = new Audio('sounds/tom-1.mp3');
            w.play();
            break;
        case 'a':
            let a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case 's':
            let s = new Audio('sounds/tom-3.mp3');
            s.play();;
            break;
        case 'd':
            let d = new Audio('sounds/tom-4.mp3');
            d.play();
            break;
        case 'j':
            let j = new Audio('sounds/snare.mp3');
            j.play();
            break;
        case 'k':
            let k = new Audio('sounds/crash.mp3');
            k.play();
            break;
        case 'l':
            let l = new Audio('sounds/kick-bass.mp3');
            l.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    let btn = document.querySelector("." + currentKey);
    btn.classList.add('pressed');
    setTimeout(function() {
        btn.classList.remove('pressed');
    }, 100);
}