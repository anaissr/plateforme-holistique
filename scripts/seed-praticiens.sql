-- Ajout des colonnes note_moyenne et nb_avis si elles n'existent pas encore
ALTER TABLE praticiens
  ADD COLUMN IF NOT EXISTS note_moyenne NUMERIC(3,1),
  ADD COLUMN IF NOT EXISTS nb_avis INTEGER DEFAULT 0;

-- 9 praticiens fictifs de démonstration
-- 5 en France, 4 à l'étranger (Belgique x2, Suisse x1, Canada x1)

INSERT INTO praticiens (
  user_id, nom, email, specialite, ville, pays,
  bio, visio, cabinet, valide, actif,
  tarifs, diplomes, photo, specialites, public_cible,
  disponibilites, note_moyenne, nb_avis
) VALUES

-- 1. Ostéopathie — Paris, France
(
  gen_random_uuid(),
  'Camille Moreau',
  'camille.moreau@demo-holistia.fr',
  'Ostéopathie',
  'Paris 11e',
  'France',
  'Ostéopathe D.O. diplômée de l''IFSO Paris, je pratique une ostéopathie globale qui intègre les approches structurelle, viscérale et crânio-sacrée. Mon accompagnement s''adresse aussi bien aux adultes en souffrance aiguë qu''aux sportifs et aux femmes enceintes. Je crois profondément que le corps a une capacité d''autoguérison remarquable : mon rôle est de lever les obstacles qui l''en empêchent.',
  true, true, true, true,
  '[{"label": "Première consultation", "duree": "75", "prix": "90"},
    {"label": "Consultation de suivi", "duree": "60", "prix": "75"},
    {"label": "Consultation nourrisson / bébé", "duree": "45", "prix": "70"}]'::jsonb,
  '[{"titre": "Diplôme en Ostéopathie (D.O.)", "ecole": "IFSO Paris", "annee": "2015"},
    {"titre": "Certificat en ostéopathie pédiatrique", "ecole": "Institut Sutherland", "annee": "2018"}]'::jsonb,
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Douleurs chroniques', 'Troubles posturaux', 'Récupération sportive', 'Stress et anxiété'],
  ARRAY['Adultes', 'Nourrissons', 'Femmes enceintes', 'Sportifs'],
  '{"Lundi": ["10:00", "11:00", "14:00", "15:00"],
    "Mercredi": ["09:00", "10:00", "14:00", "16:00"],
    "Vendredi": ["10:00", "11:00", "14:00"]}'::jsonb,
  4.9, 47
),

-- 2. Médecine traditionnelle chinoise — Lyon, France
(
  gen_random_uuid(),
  'Laurent Chen',
  'laurent.chen@demo-holistia.fr',
  'Médecine traditionnelle chinoise',
  'Lyon 6e',
  'France',
  'Praticien en médecine traditionnelle chinoise formé à Pékin et à Lyon, je propose des soins d''acupuncture, de moxibustion et de phytothérapie chinoise. Ma pratique s''appuie sur 15 ans d''expérience clinique et une vision holistique de la personne. Je traite aussi bien les troubles fonctionnels chroniques que les problématiques liées au stress, à la fertilité et aux déséquilibres hormonaux.',
  true, true, true, true,
  '[{"label": "Bilan énergétique + séance", "duree": "90", "prix": "110"},
    {"label": "Séance acupuncture", "duree": "60", "prix": "80"},
    {"label": "Séance moxibustion", "duree": "45", "prix": "70"}]'::jsonb,
  '[{"titre": "Master en médecine traditionnelle chinoise", "ecole": "Université de Médecine de Pékin", "annee": "2008"},
    {"titre": "DU Acupuncture", "ecole": "Faculté de Médecine de Lyon", "annee": "2010"}]'::jsonb,
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Fertilité et PMA', 'Déséquilibres hormonaux', 'Fatigue chronique', 'Troubles du sommeil', 'Stress et anxiété'],
  ARRAY['Adultes', 'Seniors', 'Femmes enceintes'],
  '{"Mardi": ["09:00", "10:30", "14:00", "15:30"],
    "Jeudi": ["09:00", "10:30", "14:00", "16:00"],
    "Samedi": ["09:00", "10:30", "12:00"]}'::jsonb,
  4.8, 63
),

