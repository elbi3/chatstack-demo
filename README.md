# CHATSTACK

## Tools & Libraries 💼

- [node-postgres](https://node-postgres.com/)
- Node.js v22.21.0
- express.js
- PostgreSQL 

## Toolkit Setup 🎮
- for windows, install node using `nvm`, and grab it from [here](https://github.com/coreybutler)
- VSCode Astro extension [here](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
## Helpful Checks ✅

### Ensure Node Environment is Ready for Coding ⚽️
```shell
node -v
nvm -v
npm -v
```

```shell
npm install ---> adds any dependencies astro needs to the package.json file
npm run dev ---> runs demo in browser
```
navigate to http://localhost:4321/ to view demo!

other installs that were added to packaage.json: 
```shell
npm install express pg dotenv
```

### No TypeScript
In my humble opinion, TypeScript is out of the scope of this project, since we just need to get something up and running and TS is a headache. Using JSDocs will be just as effective. If you get type warnings, like `"Parameter 'm' implicitly has an 'any' type.ts(7006)"`, it doesn't mean your code is necessarily wrong, just that the variable could be anything. Here are two easy fixes:
Put this at the top of your .js file with the warning to turn off warnings for that file: 
// @ts-nocheck
just skip a line:
// @ts-ignore

Second option is to use a "JSDoc" comment, and add a definition to your variable:
```js
/**
 * @typedef {Object} Medication
 * @property {number} id
 * @property {string} name
 * @property {string} description
 */

/** @type {Medication[]} */
const meds = [
  { id: 1, name: "Ibuprofen", description: "Pain relief" },
  { id: 2, name: "Cetirizine", description: "Allergy relief" }
];
```
