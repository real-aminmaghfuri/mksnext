"use server";

import { v2 as cloudinary } from 'cloudinary';
import { Buffer } from 'node:buffer';

// Configure Cloudinary with Server Secrets
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get('file') as File;
  const filename = formData.get('public_id') as string;
  const alt = formData.get('alt') as string || '';
  const caption = formData.get('caption') as string || '';
  const folder = formData.get('folder') as string || 'mks_assets';

  if (!file) throw new Error("No file provided");

  // Convert File to Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload Stream (Server-Side)
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      folder: folder,
      public_id: filename, // Force custom filename
      resource_type: 'auto',
      
      // OPTIMIZATION (THE "COOKING" PROCESS)
      format: 'webp', // Force convert to WebP
      quality: 'auto', // Smart compression
      
      // METADATA INJECTION (SEO)
      context: `alt=${alt}|caption=${caption}`, 
      
      // Tags for easier searching in Cloudinary Dashboard
      tags: ['mks_system', 'seo_optimized'],
      
      // Overwrite if same name exists (optional, keeping it false for safety)
      overwrite: false,
    }, (error, result) => {
      if (error) {
        console.error("Cloudinary Error:", error);
        reject(error);
      } else {
        resolve(result);
      }
    }).end(buffer);
  });
}