-- 3. Fasciathérapie — Bordeaux, France
(
  gen_random_uuid(),
  'Isabelle Dupont',
  'isabelle.dupont@demo-holistia.fr',
  'Fasciathérapie',
  'Bordeaux',
  'France',
  'Fasciathérapeute certifiée méthode Danis Bois, je travaille avec la lenteur et la subtilité du toucher pour libérer les tensions profondes des fascias. Cette approche thérapeutique globale s''adresse aux personnes souffrant de douleurs chroniques, de fatigue persistante ou cherchant à retrouver un équilibre corps-esprit après un choc physique ou émotionnel. Chaque séance est un espace de rencontre avec soi-même.',
  true, true, true, true,
  '[{"label": "Séance individuelle", "duree": "75", "prix": "85"},
    {"label": "Bilan + séance découverte", "duree": "90", "prix": "95"}]'::jsonb,
  '[{"titre": "Diplôme de Fasciathérapeute MDB", "ecole": "CERAP — Université Fernando Pessoa", "annee": "2013"},
    {"titre": "Kinésithérapie D.E.", "ecole": "IFMK Bordeaux", "annee": "2009"}]'::jsonb,
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Douleurs chroniques', 'Fatigue chronique', 'Stress et anxiété', 'Troubles posturaux'],
  ARRAY['Adultes', 'Seniors', 'Sportifs'],
  '{"Lundi": ["09:00", "10:30", "14:00"],
    "Jeudi": ["14:00", "15:30", "17:00"],
    "Vendredi": ["09:00", "10:30", "12:00"]}'::jsonb,
  4.9, 38
),

-- 4. Sophrologie — Toulouse, France
(
  gen_random_uuid(),
  'Sophie Renard',
  'sophie.renard@demo-holistia.fr',
  'Sophrologie',
  'Toulouse',
  'France',
  'Sophrologue certifiée RNCP, je propose des accompagnements individuels et des cycles thématiques autour de la gestion du stress, de la préparation mentale et du mieux-être au quotidien. Ma pratique intègre des techniques de relaxation dynamique, de visualisation positive et de travail sur les valeurs personnelles. Je reçois en cabinet à Toulouse et propose également des séances en visioconférence.',
  true, true, true, true,
  '[{"label": "Séance individuelle", "duree": "60", "prix": "65"},
    {"label": "Cycle 5 séances (stress)", "duree": "60", "prix": "280"},
    {"label": "Séance découverte", "duree": "45", "prix": "45"}]'::jsonb,
  '[{"titre": "Titre de Sophrologue RNCP Niveau 5", "ecole": "Institut de Sophrologie de Toulouse", "annee": "2016"},
    {"titre": "Spécialisation gestion du stress et burn-out", "ecole": "Société Française de Sophrologie", "annee": "2019"}]'::jsonb,
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Burn-out', 'Troubles du sommeil', 'Phobies'],
  ARRAY['Adultes', 'Adolescents', 'Sportifs'],
  '{"Lundi": ["10:00", "11:00", "17:00", "18:00"],
    "Mardi": ["10:00", "11:00", "17:00", "18:00"],
    "Jeudi": ["10:00", "11:00", "17:00", "18:00"]}'::jsonb,
  4.7, 82
),

