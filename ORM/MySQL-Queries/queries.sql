
CREATE DATABASE IF NOT EXISTS `school_db`
;
USE `school_db`
;
CREATE TABLE IF NOT EXISTS `STUDENTS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(128) NOT NULL,
	`age` INT NOT NULL,
	`gender` CHAR NOT NULL,
	PRIMARY KEY(`id`)
)
;
INSERT INTO `STUDENTS`
	(`name`, `age`, gender)
VALUES
	('Mitko', 3, 'm'),
	('Katerina', 18, 'f')
;

DELETE
  FROM `students`
 WHERE `id` = 1
;

SELECT name AS `TOVA_E_IME`
  FROM `students`
;
