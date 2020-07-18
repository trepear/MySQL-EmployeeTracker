DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL, 
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL (6, 2),
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

USE tracker_db;

INSERT INTO department (name) values ("Sales and Marketing");
INSERT INTO department (name) values ("Operations");
INSERT INTO department (name) values ("Finance");
INSERT INTO department (name) values ("Human Resources");

INSERT INTO role (title, salary, department_id) values ("Budget Analyst", 75, 3);
INSERT INTO role (title, salary, department_id) values ("HR Generalist", 70, 4);
INSERT INTO role (title, salary, department_id) values ("Marketing Associate", 50, 1);
INSERT INTO role (title, salary, department_id) values ("Supply Chain Specialaist", 80, 2);
INSERT INTO role (title, salary, department_id) values ("Accountant", 90, 3);
 
INSERT INTO employee (first_name, last_name, role_id) values ("Peggy", "Olson", 1);
INSERT INTO employee (first_name, last_name, role_id) values ("Joan", "Hollaway", 2);
INSERT INTO employee (first_name, last_name, role_id) values ("Roger", "Sterling", 3);
INSERT INTO employee (first_name, last_name, role_id) values ("Don", "Draper", 4);
INSERT INTO employee (first_name, last_name, role_id) values ("Pete", "Campbell", 5);


