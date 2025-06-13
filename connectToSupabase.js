const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Please set SUPABASE_URL and SUPABASE_KEY environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchItems() {
  const { data, error } = await supabase.from('items').select('*');
  if (error) {
    throw error;
  }
  return data;
}

fetchItems()
  .then(data => console.log('Fetched items:', data))
  .catch(err => console.error('Error fetching items:', err));
