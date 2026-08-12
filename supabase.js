const SUPABASE_URL =
"https://verrithqsanxnhrtwjps.supabase.co";

const SUPABASE_ANON_KEY =
"你的anon key";


const supabaseClient =
window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);