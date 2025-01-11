let a = prompt("1 chi raqamni kiriting");
let b = prompt("Tanlang: \n 1)+ \n 2)- \n 3)* \n 4)/");
let c = prompt("2 chi raqamni kiriting");
let num = Number(`${a}`);
let num2 = Number(`${c}`);

let child1 = document.querySelector('.child1');
let child2 = document.querySelector('.child2');
let child3 = document.querySelector('.child3');
let child4 = document.querySelector('.child4');
let child5 = document.querySelector('.child5');

child1.textContent = `${a}`
child3.textContent = `${c}`

if(b == "1"){
    child2.textContent = '+'
}else if(b == "2"){
    child2.textContent = '-'
}else if(b == "3"){
    child2.textContent = '*'
}else if(b == "4"){
    child2.textContent = '/'
}else{
    alert("notogri kiritilgan")
}

child4.addEventListener("click", function(){
    if(b == "1"){
        child2.textContent = '+'
        child5.textContent =  `Natija: ${a+c}`;
    }else if(b == "2"){
        child2.textContent = '-'
        child5.textContent =  `Natija: ${a-c}`;
    }else if(b == "3"){
        child2.textContent = '*'
        child5.textContent =  `Natija: ${a*c}`;
    }else if(b == "4"){
        child2.textContent = '/'
        child5.textContent =  `Natija: ${a/c}`;
    }
    child5.classList.toggle("baby");
})