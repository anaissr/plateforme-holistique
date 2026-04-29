-- Ajout des colonnes si pas encore fait
ALTER TABLE praticiens
  ADD COLUMN IF NOT EXISTS note_moyenne NUMERIC(3,1),
  ADD COLUMN IF NOT EXISTS nb_avis INTEGER DEFAULT 0;

-- 1. Ostéopathie — Paris, France
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Camille Moreau', 'camille.moreau@demo-holistia.fr',
  'Ostéopathie', 'Paris 11e', 'France',
  'Ostéopathe D.O. diplômée de l''IFSO Paris, je pratique une ostéopathie globale qui intègre les approches structurelle, viscérale et crânio-sacrée. Mon accompagnement s''adresse aussi bien aux adultes en souffrance aiguë qu''aux sportifs et aux femmes enceintes.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Première consultation', 'duree', '75', 'prix', '90'),
    jsonb_build_object('label', 'Consultation de suivi', 'duree', '60', 'prix', '75'),
    jsonb_build_object('label', 'Consultation nourrisson / bébé', 'duree', '45', 'prix', '70')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Diplôme en Ostéopathie (D.O.)', 'ecole', 'IFSO Paris', 'annee', '2015'),
    jsonb_build_object('titre', 'Certificat ostéopathie pédiatrique', 'ecole', 'Institut Sutherland', 'annee', '2018')
  ),
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Douleurs chroniques', 'Troubles posturaux', 'Récupération sportive', 'Stress et anxiété'],
  ARRAY['Adultes', 'Nourrissons', 'Femmes enceintes', 'Sportifs'],
  jsonb_build_object(
    'Lundi', ARRAY['10:00','11:00','14:00','15:00'],
    'Mercredi', ARRAY['09:00','10:00','14:00','16:00'],
    'Vendredi', ARRAY['10:00','11:00','14:00']
  ),
  4.9, 47
);

-- 2. Médecine traditionnelle chinoise — Lyon, France
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Laurent Chen', 'laurent.chen@demo-holistia.fr',
  'Médecine traditionnelle chinoise', 'Lyon 6e', 'France',
  'Praticien en médecine traditionnelle chinoise formé à Pékin et à Lyon, je propose des soins d''acupuncture, de moxibustion et de phytothérapie chinoise. Ma pratique s''appuie sur 15 ans d''expérience clinique et une vision holistique de la personne.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Bilan énergétique + séance', 'duree', '90', 'prix', '110'),
    jsonb_build_object('label', 'Séance acupuncture', 'duree', '60', 'prix', '80'),
    jsonb_build_object('label', 'Séance moxibustion', 'duree', '45', 'prix', '70')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Master en médecine traditionnelle chinoise', 'ecole', 'Université de Médecine de Pékin', 'annee', '2008'),
    jsonb_build_object('titre', 'DU Acupuncture', 'ecole', 'Faculté de Médecine de Lyon', 'annee', '2010')
  ),
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Fertilité et PMA', 'Déséquilibres hormonaux', 'Fatigue chronique', 'Troubles du sommeil', 'Stress et anxiété'],
  ARRAY['Adultes', 'Seniors', 'Femmes enceintes'],
  jsonb_build_object(
    'Mardi', ARRAY['09:00','10:30','14:00','15:30'],
    'Jeudi', ARRAY['09:00','10:30','14:00','16:00'],
    'Samedi', ARRAY['09:00','10:30','12:00']
  ),
  4.8, 63
);

-- 3. Fasciathérapie — Bordeaux, France
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Isabelle Dupont', 'isabelle.dupont@demo-holistia.fr',
  'Fasciathérapie', 'Bordeaux', 'France',
  'Fasciathérapeute certifiée méthode Danis Bois, je travaille avec la lenteur et la subtilité du toucher pour libérer les tensions profondes des fascias. Cette approche s''adresse aux personnes souffrant de douleurs chroniques ou cherchant un équilibre corps-esprit après un choc physique ou émotionnel.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Séance individuelle', 'duree', '75', 'prix', '85'),
    jsonb_build_object('label', 'Bilan + séance découverte', 'duree', '90', 'prix', '95')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Diplôme de Fasciathérapeute MDB', 'ecole', 'CERAP — Université Fernando Pessoa', 'annee', '2013'),
    jsonb_build_object('titre', 'Kinésithérapie D.E.', 'ecole', 'IFMK Bordeaux', 'annee', '2009')
  ),
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Douleurs chroniques', 'Fatigue chronique', 'Stress et anxiété', 'Troubles posturaux'],
  ARRAY['Adultes', 'Seniors', 'Sportifs'],
  jsonb_build_object(
    'Lundi', ARRAY['09:00','10:30','14:00'],
    'Jeudi', ARRAY['14:00','15:30','17:00'],
    'Vendredi', ARRAY['09:00','10:30','12:00']
  ),
  4.9, 38
);

