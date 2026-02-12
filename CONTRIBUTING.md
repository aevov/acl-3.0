# Contributing to ACL 3.0

The Afolabi Computing Language (ACL) is the logical backbone of the Nara Engine. We welcome contributions to the language specification, interpreter, and standard library!

## 🤝 Code of Conduct
We are committed to providing a friendly, safe, and welcoming environment for all. Please be respectful and considerate in all interactions.

## 🛠️ Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/acl-3.0.git
    cd acl-3.0
    ```
3.  **Install dependencies**:
    - Rust (stable)
4.  **Create a branch** for your feature or fix:
    ```bash
    git checkout -b feature/new-language-construct
    ```

## 🏗️ Architecture Awareness
ACL 3.0 is licensed under **GPL-3.0**. By contributing, you agree that your code will be released under this license.

### Key Areas
- **Interpreter (`src/lib.rs`)**: The core logic for tokenizing, parsing, and evaluating ACL code.
- **Language Spec**: Proposal of new syntax or glyphs (e.g., specific neural net operators).
- **Compliance**: ACL is designed for determinism and security within the Nara execution environment.

##  Pull Request Process
1.  Ensure your code builds and tests pass: `cargo test`.
2.  Update documentation if you change behavior or add new glyphs.
3.  Open a Pull Request against the `main` branch.
4.  A maintainer from **WPWakanda LLC** will review your code.

## 🐛 Reporting Issues
Please use the GitHub Issue Tracker to report bugs or request features. Be as specific as possible!

---
*The logic of the mesh.* ⚛️🧠
