# Media Files Setup Guide

This guide explains how to set up the video and sound files for the portfolio.

## Video Background

### Required File
- **Path**: `/public/videos/trading-screens.mp4`
- **Type**: MP4 video file
- **Recommended specs**:
  - Resolution: 1920x1080 (Full HD) minimum
  - Duration: 10-30 seconds (will loop)
  - Size: Under 5MB for optimal loading
  - Frame rate: 30fps

### Where to Get Videos
1. **Pexels** (Free, no attribution required)
   - Search: "stock market trading", "financial charts", "trading screens"
   - URL: https://www.pexels.com/videos/

2. **Pixabay** (Free, no attribution required)
   - Search: "stock exchange", "trading floor", "financial data"
   - URL: https://pixabay.com/videos/

3. **Videvo** (Free with attribution)
   - Search: "trading", "stock market", "financial graphics"
   - URL: https://www.videvo.net/

### Recommended Videos
- Futuristic trading screens with data visualizations
- Stock market tickers and charts
- Abstract financial graphics
- Trading floor footage
- Cryptocurrency charts (modern aesthetic)

### Fallback Behavior
If the video file is not found, the app will automatically show a gradient background instead. The site will work perfectly without the video.

---

## Sound Files

### Required Files
All sound files should be placed in `/public/sounds/` directory:

1. **opening-bell.mp3**
   - Sound: Stock exchange opening bell
   - Duration: 1-2 seconds
   - Use: Page load, significant achievements

2. **card-flip.mp3**
   - Sound: Card flip/whoosh
   - Duration: 0.3-0.5 seconds
   - Use: Card interactions, transitions

3. **cash-register.mp3**
   - Sound: Cash register "cha-ching"
   - Duration: 0.5-1 second
   - Use: Success notifications, achievements

4. **whoosh.mp3**
   - Sound: Whoosh/swoosh
   - Duration: 0.3-0.5 seconds
   - Use: Page transitions, animations

5. **button-click.mp3**
   - Sound: Soft click
   - Duration: 0.1-0.2 seconds
   - Use: Button clicks, interactions

6. **success-chime.mp3**
   - Sound: Success notification
   - Duration: 0.5-1 second
   - Use: Form submissions, completions

### Where to Get Sound Effects
1. **Freesound** (Free with Creative Commons)
   - URL: https://freesound.org/
   - Search: "bell", "card flip", "cash register", "whoosh", "click", "chime"

2. **Zapsplat** (Free with attribution)
   - URL: https://www.zapsplat.com/
   - Great UI sound effects library

3. **Mixkit** (Free, no attribution)
   - URL: https://mixkit.co/free-sound-effects/
   - High-quality UI sounds

### Sound System Behavior
- Sounds are **OFF by default** (user preference)
- User can enable sounds via the Settings menu (top-right navigation)
- Sound preference is saved to localStorage
- All sounds are optional - the app works perfectly without them

---

## Setup Instructions

### Option 1: Manual Download
1. Go to Pexels/Pixabay and download a trading screens video
2. Rename it to `trading-screens.mp4`
3. Place it in `public/videos/` directory
4. Download sound effects from Freesound/Zapsplat
5. Name them exactly as listed above
6. Place them in `public/sounds/` directory

### Option 2: Use Placeholders
The app is designed to work without media files. You can:
- Skip video setup (gradient will be used)
- Skip sound setup (silent mode is default)
- Add files later when ready

---

## Testing

### Test Video Background
1. Start dev server: `npm run dev`
2. Open browser to `http://localhost:3000`
3. Look for video playing in hero section
4. On mobile, should see gradient instead

### Test Sounds
1. Open the app
2. Click Settings icon (top-right)
3. Enable sounds
4. Click buttons and interact with UI
5. Should hear sound effects

---

## Optimization Tips

### Video
- Use H.264 codec for best browser compatibility
- Consider WebM format for smaller file size
- Use tools like HandBrake to compress video
- Keep under 5MB for fast loading

### Sounds
- Use MP3 format (best browser support)
- Keep files under 100KB each
- Normalize volume levels
- Remove silence from beginning/end

---

## Troubleshooting

### Video Not Playing
- Check file path: `/public/videos/trading-screens.mp4`
- Check file format: Must be MP4
- Check browser console for errors
- Try different video file
- Fallback gradient should still work

### Sounds Not Playing
- Check Settings menu - sounds must be enabled
- Check file paths match exactly
- Check browser console for 404 errors
- Clear localStorage and try again
- Check browser audio permissions

---

## Current Status

### Implemented
✅ VideoBackground component (with mobile fallback)
✅ Sound system infrastructure (localStorage persistence)
✅ Fallback gradients for missing videos
✅ Optional sound effects (OFF by default)

### Pending
❌ Actual video file needs to be added
❌ Actual sound files need to be added
❌ Settings menu UI (to enable/disable sounds)

---

## Next Steps

1. Download a trading screens video from Pexels
2. Add it to `public/videos/trading-screens.mp4`
3. Test on localhost
4. Optionally add sound files
5. Build Settings menu to control sounds

The app is fully functional without these files - they enhance the experience but are not required for core functionality.
