import { create } from "zustand"; //Zustand giúp quản lý trạng thái toàn cục không cần Redux hay Context API

interface PlayerStore {
    ids: string[];          // Danh sách ID của các bài hát trong playlist
    activeId?: string;      // ID của bài hát đang phát (có thể undefined)
    setId: (id: string) => void;    // Hàm đặt bài hát đang phát
    setIds: (ids: string[]) => void; // Hàm cập nhật danh sách ID bài hát
    reset: () => void;       // Hàm reset trạng thái trình phát nhạc
}

const usePlayer = create<PlayerStore>((set) => ({
    ids: [], // Mặc định danh sách ID rỗng
    activeId: undefined, // Không có bài hát nào đang phát ban đầu
    setId: (id: string) => set({ activeId: id }), // Đặt ID bài hát đang phát
    setIds: (ids: string[]) => set({ ids: ids }), // Đặt danh sách ID bài hát
    reset: () => set({ ids: [], activeId: undefined }) // Reset danh sách phát
}));


export default usePlayer;