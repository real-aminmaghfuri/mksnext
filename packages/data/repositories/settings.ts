
import { getSupabase, isOnline } from '../remote-db';
import { WebProtocols, RepoResponse } from '../types';
import { DEFAULT_WEB_PROTOCOLS } from '../defaults';

/**
 * SettingsRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class SettingsRepository {
  /** Fetch high-level system/web configurations */
  static async getWebProtocols(): Promise<RepoResponse<WebProtocols>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'web_protocols')
          .single();
        
        if (error && error.code !== 'PGRST116') throw error; // Handle "not found" vs real error
        
        if (data?.value) {
          return { 
            success: true, 
            data: { ...DEFAULT_WEB_PROTOCOLS, ...data.value } 
          };
        }
      }
      return { success: true, data: DEFAULT_WEB_PROTOCOLS };
    } catch (error) {
      console.error("[SettingsRepo] Protocol Fetch Fail:", error);
      return { success: false, error: "PROTOCOL_FETCH_ERROR" };
    }
  }

  /** Persist system/web configurations */
  static async saveWebProtocols(protocols: WebProtocols): Promise<RepoResponse<void>> {
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error("REMOTE_DB_UNAVAILABLE");

      const { error } = await supabase
        .from('settings')
        .upsert({ key: 'web_protocols', value: protocols }, { onConflict: 'key' });
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error("[SettingsRepo] Protocol Save Fail:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "PROTOCOL_SAVE_ERROR" 
      };
    }
  }
}
