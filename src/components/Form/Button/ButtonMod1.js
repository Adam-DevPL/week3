const silver = '#bdc3c7';
const pumpkin = '#d35400';

function ButtonMod1({bgColor=silver, color=pumpkin, children}) {
    const styles = {
        width: 300,
        height: 50,
        fontSize: 20,
        background: bgColor,
        color: color
    };

    return (
        <div>
            <h3>Modyfikacja 1</h3>
            <button style={styles}>{children}</button>
        </div>
    );
}

export default ButtonMod1;