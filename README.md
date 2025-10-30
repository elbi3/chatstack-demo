# CHATSTACK 📱

## Application Architecture and Data Flow:
Astro serves the UI, proxies API requests to an Express.js backend, which queries a PostgreSQL database and returns structured medication data as JSON to be rendered in the frontend.

---

## To Run:

1. Click “Fork” on GitHub or clone directly: `git clone https://github.com/elbi3/chatstack-demo.git`
2. Then open the project folder in your terminal: `cd chatstack-demo`
2. In terminal, run `npm install` to install dependencies in `package.json`
3. In terminal, `npm run dev` to start the webpage (front end). 
The Astro development server should start at: 👉 http://localhost:4321
4. To start the back-end, open a second terminal window, run `node server\server.js` (windows) or `node server/server.js` (mac) to start the server. 
The API should now be live at: 👉 http://localhost:5000/api/medications
5. Visit the site: 
    - Open http://localhost:4321
    - Navigate to /medications to see live medication data fetched from the database.
    - Other pages (like /stack) describe the technology setup.

---

## Tools & Libraries 💼

- PostgreSQL 18 + [node-postgres](https://node-postgres.com/)
- Node.js v22.21.0
- Express.js v5!
- Astro.js v5

## Diagrams

### tiny flow diagram:

Astro (frontend) (UI) 
  
  ↕  
  
Express.js (backend API) 
  
  ↕ 
  
PostgreSQL (persistent data) 

 
### tiny file structure diagram:
📦 Project Root  
 ┣ 📂 src/         # Astro frontend (UI, pages)  
 ┣ 📂 server/      # Express backend (API, DB, AI integration)  
 ┣ 📄 astro.config.mjs  
 ┣ 📄 package.json  
 ┗ 📄 .env  

### Architecture Diagram

     ┌────────────────────────────┐
     │         Frontend           │
     │   Astro + HTML + CSS + JS  │
     │   Pages: /, /stack, /meds  │
     └───────────┬────────────────┘
                 │ fetch("/api/medications")
                 │ fetch("/api/chat") ← future chatbot
     ┌───────────▼────────────────┐
     │        Express.js          │
     │  Routes:                   │
     │   • /api/medications       │
     │   • /api/chat (placeholder)│
     │  Uses node-postgres (pg)   │
     └───────────┬────────────────┘
                 │
     ┌───────────▼────────────────┐
     │     PostgreSQL Database     │
     │  Table: medications         │
     │  Columns: name, dosage,     │
     │  instructions, description  │
     └───────────┬────────────────┘
                 │
     ┌───────────▼────────────────┐
     │   Hugging Face Model API    │
     │ (LLM: future chatbot logic) │
     └────────────────────────────┘


---

## 🔄 Final Flow Summary

1. User visits `/medications`
- Astro serves the `src/pages/medications.astro` page.
- Inside that page, your frontend code (either in a script tag or a component) fetches data from the route `/api/medications.`

2. Astro Vite proxy forwards the request
- The Astro dev server sees that the URL starts with `/api.`
- It automatically forwards that request to your Express backend at http://localhost:5000/api/medications (as configured in `astro.config.mjs`).

3. Express backend handles `/api/medications`
- Express receives the request on port 5000.
- The route defined in `server/routes/medications.js` runs a SQL query against PostgreSQL.
- Express sends the result back as JSON.

4. PostgreSQL database
- PostgreSQL stores all medication records (name, description, dosage, instructions).
- Express queries this data using the `pg` library and returns it to Astro.

5. Astro frontend renders the data
- The JSON from Express is received by the frontend code in `medications.astro`.
- The page displays the live data (or fallback data if the API fails).

---

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
