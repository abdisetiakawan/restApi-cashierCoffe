---

# Restful API for Cashier Coffee

This project is a RESTful API built with Express.js for managing a coffee shop cashier system. It includes features for managing authentication, menus, orders, and sales reports.

## Project Structure

The project is organized in the following directories:

- `config/`: Contains the database configuration file.
- `controllers/`: Contains all the controllers for handling the business logic.
- `middlewares/`: Middleware functions, including authentication handling.
- `models/`: Sequelize models for the entities (MenuItem, Order, User, etc.).
- `routes/`: API routes to handle requests.
- `testing/`: Includes `tests.http` for testing API endpoints.
- `.env.example`: An example of environment configuration.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MySQL
- VSCode (recommended)

## Getting Started

### Clone the Repository

To start, clone the repository to your local machine using the following command:

`git clone https://github.com/abdisetiakawan/restfulApi-cashierCoffe.git`

`cd restfulApi-cashierCoffe`

### Install Dependencies

Navigate to the project directory and run the following command to install all dependencies:

`npm install`

### Setup Environment Variables

Create a `.env` file by copying the provided `.env.example` file. Then update the database credentials and other environment variables in `.env` according to your MySQL configuration.

`cp .env.example .env`

Example `.env` file:

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASS=your_db_pass
DB_NAME=your_db_name
DB_PORT=3306
PORT=3000
JWT_SECRET=your_secret_key
```

### Configure the Database

Make sure your MySQL database is running, and the credentials in your `.env` file are correct.

### Start the Project

To start the project, run the following command in your terminal:

`npm start`

The API will be running on `http://localhost:3000`.

## Testing the API

You can test the API endpoints using the provided `tests.http` file located in the `testing/` folder. Follow these steps to run the tests:

1. Install the REST Client extension in VSCode.
2. Open the `tests.http` file in VSCode.
3. You will see the available HTTP requests for testing the API.
4. Click on "Send Request" above each request to test the corresponding API endpoint.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
