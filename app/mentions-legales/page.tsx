import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | Holistia',
  description: 'Mentions légales de la plateforme Holistia — éditeur, hébergeur, responsable de publication.',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Mentions légales
        </h1>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8" style={{ color: '#44403c' }}>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Éditeur du site</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Holistia SAS<br />
            Capital social : en cours de constitution<br />
            RCS : en cours d&apos;immatriculation<br />
            Email : <a href="mailto:contact@holistia.fr" style={{ color: '#6b21a8' }}>contact@holistia.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Responsable de la publication</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            La responsable de la publication est la gérante de Holistia SAS.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Hébergeur</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis<br />
            <a href="https://vercel.com" style={{ color: '#6b21a8' }}>vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            L&apos;ensemble des contenus présents sur le site Holistia (textes, images, logos, code) sont la propriété exclusive de Holistia SAS, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Limitation de responsabilité</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Holistia est une plateforme de mise en relation. Elle n&apos;est pas un prestataire de soins de santé et ne se substitue pas à un avis médical. Les praticiens référencés exercent sous leur propre responsabilité. Holistia ne saurait être tenue responsable des actes, conseils ou omissions des praticiens référencés.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Médiation</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Conformément aux dispositions du Code de la consommation, vous pouvez recourir à un médiateur de la consommation en cas de litige. Vous pouvez également utiliser la plateforme de règlement en ligne des litiges (RLL) de la Commission européenne.
          </p>
        </section>

      </div>
    </main>
  )
}
