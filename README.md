# Weather App

This is a simple weather app which displays the teperature of particaular city for 5 days.

The Application is built using mainly

* [ReactJS]()
* [Redux]()
* [Material UI]()
* [Typescript]()

Testing in the application is also done using:

* [Enzyme]()
* [Jest]()

## Work progress
* Built a simple webapp application which displays data for a particular city for 5 days.
* A list of commits and progress can be found [here](https://github.com/Cressence/weather-app/commits/main)

## Live App

The application can be accessed [here.](https://cressence.github.io/weather-app)

A picture sample of the final app can be seen below:

![Home Screen](screenshots/preview.png)


# Development

### Running the project

In order to run this project on your local machine:
* Clone the repository with the following command `git clone https://github.com/Cressence/weather-app.git`
* Move to the project folder with the following command `cd weather-app`
* Install dependencies using YARN `yarn install` or NPM `npm install`
* Run the project using YARN `yarn run start` or NPM `npm run start`

### Docker

To run this application with Docker, you should have docker installed on your machine.

If you don't have docker on your local system/computer, go [here](https://docs.docker.com/get-docker/) to download and install it.

* Build container: `docker build -t weather-app:dev .`
* Spin up the container once the build is done: 
```js
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    weather-app:dev
```
* Visit `http://localhost:3001/weather-app` to view the running application

You can also use Docker compose to run the project.

* Just do: `docker-compose up -d --build`
* Visit `http://localhost:3001/weather-app/info` to view the running application
* You can stop the container using: `docker-compose stop`

### Testing

To run existing tests in the project, run `npm run test`

## Difficulties

* Calculating and grouping the data to be displayed in the bar chart. The API provides 40 temperature data readings in a request. I initilaly believed that meant 8 temperature readings per day which led me to displaying wrong information. I later understood the API provides 40 temperature readings from my current time. Which means the bar chart can display from 1 - 8 temperature readings per day depending on your current hour of the day.

## Future Work/Possible Improvements

* Increase and improve test coverage
* Setup a CI/CD pipeline for automatic deployment
* Make application into a Google Chrome extension