export async function useFetchRoadmap() {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase.from("roadmap").select(`
      *,
      images (
      id, unique_id, image_url
      )
    `);

  if (error) throw error;

  return data;
}
