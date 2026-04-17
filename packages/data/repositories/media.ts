
import { getSupabase, isOnline } from '../remote-db';
import { MediaAsset, RepoResponse } from '../types';

export class MediaRepository {
  static async getMediaLibrary(): Promise<RepoResponse<MediaAsset[]>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase.from('settings').select('value').eq('key', 'media_library').single();
        if (data?.value && Array.isArray(data.value)) {
          return { success: true, data: data.value as MediaAsset[] };
        }
      }
      return { success: true, data: [] };
    } catch (e) {
      console.error("Failed to fetch media", e);
      return { success: false, error: "MEDIA_FETCH_ERROR" };
    }
  }

  static async saveMediaToLibrary(asset: MediaAsset): Promise<RepoResponse<void>> {
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error("Supabase Client not initialized.");
      
      const response = await this.getMediaLibrary();
      const current = response.success && response.data ? response.data : [];
      const updated = [asset, ...current];
      
      const { error } = await supabase.from('settings').upsert({ key: 'media_library', value: updated }, { onConflict: 'key' });
      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "MEDIA_SAVE_ERROR" };
    }
  }
}
