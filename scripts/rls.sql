-- ================================================================
-- ROW LEVEL SECURITY — Holistia
-- À coller et exécuter dans l'éditeur SQL Supabase
-- ================================================================
-- Conventions :
--   auth.uid()        = UUID de l'utilisateur connecté (Supabase Auth)
--   praticiens.user_id = UUID du compte praticien dans auth.users
--   patients.user_id   = UUID du compte patient dans auth.users
--   rendez-vous.patient_id  = auth.uid() du patient
--   rendez-vous.praticien_id = praticiens.id (entier)
-- ================================================================


-- ================================================================
-- 1. TABLE praticiens
--    Lecture publique | Écriture par le praticien lui-même
-- ================================================================

ALTER TABLE praticiens ENABLE ROW LEVEL SECURITY;

-- Tout visiteur peut lire les fiches praticiens (recherche, SEO)
CREATE POLICY "praticiens_select_public"
  ON praticiens FOR SELECT
  USING (true);

-- Un praticien peut créer son propre profil lors de l'inscription
CREATE POLICY "praticiens_insert_own"
  ON praticiens FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Un praticien peut modifier uniquement son propre profil
CREATE POLICY "praticiens_update_own"
  ON praticiens FOR UPDATE
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Suppression non exposée côté client (gérée en admin via service_role)


-- ================================================================
-- 2. TABLE patients
--    Lecture/écriture uniquement par le patient lui-même
-- ================================================================

ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Un patient ne voit que ses propres données
CREATE POLICY "patients_select_own"
  ON patients FOR SELECT
  USING (auth.uid() = user_id);

-- Un patient crée son profil lors de l'inscription
CREATE POLICY "patients_insert_own"
  ON patients FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Un patient peut mettre à jour son propre profil
CREATE POLICY "patients_update_own"
  ON patients FOR UPDATE
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ================================================================
-- 3. TABLE rendez-vous  (tiret → guillemets obligatoires)
--    Lecture/écriture par le praticien OU le patient concerné
-- ================================================================

ALTER TABLE "rendez-vous" ENABLE ROW LEVEL SECURITY;

-- Le patient voit ses propres rendez-vous
CREATE POLICY "rdv_select_patient"
  ON "rendez-vous" FOR SELECT
  USING (auth.uid()::text = patient_id);

-- Le praticien voit les rendez-vous qui le concernent
CREATE POLICY "rdv_select_praticien"
  ON "rendez-vous" FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.id       = "rendez-vous".praticien_id
        AND praticiens.user_id  = auth.uid()
    )
  );

-- Le patient crée le rendez-vous (il se désigne lui-même comme patient)
CREATE POLICY "rdv_insert_patient"
  ON "rendez-vous" FOR INSERT
  WITH CHECK (auth.uid()::text = patient_id);

-- Le patient peut annuler son propre rendez-vous
CREATE POLICY "rdv_update_patient"
  ON "rendez-vous" FOR UPDATE
  USING  (auth.uid()::text = patient_id)
  WITH CHECK (auth.uid()::text = patient_id);

-- Le praticien peut confirmer, refuser, ajouter des notes
CREATE POLICY "rdv_update_praticien"
  ON "rendez-vous" FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.id       = "rendez-vous".praticien_id
        AND praticiens.user_id  = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.id       = "rendez-vous".praticien_id
        AND praticiens.user_id  = auth.uid()
    )
  );


-- ================================================================
-- 4. TABLE ateliers
--    Lecture publique | Écriture uniquement par le praticien concerné
-- ================================================================

ALTER TABLE ateliers ENABLE ROW LEVEL SECURITY;

-- Tout visiteur peut lire les ateliers (page /ateliers, SEO)
CREATE POLICY "ateliers_select_public"
  ON ateliers FOR SELECT
  USING (true);

-- Le praticien peut créer un atelier qui lui appartient
CREATE POLICY "ateliers_insert_praticien"
  ON ateliers FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.user_id = ateliers.praticien_id
        AND praticiens.user_id = auth.uid()
    )
  );

-- Le praticien peut modifier ses propres ateliers
CREATE POLICY "ateliers_update_praticien"
  ON ateliers FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.user_id = ateliers.praticien_id
        AND praticiens.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.user_id = ateliers.praticien_id
        AND praticiens.user_id = auth.uid()
    )
  );

-- Le praticien peut supprimer ses propres ateliers
CREATE POLICY "ateliers_delete_praticien"
  ON ateliers FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM praticiens
      WHERE praticiens.user_id = ateliers.praticien_id
        AND praticiens.user_id = auth.uid()
    )
  );


-- ================================================================
-- 5. TABLE avis
--    Lecture publique | Écriture par le patient authentifié
-- ================================================================

ALTER TABLE avis ENABLE ROW LEVEL SECURITY;

-- Tout visiteur peut lire les avis (affichés sur la fiche praticien)
CREATE POLICY "avis_select_public"
  ON avis FOR SELECT
  USING (true);

-- Un patient authentifié peut soumettre un avis
CREATE POLICY "avis_insert_patient"
  ON avis FOR INSERT
  WITH CHECK (auth.uid() = patient_id);
