# Week 9: REACT ADVANCED

## Author
- **Name:** Nyamal Maune
- **GitHub:** [@maune-tut](https://github.com/maune-tut)
- **Date:** May 8, 2026

## Project Description
A multi-page React application for CommunityHub featuring advanced state management, dynamic routing, and real-time data fetching from the JSONPlaceholder API.

## Technologies Used
- React 18
- React Router DOM
- Tailwind CSS
- Fetch API & Custom Hooks
- JavaScript (ES6+)

## Features
- **Dynamic Routing:** Multi-page experience with protected-style layouts.
- **API Integration:** Fetches real post data using the `useEffect` hook.
- **Custom Hooks:** Reusable `useFetch` logic for clean, modular code.
- **Responsive Design:** Fully styled using Tailwind CSS for mobile and desktop.

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the local URL in your browser

## Lessons Learned
I learned how to manage side effects using `useEffect` and how to create custom hooks to keep components clean. Setting up `react-router-dom` allowed me to transform a single-page app into a professional multi-page platform.

## Challenges Faced
The main challenge was handling the loading states while fetching data to prevent the app from crashing before data arrived. I solved this by implementing conditional rendering for loading and error messages.