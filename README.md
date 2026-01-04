# ZYP - Pharmaceutical Supply & Logistics

A modern pharmaceutical supply and logistics platform connecting hospitals, pharmacies, and medicine stores to verified pharmaceutical suppliers with fast, reliable delivery in Kano State, Nigeria.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── DeliveryBanner.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Services.tsx
├── pages/           # Page components
│   ├── Index.tsx
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── App.tsx          # Main app component
```

---

## cPanel Deployment Guide

### Prerequisites

- A hosting account with cPanel access
- Node.js installed locally (for building)
- FTP client (FileZilla) or cPanel File Manager access

### Step 1: Build Your Project

Run the build command locally:

```bash
npm run build
```

This creates a `dist/` folder containing all production-ready files.

### Step 2: Upload to cPanel

#### Option A: Using File Manager

1. Log in to your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` (or your subdomain folder)
4. Delete existing files (if replacing an old site)
5. Click **Upload** and upload all contents from your `dist/` folder
6. Make sure `index.html` is in the root of `public_html`

#### Option B: Using FTP (FileZilla)

1. Open FileZilla and connect using your cPanel FTP credentials:
   - Host: `ftp.yourdomain.com`
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: `21`
2. Navigate to `public_html` on the remote server
3. Upload all contents from your local `dist/` folder

#### Option C: Using cPanel Git (Advanced)

1. In cPanel, go to **Git™ Version Control**
2. Click **Create** and enter your repository URL
3. Set the repository path (e.g., `/home/username/repositories/zyp`)
4. After cloning, use **Terminal** or SSH to:

```bash
cd ~/repositories/zyp
npm install
npm run build
cp -r dist/* ~/public_html/
```

### Step 3: Configure .htaccess for SPA Routing

Create or update `.htaccess` in your `public_html` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle client-side routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/json
  AddOutputFilterByType DEFLATE application/javascript text/javascript
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

**Note:** This file is already included in `public/.htaccess` and will be copied to `dist/` during build.

### Step 4: Verify Deployment

1. Visit your domain in a browser
2. Test navigation between pages (Home, Privacy, Terms)
3. Refresh on a subpage to ensure routing works
4. Check browser console for any errors

### Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors on page refresh | Ensure `.htaccess` is uploaded and `mod_rewrite` is enabled |
| Blank page | Check browser console; verify `index.html` is in root folder |
| Assets not loading | Verify all files from `dist/assets/` are uploaded |
| Styles missing | Clear browser cache; check CSS file paths |
| CORS errors | Contact hosting support to enable CORS headers |

### Subdomain Deployment

To deploy on a subdomain (e.g., `app.yourdomain.com`):

1. In cPanel, go to **Domains** → **Subdomains**
2. Create a new subdomain
3. Note the document root (e.g., `/home/username/app.yourdomain.com`)
4. Upload `dist/` contents to that folder
5. Add `.htaccess` file to that folder

### SSL Certificate

For HTTPS (recommended):

1. In cPanel, go to **SSL/TLS** → **Manage SSL Sites**
2. Or use **AutoSSL** if available
3. Enable "Force HTTPS" in your `.htaccess`:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Contact

For support or inquiries about ZYP pharmaceutical delivery services, contact us through the website contact form.
