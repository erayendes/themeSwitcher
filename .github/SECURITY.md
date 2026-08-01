# Security Policy

## Supported Versions

Theme Switcher is a small, dependency-free client-side component. The latest version on the main branch is the only version actively supported.

## Reporting a Vulnerability

Theme Switcher has no backend and no network calls - it only reads and writes a single localStorage key and toggles a CSS class. That said, if you discover a security issue (for example, an XSS vector introduced by how the library handles DOM attributes), please report it privately rather than opening a public issue.

Please email erayendes@gmail.com with:

- A description of the issue and its potential impact
- - Steps to reproduce
  - - Any suggested fix, if you have one
   
    - We will acknowledge your report within a few days and keep you updated as the issue is investigated and resolved.
   
    - ## Scope
   
    - Out of scope: vulnerabilities in third-party frameworks (Tailwind, Bootstrap, etc.) that Theme Switcher is used alongside, since these are not maintained by this project.
    - 
