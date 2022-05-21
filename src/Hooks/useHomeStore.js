import create from 'zustand'

export const useHomeStore = create((set) => ({
    width: 20,
    handleWidth: (value) => set(state => ({ width:  value}))
}))