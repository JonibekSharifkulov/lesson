//first
// let str = "aaa@bbb@ccc";

// console.log(str.replaceAll("@", "!"));

//second
// let str = "HELLOWORLD";

// console.log(str.replace("HELLOWORLD", "Hello world"));

//third

// let str = "Hello , it is html ";

// console.log(str.replace("it is html", "it is not js"));

//forth
// let a = "alex";

// let b = a[0].toUpperCase() + a.slice(1);
// console.log(b);

//fifth

// console.log(Math.floor(Math.random() * 50));

//sixth
// let str = "lex lutter had";

// console.log("A" + str.slice(0, 4));

//last task

let name = "Alex";
let money = 10000;
let acount = 7777;

let userName = prompt("what is your name ?").trim();

if (userName.toLowerCase() === name.toLowerCase()) {
  let acountnum = +prompt("account number ?");

  if (acountnum === acount) {
    let moneynum = +prompt("how many to cash out?");

    if (money >= moneynum) {
      alert(money - moneynum);
    } else {
      alert("you have not enough money");
    }
  } else {
    alert("wrong pasword");
  }
} else {
  alert("it is not you");
}
