async function useFetchImage() {
  const supabase = useSupabaseClient();

  const { data, error } = await supabase.from("images").select("*");

  if (error) throw error;

  return data;
}

export default useFetchImage;
