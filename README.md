# Food Variety

A simple system for tracking the variety of food you eat in a week

## Features

### MVP
The first version will be very simple. A text box to type in "who ate what" and a report showing the different kinds of foods eaten in a single week

### Future features
* Tag foods with color, category (fruit, veggie, grain, etc...)
* Link food to nutrient profile using some public API that hopefully exists
* Use TensorFlowJS to parse out the "who at what" text to make consistent data entry easier

## Tech Stack
* Svelte for front end
* Spring Boot/MVC for server side
* MariaDB for DB
* Liquibase to manage the DB schema
* Docker for runtime
* Run it all on RobCloud

## Working with the code

* The repo has the Svelte/UI source and the Java backend source in one root directory. 
* `rollup.config.js` has been setup to build the Svelte frontend into the /src/main/resources/static folder, which is where Spring MVC serves static resources.

### Tasks
Java build tasks are handled via [Gradle](build.gradle). All other tasks are handled via [NPM](package.json). When in doubt, look at the gradle and npm build files.

First step after pulling down the repo is running `npm install`

* If you're working on pure front end stuff:  `npm run dev:ui` and visit http://localhost:5000
* If you're working on the full stack: `npm run dev` and visit http://localhost:8080
* When it's time to do a build: `npm run buid`
* To run the fully build app locally: `npm run system` and visit http://localhost:8080