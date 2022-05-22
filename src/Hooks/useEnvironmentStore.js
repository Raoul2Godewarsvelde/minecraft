import create from 'zustand'

export const useEnvironmentStore = create((set) => ({
    controlled_color: '#aaaaaa',
    controlled_setColor: (controlled_color) => set((state) => ({ controlled_color: controlled_color }))
}))