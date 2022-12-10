// input
const billTotal = document.getElementById('bill-input');
const tipAmount = document.getElementById('bill-tip');

// Image
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const img = document.querySelectorAll(".people-img");

// display
const totalPeople = document.getElementById('people-total')
const perPerson = document.getElementById('perPerson')



let i = 1;

img.forEach(im => {
    im.onclick = () => {
        if (im.name == "plus") {
            i++;
            totalPeople.innerText = `${i}`;
            calculate();
        }
        else if (im.name == "minus") {
            if (i > 1) {
                i--;
                totalPeople.innerText = `${i}`;
                calculate();
            }
        }
    }
})



function calculate() {
    let tp = Number.parseFloat((tipAmount.value)/100);
    let bill = Number.parseFloat(billTotal.value); 
    let final = (tp*bill) + bill;
   
    let total = final/i;
    perPerson.innerText = `₹${total.toFixed(2)}`;
    // console.log(total);
}
