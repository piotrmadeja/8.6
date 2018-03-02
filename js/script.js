var a = prompt ('a'),
    b = prompt ('b');
    console.log('(a * a) - (2 * a * b) - (b * b)');
    console.log('a =' + a);
    console.log('b =' + b);

var value = (a * a) - (2 * a * b) - (b * b);

console.log('Wynik to: ' + value);
alert('Wynik to' + value);

if (value > 0) {
    console.log('Wynik dodatni');
  } else if (value === 0) {
    console.log('Zero!');
  } else {
    console.log('Wynik ujemny');
  }

  if (value > 0) {
    alert ('Wynik dodatni');
  } else if (value === 0) {
    alert ('Zero!');
  } else {
    alert ('Wynik ujemny');
  }