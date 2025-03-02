import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://udqpqheyoseuglkkdbbo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcXBxaGV5b3NldWdsa2tkYmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MjUxNzUsImV4cCI6MjA1NjQwMTE3NX0.VBHITlRYhqhmtZN1pDsYXh_ms3YPA1juVRCEEzoebl4";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase