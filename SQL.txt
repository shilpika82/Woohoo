cleanup database tables
=========================
drop table feedback ;
drop table empsignin;
drop table logincred ;
drop DATABASE test;


Creation of Database and tables
===============================
CREATE DATABASE  test;
use test;
CREATE table feedback (username VARCHAR(20) NOT NULL,rating VARCHAR(2) NOT NULL,comments VARCHAR(500),timestamp TIMESTAMP);
CREATE table empsignin(username varchar(20) NOT NULL,passwd varchar(20) NOT NULL,PRIMARY KEY(username));
CREATE table logincred (username VARCHAR(20), firstname varchar(20) NOT NULL ,lastname varchar(20) NOT NULL, role VARCHAR(40),PRIMARY KEY(username));