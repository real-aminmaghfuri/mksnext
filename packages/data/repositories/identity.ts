
import { getSupabase, isOnline } from '../remote-db';
import { CompanyIdentity, RepoResponse } from '../types';
import { DEFAULT_COMPANY_IDENTITY } from '../defaults';

export class IdentityRepository {
  static async getCompanyIdentity(): Promise<RepoResponse<CompanyIdentity>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase.from('settings').select('value').eq('key', 'company_identity').single();
        if (data?.value) {
          return { success: true, data: { ...DEFAULT_COMPANY_IDENTITY, ...data.value } };
        }
      }
      return { success: true, data: DEFAULT_COMPANY_IDENTITY };
    } catch (e) {
      console.error("Failed to fetch identity", e);
      return { success: false, error: "IDENTITY_FETCH_ERROR" };
    }
  }

  static async saveCompanyIdentity(identity: CompanyIdentity): Promise<RepoResponse<void>> {
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error("Supabase Client not initialized.");
      const { error } = await supabase.from('settings').upsert({ key: 'company_identity', value: identity }, { onConflict: 'key' });
      if (error) throw new Error(error.message);
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "IDENTITY_SAVE_ERROR" };
    }
  }
}
