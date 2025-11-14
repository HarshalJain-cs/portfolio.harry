# Supabase Setup Guide

This guide will help you set up Supabase for the Harshal Jain Portfolio website.

## 📋 Prerequisites

- A Supabase account (sign up at [supabase.com](https://supabase.com))
- Basic understanding of SQL and databases

## 🚀 Step-by-Step Setup

### 1. Create a New Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Enter project details:
   - **Name**: `harshal-portfolio` (or your preferred name)
   - **Database Password**: Create a strong password (save it securely!)
   - **Region**: Choose closest to your location
4. Click "Create new project" and wait for initialization (~2 minutes)

### 2. Run the Database Schema

1. In your Supabase project dashboard, click **SQL Editor** in the left sidebar
2. Click "New query"
3. Copy the entire contents of `supabase-schema.sql` from this repository
4. Paste it into the SQL editor
5. Click **Run** (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned" - this means all tables were created!

### 3. Create Storage Buckets

1. In the sidebar, click **Storage**
2. Create the following buckets (click "New bucket" for each):
   - **Name**: `certificates` | **Public**: ✅ Yes
   - **Name**: `project-images` | **Public**: ✅ Yes
   - **Name**: `blog-images` | **Public**: ✅ Yes
   - **Name**: `downloads` | **Public**: ✅ Yes

### 4. Get Your API Keys

1. Click **Project Settings** (gear icon) in the sidebar
2. Click **API** in the settings menu
3. You'll see two important keys:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJxxx...` (long string)
4. **IMPORTANT**: Copy these values!

### 5. Configure Environment Variables

1. In your project root, create a `.env.local` file
2. Add the following (replace with your actual values):

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Other variables from .env.example
```

3. **Never commit `.env.local` to Git!** (it's already in `.gitignore`)

### 6. Test the Connection

1. Start your development server: `npm run dev`
2. Open browser console (F12)
3. You should see: `✅ Supabase Status: Connected`
4. If you see ⚠️, check your environment variables

## 📊 Database Tables Overview

Your schema includes **13 tables**:

1. **projects** - Tech and finance projects
2. **skills** - Technical and finance skills
3. **experiences** - Work history and internships
4. **volunteering** - Volunteer experiences
5. **certifications** - Certificates and credentials
6. **competitions** - Hackathons and tournaments
7. **research_papers** - Published research
8. **financial_analyses** - Stock/market analyses
9. **blog_posts** - Blog articles
10. **testimonials** - Recommendations
11. **coursework** - Academic courses
12. **contact_submissions** - Contact form data
13. **timeline_events** - Career timeline

## 🔐 Security (Row Level Security)

All tables have **RLS enabled** with public read access. This means:
- ✅ Anyone can read data (for portfolio display)
- ❌ Only authenticated admins can write/update (Phase 2)

## 📝 Adding Content

### Option 1: Supabase Dashboard (Easy)

1. Go to **Table Editor** in Supabase
2. Select a table (e.g., `projects`)
3. Click "Insert row"
4. Fill in the fields
5. Click "Save"

### Option 2: SQL Insert Statements

Run SQL queries in the SQL Editor:

```sql
-- Example: Add a project
INSERT INTO projects (ticker, title, description, category, status, project_type)
VALUES ('CRYPT', 'CryptoTrader Pro', 'Real-time crypto trading platform', 'tech', 'LIVE', 'tech');
```

### Option 3: Through the Website (Phase 2)

An admin dashboard will be added in Phase 2 for easy content management through the UI.

## 🔄 Seed Data (Optional)

Want to start with placeholder data? Run the seed file:

```bash
# After creating supabase-seed.sql with sample data
# Run it in SQL Editor
```

A comprehensive seed file with all placeholder projects, skills, etc. will be provided.

## 🛠️ Troubleshooting

### Error: "Invalid API key"
- ✅ Check that `.env.local` has correct keys
- ✅ Restart dev server after adding env vars

### Error: "relation does not exist"
- ✅ Make sure you ran the schema SQL file
- ✅ Check that tables were created in Table Editor

### Cannot upload files
- ✅ Verify storage buckets are created
- ✅ Check that buckets are set to "public"

### RLS errors
- ✅ Policies are set for public read access
- ✅ Contact form submissions are allowed for everyone

## 📚 Next Steps

1. ✅ Add your real content through Supabase dashboard
2. ✅ Upload certificates to `certificates` bucket
3. ✅ Add project screenshots to `project-images` bucket
4. ✅ Configure email notifications for contact form
5. ✅ (Phase 2) Build admin panel for easier management

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage Documentation](https://supabase.com/docs/guides/storage)

## 💡 Tips

- Use the Supabase Dashboard to browse and edit data easily
- Table Editor has filters and search for quick data management
- SQL Editor auto-saves your queries
- You can download table data as CSV from Table Editor
- Set up database backups in Project Settings > Database

---

**Need Help?** Check the [Supabase Discord](https://discord.supabase.com/) or [GitHub Discussions](https://github.com/supabase/supabase/discussions)
