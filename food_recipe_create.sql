-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-04-09 20:57:44.096

-- tables
-- Table: FOOD
CREATE TABLE FOOD (
    ID_FOOD int NOT NULL,
    NAME varchar(100) NOT NULL,
    DESCRIPTION varchar(255) NOT NULL,
    CALORIES varchar(10) NOT NULL,
    DIFFICULTY int NOT NULL,
    IMAGE varchar(100) NOT NULL,
    USER_ID_USER int NOT NULL,
    CONSTRAINT FOOD_pk PRIMARY KEY (ID_FOOD)
);

-- Table: USER
CREATE TABLE USER (
    ID_USER int NOT NULL AUTO_INCREMENT,
    USERNAME varchar(20) NOT NULL,
    PASSWORD varchar(255) NOT NULL,
    UNIQUE INDEX USER_ak_1 (USERNAME),
    CONSTRAINT USER_pk PRIMARY KEY (ID_USER)
);

-- foreign keys
-- Reference: FOOD_USER (table: FOOD)
ALTER TABLE FOOD ADD CONSTRAINT FOOD_USER FOREIGN KEY FOOD_USER (USER_ID_USER)
    REFERENCES USER (ID_USER);

-- End of file.

