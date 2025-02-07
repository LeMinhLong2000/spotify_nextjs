import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { Song } from "@/types";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);

    const fetchSong = async () => {
      const { data, error } = await supabaseClient.from("songs").select("*").eq("id", id).single();

      if (error) {
        setIsLoading(false);
        return toast.error(error.message);
      }
      setSong(data as Song);
      setIsLoading(false);
    };
    fetchSong();
  }, [id, supabaseClient]);//Chạy useEffect khi id hoặc supabaseClient thay đổi


//   Tránh re-render không cần thiết bằng cách sử dụng useMemo()
  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]//Nếu isLoading hoặc song thay đổi, React sẽ tạo một object mới, ngược lại sử dụng object cũ.
  );
};

export default useGetSongById;