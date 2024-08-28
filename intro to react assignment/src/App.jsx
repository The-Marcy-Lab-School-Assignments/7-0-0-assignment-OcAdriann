import { useState } from 'react';
import LanguageSelector from './assets/LanguageSelector';
import FontSizeController from './assets/FontSizeController';
import Header from './assets/Header';
import './App.css';

function App() {
    const [greeting, setGreeting] = useState("Good Morning");
    const [fontSize, setFontSize] = useState(64);

    return (
        <>
            <FontSizeController setFontSize={setFontSize} fontSize={fontSize} />
            <Header greeting={greeting} fontSize={fontSize} />
            <LanguageSelector setGreeting={setGreeting} />
        </>
    );
}

export default App;
