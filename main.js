// 1
var para = document.getElementsByClassName('click');
for(var index=0;index<para.length;index++) {
para[index].addEventListener("click", function() {
    console.log("i was clicked");
});
}
// 2
var paraOne = document.getElementById('para1');
var paraTwo = document.getElementById('para2');
paraOne.addEventListener("click", function() {
    paraOne.innerText = "text1";
})
paraTwo.addEventListener("click", function() {
    paraTwo.innerText = "text2";
})
// 3
var press = document.getElementById('button');
var insert = document.getElementById('input');
insert.value = "hello there";
insert.addEventListener("click", function() {
    console.log(insert.value);
})
// 4
var press = document.getElementById('button');
var parag = document.getElementById('para');
press.onclick = function() {
    parag.innerText = "hello";
}
// 5
var press = document.getElementById('button');
var headFruits = document.getElementById('fruits');
press.addEventListener("click", function() {
    console.log(headFruits.value);
})
// 6
var carsBrand = document.getElementsByClassName('brand');
for(let index=0;index<carsBrand.length;index++) {
    carsBrand[index].addEventListener("click", function() {
        console.log(carsBrand[index].innerText);
    })
}
// 7
var parag = document.getElementById('para');
parag.addEventListener("click", function() {
    console.log(parag.innerText = "clicked");
})
// 8
var press = document.getElementById('button');
var insert = document.getElementById('input');
press.addEventListener("click", function() {
    console.log(insert.value.length);
})
// 9
var namesList = document.getElementsByClassName('names');
var inputName = document.getElementById('name');
var press = document.getElementById('button');
press.addEventListener("click", function () {
    for (let index = 0; index < namesList.length; index++) {
        if (inputName.value == namesList[index].innerText) {
            console.log(index);
            return;
        }
    }
    console.log("not on the list");
    return;
});
// 10
var press = document.getElementById('button');
press.addEventListener("click", function() {
    press.innerText = Math.random();
})
// 11
var father = document.getElementById('fth');
var insert = document.getElementById('input');
var press = document.getElementById('button');
press.addEventListener("click", function () {
    father.innerHTML += `<p> ${insert.value} </p>`;
});
// 12
var pictures = document.getElementsByClassName('images');
for(let index=0;index<pictures.length;index++) {
    pictures[index].addEventListener("click", function() {
    pictures[index].style.display="none";
})    
}
// 13
var circles = document.getElementsByClassName('circle');
for(let index=0;index<circles.length;index++) {
    circles[index].addEventListener("click", function() {
        circles[index].style.display="none";
    })
}
// 14
var press = document.getElementById('button');
var parag = document.getElementById('para');
press.style= "height: 150px; width: 150px; border: red solid 10px;"
parag.style="height: 150px; width: 150px; border: red solid 10px;"
15
var division = document.getElementById('div');
division.addEventListener("click", function() {
    division.style.border="solid black 10px";
    division.innerText = "i was change";
})
