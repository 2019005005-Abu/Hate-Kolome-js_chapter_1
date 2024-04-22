//r w
let arrayName=['Rahim','Karim','Rafiq','Jabbar'];
console.log(arrayName);
let array2=new Array('Bangladesh','India','Japan','USA');
console.log(array2);
console.log('Array-Length',array2.length);
console.log("arrayName['length']",arrayName['length']);
console.log(arrayName[0]);

for(let i=0;i<arrayName['length'];i++){
    console.log(arrayName[i]);
}
//add to last
console.log(arrayName.push('Porosh','Ripon','Monjina'));
// remove to last
console.log(arrayName.pop());
//add to first
console.log(arrayName.unshift('Ramjan','Banu'));
//remove to  first
console.log(arrayName.shift())
console.log(arrayName.shift())
//finding the index
console.log(arrayName.indexOf('Karim'));
//remove item using index
console.log('Using splice',arrayName.splice(2,2));
let f=['C','C++','JS','TS','Python']
//remove all using splice
console.log(f.splice(0))
console.log(f)
let n=[1,2,3,4,5,6,7,8,9,0]
console.log(n.splice(3));
console.log(n.splice(0,1));
console.log(n);
//Object_decralation
let rahim=new Object();
rahim={
fullName:'Abu Al Shahriar Rifat',
age:25,
address:'Dhaka',
job:'Software Engineering',
FullName:function(f_name,l_name){
    this.f_name=f_name;
    this.l_name=l_name;
    console.log(this.f_name+''+this.l_name);
},
welcome:function(){
    console.log('Congraulation')
},
My_Base_Language:['C','C++','JS','TS','Python'],
arrObjec:{
    MY_CP_Language:['C++','Python'],
    Backend_Language:['Python'],
    ML_Language:['Python']
   }
}

rahim.FullName('Shahrar ','Rifat');
rahim.welcome();

//using loope in Object
for(let item in rahim){
    console.log(item);
}

console.log(rahim.My_Base_Language[0]='Java');
console.log(rahim.My_Base_Language);

//using loope in Nested_Object
for(let item in rahim.arrObjec.MY_CP_Language){
    console.log(rahim.arrObjec.MY_CP_Language[item]);
}

// Call BackFunction
function printName(Name,Age){
    console.log(`My Name is ${Name} and age ${Age}`);
}
printName('Rifat',25);


function MyCallBack(name, callback) {
    let my_age = 25;
    callback(my_age);
    console.log(`Yes, my name is ${name}`);
}

function hello(age) {
    console.log(`I am ${age} years old`);
}

MyCallBack('Rifat', hello);

function MyData(name,CallBack){
    const myF='Shahriar';
    const l_na='Rifat'
    const F_Name=myF.concat(l_na);
    CallBack(F_Name);
    console.log("My Name is "+name);
}
function MyDetails(f_name,l_name){
  this.f_name=f_name;
  this.l_name=l_name;
  console.log(`${this.f_name} ${this.l_name}`)
}
MyData("Abu Al Shahriar Rifat",MyDetails);