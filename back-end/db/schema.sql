\c dr8i3296f8fp6;
CREATE TABLE keyboards (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    layout TEXT NOT NULL,
    price INT
);
CREATE TABLE switches (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    type TEXT NOT NULL,
    force INT,
    prelubed BOOL default false
);
CREATE TABLE keycaps (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    price INT, 
    color TEXT,
    image TEXT
);