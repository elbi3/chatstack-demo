//Basic Variable and Object Annotations

/** @type {string} */
let username = "Alice";

/** @type {number} */
const count = 5;

/** @type {boolean} */
let isReady = true;

/** @type {any} */
let flexible;

//Arrays and Objects
/** @type {string[]} */
const medicationNames = ["Amoxicillin", "Lisinopril", "Metformin"];

/**
 * @type {{ id: number, name: string, description: string }[]}
 */
const medications = [
  { id: 1, name: "Amoxicillin", description: "Antibiotic" },
  { id: 2, name: "Lisinopril", description: "Blood pressure" }
];

//Typedefs (for reusable structures) (this should add an autocomplete to your IDE)
/**
 * @typedef {Object} Medication
 * @property {number} id
 * @property {string} name
 * @property {string} description
 */

/** @type {Medication[]} */
const meds = [
  { id: 1, name: "Atorvastatin", description: "Lowers cholesterol" },
  { id: 2, name: "Omeprazole", description: "Reduces acid" },
];

//Functions, their Parameters, and their Return Type
/**
 * Calculates a discount for a given price.
 * @param {number} price - The original price.
 * @param {number} discountRate - Discount rate (0–1).
 * @returns {number} - The discounted price.
 */
function applyDiscount(price, discountRate) {
  return price * (1 - discountRate);
}
//async functions
/**
 * Fetches medication list from an API.
 * @async
 * @returns {Promise<Medication[]>}
 */
async function fetchMedications() {
  const res = await fetch("/api/medications");
  return res.json();
}
//Parameters, defaults, optional args
/**
 * @param {string} name
 * @param {number} [age] - Optional
 * @param {string} [role="customer"] - Default
 */
function greet(name, age, role = "customer") {
  console.log(`Hello ${name}, age ${age || "?"}, role ${role}`);
}
//Import types
/**
 * @param {import('pg').Pool} pool - PostgreSQL connection pool
 */
async function getMedications(pool) {
  const result = await pool.query("SELECT * FROM medications");
  return result.rows;
}
//Express
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function getMedications(req, res) {
  res.json([{ id: 1, name: "Metformin" }]);
}
/**
 * Logs incoming request paths.
 * @type {import('express').RequestHandler}
 */
const logger = (req, res, next) => {
  console.log(req.path);
  next();
};
