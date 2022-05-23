import create from 'zustand'

import produce from 'immer'

export const useInterfaceStore = create((set) => ({

    // LEFT PANEL

    leftPanel: {
        isOpen: false
    },
    setLeftPanelOpen: (isOpen) => set(produce(state => {state.isOpen = isOpen}))
}))