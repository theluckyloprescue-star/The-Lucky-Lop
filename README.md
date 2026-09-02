# The Lucky Lop — Website

This is the full source for The Lucky Lop Rabbit Rescue website. It's plain HTML, CSS and a little JavaScript — no build tools, no backend, so it works straight away on GitHub Pages.

## Folder structure

```
theluckylop/
├── index.html          Home / Help Us page
├── about.html           About Us
├── rabbits.html          Rabbits currently looking for homes
├── gallery.html          Photo gallery with lightbox
├── blog.html             Blog listing page
├── support.html          Donations, wishlist, events, collection boxes
├── contact.html          Phone, email, Facebook, enquiries
├── css/
│   └── style.css         One shared stylesheet for the whole site
├── js/
│   └── main.js            Mobile menu, gallery filter, lightbox
├── images/
│   ├── logo.png            Your logo (already in place)
│   ├── placeholder.svg      Default "add photo" placeholder
│   ├── rabbits/              Photos of individual rabbits
│   ├── gallery/               Gallery photos
│   └── blog/                   Blog post photos
└── blog/
    ├── welcome-to-the-lucky-lop.html
    ├── fundraising-day-cross-scythes.html
    └── example-post-template.html   Copy this to start a new post
```

## How to publish it on GitHub Pages

1. Create a new repository on GitHub (e.g. `theluckylop`).
2. Upload every file and folder from this `theluckylop/` folder into the root of that repository, keeping the folder structure exactly as it is.
3. In the repository, go to **Settings → Pages**.
4. Under "Source", choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a live web address (usually `https://yourusername.github.io/theluckylop/`) within a minute or two.

You don't need any special software to upload — you can drag and drop all the files and folders straight into GitHub's web interface if you don't want to use Git directly.

## How to update things

Every place you're likely to want to change is marked in the HTML with:

```
<!-- EDIT THIS SECTION -->
   ... content ...
<!-- END EDIT THIS SECTION -->
```

**Add a rabbit** → open `rabbits.html`, copy one whole rabbit `<div class="card">` block, paste it, and change the details. Add a photo to `images/rabbits/` and update the `src`.

**Add a gallery photo** → open `gallery.html`, copy one `<div class="gallery-item">` block, paste it, add your photo to `images/gallery/`, and update the `src` and `data-category`.

**Add a blog post** → copy `blog/example-post-template.html`, rename it, fill in your title/date/content, then add a matching card to `blog.html` linking to your new file.

**Change the logo** → replace `images/logo.png` with a new file of the same name (or update the `src` on every page if you rename it).

## Notes

- All pages share `css/style.css` and `js/main.js` — edit those once and the change applies everywhere.
- The navigation menu turns into a hamburger button automatically on small screens.
- The gallery lightbox and filter buttons, and the mobile menu, are all handled by `js/main.js` — no extra setup needed.
- This site has no contact form, since a working form needs a backend or a third-party service. The Contact page instead points people to phone, email and Facebook, which all work with zero setup.
