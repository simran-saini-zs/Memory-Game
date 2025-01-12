let Images = [
    'Images/cat.jpg',
    'Images/doggy.jpg',
    'Images/monkey.jpeg',
    'Images/rabbit.webp'
];


let ans = [];
let moves = 0;
let box = document.querySelectorAll('.d');
let result = document.querySelector('.result');
let container = document.querySelector('.container');
let restart = document.querySelector('.restart');
let score = document.querySelector('.result h1');
result.style.display = "none";
box.forEach((ele) => {
  ele.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 4); 
    ans.push(i);
    ele.style.backgroundImage = `url(${Images[i]})`; 
    ele.style.backgroundSize = 'cover'; 
    ele.style.backgroundPosition = 'center'; 
    ele.style.backgroundRepeat = 'no-repeat';
    moves++;
    if(moves == 2)
    {
        console.log(ans);
        if(ans[0] == ans[1]) score.innerHTML = "YOU WON!";
        else score.innerHTML = "YOU LOST!";
        ans = [];
        moves = 0;
        setTimeout(()=>{
            container.style.display = "none";
            result.style.display = "block";
        },1000);
       
    }
  });
});
restart.addEventListener("click",()=>{
    container.style.display = "grid";
    result.style.display = "none";
    box.forEach((ele)=>{   
       ele.style.backgroundColor= "blueviolet";
       ele.style.backgroundImage = null;
    })
})