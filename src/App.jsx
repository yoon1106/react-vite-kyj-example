import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import BootStrapButton from './BootstrapExample';
import Header from './components/Header';

function App() {
    const hello = '안녕하세요'

    const style = {
        fontSize: 30,
    }

    return (
        <>
            <Header></Header>
            <div style={style}>{hello}</div>
            <div>{hello}</div>
            <BootStrapButton />
        </>
    )
}

export default App