-- 5. Naturopathie — Nantes, France
(
  gen_random_uuid(),
  'Julien Martin',
  'julien.martin@demo-holistia.fr',
  'Naturopathie',
  'Nantes',
  'France',
  'Naturopathe certifié et nutritionniste, j''accompagne mes consultants vers une meilleure santé à travers l''alimentation vivante, la phytothérapie et les techniques de régulation du système nerveux. Mon approche est personnalisée et éducative : je vous donne les clés pour devenir acteur de votre santé. Je suis spécialisé dans les troubles digestifs, la fatigue chronique et les déséquilibres immunitaires.',
  true, true, true, true,
  '[{"label": "Bilan naturopathique complet", "duree": "90", "prix": "120"},
    {"label": "Consultation de suivi", "duree": "60", "prix": "80"},
    {"label": "Consultation nutrition", "duree": "60", "prix": "75"}]'::jsonb,
  '[{"titre": "Diplôme de Naturopathe", "ecole": "ISUPNAT Paris", "annee": "2014"},
    {"titre": "Certificat en Micronutrition", "ecole": "IEDM", "annee": "2017"}]'::jsonb,
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux', 'Stress et anxiété'],
  ARRAY['Adultes', 'Adolescents', 'Seniors'],
  '{"Mardi": ["09:00", "10:30", "14:00", "15:30"],
    "Mercredi": ["09:00", "10:30", "14:00"],
    "Samedi": ["09:00", "10:30", "12:00"]}'::jsonb,
  4.8, 55
),

-- 6. Hypnothérapie — Bruxelles, Belgique
(
  gen_random_uuid(),
  'Marie-Claire Leblanc',
  'mc.leblanc@demo-holistia.fr',
  'Hypnothérapie',
  'Bruxelles',
  'Belgique',
  'Hypnothérapeute certifiée et ancienne psychologue clinicienne, je pratique l''hypnose ericksonienne et l''EMDR de soutien pour accompagner les personnes souffrant de phobies, traumatismes, addictions et troubles anxieux. Mon approche respectueuse et bienveillante permet d''accéder aux ressources intérieures pour opérer des changements durables. Je propose des consultations en cabinet à Bruxelles et en visioconférence.',
  true, true, true, true,
  '[{"label": "Séance hypnose (adulte)", "duree": "75", "prix": "100"},
    {"label": "Séance découverte", "duree": "60", "prix": "75"},
    {"label": "Suivi (pack 4 séances)", "duree": "75", "prix": "360"}]'::jsonb,
  '[{"titre": "Master en Psychologie Clinique", "ecole": "ULB Bruxelles", "annee": "2009"},
    {"titre": "Certificat en Hypnose Ericksonienne", "ecole": "Institut Belge d''Hypnose", "annee": "2014"}]'::jsonb,
  'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Phobies', 'Traumatismes', 'Stress et anxiété', 'Troubles du sommeil', 'Burn-out'],
  ARRAY['Adultes', 'Adolescents'],
  '{"Lundi": ["10:00", "11:30", "14:00", "15:30"],
    "Mercredi": ["10:00", "11:30", "14:00", "15:30"],
    "Vendredi": ["10:00", "11:30"]}'::jsonb,
  4.9, 71
),

-- 7. Kinésiologie — Genève, Suisse
(
  gen_random_uuid(),
  'Thomas Favre',
  'thomas.favre@demo-holistia.fr',
  'Kinésiologie',
  'Genève',
  'Suisse',
  'Kinésiologue certifié Touch for Health et Brain Gym, j''utilise le test musculaire pour identifier et libérer les blocages physiques, émotionnels et mentaux qui freinent votre épanouissement. La kinésiologie s''adresse à tous ceux qui traversent une période de stress intense, de difficultés relationnelles ou scolaires, ou qui cherchent à dépasser leurs limites. Séances possibles en présentiel à Genève ou par visio.',
  true, true, true, true,
  '[{"label": "Séance individuelle", "duree": "75", "prix": "130"},
    {"label": "Bilan + 1ère séance", "duree": "90", "prix": "160"},
    {"label": "Suivi (4 séances)", "duree": "75", "prix": "480"}]'::jsonb,
  '[{"titre": "Certificat Touch for Health (niveaux 1-4)", "ecole": "TFHI Suisse", "annee": "2012"},
    {"titre": "Praticien Brain Gym", "ecole": "Educational Kinesiology Foundation", "annee": "2015"}]'::jsonb,
  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Troubles du sommeil', 'Fatigue chronique', 'Burn-out'],
  ARRAY['Adultes', 'Enfants', 'Adolescents'],
  '{"Mardi": ["09:00", "10:30", "14:00"],
    "Jeudi": ["09:00", "10:30", "14:00", "15:30"],
    "Samedi": ["09:00", "10:30"]}'::jsonb,
  4.7, 29
),

