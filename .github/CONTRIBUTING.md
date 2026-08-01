# Contributing to Theme Switcher

Thanks for your interest in contributing! Bug reports, feature ideas, and pull requests are all welcome.

## Before You Start

For small fixes (typos, docs, minor bugs) feel free to open a pull request directly. For larger changes, please open an issue first so we can discuss the approach.

## Development Setup

Theme Switcher has zero build steps and zero dependencies.

Clone the repository, then open demo.html directly in your browser. Edit themeManager.js or themeToggle.css and reload demo.html to see your changes - no build step required.

## Pull Request Guidelines

- Keep pull requests focused on a single change.
- - Test your changes in demo.html across at least one Chromium-based and one WebKit-based browser if possible.
  - - Update the relevant file in docs/ if your change affects the public API or behavior.
    - - Use clear, descriptive commit messages.
     
      - ## Reporting Bugs
     
      - Please use the bug report issue template and include steps to reproduce, expected behavior, and actual behavior, along with your browser and OS.
     
      - ## Suggesting Features
     
      - Please use the feature request issue template and describe the problem the feature would solve, not just the solution.
     
      - ## Code Style
     
      - - Vanilla JavaScript (ES6+), no frameworks, no external dependencies.
        - - Keep the library framework-agnostic - do not add React/Vue/Angular-specific code to the core files.
          - - Match the existing formatting (2-space indentation).
           
            - ## Code of Conduct
           
            - This project follows a Code of Conduct (see CODE_OF_CONDUCT.md). By participating, you agree to uphold it.
            - 
