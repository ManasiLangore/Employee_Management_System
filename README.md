📌 Project Overview

The Employee Management System is a full-stack web application designed to manage employee information efficiently within an organization. The system provides separate functionalities for administrators and employees, enabling smooth management of employee records, reports, and organizational data.

This project is developed using React.js for the frontend, Spring Boot for the backend, and MySQL as the database.

🚀 Architectural Overview
The application follows a decoupled, client-server architecture to ensure scalability, ease of maintenance, and separation of concerns.

+------------------------+      REST APIs      +------------------------+
|      Frontend          | <-----------------> |       Backend          |
|  (React.js & Tailwind)  |    JSON over HTTP    |  (Spring Boot & JPA)   |
+------------------------+                     +------------------------+
                                                           |
                                                           | Hibernate
                                                           v
                                               +------------------------+
                                               |       Database         |
                                               |       (MySQL)          |
                                               +------------------------+
Frontend (Client Layer): Built using React.js. It manages user state, handles client-side routing, and provides a responsive, intuitive interface styled with Tailwind CSS.

Backend (Application Layer): Powered by Java and Spring Boot. It exposes a secure RESTful API, handles business logic processing, validates data, and communicates with the database layer.

Database (Data Layer): Uses MySQL managed via Spring Data JPA (Hibernate) for object-relational mapping, ensuring persistent and reliable data storage.

🛠️ Tech Stack
Frontend
React.js
React Router
Axios
Bootstrap / CSS

Backend
Java
Spring Boot
Spring Security
Spring Data JPA
REST API

Database
MySQL

Tools & Technologies
Maven
Git & GitHub
Postman
VS Code / IntelliJ IDEA


⚙️ Installation & Setup
Step 1: Clone Repository
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
Step 2: Configure Database

Create a MySQL database:

CREATE DATABASE employeemanagement;

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employeemanagement
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Step 3: Run Backend

Navigate to backend folder:

cd backend

Run Spring Boot Application:

mvn spring-boot:run

Backend will run on:

http://localhost:8080
Step 4: Run Frontend

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start React Application:

npm start

Frontend will run on:

http://localhost:3000