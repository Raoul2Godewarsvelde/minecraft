import React from 'react'

import { useCubeStore } from '@hooks/useCubeStore'

import { Range } from '@components/Inputs/Registration/index'

const CubeController = () => {

    // HOOKS

    const [size, setSize, rotation, setRotation, opacity, setOpacity] = useCubeStore((state) => [
        state.size,
        state.setSize,
        state.rotation,
        state.setRotation,
        state.opcaity,
        state.setOpacity
    ])

    return (
        <div id='home__controller'>
            <p style={{color: '#fff'}}>Size</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={size.x} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={size.y} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={size.z} min={0} max={10} step={0.1} state={size} setState={setSize} color={'#fff'} />

            <p style={{color: '#fff'}}>Rotation</p>
            <Range rangeType={'object'} name={'x'} label={'X'} value={rotation.x} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'y'} label={'Y'} value={rotation.y} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />
            <Range rangeType={'object'} name={'z'} label={'Z'} value={rotation.z} min={-Math.PI} max={Math.PI} step={Math.PI / 360} state={rotation} setState={setRotation} color={'#fff'} />

            <Range rangeType={'value'} name={'opacity'} label={'Opacity'} value={opacity} min={0} max={1} step={0.01} state={opacity} setState={setOpacity} />
        </div>
    )
}

export default CubeController