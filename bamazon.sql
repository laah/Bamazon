DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE  products  ( 
		id INTEGER(11) AUTO_INCREMENT NOT NULL,
		product_name VARCHAR(100) NOT NULL, 
	    department_name VARCHAR(30),
        price DECIMAL (10,2) NULL,
        stock_quantity INTEGER(10)NULL,
        PRIMARY KEY (id)
        
);
SELECT * FROM  products

USE bamazon_db;


INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "socks", "essentials", 9.99, 30 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "t-shirts", "essentials",29.99, 45 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "cardigans", "sweaters", 79.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "turtle-neck", "sweaters", 79.99, 30 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "leggings", "bottoms", 30.00, 35 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "jeans", "bottoms", 98.00, 25 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "skirt", "bottom", 75.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "button-down", "tops", 69.99, 30 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "blouse", "tops", 79.99, 35 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
		VALUES ( "scarve", "essentials", 25.00, 40);