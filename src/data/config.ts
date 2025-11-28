/**
 * Portfolio Configuration
 * 
 * Update these values with your actual information, links, and file paths.
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    firstName: "Vince Anthony",
    lastName: "Umali",
    fullName: "Vince Anthony G Umali",
    role: "Undergraduate Student",
    title: "Business & Entrepreneurship",
    location: "104 Aguila Street, San Jose Village 1, Brgy Biñan, Biñan, Laguna",
    email: "vinceumali30@yahoo.com",
    phone: "09291270174",
    age: 23,
    institution: "[Your Institution]",
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/vince-anthony-umali/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    facebook: "https://www.facebook.com/vagu.vagu.3",
    email: "mailto:Vinceumali30@yahoo.com",
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
      "/images/gallery/gallery-1.png",
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/gallery/gallery-4.png",
      "/images/gallery/gallery-5.png",
      "/images/gallery/gallery-6.png",
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

