 /**
 * upload-hero-to-cloudinary.js
 * 
 * Uploads the AI-generated Himalayan hero background to Cloudinary.
 * Run once from the project root:  node upload-hero-to-cloudinary.js
 *
 * Prerequisites:
 *   npm install cloudinary   (or use npx)
 *
 * You can find your API Key & Secret at:
 *   https://console.cloudinary.com/settings/api-keys
 */

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');

// ── Cloudinary configuration from .env ──────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// ─────────────────────────────────────────────────────────────────────────────


const imagePath = path.join(__dirname, 'frontend', 'public', 'himalayan-hero-bg.png');

(async () => {
  console.log('⬆️  Uploading himalayan-hero-bg.png to Cloudinary…');
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      public_id:      'himalayan-hero-bg',
      overwrite:      true,
      resource_type:  'image',
      // Eager transformations: f_auto, q_auto, w_1920 baked in
      eager: [{ fetch_format: 'auto', quality: 'auto', width: 1920, crop: 'limit' }],
      eager_async: false,
    });

    console.log('\n✅ Upload successful!');
    console.log('   Secure URL :', result.secure_url);
    console.log('   Public ID  :', result.public_id);
    console.log('\n   The Hero.jsx already references this URL with on-the-fly transforms:');
    console.log('   https://res.cloudinary.com/dhowmzdkh/image/upload/f_auto,q_auto,w_1920/himalayan-hero-bg');
    console.log('\n   No code changes needed — the Hero component is already wired up! 🎉');
  } catch (err) {
    console.error('❌ Upload failed:', err.message);
    process.exit(1);
  }
})();
