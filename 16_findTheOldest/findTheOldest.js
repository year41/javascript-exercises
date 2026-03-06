// const getAge = function (birth, death) {
//     if (!death) {
//         death = new Date().getFullYear();
//     };
//     return death - birth;
// }

// const findTheOldest = function (obj) {
//     return  obj.reduce((older, current) => {
//         const oldestAge = getAge(older.yearOfBirth, older.yearOfDeath);
//         const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
//         return oldestAge < currentAge ? current : older;
//     });

    // My solution but it's incomplete \/
 /*   const oldest = obj
        .filter(person => person.yearOfDeath > 1)
        .sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1 : 1)
    return oldest[0]
};
*/

// Alternative suggested solution
const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
    const peopleOldestToYoungest = people.toSorted(
        (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );
    console.log(peopleOldestToYoungest)
    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
