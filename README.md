# Grover Aruquipa - Academic Portfolio

Personal academic website for postdoctoral applications in robotics research.

## 🌐 Live Site
[https://groveraruquipa.github.io](https://groveraruquipa.github.io)

## 📁 Structure

```
├── index.html            # Main page (all sections)
├── css/style.css         # Styles (responsive)
├── js/main.js            # Navbar, fade-in, lightbox, card videos
├── images/               # Profile, logos, publication thumbnails, older prototype photos
├── media/img/            # Web-sized robot photos and figures
├── media/video/          # Short H.264 clips (no audio) + poster frames
├── demos/                # Self-contained interactive simulators
├── tutorials/            # Interactive tutorials
├── assets/               # CV_Grover_Aruquipa.pdf, SMRDC certificate
└── cv/                   # LaTeX sources of CVs and letters
```

## 🔄 Updating

- **CV:** edit `cv/academic/cv_oxford.tex`, regenerate `cv/academic/cv_web.tex` (same file without the
  nationality line), compile with `pdflatex cv_web.tex` and copy the PDF to `assets/CV_Grover_Aruquipa.pdf`.
- **Paper status:** update the Publications section, the matching robot card and the "At a glance" numbers in `index.html`.
- **Videos:** encode with
  `ffmpeg -i in.mp4 -an -vf "scale='min(960,iw)':-2,fps=30" -c:v libx264 -crf 30 -pix_fmt yuv420p -movflags +faststart out.mp4`
  and keep each clip under ~1.5 MB.

## 📊 Analytics (Optional)

Add GoatCounter (free, privacy-friendly):
```html
<script data-goatcounter="https://YOURSITE.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

## 📱 Responsive

- ✅ Desktop (horizontal journey timeline)
- ✅ Tablet (vertical journey timeline)
- ✅ Mobile (optimized layout)

## 🎨 Colors

```css
--primary: #1a365d;     /* Deep navy */
--secondary: #2c5282;   /* Medium blue */
--accent: #b7952b;      /* Gold */
```

## 📄 License

© 2025 Grover Aruquipa. All rights reserved.
