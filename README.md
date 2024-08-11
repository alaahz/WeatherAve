# WeatherAve

WeatherAve is a simple React application that allows users to search for weather forecasts of different cities. It utilizes the OpenWeatherMap API to fetch weather data and displays a 4-day forecast for the specified city.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

WeatherAve is a user-friendly weather forecasting application built with React. The application allows users to search for a city and retrieve a 4-day weather forecast using data from the OpenWeatherMap API. It provides essential weather details in a clean and responsive design.

## Installation

To get started with WeatherAve, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weatherave.git
    cd weatherave
    ```

2. **Install dependencies**:
    Make sure you have Node.js installed. Then, run the following command to install all necessary dependencies:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:
    ```
    REACT_APP_KEY_API=your_openweathermap_api_key
    ```

4. **Start the development server**:
    Run the following command to start the development server:
    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Search for a city**:
    - Enter the name of a city in the search input field.
    - Click the "Search" button.
    - If the city is found, the weather forecast for the next 4 days will be displayed.

2. **Error Handling**:
    - If the city name is not found or there is an error in fetching the data, an error message will be displayed prompting the user to enter a correct city name.

## Features

- **Weather Forecast**: Displays a 4-day weather forecast for the specified city.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.
- **Error Handling**: Provides feedback to users when an invalid city name is entered or when there's an issue fetching data.

## Dependencies

WeatherAve relies on the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: Provides Bootstrap components as React components.
- **Axios**: Used for making HTTP requests to the OpenWeatherMap API.
- **OpenWeatherMap API**: The source of weather data.

## Configuration

To configure the application, ensure you have a valid OpenWeatherMap API key. This key should be stored in a `.env` file as described in the [Installation](#installation) section.

## Contributing

Contributions are welcome! If you'd like to contribute to WeatherAve, please fork the repository and create a pull request with your changes. Be sure to follow the project's coding guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
