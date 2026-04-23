export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl px-8">
        <h1 className="text-4xl font-light text-stone-700 mb-4">
          Trouvez votre praticien en médecine douce
        </h1>
        <p className="text-lg text-stone-500 mb-8">
          La plateforme francophone qui connecte patients et praticiens holistiques, partout dans le monde.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
            Je cherche un praticien
          </button>
          <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 transition">
            J'ai un problème précis
          </button>
        </div>
      </div>
    </main>
  )
}
