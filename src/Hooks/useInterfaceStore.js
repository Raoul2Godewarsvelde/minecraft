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
    setIsCollapse_Add: () => set(produce(state => {state.add.isCollapse = !state.add.isCollapse})),

    // CURVES

    curves: {
        isCollapse: true
    },
    setIsCollapse_Curves: () => set(produce(state => {state.curves.isCollapse = !state.curves.isCollapse})),

    // PRIMITIVES

    primitives: {
        isCollapse: true
    },
    setIsCollapse_Primitives: () => set(produce(state => {state.primitives.isCollapse = !state.primitives.isCollapse})),

    // TEXT

    text: {
        isCollapse: true
    },
    setIsCollapse_Text: () => set(produce(state => {state.text.isCollapse = !state.text.isCollapse})),

    // MATERIALS

    materials: {
        isCollapse: true
    },
    setIsCollapse_Materials: () => set(produce(state => {state.materials.isCollapse = !state.materials.isCollapse})),

    // LIGHTS

    lights: {
        isCollapse: true
    },
    setIsCollapse_Lights: () => set(produce(state => {state.lights.isCollapse = !state.lights.isCollapse})),

    // CAMERA

    camera: {
        isCollapse: true
    },
    setIsCollapse_Camera: () => set(produce(state => {state.camera.isCollapse = !state.camera.isCollapse})),

    // IMPORT

    importObject: {
        isCollapse: true
    },
    setIsCollapse_ImportObject: () => set(produce(state => {state.importObject.isCollapse = !state.importObject.isCollapse})),

    // HELPERS

    helpers: {
        isCollapse: true
    },
    setIsCollapse_Helpers: () => set(produce(state => {state.helpers.isCollapse = !state.helpers.isCollapse}))
}))