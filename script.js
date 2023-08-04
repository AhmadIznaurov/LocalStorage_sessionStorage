// sessionStorage, cookie

// sessionStorage.setItem('course', 'lincode');

// const lincode = sessionStorage.getItem('course')

// console.log(lincode);


let counter = 0

let setCount = () => {
    
    setInterval(() => {
        counter++
       console.log(counter); 
    }, 1000)
    
}

setCount();

localStorage.setItem('counter', counter);
console.log(counter);