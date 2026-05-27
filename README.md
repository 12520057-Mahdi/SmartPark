# SmartPark

**Student Name:** Mahdi Bassam Haidar  
**Student ID:** 12520057  
**Course:** CSCI390 Web Programming  
**Project:** Phase 2 React Frontend Application  

---

## Project Description

SmartPark is a React-based parking management web application designed to help organize parking spaces and simplify daily parking activity.

The application allows users to register vehicles, assign parking slots, monitor available and occupied spaces, calculate parking fees, view transaction history, and check daily reports.

This project is a continuation of the Phase 1 SmartPark website and was converted into a functional React frontend application for Phase 2.

---

## Live Demo

GitHub Pages Link:

```text
https://12520057-Mahdi.github.io/SmartPark
```

---

## Main Features

- Responsive multi-page React application
- Home, Dashboard, Reports, Services, About, and Contact pages
- Parking slot management with 20 visual slots
- Vehicle entry form with plate validation
- Duplicate plate detection
- Vehicle type pricing per hour
- Live occupancy percentage with progress bar
- Search by plate number
- Transaction history table
- Filter history by vehicle type
- End-of-day reset
- Reports page using saved dashboard data
- Contact form with validation
- Local storage persistence
- Mobile-friendly navigation

---

## Technologies Used

- ReactJS
- React Router
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- HTML5
- CSS3
- Local Storage
- Git and GitHub
- GitHub Pages

---

## Project Structure

```text
SmartPark/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── SmartPark.png
│   │
│   ├── components/
│   │   ├── NavBar.js
│   │   └── Footer.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Dashboard.js
│   │   ├── Reports.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## Setup Instructions

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/12520057-Mahdi/SmartPark.git
```

### 2. Open the project folder

```bash
cd SmartPark
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The project will open at:

```text
http://localhost:3000
```

---

## Deployment

The project is deployed using GitHub Pages.

Deployment command:

```bash
npm run deploy
```

---

## Screenshots

Screenshots are stored in the following folder:

```text
docs/screenshots/
```

Included screenshots:

- Home page desktop view
- Dashboard with parked vehicles
- Reports page
- Contact form validation
- Mobile navbar view

---

## Notes

SmartPark uses local storage to save dashboard data such as parking slots, revenue, and transaction history. This allows the application to keep its data even after refreshing the page.

The application is frontend-only and does not use a backend database.
