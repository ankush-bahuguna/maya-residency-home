Maya Residency Homestay — Customized static website
=====================================================

What I updated for you
- Injected text content from your Wix site: site title, tagline, About copy, guest testimonials, contact details (email & phones), and address. (Source: your Wix site.)
- Kept placeholder images in `assets/` but annotated suggested images and filenames seen on the Wix page so you can replace them easily.
- Added a contact form (Formspree). You must replace `YOUR_FORM_ID` in the form action inside `index.html` with your own Formspree form ID.
- Packaged the site ready for GitHub Pages.

Files to check & customize
- index.html — primary site (update Airbnb link, Google Maps iframe src, Formspree ID).
- styles.css — visual styling.
- script.js — small interactions and central Airbnb URL variable.
- assets/ — placeholder images (replace with real photos).

How to get images from your Wix site
1. Open your Wix site in a browser.
2. Right-click each image and choose "Save image as..." to download the photo files.
3. Rename downloaded images to match the placeholders in `assets/` (e.g. placeholder-room.jpg, hero-placeholder.jpg) and overwrite.

How to set up Formspree
1. Sign up at https://formspree.io and create a new form to get a Form ID.
2. Replace `https://formspree.io/f/YOUR_FORM_ID` in `index.html` with your real form endpoint.
3. Test the form by submitting — Formspree will forward messages to the email you register.

Deploy to GitHub Pages (recommended)
1. Create a new GitHub repository (e.g. `maya-residency-homes`).
2. From your project folder:
   - git init
   - git add .
   - git commit -m "Initial site for Maya Residency Homestay"
   - git branch -M main
   - git remote add origin https://github.com/<your-username>/<repo>.git
   - git push -u origin main
3. Go to GitHub → Settings → Pages → set the source to `main` branch and `/ (root)` folder — save.
4. Your site will be available at: https://<your-username>.github.io/<repo>/

Notes & next steps
- I pulled the following contact details and address directly from your Wix site: email `ankush.bahuguna1994@gmail.com`, phones `9968502792` and `8447175775`, and address `Bonli Lagatal, Aadibadri, Dhabhkar, Uttarakhand 246440, India`. Make sure these are correct and edit in `index.html` if needed.
- I also copied three guest testimonials into the Testimonials section. If you'd like, I can format them differently or fetch more reviews from your listings.

If you'd like, I can now:
- (A) Attempt to automatically fetch and embed the Wix images (I couldn't fetch them reliably due to Wix CDN restrictions; manual download is more reliable), OR
- (B) Walk you through pushing the repo to GitHub and enabling Pages step-by-step with the exact commands (I can provide the git commands and what to click in GitHub).

