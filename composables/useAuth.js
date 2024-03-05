import { access_token } from '~/services/tokenService';

export default function useAuth() {
   const accessToken = access_token;

   function isLoggedIn() {
      return !!accessToken.value;
   }

   return { isLoggedIn };
}
