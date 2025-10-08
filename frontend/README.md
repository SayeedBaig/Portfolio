# MERN Stack Portfolio Website

![Project Screenshot](./path/to/your/screenshot.png)
A fully-functional, dynamic personal portfolio website built from scratch using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project serves as a central hub to showcase my projects, skills, and professional experience.

**[View Live Demo](https://your-deployed-link.com)**
---

## ## Features

* **Dynamic Project Showcase**: Projects are fetched from a MongoDB database and displayed dynamically. New projects can be added to the database without changing any frontend code.
* **Categorized Skills**: A dedicated section to display technical skills, organized by category.
* **Professional Experience**: A timeline or list view of past work experience and internships.
* **Contact Form Integration**: A functional contact form using EmailJS to forward messages directly to my personal email.
* **Responsive Design**: A clean, modern, and fully responsive layout that works on all devices.

---

## ## Tech Stack

This project is built with the following technologies:

* **Frontend**:
    * **React.js**: A JavaScript library for building user interfaces.
    * **Axios**: A promise-based HTTP client for making API requests.
    * **CSS3**: For styling and layout.

* **Backend**:
    * **Node.js**: A JavaScript runtime environment.
    * **Express.js**: A web application framework for Node.js.
    * **MongoDB**: A NoSQL database for storing project data.
    * **Mongoose**: An ODM library for MongoDB and Node.js.
    * **CORS**: A package to enable Cross-Origin Resource Sharing.
    * **Dotenv**: For managing environment variables.

---

## ## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### ### Prerequisites

* Node.js and npm
* A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### ### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/mern-portfolio-website.git](https://github.com/your-username/mern-portfolio-website.git)
    cd mern-portfolio-website
    ```

2.  **Setup the Backend:**
    ```sh
    # Navigate to the backend folder
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the /backend folder and add your variables
    touch .env
    ```

3.  **Setup the Frontend:**
    ```sh
    # Navigate to the frontend folder from the root directory
    cd frontend

    # Install dependencies
    npm install
    ```

### ### Environment Variables

The backend requires a `.env` file to connect to the database. Create a file named `.env` in the `/backend` directory and add the following variable: