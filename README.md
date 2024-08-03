# Netflix-GPT
Netflix-GPT is a React-based web application that mimics the Netflix UI and functionalities. It includes features such as user authentication, movie browsing, trailers, and movie recommendations using GPT (Gemini) and TMDB APIs. The app is styled using Tailwind CSS and is deployed on Netlify.


# Features
## Authentication
- Login/Signup: Users can create an account or log in to an existing account.
- Sign In/Sign Up Form
- Redirect to Browse Page after successful login/signup
- Form Validation: Validation for login and signup forms using useRef hook.
- Sign Out: Users can sign out of their account.
- Profile Update: Users can update their profile information.
- Redirect: Redirect to the login page if the user is not logged in and to the browse page if the user is logged in.
  
## Browsing Movies
- Header: Navigation header with links.
- Main Movie Section:
  - Trailer playing in the background
  - Title and description of the main movie
- Movie Recommendations:
  - Display list of movies categorized as "Now Playing", "Top Rated", "Upcoming", and "Popular" using custom hooks.
  - Play/stop and mute/unmute buttons for the trailer in the main component.
## Netflix-GPT
- GPT Search Bar: Allows users to search for movie recommendations.
- Multilingual Support: GPT search page supports multiple languages.
- Movie Suggestions:
  - Integrated GPT (Gemini) API to get movie suggestions based on user queries.
  - Fetch movies from TMDB API using GPT suggestions.
  - Display the movies recommended by GPT.
## Tech Stack
- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Redux: State management.
- Firebase: Authentication 
- TMDB API: Fetch movie data.
- GPT (Gemini) API: Get movie recommendations.

# Usage
- Visit the login page to sign up or log in.
- Browse the available movies on the browse page.
- Use the GPT search bar to get movie recommendations.
  
# Getting Started
- To run the project locally, follow these steps:

## Clone the repository:

In bash:
- git clone https://github.com/rajatsaini2003/netflix-gpt.git
- cd netflix-gpt

## Install dependencies:
- npm install

## Run the app:
- npm run start
- Open your browser and navigate to http://localhost:3000 to see the app in action.

# Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

# Acknowledgments
Thanks to TMDB and GEMINI for providing the API used in this project.
Inspired by Netflix platforms for UI/UX design

# License
- This project is licensed under the MIT License.
