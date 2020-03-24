// Everything will be done in Jquery

let articleBtn =  document.querySelector('#article-btn');


let shoppingBoxes = document.querySelectorAll(".expBox");
// let shoppingBoxes = $('.expBox');
// let articleBtn = $('#article-btn:fir

console.log(articleBtn)
console.table(articleBtn)

articleBtn.addEventListener('mouseover', ()=>{
    articleBtn.style.backgroundColor = 'royalblue';
    articleBtn.style.color = '#fff';
    articleBtn.innerHTML = 'Go';
})
articleBtn.addEventListener('mouseout', ()=>{
    articleBtn.style.backgroundColor = '';
    articleBtn.style.color = '';
    articleBtn.innerHTML = 'Articles';
    window.URL = "fun.html";
})

shoppingBoxes.forEach(box =>{
    box.addEventListener('mouseover', () =>{
        anime({
            targets: box,
            translateY:[
                {value: 20, duration: 100}
            ]
        })
    })

    box.addEventListener('mouseout', ()=>{
        anime({
            targets: box,
            translateY:[
                {value: 0, duration: 200}
            ]
        })
    })
})