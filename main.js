const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// ******* ACCESSING ITEMS IN ARRAY 
// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

// *********** ASSIGNMENT
// students[0] = 'Matthew';
// console.log(students);

// *********** ARRAYS AND FUNCTIONS
// valuePrinter accepts an array and a number
const valuePrinter = (array, index) => {
  return array[index];
}

console.log(valuePrinter(students, 2));
console.log(valuePrinter([1,2,3,4,5], 2));

// Write a function that takes an array of something and tells you if the name 'Greg' is in that array


// findStudent accepts an array and a string
const findStudent = (array, student) => {
  return array.includes(student);
}

console.log(findStudent(students, 'Greg')); // false
console.log(findStudent(students, 'Dr. T')); // false
console.log(findStudent(students, 'Nathan')); // true
