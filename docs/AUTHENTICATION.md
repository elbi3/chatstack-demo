
- Add .env with SESSION_SECRET, DATABASE_URL, HF_KEY
- Run DB seed (server/db/seed.sql) to create demo accounts
- Start server + dev site
- Use login page to get session cookie, then try /api/chat

### Further Reading & Authoritative Resources

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) — Best practices for building secure authentication systems.  
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — Guidance for role-based and attribute-based access control.  
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/?utm_source=chatgpt.com) — Key risks and mitigations for API-first applications.  
- [NIST SP 800-63B](https://csrc.nist.gov/pubs/sp/800/63/b/upd2/final) — U.S. federal standard for digital identity and authentication.  
- [OAuth 2.0 RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) — The foundational specification for OAuth 2.0.  
- [JWT Best Practices (Auth0)](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/) — Modern guidance for JSON Web Tokens and secure token management.
