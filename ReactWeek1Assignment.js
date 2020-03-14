class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }

}
const student1 = new Student("Bill", "bill@test.com", "cool kids");
const student2 = new Student("Ted", "ted@test.com", "cool kids");
const student3 = new Student("Death", "death@test.com", "dead place");

class Bootcamp {
    constructor(name, level, students = ["bill@test.com", "ted@test.com"]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(name, email, community) {
        if (this.students.includes(email)) {
            console.log(`${name} is already registerd to ${this.name} with e-mail: ${email}`);
        } else {
            this.students.push(email);
            console.log(`${name} has been registered to ${this.name} bootcamp.`);
        }

    }
}
const react = new Bootcamp("React", "two");
console.log(react.students);
react.registerStudent(student1.name, student1.email, student1.community);
react.registerStudent(student2.name, student2.email, student2.community);
react.registerStudent(student3.name, student3.email, student3.community);
console.log(react.students);