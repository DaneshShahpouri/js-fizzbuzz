//Ciclo su console-------------
for(let i = 1; i<= 100; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if ( i % 3 == 0 ){
        console.log("Fizz");
    }else if ( i % 5 == 0 ){
        console.log("Buzz");
    }else{
        console.log(i)
    }
}

// Bonus --------------------
let container = document.getElementById("grid-container");

for(let k = 1; k <= 100; k++){

    let box = document.createElement("div");

    let styleBox = "; display: flex; align-items: center; justify-content:center; color: black; font-size:1.2em"
        if( k % 3 == 0 && k % 5 == 0){
            box.innerHTML= "FizzBuzz";
            box.style = "background: rgb(240, 70, 111); " + styleBox;
        } else if ( k % 3 == 0 ){
            box.innerHTML= "Fizz";
            box.style = "background:rgb(12, 214, 161);" + styleBox;
        }else if ( k % 5 == 0 ){
            box.innerHTML= "Buzz";
            box.style = "background:rgb(255, 209, 102);" + styleBox;
        }else{
            box.innerHTML= k;
            box.style = "background:rgb(19, 137, 178);" + styleBox;
        }

    box.classList.add("square");
    
        
    container.append(box)
}