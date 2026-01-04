# ZypDelivery - Logistics & Delivery Services

A modern logistics and delivery platform connecting vendors from Dan Gauro New Market to customers across Kano State, Nigeria with fast, reliable delivery services.

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
3. Set the repository path (e.g., `/home/username/repositories/zypdelivery`)
4. After cloning, use **Terminal** or SSH to:

```bash
cd ~/repositories/zypdelivery
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

### Addon Domain Deployment (Existing Hosting)

If you already have a working server and want to host this project on an **addon domain**:

#### Step 1: Add the Addon Domain in cPanel

1. Log in to your cPanel account
2. Go to **Domains** → **Addon Domains** (or just **Domains** in newer cPanel versions)
3. Enter your new domain name (e.g., `zypdelivery.com`)
4. The document root will auto-fill (e.g., `/home/username/zypdelivery.com`)
5. Click **Add Domain**

> **Note:** Make sure your domain's nameservers point to your hosting provider before adding it.

#### Step 2: Configure DNS for Your Addon Domain

At your domain registrar (where you bought the domain):

1. Set nameservers to your hosting provider's nameservers, OR
2. Add an **A Record** pointing to your server's IP address:
   - Type: `A`
   - Name: `@` (root domain)
   - Value: Your server IP (find this in cPanel → **Server Information**)
3. Add another **A Record** for `www`:
   - Type: `A`
   - Name: `www`
   - Value: Same server IP

#### Step 3: Build and Upload

```bash
# Build locally
npm run build
```

Upload the contents of `dist/` folder to your addon domain's document root:
- Using **File Manager**: Navigate to `/home/username/zypdelivery.com/` and upload all files
- Using **FTP**: Connect and upload to the addon domain folder

#### Step 4: Add .htaccess

Create `.htaccess` in the addon domain root (`/home/username/zypdelivery.com/.htaccess`):

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
</IfModule>
```

#### Step 5: SSL Certificate

1. In cPanel, go to **SSL/TLS** → **Manage SSL Sites** or use **AutoSSL**
2. Select your addon domain and install the certificate
3. Add HTTPS redirect to `.htaccess`:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### Verification Checklist

- [ ] Domain added as addon domain in cPanel
- [ ] DNS A records point to server IP
- [ ] `dist/` contents uploaded to addon domain folder
- [ ] `.htaccess` file present in addon domain root
- [ ] SSL certificate installed
- [ ] Site loads at `https://yourdomain.com`
- [ ] Page refresh works on all routes (SPA routing)

---

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

For support or inquiries about ZypDelivery services, contact us:
- **Email**: info@zypdelivery.com
- **Phone**: +234 708 911 9235
- **Location**: Dan Gauro New Market, Kano State, Nigeria
