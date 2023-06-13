let a = prompt("name");

if (a.charAt() === "A" || a.charAt() === "a") {
  let age = +prompt("enter age");

  if (age >= 20 && age <= 40) {
    let balance = +prompt("enter your balance");

    if (balance >= 100) {
      alert("welcome to club");
    } else {
      alert("you have not enough money");
    }
  } else {
    alert("your age is not enough");
  }
} else {
  alert("your name is not begining with a");
}
