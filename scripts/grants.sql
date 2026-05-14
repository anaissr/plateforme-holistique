-- ================================================================
-- GRANTS EXPLICITES — Holistia
-- À exécuter dans Supabase SQL Editor (après schema.sql et rls.sql)
--
-- Contexte : à partir du 30 mai 2026, Supabase n'expose plus
-- automatiquement les tables publiques à l'API PostgREST.
-- Ces GRANTs sont obligatoires pour que supabase-js continue
-- de fonctionner en production.
--
-- Rôles Supabase :
--   anon        = visiteur non connecté
--   authenticated = utilisateur connecté (patient ou praticien)
--
-- Les politiques RLS (rls.sql) restent actives et continuent
-- de filtrer exactement qui voit quoi — les GRANTs définissent
-- uniquement ce que l'API est autorisée à exposer au niveau SQL.
-- ================================================================


-- ================================================================
-- SCHÉMA
-- PostgREST a besoin d'un accès USAGE sur le schéma public
-- ================================================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;


-- ================================================================
-- TABLE praticiens
-- Lecture publique (recherche, fiches) — écriture par le praticien lui-même (RLS)
-- ================================================================
GRANT SELECT          ON TABLE public.praticiens TO anon, authenticated;
GRANT INSERT          ON TABLE public.praticiens TO authenticated;
GRANT UPDATE          ON TABLE public.praticiens TO authenticated;
GRANT USAGE, SELECT   ON SEQUENCE public.praticiens_id_seq TO authenticated;


-- ================================================================
-- TABLE patients
-- Aucun accès anonyme — le patient accède uniquement à ses propres données (RLS)
-- ================================================================
GRANT SELECT          ON TABLE public.patients TO authenticated;
GRANT INSERT          ON TABLE public.patients TO authenticated;
GRANT UPDATE          ON TABLE public.patients TO authenticated;
GRANT USAGE, SELECT   ON SEQUENCE public.patients_id_seq TO authenticated;


-- ================================================================
-- TABLE rendez-vous  (guillemets obligatoires : nom avec tiret)
-- Aucun accès anonyme — RLS restreint patient à ses RDV, praticien aux siens
-- ================================================================
GRANT SELECT          ON TABLE public."rendez-vous" TO authenticated;
GRANT INSERT          ON TABLE public."rendez-vous" TO authenticated;
GRANT UPDATE          ON TABLE public."rendez-vous" TO authenticated;
GRANT USAGE, SELECT   ON SEQUENCE public."rendez-vous_id_seq" TO authenticated;


-- ================================================================
-- TABLE ateliers
-- Lecture publique (page /ateliers) — écriture par le praticien (RLS)
-- ================================================================
GRANT SELECT          ON TABLE public.ateliers TO anon, authenticated;
GRANT INSERT          ON TABLE public.ateliers TO authenticated;
GRANT UPDATE          ON TABLE public.ateliers TO authenticated;
GRANT DELETE          ON TABLE public.ateliers TO authenticated;
GRANT USAGE, SELECT   ON SEQUENCE public.ateliers_id_seq TO authenticated;


-- ================================================================
-- TABLE avis
-- Lecture publique (fiches praticiens) — insertion par patient authentifié (RLS)
-- ================================================================
GRANT SELECT          ON TABLE public.avis TO anon, authenticated;
GRANT INSERT          ON TABLE public.avis TO authenticated;
GRANT USAGE, SELECT   ON SEQUENCE public.avis_id_seq TO authenticated;


-- ================================================================
-- FONCTION update_praticien_note
-- Appelée via supabase.rpc() après soumission d'un avis
-- SECURITY DEFINER = s'exécute avec les droits du créateur (bypass RLS)
-- ================================================================
GRANT EXECUTE ON FUNCTION public.update_praticien_note(BIGINT) TO authenticated;
