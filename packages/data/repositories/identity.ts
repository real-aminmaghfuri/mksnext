
import { getSupabase, isOnline } from '../remote-db';
import { CompanyIdentity } from 'shared';
import { DEFAULT_COMPANY_IDENTITY } from '../defaults';

export class IdentityRepository {
  static async getCompanyIdentity(): Promise<CompanyIdentity> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'company_identity').single();
            if (data?.value) {
                return { ...DEFAULT_COMPANY_IDENTITY, ...data.value };
            }
        } catch (e) { console.error("Failed to fetch identity", e); }
    }
    return DEFAULT_COMPANY_IDENTITY;
  }

  static async saveCompanyIdentity(identity: CompanyIdentity): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    const { error } = await supabase.from('settings').upsert({ key: 'company_identity', value: identity }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }
}
