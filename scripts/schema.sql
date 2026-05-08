-- ================================================================
-- SCHÉMA COMPLET — Holistia
-- Reconstruit depuis le code source (app/, scripts/seed-praticiens.sql)
-- À exécuter dans Supabase SQL Editor avant rls.sql
-- ================================================================

-- ================================================================
-- TABLE praticiens
-- ================================================================
CREATE TABLE IF NOT EXISTS praticiens (
  id            BIGSERIAL PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  nom           TEXT,
  email         TEXT,
  telephone     TEXT,
  specialite    TEXT,
  ville         TEXT,
  pays          TEXT,
  bio           TEXT,
  visio         BOOLEAN DEFAULT false,
  cabinet       BOOLEAN DEFAULT false,
  valide        BOOLEAN DEFAULT false,
  actif         BOOLEAN DEFAULT true,
  propose_ateliers BOOLEAN DEFAULT false,
  tarifs        JSONB DEFAULT '[]',   -- [{label, duree, prix}]
  diplomes      JSONB DEFAULT '[]',   -- [{titre, ecole, annee}]
  disponibilites JSONB DEFAULT '{}',  -- {Lundi: ["10:00","11:00"], ...}
  photo         TEXT,
  specialites   TEXT[],
  public_cible  TEXT[],
  note_moyenne  NUMERIC(3,1),
  nb_avis       INTEGER DEFAULT 0,
  assurance     TEXT,
  assureur      TEXT,
  lien_visio    TEXT,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- TABLE patients
-- ================================================================
CREATE TABLE IF NOT EXISTS patients (
  id                   BIGSERIAL PRIMARY KEY,
  user_id              UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  prenom               TEXT,
  nom                  TEXT,
  email                TEXT,
  telephone            TEXT,
  ville                TEXT,
  pays                 TEXT,
  age                  TEXT,
  situation            TEXT,
  profession           TEXT,
  nb_enfants           TEXT,
  mode_preference      TEXT,
  problematiques       TEXT[],
  approches_deja       TEXT[],
  approches_interesse  TEXT[],
  enfants              JSONB DEFAULT '[]',  -- [{prenom, age}]
  created_at           TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- TABLE rendez-vous
-- Note : nom avec tiret → guillemets obligatoires partout
-- patient_id stocke auth.uid() en TEXT (pas uuid) — ne pas changer
-- ================================================================
CREATE TABLE IF NOT EXISTS "rendez-vous" (
  id             BIGSERIAL PRIMARY KEY,
  praticien_id   BIGINT REFERENCES praticiens(id) ON DELETE CASCADE,
  patient_id     TEXT,   -- auth.uid() stocké en text
  date           TEXT,
  heure          TEXT,
  duree          TEXT,
  mode           TEXT,   -- 'Visio' | 'Cabinet'
  statut         TEXT DEFAULT 'en_attente',
                         -- 'en_attente' | 'confirme' | 'annule' | 'termine'
  prestation     TEXT,
  tarif          INTEGER,
  notes_praticien TEXT,
  created_at     TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- TABLE ateliers
-- Note : praticien_id stocke praticiens.user_id (UUID), pas praticiens.id
-- ================================================================
CREATE TABLE IF NOT EXISTS ateliers (
  id           BIGSERIAL PRIMARY KEY,
  praticien_id UUID,   -- references praticiens.user_id
  titre        TEXT,
  specialite   TEXT,
  date         TEXT,
  heure        TEXT,
  format       TEXT,   -- 'Visio' | 'Présentiel'
  lieu         TEXT,
  places       INTEGER DEFAULT 15,
  tarif        INTEGER,
  categorie    TEXT,
  niveau       TEXT,
  description  TEXT,
  programme    TEXT[],
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- ================================================================
-- TABLE avis
-- ================================================================
CREATE TABLE IF NOT EXISTS avis (
  id           BIGSERIAL PRIMARY KEY,
  praticien_id BIGINT REFERENCES praticiens(id) ON DELETE CASCADE,
  patient_id   TEXT,   -- auth.uid() du patient (pour éviter les doublons)
  rdv_id       BIGINT, -- optionnel — lie l'avis au RDV concerné
  prenom       TEXT,
  date         TEXT,   -- date affichée sur la fiche : "mai 2026"
  note         INTEGER CHECK (note BETWEEN 1 AND 5),
  ponctualite  INTEGER CHECK (ponctualite BETWEEN 1 AND 5),
  ecoute       INTEGER CHECK (ecoute BETWEEN 1 AND 5),
  clarte       INTEGER CHECK (clarte BETWEEN 1 AND 5),
  texte        TEXT,
  created_at   TIMESTAMPTZ DEFAULT now(),
  UNIQUE (praticien_id, patient_id, rdv_id)  -- un avis par RDV
);

-- ================================================================
-- FONCTION : recalcule note_moyenne et nb_avis après un nouvel avis
-- Appelée via supabase.rpc('update_praticien_note', { p_praticien_id })
-- SECURITY DEFINER = s'exécute avec les droits du créateur (bypasse RLS)
-- ================================================================
CREATE OR REPLACE FUNCTION update_praticien_note(p_praticien_id BIGINT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE praticiens
  SET
    note_moyenne = (SELECT ROUND(AVG(note)::numeric, 1) FROM avis WHERE praticien_id = p_praticien_id),
    nb_avis      = (SELECT COUNT(*) FROM avis WHERE praticien_id = p_praticien_id)
  WHERE id = p_praticien_id;
END;
$$;

-- ================================================================
-- INDEX utiles pour les performances
-- ================================================================
CREATE INDEX IF NOT EXISTS idx_praticiens_user_id     ON praticiens(user_id);
CREATE INDEX IF NOT EXISTS idx_praticiens_specialite  ON praticiens(specialite);
CREATE INDEX IF NOT EXISTS idx_praticiens_ville        ON praticiens(ville);
CREATE INDEX IF NOT EXISTS idx_patients_user_id        ON patients(user_id);
CREATE INDEX IF NOT EXISTS idx_rdv_praticien_id        ON "rendez-vous"(praticien_id);
CREATE INDEX IF NOT EXISTS idx_rdv_patient_id          ON "rendez-vous"(patient_id);
CREATE INDEX IF NOT EXISTS idx_avis_praticien_id       ON avis(praticien_id);
