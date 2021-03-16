const styles = {
    display: 'flex',
    flexDirection: 'column',
    background: '#4bcffa',
    paddingTop: 50
};

function Menu({ children }) {
    return (
        <nav style={styles}>
            { children}
        </nav>
    );
}

export default Menu;