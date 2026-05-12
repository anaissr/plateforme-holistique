'use client'

type Prestation = {
  nom: string
  duree: string
  tarif: string
  tarif_num: number
}

type PraticienMin = {
  nom: string
}

function formaterDuree(duree: string): string {
  if (/^\d+$/.test(duree.trim())) return `${duree.trim()} min`
  return duree
}

interface Props {
  praticien: PraticienMin
  prestatoinCadeau: Prestation | undefined
  succesEnvoiCadeau: boolean
  nomAcheteur: string
  setNomAcheteur: (v: string) => void
  emailAcheteur: string
  setEmailAcheteur: (v: string) => void
  nomDestinataire: string
  setNomDestinataire: (v: string) => void
  emailDestinataire: string
  setEmailDestinataire: (v: string) => void
  messageCadeauDestinataire: string
  setMessageCadeauDestinataire: (v: string) => void
  messageCadeauPraticien: string
  setMessageCadeauPraticien: (v: string) => void
  chargementCadeau: boolean
  envoyerCadeau: () => void
  reinitialiserCadeau: () => void
}

export default function ModaleCadeau({
  praticien,
  prestatoinCadeau,
  succesEnvoiCadeau,
  nomAcheteur, setNomAcheteur,
  emailAcheteur, setEmailAcheteur,
  nomDestinataire, setNomDestinataire,
  emailDestinataire, setEmailDestinataire,
  messageCadeauDestinataire, setMessageCadeauDestinataire,
  messageCadeauPraticien, setMessageCadeauPraticien,
  chargementCadeau,
  envoyerCadeau,
  reinitialiserCadeau,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={() => { if (!succesEnvoiCadeau) reinitialiserCadeau() }}
    >
      <div
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl overflow-y-auto"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {succesEnvoiCadeau ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-4">🎁</p>
            <p className="text-lg font-medium mb-2" style={{ color: '#16a34a', fontFamily: 'var(--font-lora)' }}>Demande envoyée !</p>
            <p className="text-sm mb-2" style={{ color: '#57534e' }}>
              Un récapitulatif vous a été envoyé par email. {praticien.nom} va vous contacter rapidement pour finaliser le paiement.
            </p>
            <button
              onClick={reinitialiserCadeau}
              className="mt-4 text-sm px-6 py-2.5 rounded-xl"
              style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-4xl mb-3">🎁</p>
              <h2 className="text-xl font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Offrir une consultation</h2>
              <p className="text-sm" style={{ color: '#a8a29e' }}>avec {praticien.nom}</p>
            </div>

            {prestatoinCadeau && (
              <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: '#f5f3ff' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{prestatoinCadeau.nom}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>{formaterDuree(prestatoinCadeau.duree)}</p>
                  </div>
                  <p className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{prestatoinCadeau.tarif}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 mb-6">
              <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Vos informations</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre prénom et nom *</label>
                  <input type="text" value={nomAcheteur} onChange={(e) => setNomAcheteur(e.target.value)} placeholder="Jean Martin" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre email *</label>
                  <input type="email" value={emailAcheteur} onChange={(e) => setEmailAcheteur(e.target.value)} placeholder="jean@email.com" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                </div>
              </div>

              <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Informations du destinataire</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom et nom *</label>
                  <input type="text" value={nomDestinataire} onChange={(e) => setNomDestinataire(e.target.value)} placeholder="Marie Dupont" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email *</label>
                  <input type="email" value={emailDestinataire} onChange={(e) => setEmailDestinataire(e.target.value)} placeholder="marie@email.com" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre message pour {nomDestinataire || 'le destinataire'} (optionnel)</label>
                <textarea value={messageCadeauDestinataire} onChange={(e) => setMessageCadeauDestinataire(e.target.value)} placeholder="Je pense que cette consultation te ferait du bien..." className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '70px' }} />
              </div>

              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Message pour {praticien.nom.split(' ')[0]} (optionnel)</label>
                <textarea value={messageCadeauPraticien} onChange={(e) => setMessageCadeauPraticien(e.target.value)} placeholder="Bonjour, je souhaite offrir une consultation à..." className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '70px' }} />
              </div>
            </div>

            <button
              onClick={envoyerCadeau}
              disabled={!nomAcheteur || !emailAcheteur || !nomDestinataire || !emailDestinataire || chargementCadeau}
              className="w-full text-white py-3 rounded-2xl text-sm font-medium mb-3"
              style={{ backgroundColor: nomAcheteur && emailAcheteur && nomDestinataire && emailDestinataire ? '#6b21a8' : '#d8b4fe' }}
            >
              {chargementCadeau ? 'Envoi en cours...' : `Envoyer ma demande — ${prestatoinCadeau?.tarif ?? '—'}`}
            </button>
            <p className="text-xs text-center mb-4" style={{ color: '#a8a29e' }}>
              {praticien.nom} vous contactera rapidement pour finaliser le paiement.
            </p>
            <button onClick={reinitialiserCadeau} className="w-full py-2 text-sm" style={{ color: '#a8a29e' }}>
              Annuler
            </button>
          </>
        )}
      </div>
    </div>
  )
}
