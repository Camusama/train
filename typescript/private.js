var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Student.prototype, "userInfo", {
        get: function () {
            return '姓名：' + this.name + ',年龄：' + this.age;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var stu = new Student('Chocolate', 21);
console.log(stu.userInfo); // 姓名：Chocolate,年龄：21
