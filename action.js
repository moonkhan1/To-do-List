let cart = document.querySelector('.cart');
cart.style.background = '#FFFFFF';
cart.style.padding = "15px";
cart.style.borderRadius = "10px";
cart.style.border = "1px solid #C4C4C4"
cart.style.width = "337px";
cart.style.height = "290px";
cart.style.marginTop = "232px";
cart.style.marginLeft = "408px";
cart.style.position = 'absolute';

let button = document.querySelector('.add');
button.style.width = "150px";
button.style.height = "42px";
button.style.top = "195px";
button.style.left = "85px";
button.style.color = '#FFFFFF'
button.style.borderRadius = "71px";
button.style.borderStyle = "none";
button.style.background = "#833AE0";
button.style.marginLeft = "80px";
button.style.marginTop = "30px";
button.style.padding = "5px";

let plus = document.querySelector('.plus');
plus.style.border = "1px solid #9953F1"
plus.style.background = "#9953F1";
plus.style.borderRadius = "71px";
plus.style.position = 'absolute';
plus.style.width = "39px";
plus.style.height = "39px";
plus.style.color = '#FFFFFF';
plus.style.marginTop = "-4px";
plus.style.marginLeft = "-8px";

let yellow = document.querySelector('.yellow');
yellow.style.position = 'absolute';
yellow.style.width = "335px";
yellow.style.height = "29px";
yellow.style.top = "0px";
yellow.style.left = "0px";
yellow.style.background = "#FFDC40";
yellow.style.borderTopLeftRadius = "10px";
yellow.style.borderTopRightRadius = "10px";

let input = document.querySelector('.input');
input.style.width = "300px";
input.style.height = "35px";
input.style.borderRadius = "10px";
input.style.border = "1px solid #C4C4C4"
input.style.marginTop = "20px";


let sil = document.querySelector('.sil');
sil.style.position = 'absolute';
sil.style.width = "20px";
sil.style.height = "20px";
sil.style.borderRadius = "10px";
sil.style.border = "1px solid #C4C4C4";

sil.style.marginTop = "18px"
sil.style.marginLeft = "20px"
sil.style.background = "#FFFFFF";



let xett_1 = document.querySelector('.xett_1');
xett_1.style.position = 'absolute';
xett_1.style.top = "-8px";


let sort = document.querySelector('.sort');
sort.style.left = '280px';
sort.style.top = '75px';


var zolaq = document.querySelector(".zolaq")
var list = document.querySelector(".list");
list.style.display = "none"
zolaq.style.border = "none";
button.addEventListener('click', function () {
    var input_value = document.querySelector('.input').value
    cart.style.height = "auto";

    input.style.border = "none"
    list.style.display = "block"
    list.innerHTML += `<div class="list_new">
    <input class = "input" type = "text" value = "${input.value}">
    <button onclick="removeElement()" class="del"><p class="xett_1"></p></button></div>`;
    input.value = "";

    var deletes = document.querySelectorAll('.del')
    // Iterate all nodes
    deletes.forEach(btn => {
    // Attach event listener. Note to preserve the button this-reference
    // by using the non-shorthand function
    btn.addEventListener('click', function() {
        var item = this.parentNode
        item.remove()
    })
})

})



var arr = [];
var count = 0;
var sortbtn = document.querySelector(".sortbtn");
sortbtn.addEventListener('click', sort_it);
var del = document.querySelector(".del")

// function removeElement() {
//     var i = 0;
//     var item = document.querySelector("list_new:last-child");
//     i++;
//     item.parentElement.removeChild(item);

// }




function sort_it() {

    let list_of_all = document.querySelectorAll('.input');
    list_of_all.forEach(item => arr.push(item.value))
    console.log(arr);
    list.innerHTML = '';
    arr.pop();

    if (count === 0) {
        giveOrder(count);
        count++;
        sort.src = "artan.svg"
    } else {
        giveOrder(count);
        count--;
        sort.src = "azalan.svg"
    }
    arr = [];
};

function giveOrder(item) {
    if (item == 0) {
        var element = ''

        arr.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });

        arr.map(c => {
            element += `<div class="list_new"> 
            <input class="input" type="text"  value="${c}">
            <button onclick="removeElement()" class="del"><p class="xett_1"></p></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);

    } else {
        let element = ''

        arr.sort(function (a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
        arr.map(c => {
            element += `<div class="list_new"> 
            <input class="input" type="text" value="${c}">
            <button onclick="removeElement()" class="del"><p class="xett_1"></p></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);
    }
}
