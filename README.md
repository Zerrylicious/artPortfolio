# Art Portfolio Website - Seni Murni

A modern, minimalist portfolio website built with **Bootstrap 5**, showcasing your fine arts work. Includes a **simple CMS** for easy content management!

## 🎨 Technology Stack

- **Framework**: Bootstrap 5 (responsive UI components)
- **Backend**: PHP (simple page routing)
- **Frontend**: HTML5, CSS3 (custom artistic styling), Vanilla JavaScript
- **CMS**: File-based JSON storage (no database)
- **Database**: None (static content with dynamic management)

## 📁 Project Structure

```
portfolio/
├── index.php              # Main entry point
├── css/
│   └── style.css         # All styling
├── js/
│   └── script.js         # JavaScript functionality
├── pages/
│   ├── home.php          # Home page
│   ├── about.php         # About section (loads from CMS)
│   ├── gallery.php       # Gallery (loads from CMS)
│   └── contact.php       # Contact form (loads from CMS)
├── images/
│   └── gallery/          # Your artwork images
└── cms/                  # Content Management System
    ├── config.php        # CMS configuration
    ├── login.php         # Admin login
    ├── admin/            # Admin dashboard & management
    ├── data/             # JSON data files
    └── assets/           # CMS styling
```

## 🚀 Getting Started

### 1. Access Your Portfolio
- **URL**: `http://localhost/phpPractice_1/portfolio/`
- View your beautiful portfolio website

### 2. Manage Your Content
- **CMS URL**: `http://localhost/phpPractice_1/portfolio/cms/login.php`
- **Default Login**: `admin` / `password123`
- **⚠️ Change password in `cms/config.php`!**

### 3. Start Customizing
1. Login to CMS
2. Update your about section
3. Add your artwork to gallery
4. Set contact information
5. Upload images to `images/gallery/`

   **In `pages/gallery.php`:**
   - Add your artwork titles and details
   - Add descriptions of each piece
   - Specify dimensions and year created

4. **Update navigation (Optional):**
   - Edit the menu items in `index.php` if you want different sections

## � Key Features

- **Bootstrap 5 Components** - Professional navbar, cards, grid system, forms, alerts
- **Modern, Minimalist Design** - Clean aesthetic with artistic gold accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Gallery Filter** - Organize artworks by category (Acrylic, Oil, All)
- **Smooth Animations** - Hover effects and scroll animations
- **Contact Form** - Simple form for visitor inquiries
- **Professional Typography** - Georgia serif for headings, system fonts for body
- **Content Management System** - Easy-to-use admin panel
- **No Database** - Everything stored in JSON files, lightning-fast and secure

## 🎛️ Content Management System (CMS)

Your portfolio now includes a simple but powerful CMS for managing content:

### Access the CMS
- **URL**: `http://localhost/phpPractice_1/portfolio/cms/login.php`
- **Default Login**: `admin` / `password123`

### ⚠️ Important Security Step
**Change the default password immediately!** Edit `cms/config.php`:
```php
define('ADMIN_PASSWORD', 'your_secure_password_here');
```

### CMS Features
- **Dashboard**: Overview of your content and quick actions
- **Gallery Management**: Add, edit, delete artworks with categories
- **About Section**: Update biography, education, skills
- **Contact Info**: Manage email, social media, studio hours
- **Live Preview**: See changes before publishing
- **File-based Storage**: No database needed, uses JSON files

### Managing Your Gallery
1. Upload artwork images to `images/gallery/` folder
2. Login to CMS → Gallery section
3. Click "Add New Artwork"
4. Fill in details: title, medium, dimensions, year, category
5. Reference the image filename you uploaded
6. Save and view on your portfolio!

## 🛠️ Customization with Bootstrap

### Bootstrap Utility Classes Used
The project leverages Bootstrap's powerful utility classes:
- **Grid System**: `row`, `col-lg-*`, `col-md-*` for responsive layouts
- **Cards**: `.card`, `.card-body`, `.card-img-top` for content containers
- **Spacing**: `mb-*`, `py-*`, `gap-*` for margins and padding
- **Flexbox**: `d-flex`, `justify-content-center`, `align-items-center`
- **Display**: `overflow-hidden`, `position-relative`, `flex-wrap`
- **Text**: `text-center`, `text-muted`, `text-white`
- **Sizing**: `w-100`, `h-100`, `w-auto`

