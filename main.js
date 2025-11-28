/* const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
} */

const genders = ['male', 'female'];

const maleNames = ['Jan', 'Petr', 'Martin', 'Tomáš', 'Jakub', 'Lukáš', 'Josef', 'Jiří', 'Adam', 'David', 'Ondřej', 'Michal', 'Václav', 'Roman', 'Filip', 'Karel', 'Marek', 'Aleš', 'Radek', 'Jaroslav', 'Daniel', 'Šimon', 'Matěj', 'Hynek', 'Erik'];
const femaleNames = ['Anna', 'Marie', 'Tereza', 'Eliška', 'Adéla', 'Karolína', 'Kristýna', 'Kateřina', 'Lucie', 'Natálie', 'Veronika', 'Barbora', 'Markéta', 'Klára', 'Jana', 'Nikola', 'Patricie', 'Alžběta', 'Monika', 'Denisa', 'Sandra', 'Simona', 'Zuzana', 'Michaela', 'Sabina'];

const maleSurnames = ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Němec', 'Marek', 'Král', 'Fiala', 'Růžička', 'Beneš', 'Holub', 'Pokorný', 'Kadlec', 'Jelínek', 'Urban', 'Pospíšil', 'Kolář', 'Sedláček', 'Šimek', 'Kříž'];
const femaleSurnames =['Nováková', 'Svobodová', 'Novotná', 'Dvořáková', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Horáková', 'Němcová', 'Marková', 'Králová', 'Fialová', 'Růžičková', 'Benešová', 'Holubová', 'Pokorná', 'Kadlecová', 'Jelínková', 'Urbanová', 'Pospíšilová', 'Kolářová', 'Sedláčková', 'Šimková', 'Křížová'];

const workloads = [10, 20, 30, 40];

/**
 * The helper function which returns a random item from the given array.
 * @param {Array} array to pick a random item from
 * @returns {*} a randomly selected item from the array
 */
export const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

/**
 * The function which generates a random birthdate of an employee in ISO format between the minimum and maximum age limits.
 * @param {number} minAge the minimum age limit of the employee
 * @param {number} maxAge the maximum age limit of the employee
 * @returns {string} a random birthdate in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
 */
export const getRandomBirthdate = (minAge, maxAge) => {
  const now = Date.now();
  const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

  const minBirthTimestamp = now - maxAge * MS_PER_YEAR;
  const maxBirthTimestamp = now - minAge * MS_PER_YEAR;

  const randomBirthTimestamp = minBirthTimestamp + Math.random() * (maxBirthTimestamp - minBirthTimestamp);

  const randomBirthdate = new Date(randomBirthTimestamp);

  return randomBirthdate.toISOString();
}

/**
 * The function which generates a list of random employees of a company.
 * @param {object} dtoIn contains count of employees, age limit of employees { min, max }
 * @returns {Array} of employees
 */
export const generateRandomEmployees = (dtoIn) => {
  const { count, age: { min, max } } = dtoIn;

  let dtoOut = [];

  for (let i = 0; i < count; i++) {
    const gender = getRandomItem(genders);

    const birthdate = getRandomBirthdate(min, max);

    const name = gender === 'male' ? getRandomItem(maleNames) : getRandomItem(femaleNames);
    const surname = gender === 'male' ? getRandomItem(maleSurnames) : getRandomItem(femaleSurnames);

    const workload = getRandomItem(workloads);

    dtoOut.push({
      gender,
      birthdate,
      name,
      surname,
      workload,
    });
  }

  return dtoOut;
}

/**
 * The main function which calls the application.
 * This application generates a list of random employees of a company (for a more detailed description of the application, see the algorithm).
 * @param {object} dtoIn contains count of employees, age limit of employees { min, max }
 * @returns {Array} of employees
 */
export const main = (dtoIn) => {
  const dtoOut = generateRandomEmployees(dtoIn);
  return dtoOut;
}

/* TEST */
// console.log(JSON.stringify(main(dtoIn), null, 2));
