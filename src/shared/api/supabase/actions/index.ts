import { supabase } from "../client";

export async function readUserSession() {
  const session = await supabase.auth.getSession();
  return session;
}
