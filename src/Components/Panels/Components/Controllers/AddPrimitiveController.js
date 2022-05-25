import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'
import { useSceneStore } from '@hooks/useSceneStore'
/* import { useCubeStore } from '@hooks/useCubeStore' */

import { AddButton } from '@components/Panels/Components/Buttons/Registration/index'

const AddPrimitiveController = () => {

    // HOOKS

    const [
        curves, setIsCollapse_Curves,
        primitives, setIsCollapse_Primitives,
        text, setIsCollapse_Text,
        html, setIsCollapse_Html,
        materials, setIsCollapse_Materials,
        lights, setIsCollapse_Lights,
        camera, setIsCollapse_Camera,
        importObject, setIsCollapse_ImportObject,
        helpers, setIsCollapse_Helpers
    ] = useInterfaceStore((state) => [
        state.curves, state.setIsCollapse_Curves,
        state.primitives, state.setIsCollapse_Primitives,
        state.text, state.setIsCollapse_Text,
        state.html, state.setIsCollapse_Html,
        state.materials, state.setIsCollapse_Materials,
        state.lights, state.setIsCollapse_Lights,
        state.camera, state.setIsCollapse_Camera,
        state.importObject, state.setIsCollapse_ImportObject,
        state.helpers, state.setIsCollapse_Helpers
    ])

    // HOOKS

    const [
        addCube
    ] = useSceneStore((state) => [
        state.addCube
    ])

    /* const [addCube] = useSceneStore((state) => [
        state.addCube
    ]) */

    // RETURN

    return (
        <>
            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Curves}
                >
                    Curves
                </h1>
                {!curves.isCollapse && (
                    <>
                        <AddButton name={'Bézier'} />
                        <AddButton name={'Nurbs'} />
                        <AddButton name={'Path'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Primitives}
                >
                    Primitives
                </h1>
                {!primitives.isCollapse && (
                    <>
                        <AddButton name={'Plane'} />
                        <AddButton name={'Circle'} />
                        <AddButton
                            name={'Cube'}
                            onClick={addCube}
                        />
                        <AddButton name={'UV Sphere'} />
                        <AddButton name={'Ico Sphere'} />
                        <AddButton name={'Cylinder'} />
                        <AddButton name={'Cone'} />
                        <AddButton name={'Torus'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Text}
                >
                    Text
                </h1>
                {!text.isCollapse && (
                    <>
                        <AddButton name={'Text'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Html}
                >
                    HTML
                </h1>
                {!html.isCollapse && (
                    <>
                        <AddButton name={'Text'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Materials}
                >
                    Materials
                </h1>
                {!materials.isCollapse && (
                    <>
                        <AddButton name={'Basic'} />
                        <AddButton name={'Depth'} />
                        <AddButton name={'Distance'} />
                        <AddButton name={'Lambert'} />
                        <AddButton name={'Matcap'} />
                        <AddButton name={'Normal'} />
                        <AddButton name={'Phong'} />
                        <AddButton name={'Standard'} />
                        <AddButton name={'Toon'} />
                        <AddButton name={'Raw shader'} />
                        <AddButton name={'Shader'} />
                        <AddButton name={'Shadow'} />
                        <AddButton name={'Sprite'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Lights}
                >
                    Lights
                </h1>
                {!lights.isCollapse && (
                    <>
                        <AddButton name={'Sun'} />
                        <AddButton name={'Point'} />
                        <AddButton name={'Area'} />
                        <AddButton name={'Spot'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Camera}
                >
                    Camera
                </h1>
                {!camera.isCollapse && (
                    <>
                        <AddButton name={'Camera'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_ImportObject}
                >
                    Import
                </h1>
                {!importObject.isCollapse && (
                    <>
                        <AddButton name={'Blender (.blend)'} />
                        <AddButton name={'glTF 2.0 (.glb/.gltf)'} />
                    </>
                )}
            </div>

            <div className='controller__wrappers'>
                <h1
                    onClick={setIsCollapse_Helpers}
                >
                    Helpers
                </h1>
                {!helpers.isCollapse && (
                    <>
                        <AddButton name={'Grid'} />
                    </>
                )}
            </div>
        </>
    )
}

export default AddPrimitiveController