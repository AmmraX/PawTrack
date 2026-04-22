# PawTrack 🐾
**Animal Lost and Found System**

## 📖 Overview
PawTrack is a centralized, community-driven web application designed to help people track and locate lost pets quickly and efficiently. By connecting pet owners with individuals who have found animals, the platform accelerates reunification and increases the probability of safe returns. 

## ✨ Features
* **Lost & Found Reporting:** Easily create detailed reports including animal type, breed, color, location (with map indications), date/time, and visual identification photos.
* **Interactive Map Integration:** Visualize lost and found reports on a live map utilizing the Google Maps API for precise geolocation tagging.
* **Advanced Search & Filters:** Filter active reports by animal type, date range, location radius, and specific labels (e.g., collar, friendly, injured).
* **Real-Time Notifications:** Receive instant alerts when a new report matches your set preferences or falls within your geographic vicinity.
* **User Dashboard:** Manage your active posts, monitor report statuses, and securely communicate with other users.
* **Admin Moderation Panel:** Dedicated tools for administrators to verify accounts, moderate flagged posts, and ensure platform safety and integrity.
* **Multilingual Support:** Accessible in English, Sinhala, and Tamil to effectively serve diverse communities.

## 🛠️ Technology Stack
PawTrack is built using the **MERN** stack to ensure a responsive, scalable, and secure environment.
* **Frontend:** ReactJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **Storage:** Firebase (for secure image uploads)
* **APIs & Security:** Google Maps API, JSON Web Tokens (JWT) for secure authentication

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* [MongoDB](https://www.mongodb.com/atlas) database setup
* Firebase project configured for storage
* Google Maps API Key

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/AmmraX/PawTrack.git](https://github.com/AmmraX/PawTrack.git)

2. Navigate to the project directory and install dependencies for both the frontend and backend:
   cd PawTrack/backend
   npm install
   cd ../frontend
   npm install

3. Create a .env file in the backend directory and configure your environment variables:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_MAPS_API_KEY=your_api_key

4. tart the development servers:
   # Run backend
    cd backend
    npm start

   # Run frontend
     cd frontend
     npm start
