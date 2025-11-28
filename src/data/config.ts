/**
 * Portfolio Configuration
 * 
 * Update these values with your actual information, links, and file paths.
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    firstName: "Vince",
    lastName: "Umali",
    fullName: "Vince Umali",
    role: "Student",
    title: "Business & Entrepreneurship",
    location: "[Your Location]",
    email: "your.email@example.com",
    institution: "[Your Institution]",
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/your-profile", // Update with your LinkedIn profile URL
    email: "mailto:your.email@example.com",
  },

  // Image Paths (images should be placed in public/images/)
  images: {
    hero: "/images/hero/hero-headshot.jpg", // Professional headshot for hero section
    about: "/images/about/about-portrait.jpg", // Professional portrait for about section
    projects: {
      // Project images are now stored in the project data itself
      // Case Study images: case-study-1.jpg through case-study-7.jpg
      // Session Takeaway images: takeaway-1.jpg and takeaway-2.jpg
    },
    gallery: [
      // Thank you section gallery images
      "/images/gallery/gallery-1.jpg",
      "/images/gallery/gallery-2.jpg",
      "/images/gallery/gallery-3.jpg",
      "/images/gallery/gallery-4.jpg",
      "/images/gallery/gallery-5.jpg",
      "/images/gallery/gallery-6.jpg",
    ],
  },

  // Document Paths (documents should be placed in public/documents/)
  documents: {
    resume: "/documents/Vince_Umali_Resume.pdf", // Your resume PDF file
    cv: "/documents/Vince_Umali_CV.pdf", // Your CV PDF file (if different from resume)
    coverLetter: "/documents/Cover-Letter-Umali.jpg", // Your cover letter template
  },

  // Placeholder text (remove when you have actual images)
  usePlaceholders: false, // Set to false when you've added your actual images
};

