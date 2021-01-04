CREATE TABLE eater(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `eater_key` VARCHAR(255) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE food_consumed(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `message` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE food(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `food_key` VARCHAR(255) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL UNIQUE,
    `color` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE food_variety(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `eater_key` VARCHAR(255) NOT NULL,
    `food_key` VARCHAR(255) NOT NULL,
    `year` SMALLINT NOT NULL,
    `week_number` TINYINT NOT NULL,
    `day_of_week` SMALLINT NOT NULL,
    PRIMARY KEY (id)
);