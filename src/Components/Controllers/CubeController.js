import React from 'react'

import { useCubeStore } from '@hooks/useCubeStore'

import { CheckBox, Range } from '@components/Inputs/Registration/index'

const CubeController = () => {

    // HOOKS

    const [position, setPosition, size, setSize, segments, setSegments, scale, setScale, rotation, setRotation, opacity, setOpacity, wireframe, setWireframe] = useCubeStore((state) => [
        state.position,
        state.setPosition,
        state.size,
        state.setSize,
        state.segments,
        state.setSegments,
        state.scale,
        state.setScale,
        state.rotation,
        state.setRotation,
        state.opcaity,
        state.setOpacity,
        state.wireframe,
        state.setWireframe
    ])

    return (
        <div id='home__controller'>
            <p style={{color: '#fff'}}>Position</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={position.x} min={0} max={10} step={0.1} state={position} setState={setPosition} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={position.y} min={0} max={10} step={0.1} state={position} setState={setPosition} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={position.z} min={0} max={10} step={0.1} state={position} setState={setPosition} color={'#fff'} />

            <p style={{color: '#fff'}}>Size</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={size.x} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={size.y} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={size.z} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />

            <p style={{color: '#fff'}}>Segments</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={segments.x} min={0} max={10} step={1} state={segments} setState={setSegments} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={segments.y} min={0} max={10} step={1} state={segments} setState={setSegments} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={segments.z} min={0} max={10} step={1} state={segments} setState={setSegments} color={'#fff'} />

            <p style={{color: '#fff'}}>Scale</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={scale.x} min={0} max={10} step={0.1} state={scale} setState={setScale} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={scale.y} min={0} max={10} step={0.1} state={scale} setState={setScale} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={scale.z} min={0} max={10} step={0.1} state={scale} setState={setScale} color={'#fff'} />

            <p style={{color: '#fff'}}>Rotation</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={rotation.x} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={rotation.y} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={rotation.z} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />

            <p style={{color: '#fff'}}>Opacity</p>
            <Range rangeType={'value'} value={opacity} min={0} max={1} step={0.01} state={opacity} setState={setOpacity} />

            <p style={{color: '#fff'}}>Wireframe</p>
            <CheckBox name={wireframe} value={wireframe} setState={setWireframe} color={'#fff'} />
        </div>
    )
}

export default CubeController