// Конструктор класса
function User(name, id) {
    this.name = name;
    this.id = id;
    this.avatar = 'photo';
    // функциональный подход в ООП:
    // this.deleteAvatar = function () {
    //     this.avatar = null;
    // }
}
// Прототипный подход в ООП
// Используется для оптимизации и экономии места
User.prototype.deleteAvatar = function () {
    this.avatar = null;
}

let john = new User('John', 1);
let alex = new User('Alex', 2);

john.deleteAvatar();
console.log('John', john);
console.log('Alex', alex);

function Admin(name, id) {
   this.name = name;
   this.id = id;
   this.avatar = 'photo'; 
}
// наследуем свойства класса User
Admin.prototype = Object.create(User.prototype);
Admin.prototype.changeMyId = function() {
    this.id = 1;
    console.log('I am the Admin!');
}
let admin = new Admin("Admin", 3);
admin.deleteAvatar();
admin.changeMyId();
// john.changeMyId(); // эта функция доступна только для класса Admin
console.log('Admin', admin);
console.log('John', john);
//console.log(typeof(String(null)));

// let foo = function () {
//     console.log('foo');
// }
// foo();

/*let arr = [1,2];
arr[10] = '312331';
console.log(arr)*/
