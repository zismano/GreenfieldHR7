DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS bookmarks;


CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	category varchar(40) NOT NULL,
	phone varchar(15) NOT NULL,
	price varchar(5) NOT NULL,
	latitude varchar(30) NOT NULL,
	longitude varchar(30) NOT NULL,
	city varchar(30) NOT NULL,
	address varchar(50) NOT NULL,
	state varchar(2) NOT NULL,
	zip int NOT NULL
);

-- REVISIT: gmailId
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	gmailAddress varchar(50) NOT NULL,
	gmailId varchar(50) NOT NULL,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL
);

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	restaurant_id int NOT NULL,
	createdDate varchar(50) NOT NULL,
	star int NOT NULL,
	comment varchar(250) NOT NULL
);

CREATE TABLE bookmarks (
	id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	restaurant_id int NOT NULL
);

-- users (REVIST: gmailId)
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('zismanofir@gmail.com', '123', 'Ofir', 'Zisman');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('yunliu0212@gmail.com', '1234', 'Emma', 'Liu');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('jimmyctran2013@gmail.com', '12345', 'Jimmy', 'Tran');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('samuelthomasmartin@gmail.com', '123456', 'Sam', 'Martin');

-- reviews
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 1, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 2, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 3, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 4, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 5, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 6, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 7, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 8, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 9, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 10, 'Tue Jan 09 2018 15:22:52 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 50, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 51, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 52, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 53, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 54, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 55, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 56, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 57, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 58, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 59, 'Tue Jan 09 2018 15:23:42 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 100, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 101, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 102, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 103, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 104, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 105, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 106, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 107, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 108, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 109, 'Tue Jan 09 2018 15:24:13 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 150, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 151, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 152, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 153, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 154, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 155, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 156, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 157, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 158, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 159, 'Tue Jan 09 2018 15:24:32 GMT-0800 (PST)', 1, 'TEST');

-- bookmarks
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 500);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 501);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 502);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 503);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 504);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 505);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 506);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 507);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 508);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 509);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 600);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 601);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 602);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 603);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 604);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 605);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 606);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 607);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 608);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 609);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 700);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 701);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 702);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 703);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 704);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 705);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 706);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 707);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 708);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 709);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 800);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 801);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 802);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 803);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 804);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 805);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 806);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 807);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 808);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 809);

