import { redirect } from '@sveltejs/kit';


// Il codice viene richiamato non appena finisci sulla pagina '/projects'.
// L'utente viene rimandato immediatamente alla pagina '/projects/motion-design'.
export async function load() {
  throw redirect(302, '/projects/ui-ux');
}
