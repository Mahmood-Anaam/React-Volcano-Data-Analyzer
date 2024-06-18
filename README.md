# Volcano WebApp

This is a React-based web application designed to allow users to view and analyze data about volcanoes using a REST API. This project was developed to gain experience in building sophisticated client web applications, querying REST APIs, and presenting the results on a web page using modern web technologies such as React.

## Features

- Fetch and display data about volcanoes from a REST API.
- User registration and login to access authenticated data.
- Display a list of volcanoes for a selected country with optional population density filtering.
- Detailed view of individual volcanoes with a map and population density visualization.
- Responsive and user-friendly interface.

## Application Structure

### Home Page

The home page welcomes users with a hero image and navigation options to explore the application.

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/cd4d1fdb-8297-48c6-a62e-a7837ed66504)



### Volcano List Page

This page allows users to select a country and optionally filter volcanoes by population density within specified radii. It uses a form for user input and displays results in a table. Users can click on a volcano to view detailed information.

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/8e2cda43-f6ef-422a-91c4-253ccaf7b54e)


### Individual Volcano Page

Displays detailed information about a selected volcano, including its location on a map (using Pigeon Maps) and population density data (for authenticated users) visualized in a bar chart (using Chart.js).

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/e7dc75b6-c59c-460a-aba1-bebed153105b)


### Login and Register Pages

These pages provide forms for user registration and login. Upon successful login, users receive a token to access authenticated routes.

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/0544be75-3ca6-4153-8985-438cebb564a6)

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/90ad5823-d3de-4074-aaeb-5ce52cfa6c5c)


### About Us Page

Provides information about the project and its developers.

![image](https://github.com/Mahmood-Anaam/volcano-webapp/assets/115950016/1b20524a-3053-437d-b572-febb75528051)


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Mahmood-Anaam/volcano-webapp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd volcano-webapp
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open the application in your browser:
    ```
    http://localhost:3000
    ```
2. Navigate through the application using the provided menu to explore volcano data.
3. Register and log in to access additional features such as detailed population density data.

## Deployment

The web application is deployed and accessible at:
[https://volcano-webapp.onrender.com](https://volcano-webapp.onrender.com)

## Dependencies

The web application relies on the following REST API for data:
[Volcanoes RESTful API](https://github.com/Mahmood-Anaam/volcanoes-restful-api.git)

## Contribution

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Contributions are welcome and appreciated!

