/**
 * upload-all-to-cloudinary.js
 *
 * Uploads every gallery image, video, and public asset to Cloudinary,
 * then prints the exact URL mapping to paste into your components.
 *
 * USAGE:
 *   1. Add your API secret to .env:
 *      CLOUDINARY_API_SECRET=your_secret_here
 *   2. Run from the project root:
 *      node upload-all-to-cloudinary.js
 */

import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// ─── Helper: upload a single file ──────────────────────────────────────────
async function upload(filePath, publicId, resourceType = 'image') {
  console.log(`  ⬆  Uploading ${path.basename(filePath)} → ${publicId}`);
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id:     publicId,
      resource_type: resourceType,
      overwrite:     false,   // skip if already uploaded
      quality:       'auto',
      fetch_format:  'auto',
    });
    console.log(`  ✅ Done: ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`  ❌ Failed: ${err.message}`);
    return null;
  }
}

// ─── Asset manifest ─────────────────────────────────────────────────────────
const GALLERY_DIR = path.join(__dirname, 'frontend/public/gallery');
const VIDEO_DIR   = path.join(__dirname, 'frontend/public/videos');
const PUBLIC_DIR  = path.join(__dirname, 'frontend/public');

const galleryImages = [
  { file: 'WhatsApp Image 2026-04-29 at 1.48.32 PM (1).jpeg', id: 'gallery-img-1' },
  { file: 'WhatsApp Image 2026-04-29 at 1.48.32 PM.jpeg',     id: 'gallery-img-2' },
  { file: 'WhatsApp Image 2026-04-29 at 1.48.33 PM (1).jpeg', id: 'gallery-img-3' },
  { file: 'WhatsApp Image 2026-04-29 at 1.48.33 PM.jpeg',     id: 'gallery-img-4' },
  { file: 'WhatsApp Image 2026-04-29 at 1.48.34 PM.jpeg',     id: 'gallery-img-5' },
  { file: 'WhatsApp Image 2026-04-29 at 1.58.38 PM.jpeg',     id: 'gallery-img-6' },
  { file: 'WhatsApp Image 2026-04-29 at 1.58.43 PM.jpeg',     id: 'gallery-img-7' },
  { file: 'WhatsApp Image 2026-04-29 at 1.58.46 PM.jpeg',     id: 'gallery-img-8' },
];

const localVideos = [
  { file: 'WhatsApp Video 2026-04-29 at 1.48.26 PM.mp4',   id: 'yoga-video-1' },
  { file: 'WhatsApp Video 2026-04-29 at 1.48.27 PM (1).mp4', id: 'yoga-video-2' },
  { file: 'WhatsApp Video 2026-04-29 at 1.48.27 PM.mp4',   id: 'yoga-video-3' },
  { file: 'WhatsApp Video 2026-04-29 at 1.58.31 PM.mp4',   id: 'yoga-video-4' },
  { file: 'WhatsApp Video 2026-04-29 at 1.58.49 PM.mp4',   id: 'yoga-video-5' },
  { file: 'WhatsApp Video 2026-04-29 at 1.58.52 PM.mp4',   id: 'yoga-video-6' },
  { file: 'WhatsApp Video 2026-04-29 at 1.59.22 PM.mp4',   id: 'yoga-video-7' },
  { file: 'WhatsApp Video 2026-04-29 at 2.00.40 PM.mp4',   id: 'yoga-video-8' },
  { file: 'WhatsApp Video 2026-04-29 at 2.02.07 PM.mp4',   id: 'yoga-video-9' },
];

const publicImages = [
  { file: 'himalayan-hero-bg.png',    id: 'himalayan-hero-bg' },
  { file: 'mansukh-nobg.png',         id: 'mansukh-nobg' },
  { file: 'uncle-headshot.png',       id: 'uncle-headshot' },
  { file: 'program-school.jpg',       id: 'program-school' },
  { file: 'program-corporate.jpg',    id: 'program-corporate' },
  { file: 'program-naturopathy.jpg',  id: 'program-naturopathy' },
  { file: 'skill-asanas.png',         id: 'skill-asanas' },
  { file: 'skill-pranayama.png',      id: 'skill-pranayama' },
  { file: 'skill-naturopathy.png',    id: 'skill-naturopathy' },
];

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🌿 TheRealYoga — Cloudinary Batch Upload\n');
  console.log('Cloud: dhowmzdkh\n');

  const results = { gallery: [], videos: [], public: [] };

  // Gallery images
  console.log('📷  Gallery Images');
  for (const item of galleryImages) {
    const url = await upload(
      path.join(GALLERY_DIR, item.file),
      item.id,
      'image'
    );
    results.gallery.push({ id: item.id, url });
  }

  // Videos
  console.log('\n🎬  Yoga Videos');
  for (const item of localVideos) {
    const url = await upload(
      path.join(VIDEO_DIR, item.file),
      item.id,
      'video'
    );
    results.videos.push({ id: item.id, url });
  }

  // Public images (hero, portraits, programs, skills)
  console.log('\n🖼   Public Images');
  for (const item of publicImages) {
    const url = await upload(
      path.join(PUBLIC_DIR, item.file),
      item.id,
      'image'
    );
    results.public.push({ id: item.id, url });
  }

  // ─── Print code snippets ────────────────────────────────────────────────
  console.log('\n\n═══════════════════════════════════════════════════');
  console.log('  ✅  UPLOAD COMPLETE — paste these URLs into your code');
  console.log('═══════════════════════════════════════════════════\n');

  const BASE = 'https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto';
  const VBASE = 'https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto';

  console.log('// ── Gallery.jsx images array ──');
  results.gallery.forEach((r, i) => {
    if (r.url) console.log(`  { id: ${i+1}, src: '${BASE}/${r.id}', alt: '...' },`);
  });

  console.log('\n// ── VideoSection.jsx videos array ──');
  results.videos.forEach((r, i) => {
    if (r.url) console.log(`  { id: ${i+1}, src: '${VBASE}/${r.id}', title: '...' },`);
  });

  console.log('\n// ── Public image URLs ──');
  results.public.forEach(r => {
    if (r.url) console.log(`  ${r.id}: '${BASE}/${r.id}'`);
  });
}

main().catch(console.error);
