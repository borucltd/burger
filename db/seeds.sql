BEGIN;
USE burger_db;

INSERT INTO burgers (burger_name,devoured) VALUES
("Hamburger",false),("Cheeseburger",false),("BigMac",false);

COMMIT;