-- 8. EMDR — Montréal, Canada
(
  gen_random_uuid(),
  'Nathalie Rousseau',
  'nathalie.rousseau@demo-holistia.fr',
  'EMDR',
  'Montréal',
  'Canada',
  'Psychologue et thérapeute EMDR certifiée EMDR Europe, j''accompagne les adultes et adolescents ayant vécu des traumatismes, des deuils difficiles ou des expériences de violence. L''EMDR (désensibilisation et retraitement par les mouvements oculaires) est une approche scientifiquement validée, reconnue par l''OMS. Je propose des consultations en cabinet à Montréal et en visioconférence pour la diaspora francophone.',
  true, true, true, true,
  '[{"label": "Évaluation + anamnèse", "duree": "90", "prix": "150"},
    {"label": "Séance EMDR", "duree": "75", "prix": "130"},
    {"label": "Suivi mensuel", "duree": "60", "prix": "110"}]'::jsonb,
  '[{"titre": "Doctorat en Psychologie", "ecole": "Université de Montréal", "annee": "2011"},
    {"titre": "Certification EMDR Europe", "ecole": "EMDR France / Europe", "annee": "2016"}]'::jsonb,
  'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Traumatismes', 'Stress et anxiété', 'Phobies', 'Troubles du sommeil'],
  ARRAY['Adultes', 'Adolescents'],
  '{"Lundi": ["10:00", "11:30", "14:00"],
    "Mercredi": ["10:00", "11:30", "14:00", "15:30"],
    "Vendredi": ["10:00", "11:30", "14:00"]}'::jsonb,
  5.0, 34
),

-- 9. Psychopraticien approche systémique — Liège, Belgique
(
  gen_random_uuid(),
  'Antoine Bernard',
  'antoine.bernard@demo-holistia.fr',
  'Psychopraticien — approche systémique',
  'Liège',
  'Belgique',
  'Psychopraticien formé à l''approche systémique et à la thérapie brève (modèle de Palo Alto), j''accompagne les individus, couples et familles face aux impasses relationnelles, aux crises existentielles et aux situations de souffrance psychique. Mon approche s''intéresse aux interactions et aux patterns répétitifs plutôt qu''aux causes passées, pour des changements concrets et rapides. Je consulte à Liège et en visio pour toute la Belgique et la France.',
  true, true, true, true,
  '[{"label": "Entretien individuel", "duree": "60", "prix": "90"},
    {"label": "Séance couple / famille", "duree": "75", "prix": "110"},
    {"label": "Consultation de crise (sous 48h)", "duree": "60", "prix": "100"}]'::jsonb,
  '[{"titre": "Master en Sciences Psychologiques", "ecole": "Université de Liège", "annee": "2007"},
    {"titre": "Formation en Thérapie Systémique et Brève (Palo Alto)", "ecole": "Institut Gregory Bateson, Bruxelles", "annee": "2013"}]'::jsonb,
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
  ARRAY['Stress et anxiété', 'Burn-out', 'Traumatismes', 'Troubles du sommeil'],
  ARRAY['Adultes', 'Couples', 'Familles', 'Adolescents'],
  '{"Lundi": ["14:00", "15:00", "16:00", "17:00"],
    "Mardi": ["09:00", "10:00", "14:00", "15:00"],
    "Jeudi": ["14:00", "15:00", "16:00", "17:00"]}'::jsonb,
  4.8, 41
);
