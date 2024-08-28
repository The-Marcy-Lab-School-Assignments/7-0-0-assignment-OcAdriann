function LanguageSelector({ setGreeting }) {
    const greetings = {
        english: "Good Morning",
        chinese: "早上好",
        spanish: "Buenos Días",
        haitian: "Bonjou",
        portuguese: "Bom Dia"
    };

    return (
        <div>
            <button onClick={() => setGreeting(greetings.english)}>English</button>
            <button onClick={() => setGreeting(greetings.chinese)}>Chinese</button>
            <button onClick={() => setGreeting(greetings.spanish)}>Spanish</button>
            <button onClick={() => setGreeting(greetings.haitian)}>Haitian</button>
            <button onClick={() => setGreeting(greetings.portuguese)}>Portuguese</button>
        </div>
    );
}

export default LanguageSelector;