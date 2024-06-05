class SupabaseDB:
    def __init__(self, supabase_client):
        self.table = supabase_client.table
