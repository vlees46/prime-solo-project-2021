
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"gender" VARCHAR(8) NOT NULL,
	"age" integer NOT NULL,
	"weight" integer NOT NULL,
	"height" integer NOT NULL,
	"activity" VARCHAR(255) NOT NULL,
	"goal" VARCHAR(30) NOT NULL UNIQUE,
	"calories" integer NOT NULL,
	"fats" integer NOT NULL,
	"proteins" integer NOT NULL,
	"role" varchar(10) NOT NULL
);

CREATE TABLE "user_meals" (
	"Id" SERIAL PRIMARY KEY,
	"meal_id" integer NOT NULL,
	"goal" VARCHAR(30) NOT NULL
);


CREATE TABLE "meals" (
	"id"  SERIAL PRIMARY KEY,
	"mealtime" varchar(15) NOT NULL,
	"description" varchar(255) NOT NULL,
	"calories" integer NOT NULL,
	"protein" integer NOT NULL,
	"fats" integer NOT NULL
);



