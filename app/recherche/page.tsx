export default function Recherche() {
  const praticiens = [
    {
      nom: 'Sophie Laurent',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      specialite: 'Naturopathe',
      ville: 'Paris — aussi en visio',
      note: '4.9',
      avis: 47,
      tarif_depuis: '70€',
      dispo: 'Demain à 14h',
      badge: 'Très demandée',
      description: 'Spécialisée en troubles digestifs, fatigue chronique et rééquilibrage hormonal. Approche globale intégrant nutrition, phytothérapie et hygiène de vie.',
      public: ['Adultes', 'Femmes enceintes', 'PMA'],
      prestations: [
        { nom: 'Bilan initial', duree: '1h30', tarif: '110€' },
        { nom: 'Suivi', duree: '45min', tarif: '70€' },
      ],
    },
    {
      nom: 'Marc Dubois',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      specialite: 'Ostéopathe',
      ville: 'Lyon — aussi en visio',
      note: '4.8',
      avis: 63,
      tarif_depuis: '80€',
      dispo: 'Jeudi à 10h',
      badge: '',
      description: 'Ostéopathe structurel et fonctionnel, spécialisé dans les douleurs chroniques, les troubles posturaux et la récupération sportive.',
      public: ['Adultes', 'Enfants', 'Sportifs'],
      prestations: [
        { nom: 'Consultation adulte', duree: '45min', tarif: '80€' },
        { nom: 'Consultation enfant', duree: '30min', tarif: '60€' },
      ],
    },
    {
      nom: 'Amélie Chen',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
      specialite: 'Sophrologue',
      ville: 'Visio uniquement',
      note: '5.0',
      avis: 31,
      tarif_depuis: '65€',
      dispo: "Aujourd'hui à 17h",
      badge: 'Nouveau',
      description: 'Accompagnement en gestion du stress, anxiété, troubles du sommeil et préparation mentale. Séances disponibles en français depuis Bangkok.',
      public: ['Adultes', 'Adolescents', 'Couples'],
      prestations: [
        { nom: 'Séance individuelle', duree: '1h', tarif: '65€' },
        { nom: 'Séance couple', duree: '1h30', tarif: '95€' },
      ],
    },
    {
      nom: 'Pierre Martin',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
      specialite: 'Hypnothérapeute',
      ville: 'Bordeaux — aussi en visio',
      note: '4.7',
      avis: 89,
      tarif_depuis: '90€',
      dispo: 'Vendredi à 15h',
      badge: '',
      description: 'Hypnose ericksonienne et EMDR. Phobies, traumatismes, addictions, confiance en soi. Plus de 500 patients accompagnés.',
      public: ['Adultes', 'Adolescents'],
      prestations: [
        { nom: 'Séance hypnose', duree: '1h15', tarif: '90€' },
        { nom: 'Séance EMDR', duree: '1h30', tarif: '110€' },
      ],
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <a href="/" className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
          🌿 Holistia
        </a>
        <div className="flex gap-6 text-sm" style={{ color: '#78716c' }}>
          <a href="#" className="hover:opacity-70 transition">Les spécialités</a>
          <a href="#" className="hover:opacity-70 transition">Comment ça marche</a>
          <a href="#" className="hover:opacity-70 transition">Blog</a>
        </div>
        <button className="text-white text-sm px-4 py-2 rounded-full" style={{ backgroundColor: '#6b21a8' }}>
          Connexion
        </button>
      </nav>

      {/* BARRE DE RECHERCHE */}
      <section className="px-6 py-10" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-light text-white mb-6 text-center" style={{ fontFamily: 'var(--font-lora)' }}>
            Trouvez votre praticien
          </h1>
          <div className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-end shadow-lg">

            <div className="flex-1 min-w-36">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Spécialité</label>
              <select className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Toutes les spécialités</option>
                <option>Sophrologie</option>
                <option>Naturopathie</option>
                <option>Ostéopathie</option>
                <option>Hypnothérapie</option>
                <option>Kinésiologie</option>
                <option>Acupuncture</option>
                <option>Réflexologie</option>
                <option>Thérapies brèves</option>
              </select>
            </div>

            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />

            <div className="flex-1 min-w-36">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Pour qui ?</label>
              <select className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Tout public</option>
                <option>Adultes</option>
                <option>Enfants</option>
                <option>Adolescents</option>
                <option>Couples</option>
                <option>Femmes enceintes</option>
                <option>PMA & fertilité</option>
                <option>Seniors</option>
                <option>Sportifs</option>
              </select>
            </div>

            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />

            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Mode</label>
              <select className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Cabinet ou visio</option>
                <option>En cabinet</option>
                <option>En visio</option>
              </select>
            </div>

            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />

            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Disponibilité</label>
              <select className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">N'importe quand</option>
                <option>Aujourd'hui</option>
                <option>Cette semaine</option>
                <option>Ce mois-ci</option>
              </select>
            </div>

            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />

            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Budget max</label>
              <select className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Tous budgets</option>
                <option>Moins de 50€</option>
                <option>50€ - 80€</option>
                <option>80€ - 120€</option>
                <option>Plus de 120€</option>
              </select>
            </div>

            <button className="text-white px-6 py-3 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm" style={{ color: '#78716c' }}>
            <span className="font-medium" style={{ color: '#44403c' }}>24 praticiens</span> correspondent à votre recherche
          </p>
          <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: '#e7e5e4', color: '#44403c' }}>
            <option>Trier par : Pertinence</option>
            <option>Trier par : Note</option>
            <option>Trier par : Tarif croissant</option>
            <option>Trier par : Disponibilité</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {praticiens.map((praticien) => (
            <div
              key={praticien.nom}
              className="bg-white rounded-2xl p-6 flex gap-6 items-start hover:shadow-md transition cursor-pointer"
              style={{ border: '1px solid #e7e5e4' }}
            >
              <img
                src={praticien.photo}
                alt={praticien.nom}
                className="w-24 h-24 rounded-2xl flex-shrink-0 object-cover object-top"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-medium" style={{ color: '#1c1917' }}>{praticien.nom}</h2>
                      {praticien.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                          {praticien.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm" style={{ color: '#6b21a8' }}>{praticien.specialite}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {praticien.ville}</p>

                    {/* Public accepté */}
                    <div className="flex gap-1 flex-wrap mt-2">
                      {praticien.public.map((p) => (
                        <span key={p} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="flex items-center gap-1 justify-end">
                      <span className="text-sm">⭐</span>
                      <span className="font-medium text-sm" style={{ color: '#1c1917' }}>{praticien.note}</span>
                      <span className="text-xs" style={{ color: '#a8a29e' }}>({praticien.avis})</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>À partir de</p>
                    <p className="text-sm font-medium" style={{ color: '#44403c' }}>{praticien.tarif_depuis}</p>
                  </div>
                </div>

                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#78716c' }}>
                  {praticien.description}
                </p>

                {/* Prestations rapides */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {praticien.prestations.map((p) => (
                    <span key={p.nom} className="text-xs px-3 py-1 rounded-lg" style={{ backgroundColor: '#faf9f7', color: '#57534e', border: '1px solid #e7e5e4' }}>
                      {p.nom} · {p.duree} · {p.tarif}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                    🟢 Prochain RDV : {praticien.dispo}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-sm px-4 py-2 rounded-xl border transition" style={{ borderColor: '#6b21a8', color: '#6b21a8', backgroundColor: 'white' }}>
                      💬 Contacter
                    </button>
                    <button className="text-sm px-4 py-2 rounded-xl transition" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                      Voir le profil
                    </button>
                    <button className="text-white text-sm px-5 py-2 rounded-xl transition" style={{ backgroundColor: '#6b21a8' }}>
                      Prendre RDV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="w-9 h-9 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: n === 1 ? '#6b21a8' : '#ffffff',
                color: n === 1 ? '#ffffff' : '#44403c',
                border: '1px solid #e7e5e4',
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

    </main>
  )
}