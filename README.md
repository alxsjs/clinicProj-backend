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

## Sample Requests 

### Create Patient (POST)
POST http://localhost:3000/api/patients
Body (JSON):
{
  "name": "Alexise",
  "birthDate": "2003-07-29",
  "email": "alexissiviorre136@gmail.com",
  "phone": "09924932458"
}


### Update Patient (PUT)
PUT http://localhost:3000/api/patients/68f20486624bce2a7eb0531f
Body (JSON):
{
  "phone": "09171234567"
}

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

### Create Doctor (POST)
POST http://localhost:3000/api/doctors
Body (JSON):
{
  "name": "Dr. Jennica Lee",
  "specialty": "Cardiology"
}

### Update Doctor (PUT)
PUT http://localhost:3000/api/doctors/68f1fc4d624bce2a7eb0529b
Body (JSON):
{
  "name": "Dr. Janice Yu",
  "specialty": "Neurology"
}

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

### Create Appointment (POST)
POST http://localhost:3000/api/appointments
Body (JSON):
{
  "patientId": "6710175d2b0c4f00123abcd7",
  "doctorId": "671018a72b0c4f00123abcd4",
  "startAt": "2025-10-23T11:00:00Z",
  "endAt": "2025-10-23T11:30:00Z",
  "notes": "Follow-up consultation"
}

### Update Appointment (PUT)
PUT http://localhost:3000/api/appointments/68f11c4f7c546a164e848fa9
{
  "patientId": "68f11ab27c546a164e848fa4",
  "doctorId": "68f11ab27c546a164e848fb7",
  "date": "2025-10-22",
  "time": "09:15"
}

---
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
