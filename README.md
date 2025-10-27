# CHATSTACK

---
## To Run:

1. clone or fork the repository and pull it to your machine *reword*
2. in terminal, run `npm install` to install dependencies in `package.json`
3. in terminal, `npm run dev` to start the webpage (front end). This should be visible at http://localhost:4321
4. in a second terminal window, run `node server\server.js` (windows) (*add mac pathing*) to start the server. This should be visible at http://localhost:5000/api/medications
5. visit pages on the webste, such as ''*insert* to query the mock data and see the site in action

---

## Tools & Libraries 💼

Astro (frontend) (UI)
  ↕
Express.js (backend API)
  ↕
PostgreSQL (persistent data)

- PostgreSQL 18 + [node-postgres](https://node-postgres.com/)
- Node.js v22.21.0
- Express.js v5!
- Astro.js v5

## Architecture Diagram
     ┌────────────────────────────┐
     │         Frontend           │
     │   Astro + CSS + JS         │
     │   (Chat UI)                │
     └───────────┬────────────────┘
                 │ fetch("/api/chat")
     ┌───────────▼────────────────┐
     │        Express.js           │
     │  Chat route: /api/chat      │
     │  DB route: /api/medications │
     └───────────┬────────────────┘
                 │
     ┌───────────▼────────────────┐
     │     PostgreSQL Database     │
     │  (Stores meds & chat logs)  │
     └───────────┬────────────────┘
                 │
     ┌───────────▼────────────────┐
     │   Hugging Face Model API    │
     │ (LLM: text-generation)      │
     └────────────────────────────┘

---

🔄 Flow Summary
1. User visits /medications
→ Astro renders medications.astro.
→ It calls /api/medications.
2. Astro dev proxy
→ Forwards /api/medications → http://localhost:5000/api/medications.
3. Express server (port 5000)
→ Handles /api/medications.
→ Queries PostgreSQL → returns JSON.
4. PostgreSQL
→ Stores real medication records.

---

## Toolkit Setup 🎮
- for windows, install node using `nvm`, and grab it from [here](https://github.com/coreybutler)
- VSCode Astro extension [here](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

---

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
