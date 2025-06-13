# Paresseux Supabase Example

This repository contains a simple example showing how to connect a Node.js application to Supabase.

## Setup

1. Install the Supabase JavaScript client:

```sh
npm install @supabase/supabase-js
```

2. Provide your Supabase credentials via environment variables:

```sh
export SUPABASE_URL=your-supabase-url
export SUPABASE_KEY=your-supabase-key
```

3. Run the example script to fetch data from the `items` table:

```sh
node connectToSupabase.js
```

The script will print any items returned by Supabase or an error if the request fails.
