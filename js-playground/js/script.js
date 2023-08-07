//Initial

const setBackground = () => {
    let p1 = document.querySelector(".first");
    let p2 = document.querySelector(".last");

    //p1.style.backgroundcolor = 'red'; // .style.backgroundcolor is not working anymore
    p1.classList.add('bg-red'); //.toggle is also nice instead of .add
    p2.classList.add('bg-yellow'); //.toggle
}

let btnSetBackground = document.getElementById('set-background');
btnSetBackground.addEventListener('click', setBackground);