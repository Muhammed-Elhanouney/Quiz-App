⚛️ React + Vite Quiz App
This project uses React with Vite for fast development and JSON Server to simulate a real backend with mock data.

📦 Installation
Install all project dependencies:

bash
Copy
Edit

## npm install

🔌 Mock API with JSON Server
To simulate a real backend, I used json-server.
The quiz data is stored in data/questions.json and served as a local API.

⚙️ Run JSON Server:
bash
Copy
Edit

## npx json-server data/questions.json

Make sure the server is running on a port like http://localhost:3000 or adjust accordingly.

🧪 Development Mode
To run the app in development mode with hot reloading:

bash
Copy
Edit

## npm run dev

🚀 Production Build
Build the project for production:

bash
Copy
Edit

## npm run build

Then preview the production build locally:

bash
Copy
Edit

## npm run preview

Or deploy the generated dist folder to platforms like Netlify, Vercel, or GitHub Pages.

🌐 Live Deployment
You can deploy the contents of the dist folder to Netlify or any static hosting service to make the app live.
