document.addEventListener('DOMContentLoaded', function () {

    let one = 0;
    let two = 0;
    let three = 0;
    let four = 120;
    let five = 30;

    let total = document.querySelector('.total');

    function adding(){
        let sum =  one+two+three+four+five;
        total.innerText='$'+sum;
    }
    adding();


// -------------------- 1 --------------------
    let products = document.getElementById('products');
    let calculateProducts = document.querySelector('.calculateProducts');
    let sumPart1 = document.querySelector('.sumPart1');


    products.addEventListener('input', function () {
        if (Number.isInteger(parseFloat(this.value)) && parseFloat(this.value) > 0) {
            calculateProducts.innerText = this.value + ' * $1.25';
            sumPart1.style.width='30%'
            sumPart1.innerText = '$' + this.value * 1.25;
            one = this.value * 1.25;
            adding()
        } else {
            calculateProducts.innerText=''
            sumPart1.style.width='250%';
            sumPart1.innerText='Wprowadź dodatnią liczbę całkowitą'
            total.innerText=''
        }
        if (products.value.length < 1) {
            calculateProducts.innerText=''
            sumPart1.innerText=''
            total.innerText=''
        }
    });
// -------------------- 2 --------------------
    let orders = document.getElementById('orders');
    let calculateOrders = document.querySelector('.calculateOrders');
    let sumPart2 = document.querySelector('.sumPart2');

    orders.addEventListener('input', function () {
        if (Number.isInteger(parseFloat(this.value)) && parseFloat(this.value) > 0) {
            calculateOrders.innerText=this.value + ' * $0.5';
            sumPart2.style.width='30%'
            sumPart2.innerText='$'+this.value * 0.5;
            two = this.value * 0.5;
            adding()
        } else {
            calculateOrders.innerText=''
            sumPart2.style.width='250%';
            sumPart2.innerText='Wprowadź dodatnią liczbę całkowitą'
            total.innerText=''
        }
        if (orders.value.length < 1) {
            calculateOrders.innerText=''
            sumPart2.innerText=''
            total.innerText=''
        }

    });
// ----------------- dropdown ----------------
    let dropdownBtn = document.querySelector('.dropbtn');
    let dropdownBtnText = document.querySelector('.dropbtnText')
    let dropdownContent = document.querySelector('.dropdown-content');
    let dropdownImg = document.querySelector('.dropdownImg');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.classList.toggle('clicked')
        dropdownImg.classList.toggle('clicked')
    });

    let options = document.querySelectorAll('option');
    let packageType = document.querySelector('.packageType');
    let sumPart3 = document.querySelector('.sumPart3');


    for (let i = 0; i <options.length; i++) {
        options[i].addEventListener('click', function () {
            dropdownBtnText.style.color = 'black';
            dropdownContent.classList.toggle('clicked')
            dropdownImg.classList.toggle('clicked')
            dropdownBtnText.innerText = this.value;
            packageType.innerText = this.value;
            switch (options[i].value) {
                case 'Basic':
                    sumPart3.innerText = '$0';
                    three = 0;
                    adding()
                    break;
                case 'Professional':
                    sumPart3.innerText = '$25';
                    three = 25;
                    adding()
                    break;
                case 'Premium':
                    sumPart3.innerText = '$60';
                    three = 60;
                    adding()
                    break;
            }
        });
    }
// -------------------- 4 --------------------

    let accounting = document.getElementById('accounting');
    let sumPart4 = document.querySelector('.sumPart4');


    accounting.addEventListener('input', function () {
        if (accounting.checked === true) {
            sumPart4.innerText='$120';
            four = 120;
            adding()

        } else {
            sumPart4.innerText='$0';
            four = 0;
            adding()

        }
    });
// -------------------- 5 --------------------
    let terminal = document.getElementById('terminal');
    let sumPart5 = document.querySelector('.sumPart5');


    terminal.addEventListener('input', function () {
        if (terminal.checked === true) {
            sumPart5.innerText='$30';
            five = 30;
            adding()

        } else {
            sumPart5.innerText='$0';
            five = 0;
            adding()

        }
        console.log(one+two+three+four+five)
    });

// ---------------- hamburger ----------------

    const hamburger = document.querySelector('.navTrigger');
    const sectionZero = document.querySelector('.section-0')


    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        sectionZero.classList.toggle('visible')
    });
});



