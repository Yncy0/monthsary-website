export async function useGetImage() {
  const supabase = useSupabaseClient();

  const { data } = await supabase.storage.from("images").list("photobooth");

  const images = data?.map((files) => {
    const { data: publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(`photobooth/${files.name}`);
    return publicUrl;
  });

  console.log("FETCHING");

  return images;
}
