# Dashboard Management System

## Overview

This project is a Dashboard Management System built with **React.js** and **Material-UI**. It handles dynamic JSON data for various dashboards and categories, allowing you to manipulate and update the data based on specific criteria. The project features a clean and responsive UI, optimized for performance.

## Features

- **Dynamic Data Handling**: Manage and manipulate JSON data, including adding, updating, and deleting dashboard sections.
- **Context API Integration**: Store and manage global state using React Context API.
- **Material-UI**: Responsive and modern UI components with customizable themes.
- **Color Assignment Logic**: Automatically assign colors to specific labels using `useEffect`.
- **Checkbox State Management**: Efficiently manage and store checkbox values.
- **Search Functionality**: Retrieve specific data based on title inputs.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/preethiamsa/Dashboard.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Dashboard
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

To start the development server:

```bash
npm run dev
```

## Usage

- **Adding Data**: Use the Context API or Redux setup to add new sections or dashboards dynamically.

- **Updating Data**: Modify existing dashboard data based on specific criteria within the JSON structure.

- **Search Data**: Type dashboard titles to retrieve and display relevant data.
