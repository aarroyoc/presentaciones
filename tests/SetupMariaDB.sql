CREATE USER IF NOT EXISTS 'presentaciones-test'@'localhost' IDENTIFIED BY 'presentaciones-test';
GRANT ALL PRIVILEGES ON * . * TO 'presentaciones-test'@'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE presentaciones;