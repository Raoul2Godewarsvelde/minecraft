import create from 'zustand'

export const useEnvironmentStore = create((set) => ({

    // COLOR

    color: '#aaaaaa',
    setColor: (color) => set((state) => ({ color: color })),

    // TEXTURE

    texture: null,
    setTexture: (texture) => set((state) => ({ texture: texture })),
    deleteTexture: (texture) => set((state) => ({ texture: null })),

    // STRENGTH

    strength: 1,
    setStrength: (strength) => set((state) => ({ strength: strength }))
}))