-- ============================================================
-- ÉTAPE 1 : Activer propose_ateliers pour les 3 praticiens
-- ============================================================
UPDATE praticiens SET propose_ateliers = true WHERE nom = 'Sophie Renard';
UPDATE praticiens SET propose_ateliers = true WHERE nom = 'Julien Martin';
UPDATE praticiens SET propose_ateliers = true WHERE nom = 'Thomas Favre';

-- ============================================================
-- ÉTAPE 2 : Vérifier les IDs générés (noter les valeurs)
-- ============================================================
SELECT id, nom, specialite, propose_ateliers
FROM praticiens
WHERE nom IN ('Sophie Renard', 'Julien Martin', 'Thomas Favre');

-- ============================================================
-- ÉTAPE 3 : Si la table "ateliers" n'existe pas encore,
-- la créer (optionnel — la page ateliers est actuellement
-- en données statiques, pas besoin de cette table pour le MVP)
-- ============================================================
-- CREATE TABLE IF NOT EXISTS ateliers (
--   id          SERIAL PRIMARY KEY,
--   titre       TEXT NOT NULL,
--   praticien_id INTEGER REFERENCES praticiens(id),
--   specialite  TEXT,
--   date        TEXT,
--   heure       TEXT,
--   format      TEXT,
--   lieu        TEXT,
--   places      INTEGER DEFAULT 15,
--   tarif       INTEGER,
--   categorie   TEXT,
--   niveau      TEXT,
--   description TEXT
-- );

-- ============================================================
-- ÉTAPE 4 : Si la table existe, lier les ateliers aux praticiens
-- (remplacer les IDs par ceux obtenus à l'étape 2)
-- ============================================================
-- UPDATE ateliers
--   SET praticien_id = (SELECT id FROM praticiens WHERE nom = 'Sophie Renard')
--   WHERE titre ILIKE '%sophrologie%stress%';

-- UPDATE ateliers
--   SET praticien_id = (SELECT id FROM praticiens WHERE nom = 'Julien Martin')
--   WHERE titre ILIKE '%naturopathie%';

-- UPDATE ateliers
--   SET praticien_id = (SELECT id FROM praticiens WHERE nom = 'Thomas Favre')
--   WHERE titre ILIKE '%kinésiologie%';
