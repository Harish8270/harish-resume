let menu=document.querySelector(".menu");
let togBtn=document.querySelector("#toggler");

togBtn.addEventListener("click", function(){
    menu.classList.toggle("active");
})

/* progress bar logic */

const cirProgress = document.querySelectorAll(".progress"); //target all progress

Array.from(cirProgress).forEach(item =>{
    const proVal =item.getAttribute("data-value"); //read value from data-value attribute
    console.log(`proVal = `,proVal); //print the values in console

    const pro=item.querySelector(".pro-val");//target pro-val

    let startVal=0;
    let endVal = Number(proVal);
    let speed=50;

    //timer

    const progress = setInterval(() => {
        startVal++;
        pro.textContent = `${startVal}%`;
        pro.style.color =`black`;

        //adding background colors to each progress circle
        item.style.background=`conic-gradient(orange ${startVal * 3.6}deg, deepskyblue ${0}deg)`

        if(startVal === endVal){
            clearInterval(progress);//to clear the timing
        }

    }, speed);
})

/* to display current year */

document.querySelector(".yr").innerText = new Date().getFullYear();