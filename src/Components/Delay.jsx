import React, { useMemo, useState, useEffect } from 'react'

export default function Delay({ ms = 1500, children }) {
  // a stable promise that resolves after ms
  const promise = useMemo(() => new Promise(res => setTimeout(res, ms)), [ms])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    promise.then(() => { if (mounted) setReady(true) })
    return () => { mounted = false }
  }, [promise])

  if (!ready) throw promise // keep Suspense fallback visible until resolved
  return <>{children}</>
}