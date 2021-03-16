const silver = '#bdc3c7';
const pumpkin = '#d35400';

function Button({ label, bgColor=silver, color=pumpkin }) {
    const styles = {
        width: 300,
        height: 50,
        fontSize: 20,
        background: bgColor,
        color: color
    };
    console.log('Komponent Button');
    return (
        <div>
            <h2>1. Modyfikowalny button</h2>
            <button style={styles}>{label}</button>
        </div>
    );
}

export default Button;