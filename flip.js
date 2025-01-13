let Images = [
    'Images/cat.jpg',
    'Images/doggy.jpg',
    'Images/monkey.jpeg',
    'Images/rabbit.webp'
];


let ans = [];
let moves = 0;
let divs_clicked = [];
let box = document.querySelectorAll('.d');
let result = document.querySelector('.result');
let container = document.querySelector('.container');
let restart = document.querySelector('.restart');
let score = document.querySelector('.result h1');
result.style.display = "none";
box.forEach((ele) => {
  ele.addEventListener('click', function handleClick() {
      let i = Math.floor(Math.random() * 4); 
      ans.push(i);
      ele.style.backgroundImage = `url(${Images[i]})`; 
      ele.style.backgroundSize = 'cover'; 
      ele.style.backgroundPosition = 'center'; 
      ele.style.backgroundRepeat = 'no-repeat';
      moves++;
      divs_clicked.push(ele.classList[0]);
      if(ans.length == 2)
      {
        if(ans[0] == ans[1])
        {
         setTimeout(() => {
          divs_clicked.forEach((divs)=>{
            document.querySelector("."+divs).style.background = 'none';
            console.log(divs);
            document.querySelector("."+divs).removeEventListener('click',handleClick);
            ans = [];
            divs_clicked = [];
          })
         }, 1000);
        } 
        else 
        {

          setTimeout(() => {
            divs_clicked.forEach((divs)=>{
              document.querySelector("."+divs).style.backgroundImage = `none`;
              document.querySelector("."+divs).style.backgroundColor = `#4F6D7A`;
              ans = [];
              divs_clicked = [];
            })
          }, 1000);
        }
      }
      // ans = [];
      // moves = 0;
      // setTimeout(()=>{
      //     container.style.display = "none";
      //     result.style.display = "flex";
      // },500);
  });
});


restart.addEventListener("click",()=>{
    container.style.display = "grid";
    result.style.display = "none";
    box.forEach((ele)=>{   
       ele.style.backgroundColor= "#4F6D7A";
       ele.style.backgroundImage = null;
    })
})

// function generate_div(num)
// {
//   let container = document.querySelector('.container');
//    for(let i = 0; i < num; i++)
//    {
//       let newdiv = document.createElement('div');
//       let front = document.createElement('div');
//       let back = document.createElement('div');
//       newdiv.appendChild(front);
//       newdiv.appendChild(back);
//       container.appendChild(newdiv);
//    }
// }

// generate_div(16);