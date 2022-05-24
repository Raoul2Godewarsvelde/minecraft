import create from 'zustand'

import produce from 'immer'

export const useInterfaceStore = create((set) => ({

    // GLOBAL SETTINGS

    globalSettings: {
        isOpen: true,
        isCollapse: true
    },
    setIsOpen_GlobalSettings: () => set(produce(state => {state.globalSettings.isOpen = !state.globalSettings.isOpen})),
    setIsCollapse_GlobalSettings: () => set(produce(state => {state.globalSettings.isCollapse = !state.globalSettings.isCollapse}))
}))