const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber)
if (randomNumber > 5) {
    for (var i = 5; i < 11; i++) {    
        console.log(i)}
    } else {
        console.log('Wylosowana liczba jest zbyt mala aby uzyc petli')
    }
