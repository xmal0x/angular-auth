# Angular Express Authentication

## Overview

This project implements a simple authentication system using the Angular framework in conjunction with Express. It features login and registration screens, utilizes MongoDB for data storage, and employs standalone components for modularity. The authentication process involves the use of tokens for subsequent requests after a successful login.

## Technologies Used

- **Angular**: A popular front-end framework for building web applications.
- **Express**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database used for storing user authentication data.
- **Token-Based Authentication**: Tokens are employed for secure communication between the client and server.

## Features

1. **Login Screen**: Users can enter their credentials to log in to the system.
2. **Registration Screen**: New users can register by providing necessary information.
3. **MongoDB Integration**: User authentication data is stored in MongoDB for persistence.
4. **Standalone Components**: Modular components enhance code organization and maintainability.
5. **Token-Based Authorization**: Successful login generates a token, which is used for subsequent authorized requests.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.
- Set up a MongoDB instance and update the configuration accordingly.

### Installation

1. Clone the repository: `git clone https://github.com/xmal0x/angular-auth`
2. Navigate to the project directory: `cd angular-auth`
3. Navigate to the client directory: `cd client`
4. Install dependencies: `npm install`
5. Start the application: `ng serve`
6. Navigate to the project directory: `cd ../server`
7. Install dependencies: `npm install`
8. Start the application: `npm start`

### Usage

- Access the application in your browser at `http://localhost:4200`.
- Navigate to the login(http://localhost:4200/login) and registration(http://localhost:4200/register) screens to interact with the authentication system.
