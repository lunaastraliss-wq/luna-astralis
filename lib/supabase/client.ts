import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase"; // optionnel si tu types

export const supabase = createClientComponentClient<Database>();
