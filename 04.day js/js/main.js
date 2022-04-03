const inventors = [
    { first: 'Alert', last: 'Einstain', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernikus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Plansk', year: 1858, passed: 1947 },
];

const people = ['Bech, Glenn', 'Becker, Carl', 'Beckertt, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony'];


// Array.prototype.filter()
// 1. Filter list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
    if(inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last name
    const fullName = inventors.map(inventor => `${inventor.first}  ${inventor.last}`)
    console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate oldest to youngest
    // const ordered = inventors.sort(function(a, b) {
    //     if(a.year > b.year){
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived
