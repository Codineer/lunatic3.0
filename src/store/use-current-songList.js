import { create } from 'zustand'

export const useCurrentSongObject = create((set) => ({
    currentSongObject:
    {
        id: "",
        list: []
    },
    setCurrentSongObject: (newSongObject) => set((state) => ({ currentSongObject: newSongObject })),

}))