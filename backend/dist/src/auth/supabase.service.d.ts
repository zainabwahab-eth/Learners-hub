import { createClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private readonly client;
    constructor();
    getClient(): ReturnType<typeof createClient>;
}