### Adding Bootstrap Components

Want to add more Bootstrap elements? Some popular options:

**Add a Modal (Popup)**
```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal content -->
    </div>
  </div>
</div>
```

**Add a Carousel (Image Slider)**
```html
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```

**Add Toast Notifications**
```html
<div class="toast" role="alert">
  <div class="toast-body">
    Your message here
  </div>
</div>
```

### Custom CSS Variables

The color scheme is defined in `css/style.css`:
```css
--color-primary: #1a1a1a;        /* Dark color */
--color-accent: #d4a574;         /* Gold/bronze accent */
--color-secondary: #f5f5f5;      /* Light background */
```

Change these to customize colors throughout the site.

## 🛠️ Customization Tips

### Colors
The main colors are defined in `css/style.css` under `:root`:
```css
--color-primary: #1a1a1a;        /* Dark color */
--color-accent: #d4a574;         /* Gold/bronze accent */
--color-secondary: #f5f5f5;      /* Light background */
```

Change these values to match your preferred color scheme.

### Fonts
- Headings use Georgia (serif) - elegant and artistic
- Body text uses system fonts - clean and readable

### Adding Artwork to Gallery
In `pages/gallery.php`, add a new item:
```html
<div class="gallery-item" data-category="acrylic">
    <div class="gallery-image">
        <img src="images/gallery/your-image.jpg" alt="Artwork title">
        <div class="gallery-overlay">
            <h3>Your Artwork Title</h3>
            <p>Acrylic on Canvas | Dimensions | Year</p>
        </div>
    </div>
</div>
```

### Adding Categories
Want to add a new category? In `pages/gallery.php`:
1. Add a new filter button: `<button class="filter-btn" data-filter="drawing">Drawing</button>`
2. Update gallery items with: `data-category="drawing"`

## 📋 Content Suggestions

### Home Page
- Eye-catching tagline
- Call-to-action button to gallery
- 3 featured recent works

### About Page
- Your artistic background
- Educational background (Institut Seni Indonesia)
- Your favorite mediums and techniques
- Artistic philosophy

### Gallery
- High-quality photos of your work
- Clear titles and descriptions
- Organized by type or time period
- Include technical details (medium, dimensions, year)

### Contact
- Working email address
- Social media links
- Studio location and hours
- Brief contact instructions

## 📱 Responsive Features
The website automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small devices (< 480px)

## 🔒 No Database
This website doesn't use a database. All information is stored in static files. The contact form will show a success message locally but doesn't actually send emails. If you want to add email functionality later, you can:
1. Use a PHP mail function
2. Integrate with a form service (Formspree, Netlify Forms, etc.)
3. Use a contact form plugin

## 📸 Images Tips
- Use high-quality images (at least 1200px wide)
- Keep file sizes reasonable (compress JPEG to 100-200KB)
- Use consistent lighting and background for artwork photos
- Portrait orientation works best for vertical artwork
- Landscape for horizontal pieces

## 🎯 Next Steps
1. Add your actual artwork images
2. Update all text content with your information
3. Add your email and social links
4. Test on different devices
5. Share with your audience!

## 📚 Bootstrap Resources

- **Bootstrap Docs**: https://getbootstrap.com/docs/5.3/
- **Bootstrap Components**: https://getbootstrap.com/docs/5.3/components/
- **Bootstrap Utilities**: https://getbootstrap.com/docs/5.3/utilities/spacing/
- **Bootstrap Grid**: https://getbootstrap.com/docs/5.3/layout/grid/

## 🚀 Bootstrap CDN

The Bootstrap 5 CSS and JS are loaded from CDN in `index.php`:
```html
<!-- CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">

<!-- JS (at bottom) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
```

If you want to use Bootstrap offline, download it locally and update the paths.

---

**Enjoy showcasing your beautiful artwork with Bootstrap! 🎨**

📖 **CMS Documentation**: See `cms/README.md` for detailed CMS usage instructions.
