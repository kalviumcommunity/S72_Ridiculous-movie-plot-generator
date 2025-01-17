# Ridiculous Movie Plot Generator

## Project Overview
The **Ridiculous Movie Plot Generator** is a humorous and entertaining web application that helps users discover and rate movies with the most absurd and silly plots. From alien spaghetti monsters to talking pets saving the world, this platform aims to offer laughter and fun by showcasing movies with the most bizarre storylines. Users can log in, rate movies, leave reviews, and receive personalized movie recommendations tailored to their unique humor preferences.

## Key Features
- **User Authentication**: Secure login and registration system allowing users to create profiles and track their favorite ridiculous movies.
- **Personalized Movie Lists**: Generate movie lists based on user ratings and preferences for absurd plots.
- **Movie Rating System**: Users can rate movies based on plot ridiculousness and add comments or reviews.
- **Random Movie Generator**: Explore random movies with outlandish, auto-generated plots to rate and enjoy.
- **Search & Filter**: Search for movies by genre, plot type (e.g., sci-fi, comedy), or level of ridiculousness.
- **User Reviews**: Write and share reviews, interact with others, and discuss hilariously ridiculous movie plots.
- **API Integration**: Use external movie databases (e.g., Open Movie Database API) to fetch movie details, posters, and ratings.

## Tech Stack
### Frontend
- **React.js**: For building a dynamic and responsive user interface.
- **React Router**: For routing and navigation between pages like login, homepage, and movie details.
- **CSS/SCSS**: To create visually appealing and customized designs.

### Backend
- **Node.js**: For server-side logic and operations.
- **Express.js**: To create API endpoints for user authentication, movie ratings, and personalized lists.
- **MongoDB**: A NoSQL database to store information about users, movies, ratings, and reviews.
- **Mongoose**: For simplifying MongoDB data models and queries.

### Authentication
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.

### Other Tools
- **Axios**: For making API calls to fetch movie data from external databases.
- **dotenv**: To handle environment variables securely (e.g., API keys and database credentials).
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
- `POST /api/login`: Authenticate a user and return a JWT token.

### Movies
- `GET /api/movies`: Fetch all movies.
- `GET /api/movies/:id`: Fetch a specific movie by ID.
- `POST /api/movies/rate`: Rate a movie based on its plot ridiculousness.

### User
- `GET /api/user/profile`: Fetch the user's profile and preferences.
- `POST /api/user/preferences`: Update user preferences.

## Why This Project?
This project offers a blend of creativity and technical learning. It provides an opportunity to:

- Develop full-stack web development skills using **React**, **Node.js**, and **MongoDB**.
- Gain experience integrating third-party APIs.
- Build a secure authentication system with **JWT**.
- Create personalized and dynamic user experiences.

The combination of humor and development challenges makes this project both entertaining and educational.

## Future Enhancements
- Add a leaderboard for the most-rated ridiculous movies.
- Allow users to suggest new ridiculous movie plots.
- Introduce gamification elements, such as badges for active users.
- Implement advanced AI-generated movie plot descriptions for the random generator.

## License
This project is licensed under the MIT License. Feel free to contribute and make it even more fun!

---
Enjoy exploring the world of ridiculous movie plots!
