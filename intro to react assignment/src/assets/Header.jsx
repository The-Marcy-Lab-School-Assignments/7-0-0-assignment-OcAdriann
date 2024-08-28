function Header({ fontSize, greeting }) {
    return <h1 style={{ fontSize: `${fontSize}px` }}>{greeting}</h1>;
}

export default Header;
