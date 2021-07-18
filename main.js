//HUMAN
function Human(firstname, lastname, sex) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sex = sex;
}
Human.prototype.sleap = function () {
    console.log('zzZz');
}
Human.prototype.speak = function () {
    console.log('tolking');
}


//MAN 
function Man(firstname, lastname, sex) {
    Human.call(this, firstname, lastname, sex)
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;


//HUNTER
function Hunter(firstname, lastname, sex, license) {
    Man.call(this, firstname, lastname, sex);
    this.license = license;
}
Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype.hunterInfo = function(){
    console.log(this.license);
}

Hunter.prototype.wolk = function () {
    console.log('wolking');
}
Hunter.prototype.shooting = function () {
    console.log('shooting');
}

let hunter = new Hunter('Ivan', 'Ivanov', 'man', true);
console.log(hunter);
hunter.hunterInfo();
hunter.shooting();
hunter.wolk();
hunter.speak();
hunter.sleap();


//WORKER
function Worker(firstname, lastname, sex, go_for_a_work) {
    Man.call(this, firstname, lastname, sex);
    this.go_for_a_work = go_for_a_work;
}
Worker.prototype = Object.create(Man.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.workerInfo = function(){
    console.log(this.go_for_a_work);
}

Worker.prototype.hard_work = function () {
    console.log('hard work');
}
Worker.prototype.wake_up_early = function () {
    console.log('wake up early');
}

let worker = new Worker('Pavlo', 'Pavlov', 'man', false);
console.log(worker);
worker.workerInfo();
worker.wake_up_early();
worker.hard_work();
worker.speak();
worker.sleap();


//WOMAN
function Woman(firstname, lastname, sex) {
    Human.call(this, firstname, lastname, sex)
}
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;


//LIBRARIAN
function Librarian(firstname, lastname, sex, education) {
    Woman.call(this, firstname, lastname, sex);
    this.education = education;
}
Librarian.prototype = Object.create(Woman.prototype);
Librarian.prototype.constructor = Librarian;

Librarian.prototype.librarianInfo = function(){
    console.log(this.education);
}
Librarian.prototype.quiet = function () {
    console.log('quiet');
}
Librarian.prototype.publish_books = function () {
    console.log('publish books');
}

let librarian = new Librarian('Oksana', 'Oksanova', 'woman', true);
console.log(librarian);
librarian.librarianInfo();
librarian.publish_books();
librarian.quiet();
librarian.speak();
librarian.sleap();


//NURSE
function Nurse(firstname, lastname, sex, education) {
    Woman.call(this, firstname, lastname, sex);
    this.education = education;
}
Nurse.prototype = Object.create(Woman.prototype);
Nurse.prototype.constructor = Nurse;

Nurse.prototype.nurseInfo = function(){
    console.log(this.education);
}

Nurse.prototype.study = function () {
    console.log('study');
}
Nurse.prototype.to_help_people = function () {
    console.log('to help people');
}

let nurse = new Nurse('Olga', 'Olgivna', 'woman', false);
console.log(nurse);
nurse.nurseInfo();
nurse.to_help_people();
nurse.study();
nurse.speak();
nurse.sleap();







console.log('--------------Animal-----------------');
//завдання 2

function Animal(the_name_of_the_animal, wool, tail, wings) {
    this.the_name_of_the_animal = the_name_of_the_animal;
    this.wool = wool;
    this.tail = tail;
    this.wings = wings;
}
Animal.prototype.sleap = function () {
    console.log('zzZz');
}
Animal.prototype.eat = function () {
    console.log('eat');
}


//Herbivorous
function Herbivorous(the_name_of_the_animal, wool, tail, wings) {
    Animal.call(this, the_name_of_the_animal, wool, tail, wings);
}
Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.prototype.constructor = Herbivorous;


// RABBIT
function Rabbit(the_name_of_the_animal, wool, tail, wings,fast) {
    Herbivorous.call(this, the_name_of_the_animal, wool, tail, wings,fast);
    this.fast = fast;
}
Rabbit.prototype = Object.create(Herbivorous.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.rabbitInfo = function(){
    console.log(this.fast);
}
Rabbit.prototype.the_rabbit_jumps = function () {
    console.log('the rabbit jumps');
} 

let rabbit = new Rabbit('Rabbit', true, true,false,'70 km per hour');
console.log(rabbit);
rabbit.rabbitInfo();
rabbit.the_rabbit_jumps(); 
rabbit.eat();
rabbit.sleap();


// GIRAFFE
function Giraffe(the_name_of_the_animal, wool, tail, wings,height) {
    Herbivorous.call(this, the_name_of_the_animal, wool, tail, wings,height);
    this.height = height;
}

Giraffe.prototype = Object.create(Herbivorous.prototype);
Giraffe.prototype.constructor = Giraffe;

Giraffe.prototype.speed_of_55_km_per_hour = function () {
    console.log('speed of 55 km per hour');
}

let giraffe = new Giraffe('Giraffe',true,true,false,'5.5m');
console.log(giraffe);
giraffe.speed_of_55_km_per_hour(); 
giraffe.eat();
giraffe.sleap();





//PREDATOR
function Predator(the_name_of_the_animal, wool, tail, wings) {
    Animal.call(this, the_name_of_the_animal, wool, tail, wings);
}
Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;


//OWL
function Owl(the_name_of_the_animal, wool, tail, wings,width) {
    Herbivorous.call(this, the_name_of_the_animal, wool, tail, wings,width);
    this.width = width;
}

Owl.prototype = Object.create(Herbivorous.prototype);
Owl.prototype.constructor = Owl;

Owl.prototype.owlInfo = function(){
    console.log(this.width);
}

Owl.prototype.has_sharp_claws = function () {
    console.log('has sharp claws');
}

let owl = new Owl('Owl',false,true,true,'500-700 grams');
console.log(owl);
owl.owlInfo();
owl.has_sharp_claws(); 
owl.eat();
owl.sleap();


//WOLF
function Wolf(the_name_of_the_animal, wool, tail, wings,width) {
    Herbivorous.call(this, the_name_of_the_animal, wool, tail, wings,width);
    this.width = width;
}

Wolf.prototype = Object.create(Herbivorous.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.wolfInfo = function(){
    console.log(this.width);
}
Wolf.prototype.has_sharp_teeth = function () {
    console.log('has sharp teeth');
}

let wolf = new Wolf('Wolf',true,true,false,'45-60 kilogram');
console.log(wolf);
wolf.wolfInfo();
wolf.has_sharp_teeth(); 
wolf.eat();
wolf.sleap();
