import { useState } from 'react';
import { Repository } from 'data';
import { CompanyIdentity } from 'shared';
import { analyzeImageForSEO } from '../../../utils/ai-services';
import { processImageLocally } from '../../../utils/image-processor';
import { uploadToCloudinary } from '../../actions/upload';

interface UsePhotoUploadProps {
  identity: CompanyIdentity;
  setIdentity: React.Dispatch<React.SetStateAction<CompanyIdentity>>;
}

export const usePhotoUpload = ({ identity, setIdentity }: UsePhotoUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState<string>('');

  const handleRemovePhoto = async () => {
    if (!confirm("Yakin mau hapus foto founder? Tampilan di web bakal kosong.")) return;
    
    setIsUploading(true);
    setUploadStep('DELETING PHOTO...');
    try {
      const updatedIdentity = { ...identity, founderPhoto: '' };
      setIdentity(updatedIdentity);
      await Repository.saveCompanyIdentity(updatedIdentity);
      alert("Foto berhasil dihapus dari database.");
    } catch (e: any) {
      alert("Gagal hapus: " + e.message);
    } finally {
      setIsUploading(false);
      setUploadStep('');
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const originalFile = e.target.files[0];
    
    setIsUploading(true);
    setUploadStep('INITIALIZING AI VISION...');

    try {
      // 1. AI Analysis
      setUploadStep('SCANNING & GENERATING SEO NAME...');
      const seoData = await analyzeImageForSEO(originalFile, "Founder Profile Picture of PT Mesin Kasir Solo");
      
      const cleanSlug = seoData.filename.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
      const finalPublicId = cleanSlug.length > 3 ? cleanSlug : 'founder-profile-mks-solo';

      // 2. LOCAL PROCESSING (Resize, Convert WebP, Rename)
      setUploadStep('LOCAL CONVERSION (WEBP)...');
      const optimizedFile = await processImageLocally(originalFile, finalPublicId);

      // 3. Prepare Payload
      setUploadStep('UPLOADING TO CLOUD...');
      const formData = new FormData();
      formData.append('file', optimizedFile);
      formData.append('folder', 'mks_founder');
      formData.append('public_id', finalPublicId); 
      formData.append('alt', seoData.alt_text);
      formData.append('caption', seoData.caption);

      // 4. Upload (Server-Side)
      const result: any = await uploadToCloudinary(formData);
      
      if (result && result.secure_url) {
        // 5. AUTO SAVE TO DATABASE
        setUploadStep('SYNCING SUPABASE...');
        const updatedIdentity = { ...identity, founderPhoto: result.secure_url };
        setIdentity(updatedIdentity);
        
        await Repository.saveCompanyIdentity(updatedIdentity);
        
        setUploadStep('DONE');
        alert(`✅ Foto Mateng Terupload!\nFile: ${finalPublicId}.webp\nURL: ${result.secure_url}`);
      } else {
        throw new Error('Upload failed on server.');
      }
    } catch (err: any) {
      console.error(err);
      alert(`Upload Failed: ${err.message}`);
    } finally {
      setIsUploading(false);
      setUploadStep('');
    }
  };

  return {
    isUploading,
    uploadStep,
    handlePhotoUpload,
    handleRemovePhoto
  };
};
