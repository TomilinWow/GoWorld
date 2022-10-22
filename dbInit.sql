BEGIN;

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = ON;
SET check_function_bodies = FALSE;
SET client_min_massages = WARNING;
SET search_path = public, extensionsl;
SET default_tablespace = '';
SET default_with_oids = FALSE;

-- EXTENSIONS --

    CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- TABLES --
CREATE TABLE public.city
(
    "id" SERIAL PRIMARY KEY,
    "city_name" varchar not null,
    "city_coordinate" varchar not null
);

CREATE TABLE public.passive
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar not null,
    "value" varchar not null
);

CREATE TABLE public.user_passive
(
    "id" SERIAL PRIMARY KEY,
    "passive_id" INTEGER REFERENCES public.passive (id),
    "value" varchar not null
);

CREATE TABLE public.items
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar not null,
    "value" varchar not null,
    "description" varchar not null
);

CREATE TABLE public.users
(
        "id" SERIAL PRIMARY KEY,
        "first_name" varchar not null,
        "last_name" varchar not null,
        "phone_number" varchar not null,
        "email" varchar not null,
        "username" varchar not null,
        "password" varchar not null,
        "user_passive_id" INTEGER REFERENCES public.user_passive (id),
        "city_id" INTEGER REFERENCES public.city (id),
        "exp_value" INTEGER not null
);

CREATE TABLE public.inventory
(
    "user_id" INTEGER REFERENCES public.users (id),
    "item_id" INTEGER REFERENCES public.items (id)
);

CREATE TABLE public.institution
(
    "id" SERIAL PRIMARY KEY,
    "level" INTEGER not null,
    "average_check" INTEGER,
    "phone_number" varchar,
    "work_time" DATE,
    "address" varchar,
    "url" varchar,
    "exp" INTEGER,
    "city_id" INTEGER REFERENCES public.city (id)
);

CREATE TABLE public.reviews
(
    "id" SERIAL PRIMARY KEY,
    "date" DATE not null,
    "content" varchar not null,
    "user_id" INTEGER REFERENCES public.users (id),
    "stars" INTEGER not null,
    "institution_id" INTEGER REFERENCES public.institution (id),
    "city_id" INTEGER REFERENCES public.city (id)
);

CREATE TABLE public.common_promo
(
    "id" SERIAL PRIMARY KEY,
    "content" varchar not null,
    "value" varchar not null,
    "institution_id" INTEGER REFERENCES public.institution (id),
    "city_id" INTEGER REFERENCES public.city (id)
);

INSERT INTO public.city (city_name, city_coordinate) values ('СПБ','23');
INSERT INTO public.city (city_name, city_coordinate) values ('МСК','53');
-- INSERT INTO public.user (email,username,password,city_id) values ('emaiasd@email.ru','useasdser','dsadasd',1);
INSERT INTO public.users (first_name,last_name,phone_number,email,username,password,exp_value) values ('Антон','Жданов','79132895233','zhdanov@mail.ru','antosa123','parolanton','0');

COMMIT;
