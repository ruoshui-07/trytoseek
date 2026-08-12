const SUPABASE_URL =
"https://verrithqsanxnhrtwjps.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcnJpdGhxc2FueG5ocnR3anBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0OTc4MjMsImV4cCI6MjEwMjA3MzgyM30.pm8PZKgNyhQsExsu4vHT3BdbgP8bME8iA7nO8BXvle0";


const supabaseClient =
window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
