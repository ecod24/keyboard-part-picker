DROP DATABASE IF EXISTS kbpp;
CREATE DATABASE kbpp;

\c kbpp;
CREATE TABLE keyboards (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    layout TEXT NOT NULL default '100%',
    price FLOAT NOT NULL, 
    image TEXT default 'blank',
    color TEXT default 'black',
    description TEXT
);
CREATE TABLE switches (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    type TEXT NOT NULL default 'linear',
    top_housing TEXT,
    bottom_housing TEXT,
    stem TEXT,
    travel_distance INT NOT NULL default 4,
    force INT NOT NULL,
    three_pin BOOL default true,
    prelubed BOOL default false,
    image TEXT default 'blank',
    price_per_switch FLOAT NOT NULL
);
CREATE TABLE keycaps (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    price FLOAT NOT NULL, 
    colors TEXT,
    profile TEXT default 'cherry',
    image TEXT default 'blank',
    layout_compatibility TEXT
);
CREATE TABLE users (
    id serial primary key,
    email text not null,
    password text not null
);
CREATE TABLE builds (
    id serial primary key,
    title text,
    keyboard_id int references keyboards(id),
    switches_id int references switches(id),
    keycaps_id int references keycaps(id),
    builder_id int references users(id),
    total_price int not null,
    images text not null
);