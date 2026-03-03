
import { getSupabase, isOnline } from '../remote-db';
import { MediaAsset } from '../types';

export class MediaRepository {
  static async getMediaLibrary(): Promise<MediaAsset[]> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'media_library').single();
            if (data?.value && Array.isArray(data.value)) {
                return data.value as MediaAsset[];
            }
        } catch (e) { console.error("Failed to fetch media", e); }
    }
    return [];
  }

  static async saveMediaToLibrary(asset: MediaAsset): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    
    const current = await this.getMediaLibrary();
    const updated = [asset, ...current];
    
    const { error } = await supabase.from('settings').upsert({ key: 'media_library', value: updated }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }
}
