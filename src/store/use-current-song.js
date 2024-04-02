import { create } from 'zustand'

export const useCurrentSong = create((set) => ({
    currentSong: { id: "", songUrl: "" },
    setCurrentSong: (newSong) => set((state) => ({ currentSong: newSong })),

}))