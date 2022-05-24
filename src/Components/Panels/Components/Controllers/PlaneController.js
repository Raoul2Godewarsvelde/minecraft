import React from 'react'

import { useCubeStore } from '@hooks/useCubeStore'

import { CheckBox, Range } from '@components/Panels/Components/Inputs/Registration/index'

const PlaneController = () => {

    // HOOKS

    const [controlled_position, controlled_setPosition, controlled_size, controlled_setSize, controlled_segments, controlled_setSegments, controlled_scale, controlled_setScale, controlled_rotation, controlled_setRotation, controlled_opacity, controlled_setOpacity, controlled_wireframe, controlled_setWireframe] = useCubeStore((state) => [
        state.controlled_position,
        state.controlled_setPosition,
        state.controlled_size,
        state.controlled_setSize,
        state.controlled_segments,
        state.controlled_setSegments,
        state.controlled_scale,
        state.controlled_setScale,
        state.controlled_rotation,
        state.controlled_setRotation,
        state.controlled_opcaity,
        state.controlled_setOpacity,
        state.controlled_wireframe,
        state.controlled_setWireframe
    ])

    return (
        <div id='home__controller'>
            <p style={{color: '#fff'}}>Position</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={controlled_position.x} min={0} max={10} step={0.1} state={controlled_position} setState={controlled_setPosition} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Y'} value={controlled_position.z} min={0} max={10} step={0.1} state={controlled_position} setState={controlled_setPosition} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Z'} value={controlled_position.y} min={0} max={10} step={0.1} state={controlled_position} setState={controlled_setPosition} color={'#fff'} />

            <p style={{color: '#fff'}}>Size</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={controlled_size.x} min={0} max={10} step={0.1} state={controlled_size} setState={controlled_setSize} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={controlled_size.y} min={0} max={10} step={0.1} state={controlled_size} setState={controlled_setSize} color={'#fff'} />

            <p style={{color: '#fff'}}>Segments</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={controlled_segments.x} min={0} max={10} step={1} state={controlled_segments} setState={controlled_setSegments} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={controlled_segments.y} min={0} max={10} step={1} state={controlled_segments} setState={controlled_setSegments} color={'#fff'} />

            <p style={{color: '#fff'}}>Scale</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={controlled_scale.x} min={0} max={10} step={0.1} state={controlled_scale} setState={controlled_setScale} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={controlled_scale.y} min={0} max={10} step={0.1} state={controlled_scale} setState={controlled_setScale} color={'#fff'} />

            <p style={{color: '#fff'}}>Rotation</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={controlled_rotation.x} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={controlled_rotation} setState={controlled_setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={controlled_rotation.y} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={controlled_rotation} setState={controlled_setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={controlled_rotation.z} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={controlled_rotation} setState={controlled_setRotation} color={'#fff'} />

            <p style={{color: '#fff'}}>Opacity</p>
            <Range rangeType={'value'} value={controlled_opacity} min={0} max={1} step={0.01} state={controlled_opacity} setState={controlled_setOpacity} />

            <p style={{color: '#fff'}}>Wireframe</p>
            <CheckBox name={controlled_wireframe} value={controlled_wireframe} setState={controlled_setWireframe} />
        </div>
    )
}

export default PlaneController