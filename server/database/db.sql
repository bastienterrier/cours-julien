CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(255) NOT NULL
);

INSERT INTO users (name) VALUES ('Julien');
INSERT INTO users (name) VALUES ('Bastien');

DELETE FROM users;