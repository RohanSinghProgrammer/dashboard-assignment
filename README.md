
# Dashboard

Short project description goes here.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - Current version
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) - Installed and running

## Project Setup

Follow these steps to set up the project:

1. **Clone the GitHub Repository from master branch**

   ```bash
   git clone https://github.com/RohanSinghProgrammer/dashboard-assignment/tree/master myproject
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd myproject
   ```

3. **Install Dependencies in App & API Directories**

   ```bash
   cd app
   npm install

   cd ../api
   npm install
   ```

4. **Create .env File in API Directory**

   Inside the `api` directory, create a `.env` file and add the following values:

   ```
   JWT_SECRET=batman
   CRYPTO_SECRET=superman
   ```

5. **Run the Project**

   In both the `app` and `api` directories, run the following command:

   ```bash
   npm run dev
   ```

   This command will start the development server for both the app and API.

## Contributing

If you'd like to contribute to this project, please follow these guidelines.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.