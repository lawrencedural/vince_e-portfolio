# E-Portfolio Setup Guide

This guide will help you add your photos, update links, and configure downloadable documents for your professional e-portfolio.

## 📁 Folder Structure

Your e-portfolio uses the following folder structure:

```
public/
├── images/
│   ├── hero/          # Hero section headshot
│   ├── about/         # About section portrait
│   ├── projects/      # Project thumbnails
│   └── gallery/       # Thank you section gallery
└── documents/         # Resume, CV, Cover Letter PDFs
```

## 🖼️ Adding Images

### 1. Hero Section Image
- **Location**: `public/images/hero/`
- **Filename**: `hero-headshot.jpg` (or update path in `src/data/config.ts`)
- **Recommended**: 800x1067px (3:4 aspect ratio), professional headshot
- See `public/images/hero/README.md` for details

### 2. About Section Image
- **Location**: `public/images/about/`
- **Filename**: `about-portrait.jpg` (or update path in `src/data/config.ts`)
- **Recommended**: 600x800px (3:4 aspect ratio), professional portrait
- See `public/images/about/README.md` for details

### 3. Project Images
- **Location**: `public/images/projects/`
- **Filenames**: Match your project IDs (e.g., `lesson-1.jpg`, `lesson-2.jpg`)
- **Recommended**: 800x450px (16:9 aspect ratio), project screenshots/mockups
- See `public/images/projects/README.md` for details

### 4. Gallery Images
- **Location**: `public/images/gallery/`
- **Filenames**: `gallery-1.jpg`, `gallery-2.jpg`, etc. (6 images)
- **Recommended**: 600x600px (1:1 square), professional photos
- See `public/images/gallery/README.md` for details

## 🔗 Updating Links

All links are configured in **`src/data/config.ts`**. Open this file and update:

### Personal Information
```typescript
personal: {
  firstName: "Vince",
  lastName: "Umali",
  fullName: "Vince Umali",
  role: "Student",
  title: "Business & Entrepreneurship",
  location: "[Your Location]",
  email: "your.email@example.com",
  institution: "[Your Institution]",
}
```

### Social Links
```typescript
social: {
  linkedin: "https://linkedin.com/in/your-profile", // Update with your LinkedIn URL
  email: "mailto:your.email@example.com",
}
```

### Image Paths
Update image paths if you use different filenames:
```typescript
images: {
  hero: "/images/hero/hero-headshot.jpg",
  about: "/images/about/about-portrait.jpg",
  projects: {
    "lesson-1": "/images/projects/lesson-1.jpg",
    // Add more as needed
  },
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    // Add up to 6 images
  ],
}
```

### Disable Placeholders
Once you've added all images, set this to `false`:
```typescript
usePlaceholders: false, // Change from true to false
```

## 📄 Adding Documents

### Required Documents
Place your PDF files in `public/documents/`:

1. **Resume** → `Vince_Umali_Resume.pdf`
2. **CV** → `Vince_Umali_CV.pdf`
3. **Cover Letter** → `Cover-Letter-Umali.jpg`

### Document Paths
Update paths in `src/data/config.ts` if you use different filenames:
```typescript
documents: {
  resume: "/documents/Vince_Umali_Resume.pdf",
  cv: "/documents/Vince_Umali_CV.pdf",
  coverLetter: "/documents/Cover-Letter-Umali.jpg",
}
```

See `public/documents/README.md` for detailed specifications.

## ✅ Quick Setup Checklist

- [ ] Add hero section headshot to `public/images/hero/`
- [ ] Add about section portrait to `public/images/about/`
- [ ] Add project images to `public/images/projects/`
- [ ] Add gallery images to `public/images/gallery/`
- [ ] Update personal information in `src/data/config.ts`
- [ ] Update LinkedIn link in `src/data/config.ts`
- [ ] Update email in `src/data/config.ts`
- [ ] Add Resume PDF to `public/documents/`
- [ ] Add CV PDF to `public/documents/`
- [ ] Add Cover Letter PDF to `public/documents/`
- [ ] Set `usePlaceholders: false` in `src/data/config.ts`
- [ ] Test all download links
- [ ] Test all navigation links

## 🎨 Image Tips

1. **Optimize your images**: Use tools like TinyPNG or ImageOptim to reduce file sizes
2. **Consistent style**: Use similar lighting and background for professional consistency
3. **File formats**: Use JPG for photos, PNG for graphics
4. **Naming**: Use lowercase, descriptive names with hyphens (e.g., `hero-headshot.jpg`)

## 🔧 Testing

After adding your content:

1. Run `npm run dev` to start the development server
2. Check each section to ensure images load correctly
3. Test all download buttons
4. Test all links (especially LinkedIn)
5. Verify responsive design on mobile devices

## 📝 Notes

- Images will automatically display in grayscale and show color on hover
- All paths in `src/data/config.ts` use relative paths starting with `/`
- The portfolio uses placeholder divs until you set `usePlaceholders: false`
- Make sure all PDF files are optimized and under 5MB

## 🆘 Troubleshooting

**Images not showing?**
- Check that files are in the correct `public/images/` subfolder
- Verify filenames match paths in `src/data/config.ts`
- Check browser console for 404 errors

**Downloads not working?**
- Ensure PDF files are in `public/documents/`
- Verify filenames match paths in `src/data/config.ts`
- Check that files are actual PDFs and not corrupted

**Links not working?**
- Verify URLs in `src/data/config.ts` are complete (include `https://`)
- Test links directly in a browser first
- Check browser console for errors

For more details, see the README.md files in each folder!

