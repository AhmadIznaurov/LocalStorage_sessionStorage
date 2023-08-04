// localStorage.setItem('city', 'new-york')  If we want to set any key and check it we need to make this process with localStoeage


// const key = localStorage.getItem('key'); If we want to get any key we need to use getItem method
// const city = localStorage.getItem('city');
// console.log(key);
// console.log(city);


// const key = localStorage.removeItem('key') If we want to delete any key we use this method removeItem
// console.log(key);


// const object = {
//     importance: 'middle',
//     year: 5,
//     company: 'EPAM'
// }

// const strObject = JSON.stringify(object);
// console.log(strObject);
// localStorage.setItem('MyInfo', strObject)




// const array = ['EPAM', 'GOOGLE', 'YANDEX', 'APPLE', 'MICROSOFT', 'IT-INCUBATOR', 'IT-ONLINE-SCHOOL', 'CRY-ENGINE'];
// // const arr = [1,2,3,4,5]
// const srtArr = JSON.stringify(array);

// localStorage.setItem('IT-Company', srtArr);

// const myArr = localStorage.getItem('IT-Company');
// console.log(JSON.parse(myArr));


// const myObj = localStorage.getItem('MyInfo');
// console.log(JSON.parse(myObj));



const lincode = localStorage.getItem('course'); // If you want to get value 'null' you need to clear the localStorage and then to check log
console.log(lincode === null);