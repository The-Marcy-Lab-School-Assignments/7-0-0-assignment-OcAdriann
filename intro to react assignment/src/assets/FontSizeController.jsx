function FontSizeController({ setFontSize, fontSize }) {
    const increaseFontSize = () => setFontSize(fontSize + 8);
    const decreaseFontSize = () => setFontSize(fontSize - 8);

    return (
        <div>
            <button onClick={decreaseFontSize}>-</button>
            <button onClick={increaseFontSize}>+</button>
        </div>
    );
}

export default FontSizeController;