-- 4. Sophrologie — Toulouse, France
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Sophie Renard', 'sophie.renard@demo-holistia.fr',
  'Sophrologie', 'Toulouse', 'France',
  'Sophrologue certifiée RNCP, je propose des accompagnements individuels et des cycles thématiques autour de la gestion du stress, de la préparation mentale et du mieux-être au quotidien. Je reçois en cabinet à Toulouse et en visioconférence.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Séance individuelle', 'duree', '60', 'prix', '65'),
    jsonb_build_object('label', 'Cycle 5 séances (stress)', 'duree', '60', 'prix', '280'),
    jsonb_build_object('label', 'Séance découverte', 'duree', '45', 'prix', '45')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Titre de Sophrologue RNCP Niveau 5', 'ecole', 'Institut de Sophrologie de Toulouse', 'annee', '2016'),
    jsonb_build_object('titre', 'Spécialisation stress et burn-out', 'ecole', 'Société Française de Sophrologie', 'annee', '2019')
  ),
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Burn-out', 'Troubles du sommeil', 'Phobies'],
  ARRAY['Adultes', 'Adolescents', 'Sportifs'],
  jsonb_build_object(
    'Lundi', ARRAY['10:00','11:00','17:00','18:00'],
    'Mardi', ARRAY['10:00','11:00','17:00','18:00'],
    'Jeudi', ARRAY['10:00','11:00','17:00','18:00']
  ),
  4.7, 82
);

-- 5. Naturopathie — Nantes, France
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Julien Martin', 'julien.martin@demo-holistia.fr',
  'Naturopathie', 'Nantes', 'France',
  'Naturopathe certifié et nutritionniste, j''accompagne mes consultants vers une meilleure santé à travers l''alimentation vivante, la phytothérapie et les techniques de régulation du système nerveux. Spécialisé dans les troubles digestifs et la fatigue chronique.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Bilan naturopathique complet', 'duree', '90', 'prix', '120'),
    jsonb_build_object('label', 'Consultation de suivi', 'duree', '60', 'prix', '80'),
    jsonb_build_object('label', 'Consultation nutrition', 'duree', '60', 'prix', '75')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Diplôme de Naturopathe', 'ecole', 'ISUPNAT Paris', 'annee', '2014'),
    jsonb_build_object('titre', 'Certificat en Micronutrition', 'ecole', 'IEDM', 'annee', '2017')
  ),
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux', 'Stress et anxiété'],
  ARRAY['Adultes', 'Adolescents', 'Seniors'],
  jsonb_build_object(
    'Mardi', ARRAY['09:00','10:30','14:00','15:30'],
    'Mercredi', ARRAY['09:00','10:30','14:00'],
    'Samedi', ARRAY['09:00','10:30','12:00']
  ),
  4.8, 55
);

-- 6. Hypnothérapie — Bruxelles, Belgique
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Marie-Claire Leblanc', 'mc.leblanc@demo-holistia.fr',
  'Hypnothérapie', 'Bruxelles', 'Belgique',
  'Hypnothérapeute certifiée et ancienne psychologue clinicienne, je pratique l''hypnose ericksonienne pour accompagner les personnes souffrant de phobies, traumatismes et troubles anxieux. Mon approche permet d''accéder aux ressources intérieures pour opérer des changements durables.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Séance hypnose', 'duree', '75', 'prix', '100'),
    jsonb_build_object('label', 'Séance découverte', 'duree', '60', 'prix', '75'),
    jsonb_build_object('label', 'Suivi (pack 4 séances)', 'duree', '75', 'prix', '360')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Master en Psychologie Clinique', 'ecole', 'ULB Bruxelles', 'annee', '2009'),
    jsonb_build_object('titre', 'Certificat en Hypnose Ericksonienne', 'ecole', 'Institut Belge d''Hypnose', 'annee', '2014')
  ),
  'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Phobies', 'Traumatismes', 'Stress et anxiété', 'Troubles du sommeil', 'Burn-out'],
  ARRAY['Adultes', 'Adolescents'],
  jsonb_build_object(
    'Lundi', ARRAY['10:00','11:30','14:00','15:30'],
    'Mercredi', ARRAY['10:00','11:30','14:00','15:30'],
    'Vendredi', ARRAY['10:00','11:30']
  ),
  4.9, 71
);

