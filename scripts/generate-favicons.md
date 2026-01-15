# How to Generate Proper Favicons Without White Bars

The issue is that your favicon has white padding because the logo doesn't fill the entire square space. Here's how to fix it:

## Option 1: Using RealFaviconGenerator (Recommended)

1. Go to https://realfavicongenerator.net/
2. Upload your `src/assets/obsidian-logo.png`
3. **IMPORTANT SETTINGS:**
   - **iOS**: Set "Picture padding" to **0%** or minimal (1-2%)
   - **Android Chrome**: Set "Picture padding" to **0%** 
   - **Windows Metro**: Set "Picture padding" to **0%**
   - **Favicon for Desktop**: Make sure "Padding" is set to **0%** or very minimal
   - Make the icon **fill 90-95% of the square** space
4. Generate and download the package
5. Extract all files to your `/public` folder

## Option 2: Manual Fix with Image Editor

1. Open your `obsidian-logo.png` in an image editor (Photoshop, GIMP, Figma, etc.)
2. Create a **square canvas** (e.g., 512x512px)
3. Set background to **transparent** or **match your logo's dark background**
4. Place your logo in the center, scaling it to fill **85-90%** of the canvas
5. Export as PNG with these sizes:
   - 16x16px → `favicon-16x16.png`
   - 32x32px → `favicon-32x32.png`
   - 180x180px → `apple-touch-icon.png`
   - 192x192px → `favicon-192x192.png`
   - 512x512px → `favicon-512x512.png`
6. Convert 32x32 to `.ico` format for `favicon.ico`
7. Place all files in `/public` folder

## Key Points:
- **No padding/white space** around the icon
- Icon should fill **85-95%** of the square (not 100%, leave tiny margin for visual balance)
- Use **transparent or dark background** to match your logo
- All favicon files must be **perfectly square**
