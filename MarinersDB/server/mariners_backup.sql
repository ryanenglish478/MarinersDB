--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: player_stats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_stats (
    id integer NOT NULL,
    player_name character varying(100) NOT NULL,
    pos_group character varying(10) NOT NULL,
    avg numeric(4,3),
    hr integer,
    rbi integer,
    era numeric(4,2),
    ip double precision,
    ks integer
);


ALTER TABLE public.player_stats OWNER TO postgres;

--
-- Name: player_stats_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.player_stats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_stats_id_seq OWNER TO postgres;

--
-- Name: player_stats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.player_stats_id_seq OWNED BY public.player_stats.id;


--
-- Name: player_stats id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_stats ALTER COLUMN id SET DEFAULT nextval('public.player_stats_id_seq'::regclass);


--
-- Data for Name: player_stats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_stats (id, player_name, pos_group, avg, hr, rbi, era, ip, ks) FROM stdin;
668227	Randy Arozarena	Batter	0.238	27	76	\N	\N	\N
660825	Eduard Bazardo	Pitcher	\N	\N	\N	2.52	78.2	82
669208	Ryan Bliss	Batter	0.200	1	3	\N	\N	\N
666374	Matt Brash	Pitcher	\N	\N	\N	2.47	47.1	58
686228	Juan Burgos	Pitcher	\N	\N	\N	6.08	13.1	14
686527	Dominic Canzone	Batter	0.300	11	32	\N	\N	\N
680604	Blas Castaño	Pitcher	\N	\N	\N	9.00	3	1
620454	José Castillo	Pitcher	\N	\N	\N	3.94	32	30
622491	Luis Castillo	Pitcher	\N	\N	\N	3.54	180.2	162
622379	Luis F. Castillo	Pitcher	\N	\N	\N	7.71	7	5
641487	J.P. Crawford	Batter	0.265	12	58	\N	\N	\N
646242	Jhonathan Díaz	Pitcher	\N	\N	\N	0.00	1.1	1
688138	Logan Evans	Pitcher	\N	\N	\N	4.32	81.1	59
657571	Caleb Ferguson	Pitcher	\N	\N	\N	3.58	65.1	51
695670	Harry Ford	Batter	0.167	0	1	\N	\N	\N
805299	Brandyn Garcia	Pitcher	\N	\N	\N	5.65	14.1	14
641598	Mitch Garver	Batter	0.209	9	30	\N	\N	\N
669302	Logan Gilbert	Pitcher	\N	\N	\N	3.44	131	173
534910	Jesse Hahn	Pitcher	\N	\N	\N	5.40	5	3
676106	Emerson Hancock	Pitcher	\N	\N	\N	4.90	90	64
592426	Luke Jackson	Pitcher	\N	\N	\N	4.06	51	38
669923	George Kirby	Pitcher	\N	\N	\N	4.21	126	137
663804	Jackson Kowar	Pitcher	\N	\N	\N	4.24	17	15
666659	Sauryn Lao	Pitcher	\N	\N	\N	4.91	11	9
596271	Casey Lawrence	Pitcher	\N	\N	\N	4.08	17.2	7
668984	Casey Legumina	Pitcher	\N	\N	\N	5.62	49.2	55
670156	Miles Mastrobuoni	Batter	0.250	1	12	\N	\N	\N
682243	Bryce Miller	Pitcher	\N	\N	\N	5.68	90.1	74
664238	Dylan Moore	Batter	0.201	11	25	\N	\N	\N
662253	Andrés Muñoz	Pitcher	\N	\N	\N	1.73	62.1	83
647304	Josh Naylor	Batter	0.295	20	92	\N	\N	\N
593871	Jorge Polanco	Batter	0.265	26	78	\N	\N	\N
647315	Zach Pop	Pitcher	\N	\N	\N	14.85	6.2	3
663728	Cal Raleigh	Batter	0.247	60	125	\N	\N	\N
670042	Luke Raley	Batter	0.202	4	19	\N	\N	\N
660844	Leo Rivas	Batter	0.244	2	9	\N	\N	\N
645302	Victor Robles	Batter	0.245	1	9	\N	\N	\N
677594	Julio Rodríguez	Batter	0.267	32	95	\N	\N	\N
666619	Gregory Santos	Pitcher	\N	\N	\N	5.14	7	0
642048	Tayler Saucedo	Pitcher	\N	\N	\N	7.43	13.1	12
676092	Collin Snider	Pitcher	\N	\N	\N	5.47	26.1	24
456781	Donovan Solano	Batter	0.247	3	21	\N	\N	\N
642100	Gabe Speier	Pitcher	\N	\N	\N	2.61	62	82
553993	Eugenio Suárez	Batter	0.228	49	118	\N	\N	\N
665750	Leody Taveras	Batter	0.205	3	17	\N	\N	\N
669392	Samad Taylor	Batter	0.125	0	0	\N	\N	\N
700187	Troy Taylor	Pitcher	\N	\N	\N	12.15	6.2	2
642133	Rowdy Tellez	Batter	0.228	17	49	\N	\N	\N
689041	Rhylan Thomas	Batter	0.125	0	2	\N	\N	\N
663423	Trent Thornton	Pitcher	\N	\N	\N	4.68	42.1	32
672841	Carlos Vargas	Pitcher	\N	\N	\N	3.97	77	54
810938	Ben Williamson	Batter	0.253	1	21	\N	\N	\N
693433	Bryan Woo	Pitcher	\N	\N	\N	2.94	186.2	198
702284	Cole Young	Batter	0.211	4	24	\N	\N	\N
\.


--
-- Name: player_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.player_stats_id_seq', 2, true);


--
-- Name: player_stats player_stats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_stats
    ADD CONSTRAINT player_stats_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

