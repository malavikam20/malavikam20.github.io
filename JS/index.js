console.log('hello world\n');
name='Vissnuu';
//name='Vava';

console.log(name+'\n');
console.log(typeof name+'\n');

//Object declaration
let person={
    name:'Vissnuu', age:22
};
console.log(person);
console.log(typeof person+'\n');

// Array declaration
let selectedclrs=[];
selectedclrs=['blue',' red',' white'];
console.log(selectedclrs+'\n');

//Function declaration
function greetings(x)
{
    console.log(person + ' ' + selectedclrs + '\nName is ' + x);
}
greetings(name);
console.log(10/0+'\n');
var myarray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(myarray);
