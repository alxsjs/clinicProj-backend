# 🏥 Clinic Appointment System API

A full-featured RESTful API for managing doctors, patients, and appointments — built with Node.js, Express.js, and MongoDB Atlas.

# 🩺 About the Project

The Clinic Appointment Management API is a backend service that streamlines clinic operations by handling:

🧍‍♀️ Patient records

👨‍⚕️ Doctor information

📅 Appointment scheduling

## It follows the MVC architecture with database management through MongoDB Atlas.

## BASE URL 

http://localhost:3000/api

# 🌐 API Endpoints

## 🧍‍♀️ Patient Routes
POST http://localhost:3000/api/patients

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/patients` | Retrieve all patients |
| GET | `/api/patients/:id` | Retrieve a patient by ID |
| POST | `/api/patients` | Add a new patient |
| PUT | `/api/patients/:id` | Update patient details |
| DELETE | `/api/patients/:id` | Delete a patient |

---

## 👨‍⚕️ Doctor Routes
POST http://localhost:3000/api/doctors

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/doctors` | Retrieve all doctors |
| GET | `/api/doctors/:id` | Retrieve a doctor by ID |
| POST | `/api/doctors` | Add a new doctor |
| PUT | `/api/doctors/:id` | Update an existing doctor |
| DELETE | `/api/doctors/:id` | Delete a doctor |

---

## 📅 Appointment Routes
POST http://localhost:3000/api/appointments

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/appointments` | Retrieve all appointments |
| GET | `/api/appointments/:id` | Retrieve an appointment by ID |
| POST | `/api/appointments` | Create a new appointment |
| PUT | `/api/appointments/:id` | Update appointment details |
| DELETE | `/api/appointments/:id` | Delete or cancel an appointment |

# 🧩 Environment Variables

Create a .env file in the root directory with the following:

MONGO_URI=your_mongodb_connection_string
PORT=3000

# ✨ Key Features

✅ Full CRUD operations for all entities
✅ Connected to MongoDB Atlas
✅ Follows MVC structure
✅ Environment variable security
✅ Works perfectly with Postman
✅ JSON-based, REST-compliant responses

# 🧪 Testing Demonstrations

💻 Local Testing:
Use Postman with http://localhost:3000/api as the base URL.

API Testing in Postman 
Watch on: https://drive.google.com/drive/folders/1pHJ3m1B617qUHZ64uyfVgZa3kwQ-HxdB?usp=drive_link
