BEGIN;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description TEXT,
  price VARCHAR(50) NOT NULL
);

INSERT INTO products (title, description, price)
VALUES ('Iphone14ProMax', 'This is the best phone in 2023', '4000');

COMMIT;