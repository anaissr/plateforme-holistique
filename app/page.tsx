export default function Home() {
  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: '#faf9f7' }}>

      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <div className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
          🌿 Holistia
        </div>
        <div className="flex gap-6 text-sm" style={{ color: '#78716c' }}>
          <a href="#" className="hover:opacity-70 transition">Trouver un praticien</a>
          <a href="#" className="hover:opacity-70 transition">Les spécialités</a>
          <a href="#" className="hover:opacity-70 transition">Comment ça marche</a>
          <a href="#" className="hover:opacity-70 transition">Blog</a>
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-sm font-medium hover:underline" style={{ color: '#6b21a8' }}>
            Connexion
          </button>
          <button
            className="text-white text-sm px-4 py-2 rounded-full transition"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Vous êtes praticien ?
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="px-6 pt-20 pb-24 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 50%, #a855f7 100%)',
        }}
      >
        {/* Cercles décoratifs */}
        <div
          className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#e9d5ff' }}
        />
        <div
          className="absolute bottom-0 right-20 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: '#c084fc' }}
        />

        <div className="relative z-10">
          <span
            className="inline-block text-xs font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#f3e8ff' }}
          >
            ✨ La plateforme francophone des médecines alternatives
          </span>

          <h1 className="text-5xl font-light text-white max-w-3xl mx-auto leading-tight mb-6">
            Trouvez le praticien{' '}
            <span style={{ color: '#e9d5ff' }} className="font-normal">
              qui vous correspond
            </span>
            ,{' '}
            <br />
            où que vous soyez dans le monde
          </h1>

          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: '#e9d5ff' }}>
            Sophrologues, naturopathes, ostéopathes, kinésiologues...
            Des praticiens vérifiés, en cabinet ou en visio,
            partout dans la francophonie.
          </p>

          {/* DEUX ENTRÉES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              className="text-white px-8 py-4 rounded-2xl text-base font-medium transition shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              🔍 Je cherche un praticien
            </button>
            <button
              className="px-8 py-4 rounded-2xl text-base font-medium transition shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            >
              💬 J'ai un problème précis
            </button>
          </div>

          <p className="text-sm" style={{ color: '#d8b4fe' }}>
            Déjà{' '}
            <span className="font-semibold text-white">1 200+ praticiens</span>{' '}
            nous font confiance · 0% de commission
          </p>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '1 200+', label: 'praticiens vérifiés' },
            { value: '40+', label: 'spécialités référencées' },
            { value: '0%', label: 'de commission prélevée' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-light mb-1" style={{ color: '#6b21a8' }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: '#a8a29e' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPÉCIALITÉS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#44403c' }}>
          Les spécialités les plus recherchées
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: '#a8a29e' }}>
          Consultez en cabinet ou en visio, partout dans le monde
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: '🧘', label: 'Sophrologie' },
            { emoji: '🌿', label: 'Naturopathie' },
            { emoji: '🤲', label: 'Ostéopathie' },
            { emoji: '🧠', label: 'Hypnothérapie' },
            { emoji: '⚡', label: 'Kinésiologie' },
            { emoji: '🌸', label: 'Acupuncture' },
            { emoji: '💆', label: 'Réflexologie' },
            { emoji: '🗣️', label: 'Thérapies brèves' },
          ].map((spec) => (
            <button
              key={spec.label}
              className="bg-white border rounded-2xl py-5 flex flex-col items-center gap-2 transition cursor-pointer hover:shadow-md"
              style={{ borderColor: '#e7e5e4' }}
            >
              <span className="text-2xl">{spec.emoji}</span>
              <span className="text-sm font-medium" style={{ color: '#57534e' }}>
                {spec.label}
              </span>
            </button>
          ))}
        </div>
        <div className="text-center mt-8">
          
            <a href="#" className="text-sm font-medium underline" style={{ color: '#6b21a8' }}>Voir toutes les spécialités</a>
        </div>
      </section>

      {/* PAR PROBLÉMATIQUE */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#44403c' }}>
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: '#a8a29e' }}>
            Cherchez par type de problème — on vous oriente vers les bons praticiens
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { emoji: '😰', label: 'Stress & anxiété' },
              { emoji: '😴', label: 'Troubles du sommeil' },
              { emoji: '🫁', label: 'Douleurs de dos' },
              { emoji: '🤢', label: 'Troubles digestifs' },
              { emoji: '🌸', label: 'Fertilité & PMA' },
              { emoji: '🔋', label: 'Fatigue chronique' },
            ].map((pb) => (
              <button
                key={pb.label}
                className="bg-white rounded-2xl py-5 px-4 flex items-center gap-3 transition hover:shadow-md text-left"
                style={{ border: '1px solid #ede9fe' }}
              >
                <span className="text-2xl">{pb.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>
                  {pb.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-12" style={{ color: '#44403c' }}>
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Décrivez votre besoin',
                desc: 'Vous savez ce que vous cherchez, ou laissez-nous vous orienter grâce à quelques questions simples.',
              },
              {
                step: '2',
                title: 'Choisissez votre praticien',
                desc: 'Profils vérifiés, avis détaillés, formations certifiées. Réservez en ligne en quelques clics.',
              },
              {
                step: '3',
                title: 'Consultez où vous voulez',
                desc: 'En cabinet près de chez vous, ou en visio depuis n\'importe où dans le monde francophone.',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full text-white flex items-center justify-center font-medium text-sm"
                  style={{ backgroundColor: '#6b21a8' }}
                >
                  {item.step}
                </div>
                <h3 className="font-medium" style={{ color: '#44403c' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a29e' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="py-16 px-6" style={{ backgroundColor: '#faf9f7' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-10" style={{ color: '#44403c' }}>
            Ils ont trouvé leur praticien
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                text: '"J\'avais des troubles digestifs depuis des années. En 3 questions, Holistia m\'a orientée vers une naturopathe en visio. Je n\'aurais pas trouvé seule."',
                name: 'Sophie M.',
                role: 'Expatriée à Singapour',
              },
              {
                text: '"Praticienne en sophrologie basée à Bangkok, j\'ai pu accéder à une clientèle francophone mondiale. Mon agenda est plein en 2 mois."',
                name: 'Claire D.',
                role: 'Sophrologue, Bangkok',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-8 text-left shadow-sm"
                style={{ border: '1px solid #ede9fe' }}
              >
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#57534e' }}>
                  {t.text}
                </p>
                <div>
                  <div className="font-medium text-sm" style={{ color: '#44403c' }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: '#a8a29e' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRATICIEN */}
      <section
        className="py-16 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-4">
            Vous êtes praticien en médecine alternative ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            Rejoignez la plateforme <strong className="text-white">gratuitement</strong>.
            Créez votre profil, gérez votre agenda, et développez votre clientèle
            francophone partout dans le monde. <strong className="text-white">0% de commission</strong>.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium transition shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
          >
            Créer mon profil gratuitement →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-8 text-sm"
        style={{ backgroundColor: '#1c1917', color: '#a8a29e' }}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-white font-medium">🌿 Holistia</div>
          <div className="flex gap-6">
            {['À propos', 'Charte qualité', 'Blog', 'Contact', 'CGU'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  )
}