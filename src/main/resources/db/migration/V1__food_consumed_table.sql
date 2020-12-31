CREATE TABLE FoodConsumed(
    id bigint(20) NOT NULL AUTO_INCREMENT,
    created TIMESTAMP,
    rawText VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);