# Employee Management System

## 📌 Project Overview

The **Employee Management System (EMS)** is a full-stack web application developed to simplify and streamline employee management within an organization. The system enables administrators to manage employee records, monitor reports, and maintain organizational data efficiently, while employees can access and update their own information through a user-friendly interface.

The application is built using **React.js** for the frontend, **Spring Boot** for the backend, and **MySQL** for data storage. It follows a modern client-server architecture, ensuring scalability, maintainability, and secure communication between different layers of the application.

---

## 🚀 Features

### Admin Module

* Secure admin authentication and login
* Add new employees
* View all employee records
* Update employee details
* Delete employee records
* View employee reports and requests
* Manage organizational data

### Employee Module

* Secure employee login
* View personal profile details
* Update profile information
* Raise reports/issues
* Track submitted reports
* Access organization-related information

### General Features

* Responsive user interface
* RESTful API integration
* Role-based access control
* Real-time data management
* Secure database operations

---

## 🏗️ System Architecture

The application follows a three-layer architecture:

```text
+------------------------+      REST APIs      +------------------------+
|       Frontend         | <-----------------> |        Backend         |
| (React.js & Tailwind)  |    JSON over HTTP   | (Spring Boot & JPA)    |
+------------------------+                     +------------------------+
                                                         |
                                                         | Hibernate
                                                         v
                                             +------------------------+
                                             |       Database         |
                                             |        MySQL           |
                                             +------------------------+
```

### Frontend Layer

The frontend is developed using **React.js**, providing a dynamic and responsive user interface. It handles user interactions, state management, routing, and communication with backend APIs through Axios.

### Backend Layer

The backend is built with **Spring Boot**, which exposes RESTful APIs for handling business logic, authentication, validation, and database operations.

### Database Layer

The system uses **MySQL** as the relational database. Spring Data JPA and Hibernate are used for object-relational mapping (ORM), ensuring efficient data persistence and retrieval.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap
* CSS / Tailwind CSS

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* REST APIs

### Database

* MySQL

### Development Tools

* Maven
* Git & GitHub
* Postman
* VS Code
* IntelliJ IDEA

---

## 📂 Project Structure

```text
Employee-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Services/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│   └── application.properties
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
```

---

### Step 2: Configure MySQL Database

Create a database in MySQL:

```sql
CREATE DATABASE employeemanagement;
```

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employeemanagement
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### Step 3: Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Backend Server:

```text
http://localhost:8080
```

---

### Step 4: Run the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend Server:

```text
http://localhost:3000
```

---

## 🔌 API Communication

The frontend communicates with the backend using REST APIs through Axios.

Example API Endpoint:

```http
GET /api/employees
POST /api/employees
PUT /api/employees/{id}
DELETE /api/employees/{id}
```

---

## 🔒 Security

The application uses Spring Security to provide:

* Authentication and authorization
* Protected API endpoints
* Secure login system
* Role-based access control
* Password encryption

---

## 🧪 Testing Tools

The project can be tested using:

* Postman for API testing
* Browser Developer Tools
* MySQL Workbench
* Spring Boot Logs

---

## 📈 Future Enhancements

* JWT Authentication
* Employee Attendance Management
* Payroll Management System
* Email Notifications
* Dashboard Analytics
* Leave Management System
* Report Export (PDF/Excel)
* Cloud Deployment (AWS/Azure)

---

## 👩‍💻 Author

**Manasi Langore**

Final Year B.E. Computer Engineering Student

### Connect With Me

* GitHub: https://github.com/ManasiLangore
* LinkedIn: https://linkedin.com/in/manasi-langore

---

## ⭐ Conclusion

The Employee Management System is a robust and scalable solution for managing employee information efficiently. By leveraging React.js, Spring Boot, and MySQL, the project demonstrates full-stack development skills, REST API integration, database management, and modern software engineering practices.
