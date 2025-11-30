# Video Placeholder Guide - "Sell Yourself" Project

## 📹 What Was Added

A new **"Sell Yourself"** project has been added to your Projects section with a video placeholder ready for you to paste your video URL.

---

## 🎯 Where to Add Your Video

### File Location:
```
src/data/projects.ts
```

### Find This Line:
```typescript
video: "", // PASTE YOUR VIDEO URL HERE (YouTube, Vimeo, or direct video link)
```

### Replace the Empty String with Your Video URL:
```typescript
video: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // YouTube example
```

---

## 📺 Supported Video Platforms

### 1. **YouTube** (Recommended)
**Format:**
```
https://www.youtube.com/embed/VIDEO_ID
```

**Example:**
```typescript
video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
```

**How to get the embed URL:**
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the URL from the `src` attribute
4. It should look like: `https://www.youtube.com/embed/VIDEO_ID`

---

### 2. **Vimeo**
**Format:**
```
https://player.vimeo.com/video/VIDEO_ID
```

**Example:**
```typescript
video: "https://player.vimeo.com/video/123456789"
```

**How to get the embed URL:**
1. Go to your Vimeo video
2. Click "Share" → "Embed"
3. Copy the URL from the `src` attribute

---

### 3. **Direct Video File** (MP4, WebM, etc.)
**Format:**
```
/videos/your-video.mp4
```

**Example:**
```typescript
video: "/videos/sell-yourself.mp4"
```

**Note:** Place your video file in `public/videos/` folder

---

## 🔧 Step-by-Step Instructions

### Step 1: Prepare Your Video
- Upload to YouTube, Vimeo, or host it yourself
- Get the embed URL

### Step 2: Open the Projects File
```
src/data/projects.ts
```

### Step 3: Find the "Sell Yourself" Project
Look for:
```typescript
{
  id: "sell-yourself",
  lesson: "Project",
  title: "Sell Yourself",
  ...
  video: "", // ← HERE
  ...
}
```

### Step 4: Paste Your Video URL
Replace the empty string with your URL:
```typescript
video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Step 5: Save the File
- Save `projects.ts`
- The video will automatically appear in your app!

---

## 📋 Project Details

### Project Information:
- **ID:** sell-yourself
- **Title:** Sell Yourself
- **Course:** Business and Entrepreneurship
- **Summary:** A personal video presentation showcasing professional introduction, key strengths, and communication skills

### What's Included:
- ✅ Video player (responsive, 16:9 aspect ratio)
- ✅ Full-screen support
- ✅ Auto-play controls
- ✅ Professional styling
- ✅ Mobile-friendly

---

## 🎬 Video Content Suggestions

Your "Sell Yourself" video should include:

1. **Introduction** (10-15 seconds)
   - Your name
   - Your role/title
   - Your institution

2. **Key Strengths** (20-30 seconds)
   - Communication skills
   - Business acumen
   - Leadership experience
   - Academic achievements

3. **Professional Summary** (20-30 seconds)
   - Your passion for business/entrepreneurship
   - Your commitment to growth
   - Your value proposition

4. **Call to Action** (5-10 seconds)
   - Contact information
   - Thank you message

**Total Length:** 1-2 minutes recommended

---

## 🎥 How It Appears in Your App

### In Projects Grid:
- Shows as a card with the project title "Sell Yourself"
- Click to open the modal

### In Modal:
- Video player displays at the top
- Full-screen capable
- Responsive design
- Professional appearance

---

## 💡 Tips for Best Results

### YouTube Upload:
1. Upload your video to YouTube
2. Make it unlisted or public
3. Copy the embed URL
4. Paste into `projects.ts`

### Video Quality:
- Use 1080p or higher resolution
- Good lighting and audio
- Clear, professional presentation
- Stable camera/no shaking

### File Size (if hosting directly):
- Keep under 50MB for fast loading
- Use MP4 format for best compatibility
- Consider using a CDN for large files

---

## 🔍 Example Code

### Before (Empty Placeholder):
```typescript
{
  id: "sell-yourself",
  lesson: "Project",
  title: "Sell Yourself",
  course: "Business and Entrepreneurship",
  summary: "A personal video presentation...",
  images: [],
  video: "", // ← Empty
  evidence: [
    { label: "Video Presentation", url: "#placeholder-sell-yourself-video" },
  ],
  reflection: "Creating this 'Sell Yourself' video...",
}
```

### After (With YouTube Video):
```typescript
{
  id: "sell-yourself",
  lesson: "Project",
  title: "Sell Yourself",
  course: "Business and Entrepreneurship",
  summary: "A personal video presentation...",
  images: [],
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← Your video
  evidence: [
    { label: "Video Presentation", url: "#placeholder-sell-yourself-video" },
  ],
  reflection: "Creating this 'Sell Yourself' video...",
}
```

---

## ✅ Verification Checklist

After adding your video, verify:

- [ ] Video URL is correct
- [ ] Video plays in the modal
- [ ] Video is responsive on mobile
- [ ] Full-screen works
- [ ] Audio is clear
- [ ] No errors in console
- [ ] Project appears first in the projects list

---

## 🚀 Testing Your Video

### Local Testing:
1. Run `npm run dev`
2. Go to Projects page
3. Click on "Sell Yourself" card
4. Verify video plays
5. Test on mobile (use browser dev tools)

### Before Deployment:
1. Test on different browsers
2. Test on mobile devices
3. Verify full-screen works
4. Check audio levels
5. Ensure video loads quickly

---

## 📞 Troubleshooting

### Video Not Showing?
- Check the URL is correct
- Verify the video is public/unlisted (not private)
- Check browser console for errors
- Try a different video platform

### Video Not Playing?
- Ensure URL is in embed format (not watch format)
- Check browser compatibility
- Verify CORS settings (if self-hosted)
- Try a different browser

### Video Looks Stretched?
- This shouldn't happen (16:9 aspect ratio is set)
- Check your video's original aspect ratio
- Re-upload if needed

---

## 📝 File Locations

| File | Purpose |
|------|---------|
| `src/data/projects.ts` | Where to paste your video URL |
| `src/components/ProjectModal.tsx` | Video player component (already updated) |
| `public/videos/` | Where to place self-hosted videos |

---

## 🎓 Summary

1. **Prepare your video** - Record and upload to YouTube/Vimeo
2. **Get the embed URL** - Copy from the platform
3. **Open `src/data/projects.ts`** - Find the "Sell Yourself" project
4. **Paste the URL** - Replace the empty string with your video URL
5. **Save and test** - Run `npm run dev` and verify it works

**That's it!** Your video will automatically appear in your portfolio. 🎉

---

**Questions?** Check the troubleshooting section or review the example code above.
