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