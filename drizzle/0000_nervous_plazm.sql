CREATE TABLE "racipe" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone" integer,
	"review" text,
	"date" date DEFAULT now()
);
