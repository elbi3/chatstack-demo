                          ┌────────────────────────────┐
                          │        Frontend (UI)       │
                          │      Astro + HTML/CSS/JS    │
                          │   - Displays chat + meds     │
                          │   - Fetches API endpoints    │
                          │   - Handles user input       │
                          └─────────────┬────────────────┘
                                        │
                     fetch("/api/chat") │ fetch("/api/medications")
                                        │
                          ┌─────────────▼────────────────┐
                          │       Backend (Server)       │
                          │        Express.js (Node)      │
                          │   - Hosts REST API routes     │
                          │   - Manages authentication    │
                          │   - Handles RBAC middleware   │
                          │   - Connects to DB + LLM      │
                          └─────────────┬────────────────┘
                                        │
                ┌───────────────────────┼────────────────────────┐
                │                       │                        │
                │                       │                        │
┌───────────────▼───────────────┐  ┌────▼────────────────┐  ┌────▼───────────────────┐
│   PostgreSQL Database          │  │  Hugging Face Model │  │ Authentication Layer  │
│  - Medication data storage     │  │   (Flan-T5-Base)    │  │  - JWT / bcrypt       │
│  - Chat history (optional)     │  │  - Handles prompts  │  │  - Session cookies    │
│  - User data (future)          │  │  - Generates replies│  │  - RBAC middleware    │
└────────────────────────────────┘  └─────────────────────┘  └───────────────────────┘
