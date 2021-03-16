const styles = {
    padding: 6,
    isActive: {
        background: '#ff3f34'
    }
};

function MenuLink({ to, isActive, children }) {
    return <a href={to} style={!isActive ? styles : styles.isActive}>{children}</a>;
}

export default MenuLink;