# InsightIQ
# [KGOC](https://www.kangarokgoc.com/) Admin Dashboard

The Admin Dashboard for KGOC leverages modern web technologies and frameworks to deliver a robust solution for managing financial insights. It integrates backend Node.js with MongoDB for data handling and employs React with TypeScript on the frontend for a responsive user interface. The application incorporates predictive analytics, secure authentication, and scalable architecture, making it a comprehensive tool for efficient revenue and expense management at KGOC.

## Features

The KGOC Admin Dashboard includes the following features:

1. **Revenue and Expense Overview**:
   - Display total revenue and expenses.
   - Monthly revenue and expense breakdown.

2. **Revenue Month by Month**:
   - Detailed month-by-month revenue analysis.

3. **Operational vs Non-Operational Expenses**:
   - Separate views for operational and non-operational expenses.

4. **Campaigns and Targets**:
   - Track ongoing campaigns and their targets.

5. **List of Products**:
   - Comprehensive list of products with details.

6. **Recent Orders**:
   - Overview of the most recent orders.

7. **Overall Summary and Explanation Data**:
   - Summarized financial data with explanations.

8. **Revenue Predictions**:
   - Charted revenue and predicted revenue using a simple linear regression model.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  
- **Frontend**:
  - React
  - JavaScript
  - TypeScript
  - Recharts

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your_reponame 


https://github.com/ankit3388/InsightIQ_KGOC/assets/106178304/36ca37d3-6c50-4676-8ada-72f356835c84

2. **Install dependencies for backend and frontend**:
 - For backend
    ```bash
    cd server
    npm install
   
  - For frontend
  ```bash
    cd client
    npm install
   ```

3. **Set up environment variables**:

  - Create a .env file in the server directory and add your MongoDB connection string and other necessary configurations.
  - MONGO_URI=your_mongodb_uri
  - PORT=5000


4. **Run the backend server**:
   ```bash 
    cd server
    npm run dev
   
5. **Run the frontend application**:
   ```bash
    cd client
    npm run dev 
  
  - Once the setup is complete, you can access the dashboard at http://localhost:5173.


# Contributing
   
  - Contributions are welcome! Please follow these steps to contribute:

**Fork the repository**
  - Create a new branch (git checkout -b feature/your-feature).
  - Commit your changes (git commit -m 'Add some feature').
  - Push to the branch (git push origin feature/your-feature).
  - Create a Pull Request.




