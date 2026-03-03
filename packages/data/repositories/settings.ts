
import { getSupabase, isOnline } from '../remote-db';
import { WebProtocols } from '../types';
import { DEFAULT_WEB_PROTOCOLS } from '../defaults';

export class SettingsRepository {
  static async getWebProtocols(): Promise<WebProtocols> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'web_protocols').single();
            if (data?.value) return { ...DEFAULT_WEB_PROTOCOLS, ...data.value };
        } catch (e) { console.error("Failed to fetch settings", e); }
    }
    return DEFAULT_WEB_PROTOCOLS;
  }

  static async saveWebProtocols(protocols: WebProtocols): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    const { error } = await supabase.from('settings').upsert({ key: 'web_protocols', value: protocols }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }
}
