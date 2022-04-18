import React, { useState, useEffect } from 'react'
import mergeImages from 'merge-images'
import head from '../../images/head1.png'
import svgHead from '../../images/head2.svg'
import eyes from '../../images/eyes1.png'
import mouth from '../../images/mouth3.png'

import './Main.scss'

const Main = () => {
    const [source, setSrc] = useState(''),
          [error, setErr] = useState(''),
          { src } = source

    useEffect(() => {
        // mergeImages returns a Promise which resolves to a base64 data URI
        mergeImages([head, eyes, mouth])
            .then(src => setSrc({ src }))
            .catch(err => setErr({ err: err.toString() }))
    }, [])

    console.log(source);

    return <nav className='main'>
        <h1>Merge Images</h1>
        <h5>Original Images</h5>
        <div className='container'>
            <img src={head} alt="Head" />
            <img src={eyes} alt="Eyes" />
            <img src={mouth} alt="Mouth" />
        </div>
        <h5>Merged Image</h5>
        <img src={src} alt="CombinedImage" />
        {error && <p>{error}</p>}
    </nav>
}

export default Main