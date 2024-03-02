// async function test() {
//     return 'Nahid';
// }

// const result = test()
// console.log(result);

const a= 10;
const b = 20;
console.log('hello from line 10');
const sum=a+b;

const test =async() =>{
    const response =await fetch(
      "https://openapi.programming-hero.com/api/news/category/01"
    );
    //json parse
    const data = await response.json();
    console.log(data.data);
}

test();



console.log(sum);
