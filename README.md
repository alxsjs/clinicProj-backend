# 🏥 Clinic Appointment Management API

A full-featured RESTful API for managing doctors, patients, and appointments — built with Node.js, Express.js, and MongoDB Atlas.

# 🩺 About the Project

The Clinic Appointment Management API is a backend service that streamlines clinic operations by handling:

👨‍⚕️ Doctor information

🧍‍♀️ Patient records

📅 Appointment scheduling

It follows the MVC architecture and supports cloud deployment via Render
 with database management through MongoDB Atlas.

# 🌐 API Endpoints

## 👨‍⚕️ Doctor Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/doctors` | Retrieve all doctors |
| GET | `/api/doctors/:id` | Retrieve a doctor by ID |
| POST | `/api/doctors` | Add a new doctor |
| PUT | `/api/doctors/:id` | Update an existing doctor |
| DELETE | `/api/doctors/:id` | Delete a doctor |

---

## 🧍‍♀️ Patient Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/patients` | Retrieve all patients |
| GET | `/api/patients/:id` | Retrieve a patient by ID |
| POST | `/api/patients` | Add a new patient |
| PUT | `/api/patients/:id` | Update patient details |
| DELETE | `/api/patients/:id` | Delete a patient |

---

## 📅 Appointment Routes

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
✅ Hosted and live on Render
✅ Follows MVC structure
✅ Environment variable security
✅ Works perfectly with Postman
✅ JSON-based, REST-compliant responses

# 🧪 Testing Demonstrations

💻 Local Testing:
Use Postman with http://localhost:3000 as the base URL.

🌍 Live API Testing:
Use the deployed Render link: https://se2clinicappointmentsystem.onrender.com/
