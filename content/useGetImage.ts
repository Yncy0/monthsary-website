export async function useGetImage(bucketName: string, folderName: string) {
  const supabase = useSupabaseClient();

  const { data } = await supabase.storage.from(bucketName).list(folderName);

  const images = data?.map((files) => {
    const { data: publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(`${folderName}/${files.name}`);
    return publicUrl;
  });

  return images;
}
