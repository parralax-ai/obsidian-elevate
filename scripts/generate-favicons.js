/**
 * Generate favicons from obsidian-logo.png
 * 
 * Run this script AFTER installing sharp:
 * npm install --save-dev sharp
 * 
 * Then run:
 * node scripts/generate-favicons.js
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const logoPath = join(rootDir, 'src', 'assets', 'obsidian-logo.png');

// Ensure public directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Padding percentage - adjust this to control how much space around the logo
// 0.1 = 10% padding (logo fills 90% of square)
// 0.15 = 15% padding (logo fills 85% of square)
const paddingPercent = 0.1; // 10% padding = logo fills 90% of space

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'favicon-192x192.png' },
  { size: 512, name: 'favicon-512x512.png' },
];

async function generateFavicons() {
  try {
    console.log('Reading logo from:', logoPath);
    
    // Get original image metadata
    const metadata = await sharp(logoPath).metadata();
    const { width, height } = metadata;
    
    console.log(`Original logo dimensions: ${width}x${height}`);
    
    // Process each size
    for (const { size, name } of sizes) {
      const logoSize = Math.floor(size * (1 - paddingPercent * 2)); // Size with padding
      
      console.log(`Generating ${name} (${size}x${size})...`);
      
      await sharp(logoPath)
        .resize(logoSize, logoSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .extend({
          top: Math.floor((size - logoSize) / 2),
          bottom: Math.ceil((size - logoSize) / 2),
          left: Math.floor((size - logoSize) / 2),
          right: Math.ceil((size - logoSize) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent padding
        })
        .png()
        .toFile(join(publicDir, name));
      
      console.log(`✓ Created ${name}`);
    }
    
    // Also create .ico from 32x32
    console.log('Creating favicon.ico...');
    const icoBuffer = await sharp(join(publicDir, 'favicon-32x32.png'))
      .resize(32, 32)
      .png()
      .toBuffer();
    
    // For .ico, we'll just copy the 32x32 PNG (browsers accept PNG as .ico)
    // Or use a converter if you have one installed
    const fs = await import('fs');
    fs.writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
    
    console.log('✓ Created favicon.ico');
    console.log('\n✅ All favicons generated successfully!');
    console.log('\nFiles created in /public folder:');
    sizes.forEach(({ name }) => console.log(`  - ${name}`));
    console.log('  - favicon.ico');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    if (error.code === 'ENOENT' && error.path === logoPath) {
      console.error(`\nLogo file not found at: ${logoPath}`);
      console.error('Make sure obsidian-logo.png exists in src/assets/');
    }
    process.exit(1);
  }
}

generateFavicons();
