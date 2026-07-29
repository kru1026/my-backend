const express = require("express");

const router = express.Router();

router.get("/projects", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Projects</title>

        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fb;
            margin: 0;
            padding: 40px;
            color: #333;
          }

          .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }

          h1 {
            color: #2563eb;
            font-size: 1.8rem;
            margin: 0;
          }

          .date {
            color: #666;
            font-size: 1rem;
            font-weight: bold;
          }

          h2 {
            color: #333;
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .description {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          ul {
            padding-left: 25px;
          }

          li {
            margin-bottom: 12px;
            line-height: 1.7;
            color: #444;
          }

          .tech {
            margin-top: 25px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .tag {
            background-color: #2563eb;
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.9rem;
          }

          @media (max-width: 700px) {
            body {
              padding: 20px;
            }

            .container {
              padding: 25px;
            }

            .header {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
          }

        </style>
      </head>

      <body>

        <div class="container">

          <div class="header">
            <h1>Tutoring Website - Implementation</h1>
            <span class="date">Sept 2024</span>
          </div>

          <p class="description">
            Built, continuously tested and patched tutoring platform connecting
            students and tutors.
          </p>

          <h2>Responsibilities</h2>

          <ul>
            <li>
              Managed and organized data using MongoDB to ensure efficient data
              storage, retrieval, and scalability for application features.
            </li>

            <li>
              Developed backend using Node.js and Express.js. Backend established
              connection to MongoDB, implemented CRUD operations on MongoDB
              documents, and provided RESTful API endpoints to facilitate seamless
              data interaction between backend and frontend.
            </li>

            <li>
              Designed frontend using Next.js with Bootstrap. Frontend made calls
              to backend RESTful APIs, which processed requests and interacted
              with MongoDB to return real-time, relevant data, ensuring a dynamic
              and responsive user experience.
            </li>

            <li>
              Implemented frontend data processing such as sorting and filtering,
              with results displayed on the user interface to achieve precise data
              presentation and easy navigation.
            </li>
          </ul>


          <h2>Technologies Used</h2>

          <div class="tech">
            <span class="tag">Next.js</span>
            <span class="tag">Node.js</span>
            <span class="tag">Express.js</span>
            <span class="tag">MongoDB</span>
            <span class="tag">Bootstrap</span>
            <span class="tag">RESTful APIs</span>
          </div>

        </div>

      </body>
    </html>
  `);
});

module.exports = router;