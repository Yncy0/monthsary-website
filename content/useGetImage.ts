export async function useGetImage() {
  const supabase = useSupabaseClient();

  const { data } = await supabase.storage
    .from("images")
    .getPublicUrl("photobooth/image.jpg");

    console.log("Im fetching")

  return data;
}

/* 
  export async function useGetImages() {
  const supabase = useSupabaseClient();

  try {
    const { data, error } = await supabase.storage.from("images").list("photobooth");
    if (error) {
      throw new Error(error.message);
    }

    // Generate public URLs for all files in the folder
    const images = data.map((file) => {
      const { publicUrl } = supabase.storage.from("images").getPublicUrl(`photobooth/${file.name}`);
      return publicUrl;
    });

    console.log("Fetching all images");
    return images; // Returns an array of public URLs
  } catch (err) {
    console.error("Error fetching images:", err.message);
    return [];
  }
}
*/