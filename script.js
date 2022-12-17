let handle = document.querySelector('.handle');

let max=2640;
window.addEventListener('scroll', () => {
    handle.style.transform = `translateY(${(pageYOffset/2640)*600}px)`;
})

document.querySelector('.scrollbar').style.left = (window.innerWidth-1110)/4 + 'px';

// let cursor = document.querySelector(".cursor");
// let x, y;

// window.addEventListener("mousemove", e => {
//     cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
// });