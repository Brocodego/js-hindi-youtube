let myDAte=new Date();
// console.log(myDAte);
// console.log(myDAte.toString());
// console.log(myDAte.toDateString());
// console.log(myDAte.toLocaleString());

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// let thisDate =new Date(2023,0,23,5,3)
// console.log(thisDate.toLocaleString());

let myCreatedDate=new Date("2023-01-14");
let myCreateDate=new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreateDate.toLocaleString());
// console.log(myCreatedDate.getTime()/1000);
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)

let newDate=new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate.toLocaleString());













