--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
4	1	1	1
11	59	1	2999
12	60	1	2999
13	61	2	2595
14	62	2	2595
15	63	1	2999
16	64	2	2595
17	65	2	2595
18	66	2	2595
19	67	2	2595
20	68	2	2595
21	69	2	2595
22	70	2	2595
23	71	2	2595
24	72	2	2595
25	73	2	2595
26	74	2	2595
27	75	2	2595
28	76	2	2595
29	77	2	2595
30	78	2	2595
31	79	2	2595
32	80	2	2595
33	81	2	2595
34	80	4	999
35	80	4	999
36	80	5	9900
37	80	1	2999
38	80	1	2999
39	80	6	830
40	80	4	999
41	80	4	999
42	80	3	2900
43	80	5	9900
70	109	1	2999
71	109	2	2595
73	109	2	2595
74	110	2	2595
75	110	3	2900
76	110	5	9900
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-09-28 23:59:21.686024+00
2	2020-09-29 00:08:36.825775+00
3	2020-09-29 00:24:28.94349+00
4	2020-09-29 00:25:36.031939+00
5	2020-09-29 00:28:11.734918+00
6	2020-09-29 00:28:41.849811+00
7	2020-09-29 00:36:10.656455+00
8	2020-09-29 00:36:23.370232+00
9	2020-09-29 00:37:28.238599+00
10	2020-09-29 00:49:50.02986+00
11	2020-09-29 00:54:23.350617+00
12	2020-09-29 00:55:16.355649+00
13	2020-09-29 01:27:21.678285+00
14	2020-09-29 01:40:18.622729+00
15	2020-09-29 01:41:05.39226+00
16	2020-09-29 01:42:09.782456+00
17	2020-09-29 01:42:35.478324+00
18	2020-09-29 01:43:22.675632+00
19	2020-09-29 01:44:37.131222+00
20	2020-09-29 01:45:11.44777+00
21	2020-09-29 01:46:08.152471+00
22	2020-09-29 01:51:02.998173+00
23	2020-09-29 01:51:20.242892+00
24	2020-09-29 02:36:30.923013+00
25	2020-09-29 02:36:54.773453+00
26	2020-09-29 02:37:20.122416+00
27	2020-09-29 04:35:02.023517+00
28	2020-09-29 05:45:00.545945+00
29	2020-09-29 05:45:08.340088+00
30	2020-09-29 05:45:27.248008+00
31	2020-09-29 05:47:10.178049+00
32	2020-09-29 05:47:25.371339+00
33	2020-09-29 07:19:17.585022+00
34	2020-09-29 07:19:46.112823+00
35	2020-09-29 07:21:18.046776+00
36	2020-09-29 07:27:04.320804+00
37	2020-09-29 07:27:23.435421+00
38	2020-09-29 07:34:14.866475+00
39	2020-09-29 08:43:33.497103+00
40	2020-09-29 08:45:02.937099+00
41	2020-09-29 08:45:33.487616+00
42	2020-09-29 08:46:25.699873+00
43	2020-09-29 08:56:20.072552+00
44	2020-09-29 08:56:27.397445+00
45	2020-09-29 15:42:56.005829+00
46	2020-09-29 15:48:35.800336+00
47	2020-09-29 15:54:25.219635+00
48	2020-09-29 16:48:23.437627+00
49	2020-09-29 16:48:45.798524+00
50	2020-09-29 16:49:24.323621+00
51	2020-09-29 16:50:09.385472+00
52	2020-09-29 16:50:36.513348+00
53	2020-09-29 16:54:10.684898+00
54	2020-09-29 16:55:36.412896+00
55	2020-09-29 16:55:57.121368+00
56	2020-09-29 16:56:25.389001+00
57	2020-09-29 16:56:45.248972+00
58	2020-09-29 16:59:16.230631+00
59	2020-09-29 17:00:18.248303+00
60	2020-09-29 17:06:58.283804+00
61	2020-09-29 17:07:21.597607+00
62	2020-09-29 17:15:45.907439+00
63	2020-09-29 17:16:20.455655+00
64	2020-09-29 17:17:00.84258+00
65	2020-09-29 17:17:54.459238+00
66	2020-09-29 17:18:20.809205+00
67	2020-09-29 17:20:52.066938+00
68	2020-09-29 17:23:10.73616+00
69	2020-09-29 17:24:09.627567+00
70	2020-09-29 17:24:26.657747+00
71	2020-09-29 17:24:40.760272+00
72	2020-09-29 17:25:46.977955+00
73	2020-09-29 17:29:19.323336+00
74	2020-09-29 17:29:34.881876+00
75	2020-09-29 17:29:49.698409+00
76	2020-09-29 17:29:51.793025+00
77	2020-09-29 17:30:01.540257+00
78	2020-09-29 17:32:07.88442+00
79	2020-09-29 17:32:55.868474+00
80	2020-09-29 17:35:45.978374+00
81	2020-09-29 17:40:56.970081+00
82	2020-09-29 22:17:18.620493+00
83	2020-09-29 22:18:07.940654+00
84	2020-09-29 22:24:18.242453+00
85	2020-09-29 22:29:37.632712+00
86	2020-09-29 22:33:46.979873+00
87	2020-09-29 22:34:19.620707+00
88	2020-09-29 22:34:30.485887+00
89	2020-09-29 22:35:38.551933+00
90	2020-09-29 22:36:28.988619+00
91	2020-09-29 22:39:47.921716+00
92	2020-09-29 22:40:14.151223+00
93	2020-09-29 22:40:54.603534+00
94	2020-09-29 22:41:10.386139+00
95	2020-09-29 22:41:30.617975+00
96	2020-09-29 22:42:00.601145+00
97	2020-09-29 22:43:41.10075+00
98	2020-09-29 22:44:17.631136+00
99	2020-09-29 22:44:58.96291+00
100	2020-09-29 22:46:20.27889+00
101	2020-09-29 22:47:06.621332+00
102	2020-09-29 22:47:46.760405+00
103	2020-09-29 22:48:52.539968+00
104	2020-09-29 22:49:05.744914+00
105	2020-09-29 22:49:23.85516+00
106	2020-09-29 22:50:22.422039+00
107	2020-09-29 22:50:48.896424+00
108	2020-09-29 22:51:24.89045+00
109	2020-09-29 22:51:43.379465+00
110	2020-09-29 22:53:13.169754+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
4	Night Light Decaf	2000	/images/night-light-decaf.jpg	Crème brûlée, vanilla, key lime	Like its predecessor, Decaf Noir, Night Light remains a delicious fusion of coffees from Sumatra and Central America, decaffeinated with the mind-boggling and chemical-free Swiss Water Process. And like Decaf Noir, this sweet and satisfying blend proves that decaf never has to compromise flavor—our coffee team describes it as “creamy and versatile” with decadent “malt” undertones.
1	Bella Donovan	1100	/images/bella-donovan.jpg	Raspberry, chocolate, molasses	Bella Donovan is the wool sweater of our blends—comforting, cozy, and enveloping. Our most popular blend, Bella is a variation of the archetypal Moka-Java pairing, in which a wild and jammy natural from Ethiopia finds balance with more substantive coffees from Sumatra and Peru. It stands on the darker side of things, weathers the rigors of the automatic drip machine well, and stands up to milk or cream—though it is just as elegant black.
2	Beta Blend	1800	/images/beta-blend.jpg	Candied orange, milk chocolate, white peach	While many of our coffee blends are noteworthy for their sturdiness, the glassy and floral Beta Blend is cut from a different cloth. What began as a collaboration between our sourcing and digital teams has evolved into a delicate counterpoint to our heftier blends that is available for online purchase exclusively.
3	New Orleans–Style Coffee and Chicory	1800	/images/new-orleans.jpg	The coffee and ground chicory you need to make our NOLA at home	Known affectionately as our NOLA, our New Orleans–Style Iced Coffee is one of our most popular drinks year-round—and has been ever since our founder James Freeman started making it to sell at farmers markets in the San Francisco Bay Area. Casting around for a worthy iced-latte alternative, he stumbled upon the New Orleans tradition of serving sweet, milky coffee cut with chicory.
5	Opascope Espresso	2000	/images/opascope-espresso.jpg	Juicy, vibrant, clean	What’s in a name? Well, we’ve always been fans of the opascope, a beautiful tool for projecting handwriting and finely rendered artwork onto a larger surface. We could blab for hours about its quaint design, its bulky contours, its place in our childhood classrooms. But for expediency’s sake, let’s put it this way: The opascope is a tool for taking careful craftsmanship and opening it up for everyone to access and enjoy. Sound familiar? Available only online, Opascope Espresso is a refreshing addition to a lineup once dominated by dense, chocolatey selections. It yields an effervescent shot, packed with stripes of tropicalia.
6	Three Africas	1800	/images/three-africas.jpg	Golden raisin, winey blueberry, lemon zest	Three Africas marries the radiant fruit of two coffees from Ethiopia, one washed and one natural, with the balance and authority of a washed coffee from Uganda. Each component excels on its own, but together, they traverse boundaries. No matter the brew method, this blend, which is our brightest, has good body and an approachable complexity that takes to cream well, but stands just as radiantly on its own.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 76, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 110, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 1, false);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

