# Ridiculous Movie Plot Generator

## Project Overview
The **Ridiculous Movie Plot Generator** is a funny and entertaining web app that helps you find and rate movies with the most absurd and silly plots. Think alien spaghetti monsters or talking pets saving the world! This platform is all about having a laugh and discovering the most bizarre movie storylines. You can log in, rate movies, leave reviews, and get personalized recommendations based on your unique sense of humor.

## Key Features
- **User Authentication**: Secure login and registration to create profiles and keep track of your favorite ridiculous movies.
- **Personalized Movie Lists**: Get movie recommendations tailored to your ratings and preferences.
- **Movie Rating System**: Rate movies based on how ridiculous the plot is, and share your thoughts with reviews.
- **User Reviews**: Write and share reviews, chat with others, and debate the funniest plots.
- **API Integration**: Pull in real movie details, posters, and ratings using external movie databases like the Open Movie Database API.

## Tech Stack
### Frontend
- **React.js**: For building a dynamic and responsive user interface.
- **React Router**: For navigating between pages like login, homepage, and movie details.
- **CSS/SCSS**: To make the app look great and user-friendly.

### Backend
- **Node.js**: For server-side operations and logic.
- **Express.js**: To create API endpoints for user authentication, movie ratings, and personalized lists.
- **MongoDB**: A NoSQL database to store info about users, movies, ratings, and reviews.
- **Mongoose**: To make working with MongoDB simpler.

### Authentication
- **JWT (JSON Web Tokens)**: To keep user accounts secure and manage sessions.

### Other Tools
- **Axios**: To fetch movie data from external databases.
- **dotenv**: For securely handling environment variables like API keys.
- **Git/GitHub**: For version control and collaboration.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ridiculous-movie-plot-generator.git
   cd ridiculous-movie-plot-generator
   ```
2. Install dependencies for both the frontend and backend:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   DATABASE_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   API_KEY=<your-external-movie-api-key>
   ```
4. Run the development servers:
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm start
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## API Endpoints
### Authentication
- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in a user and return a JWT token.

### Movies
- `GET /api/movies`: Get all movies.
- `GET /api/movies/:id`: Get a specific movie by ID.
- `POST /api/movies/rate`: Rate a movie for its ridiculousness.

### User
- `GET /api/user/profile`: Get the user's profile and preferences.
- `POST /api/user/preferences`: Update user preferences.

## Why This Project?
This project is the perfect mix of creativity and coding. Here’s why it’s awesome:

- It’s a full-stack project that helps you work with **React**, **Node.js**, and **MongoDB**.
- You get hands-on experience integrating third-party APIs.
- You’ll learn how to set up a secure authentication system with **JWT**.
- And it’s just plain fun—who doesn’t want to laugh at the most ridiculous movie plots out there?

It’s both a coding challenge and a way to build something super entertaining.

## Future Enhancements
- Add a leaderboard for the most-rated ridiculous movies.
- Let users suggest their own ridiculous movie plots.
- Add badges and rewards for active users.

## License
This project is licensed under the MIT License. Feel free to contribute and make it even more fun!

---
Enjoy exploring the world of ridiculous movie plots!
