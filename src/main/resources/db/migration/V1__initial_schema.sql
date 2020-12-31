CREATE TABLE Eater(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `key` VARCHAR(255) NOT NULL UNIQUE,
    `name` VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE FoodConsumed(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `rawText` VARCHAR(255) NOT NULL,
    `eaterKey` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Food(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `created` TIMESTAMP,
    `name` VARCHAR(255) NOT NULL UNIQUE,
    `color` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);