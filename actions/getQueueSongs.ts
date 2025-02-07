import { Song } from "@/types";
import { Database } from "@/database.types";
import { createClientComponentClient  } from "@supabase/auth-helpers-nextjs";

const getQueueSongs = async (ids: string[]): Promise<Song[]> => {
  const supabase = createClientComponentClient<Database>();

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .in("id", ids)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getQueueSongs;