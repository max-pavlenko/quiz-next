export class AuthService {
   static async register(email: string) {
      return fetch('/api/hello', {
         method: 'POST',
         headers: {'Content-Type': 'application/json',},
         body: JSON.stringify({email}),
      })
   }
}
