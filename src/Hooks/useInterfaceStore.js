import create from 'zustand'

import produce from 'immer'

export const useInterfaceStore = create((set) => ({

    // GLOBAL SETTINGS

    globalSettings: {
        isOpen: true,
        isCollapse: true
    },
    setIsOpen_GlobalSettings: () => set(produce(state => {state.globalSettings.isOpen = !state.globalSettings.isOpen})),
    setIsCollapse_GlobalSettings: () => set(produce(state => {state.globalSettings.isCollapse = !state.globalSettings.isCollapse})),

    // ENVIRONMENT

    environment: {
        isCollapse: true
    },
    setIsCollapse_Environment: () => set(produce(state => {state.environment.isCollapse = !state.environment.isCollapse})),

    // ADD

    add: {
        isOpen: true,
        isCollapse: true
    },
    setIsOpen_Add: () => set(produce(state => {state.add.isOpen = !state.add.isOpen})),
    setIsCollapse_Add: () => set(produce(state => {state.add.isCollapse = !state.add.isCollapse}))
}))