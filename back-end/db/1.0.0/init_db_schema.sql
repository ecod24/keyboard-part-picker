DROP DATABASE IF EXISTS KBPP;
CREATE DATABASE KBPP;

\c KBPP;

CREATE TABLE keyboards (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    layout TEXT NOT NULL,
    price INT,
    image TEXT
);

CREATE TABLE switches (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    type TEXT NOT NULL,
    force INT,
    prelubed BOOL default false, 
    image TEXT
);

CREATE TABLE keycaps (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    price INT, 
    color TEXT,
    image TEXT
);