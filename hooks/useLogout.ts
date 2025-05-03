// import { useEarthoOne } from '@eartho/one-client-react'
// import { useRouter } from 'next/navigation'
// import { setIsAuth } from '@/context/auth'

// export const useUserLogout = () => {
//   const router = useRouter()
//   const { logout } = useEarthoOne()

//   return () => {
//     logout({ clientId: `${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}` })
//     localStorage.removeItem('auth')
//     setIsAuth(false)
//     router.push('/')
//   }
// }

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { setIsAuth } from '@/context/auth'

export const useUserLogout = () => {
  const router = useRouter()

  return () => {
    // NextAuth-un logout funksiyası — avtomatik cookie və session-ı təmizləyir
    signOut({ redirect: false })

    // Əlavə olaraq localStorage və state-i sıfırla
    localStorage.removeItem('auth')
    setIsAuth(false)

    // İstəyə görə yönləndirmə
    router.push('/')
  }
}
