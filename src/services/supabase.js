import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gemymjaatpnwnmacsgrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlbXltamFhdHBud25tYWNzZ3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTg0ODIsImV4cCI6MjAzNDAzNDQ4Mn0.yC3-qw6bAKp9HA9BqWZ54SwNW1vctWSxCZptu2MO47k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
