const data = 
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
}

for(a in data) {
    console.log(` ${a} : ${data[a]}`);
}

console.log(Object.keys(data))
console.log(Object.values(data))
console.log(Object.entries(data))

