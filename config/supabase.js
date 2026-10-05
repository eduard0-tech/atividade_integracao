const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Configure SUPABASE_URL e SUPABASE_KEY (ou SUPABASE_ANON_KEY) no arquivo .env.');
}

module.exports = createClient(supabaseUrl, supabaseKey);
