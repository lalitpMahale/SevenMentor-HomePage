let numbers = document.querySelectorAll(".number");

numbers.forEach(function(number){
    let target = Number(number.getAttribute("data-target"));
    let count = 0;


    let interval = setInterval(function(){
        count += Math.ceil(target/100);



        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        number.innerHTML = count.toLocaleString() + "+";
    }, 20);
});