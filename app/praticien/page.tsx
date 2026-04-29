'use client'

import { useEffect } from 'react'

export default function PraticienRedirect() {
  useEffect(() => {
    window.location.replace('/recherche')
  }, [])
  return null
}
