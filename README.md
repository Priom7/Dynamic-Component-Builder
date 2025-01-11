# 🔭 Dynamic React Component Builder (Work in Progress)

<p align="center">
    <img src="https://github.com/Priom7/Dynamic-Component-Builder/blob/main/Untitled%20design%20(1).gif" alt="demo">
</p>

## About

**Dynamic React Component Builder** is a work-in-progress project using **React**, **Node.js**, **Next.js**, and **TypeScript**. This tool allows users to dynamically generate reusable React components and their corresponding source code.

### Current Features

The project currently supports building some of the most common components required for web applications. These include:

- **Form Builder**:
  - Text input (single-line and multi-line)
  - Email and password fields
  - Checkbox (single and multi-dimensional)
  - Dropdowns
  - Date and time pickers
  - Single and multi-select fields
- **Tab Builder**:
  - Tabs with customizable content
- **Navigation Builder**:
  - Navbars with links and navigation options
- **Table Builder**:
  - Rows, columns
  - Search filters
  - Pagination

### Scalability

The components generated are highly scalable. Additional parameters can be added and passed to extend functionality, such as:

- Adding **module permissions** for navigation items or tabs
- Customizing **validation rules** for form fields

### Future Plans

The following features are planned for future iterations:

- **Custom Component Builders**:
  - Cards
  - Banners
- **Advanced Tools**:
  - Page Builder
  - Template Builder

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Priom7/Dynamic-Component-Builder.git
    cd Dynamic-Component-Builder
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Pros and Cons


| Category                    | Pros                                                                                                                                                       | Cons                                                                                             |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Centralized Component Control** | - Ensures consistent UI/UX across dynamically generated components.<br>- Simplifies maintenance by propagating updates to all components automatically.<br>- Reduces code redundancy with reusable component blocks. | - Initial setup may be time-consuming.<br>- Over-customization may complicate or hinder flexibility. |
| **Scalability & Adaptability**   | - Supports easy customization (e.g., adding fields, filters, columns) to meet growing project requirements.<br>- Future-proof design reduces the impact of changes.                   | - Potential performance issues with unoptimized components.<br>- Requires careful management of dependencies for large-scale projects. |
| **Developer Productivity**       | - Automates the creation of common UI components (e.g., forms, tables), accelerating development.<br>- Speeds up iteration and deployment of features.<br>- Simplifies complex tasks, such as implementing role-based permissions. | - Steep learning curve for new developers.<br>- Developers may face challenges if unfamiliar with the tool.                                           |
| **Self-Healing Solutions**       | - Reduces rework by automating common patterns and handling evolving requirements.<br>- Improves app stability by minimizing manual intervention in component changes.                                                    | - May not be suited for smaller, static projects with limited needs.                                                       |
| **Target Audience**              | - Well-suited for development teams focused on scalability and long-term project growth.<br>- Flexible enough for evolving project requirements.                                     | - May feel excessive for smaller teams or projects with minimal requirements.      |


---


## Contributions

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.


---

## Article

Check out the article: https://medium.com/@priom7197/introducing-the-dynamic-react-component-builder-ec50c4fc302e

