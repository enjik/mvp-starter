DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;
USE mvp;

CREATE TABLE tasks (
	id int NOT NULL AUTO_INCREMENT,
	description varchar(50) NOT NULL,
  hours int NOT NULL,
  deadline datetime NOT NULL,
  category varchar(50) NOT NULL,
  completed boolean NOT NULL,
  position point NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO tasks (description, hours, deadline, category, completed, position) VALUES
(),
(),
(),
(),
(),
(),
(),
();
