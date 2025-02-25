console.log(Math.random() * 10);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100)+100);

console.log(Math.floor(Math.random()*1000)+2000);
console.log(Math.floor(Math.random()*100)+400);

function dobas_mutat(){
    let dobas = Math.ceil(Math.random()*6)
    document.getElementById('dobas').innerHTML = dobas;
}

function lotto()
{
    let szamok = [];
for (let i = 0; i < 5; i++)
    {
        szamok.push(Math.ceil(Math.random() * 90));
    }
    document.getElementById('lotto').innerHTML = 'Az öt szám: ' + szamok.join(', ')
}