-- 7. Kinésiologie — Genève, Suisse
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Thomas Favre', 'thomas.favre@demo-holistia.fr',
  'Kinésiologie', 'Genève', 'Suisse',
  'Kinésiologue certifié Touch for Health et Brain Gym, j''utilise le test musculaire pour identifier et libérer les blocages physiques, émotionnels et mentaux. La kinésiologie s''adresse à ceux qui traversent une période de stress intense ou qui cherchent à dépasser leurs limites.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Séance individuelle', 'duree', '75', 'prix', '130'),
    jsonb_build_object('label', 'Bilan + 1ère séance', 'duree', '90', 'prix', '160'),
    jsonb_build_object('label', 'Suivi (4 séances)', 'duree', '75', 'prix', '480')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Certificat Touch for Health niveaux 1-4', 'ecole', 'TFHI Suisse', 'annee', '2012'),
    jsonb_build_object('titre', 'Praticien Brain Gym', 'ecole', 'Educational Kinesiology Foundation', 'annee', '2015')
  ),
  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Troubles du sommeil', 'Fatigue chronique', 'Burn-out'],
  ARRAY['Adultes', 'Enfants', 'Adolescents'],
  jsonb_build_object(
    'Mardi', ARRAY['09:00','10:30','14:00'],
    'Jeudi', ARRAY['09:00','10:30','14:00','15:30'],
    'Samedi', ARRAY['09:00','10:30']
  ),
  4.7, 29
);

-- 8. EMDR — Montréal, Canada
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Nathalie Rousseau', 'nathalie.rousseau@demo-holistia.fr',
  'EMDR', 'Montréal', 'Canada',
  'Psychologue et thérapeute EMDR certifiée EMDR Europe, j''accompagne les adultes et adolescents ayant vécu des traumatismes ou des deuils difficiles. L''EMDR est une approche scientifiquement validée, reconnue par l''OMS. Je propose des consultations en cabinet à Montréal et en visioconférence.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Évaluation + anamnèse', 'duree', '90', 'prix', '150'),
    jsonb_build_object('label', 'Séance EMDR', 'duree', '75', 'prix', '130'),
    jsonb_build_object('label', 'Suivi mensuel', 'duree', '60', 'prix', '110')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Doctorat en Psychologie', 'ecole', 'Université de Montréal', 'annee', '2011'),
    jsonb_build_object('titre', 'Certification EMDR Europe', 'ecole', 'EMDR France / Europe', 'annee', '2016')
  ),
  'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Traumatismes', 'Stress et anxiété', 'Phobies', 'Troubles du sommeil'],
  ARRAY['Adultes', 'Adolescents'],
  jsonb_build_object(
    'Lundi', ARRAY['10:00','11:30','14:00'],
    'Mercredi', ARRAY['10:00','11:30','14:00','15:30'],
    'Vendredi', ARRAY['10:00','11:30','14:00']
  ),
  5.0, 34
);

-- 9. Approche systémique — Liège, Belgique
INSERT INTO praticiens (user_id, nom, email, specialite, ville, pays, bio, visio, cabinet, valide, actif, tarifs, diplomes, photo, specialites, public_cible, disponibilites, note_moyenne, nb_avis)
VALUES (
  gen_random_uuid(), 'Antoine Bernard', 'antoine.bernard@demo-holistia.fr',
  'Psychopraticien — approche systémique', 'Liège', 'Belgique',
  'Psychopraticien formé à l''approche systémique et à la thérapie brève (modèle de Palo Alto), j''accompagne les individus, couples et familles face aux impasses relationnelles et aux crises existentielles. Mon approche vise des changements concrets et rapides.',
  true, true, true, true,
  jsonb_build_array(
    jsonb_build_object('label', 'Entretien individuel', 'duree', '60', 'prix', '90'),
    jsonb_build_object('label', 'Séance couple / famille', 'duree', '75', 'prix', '110'),
    jsonb_build_object('label', 'Consultation de crise', 'duree', '60', 'prix', '100')
  ),
  jsonb_build_array(
    jsonb_build_object('titre', 'Master en Sciences Psychologiques', 'ecole', 'Université de Liège', 'annee', '2007'),
    jsonb_build_object('titre', 'Thérapie Systémique et Brève (Palo Alto)', 'ecole', 'Institut Gregory Bateson, Bruxelles', 'annee', '2013')
  ),
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Burn-out', 'Traumatismes', 'Troubles du sommeil'],
  ARRAY['Adultes', 'Couples', 'Familles', 'Adolescents'],
  jsonb_build_object(
    'Lundi', ARRAY['14:00','15:00','16:00','17:00'],
    'Mardi', ARRAY['09:00','10:00','14:00','15:00'],
    'Jeudi', ARRAY['14:00','15:00','16:00','17:00']
  ),
  4.8, 41
);
