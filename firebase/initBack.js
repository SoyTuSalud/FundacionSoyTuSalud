import { getApp, initializeApp, applicationDefault } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

try {
  initializeApp({
    credential: applicationDefault(),
  })
} catch {
  console.log('app ya iniciada')
}

export const auth = getAuth(getApp())
