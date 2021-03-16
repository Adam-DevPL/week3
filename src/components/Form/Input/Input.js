const soaringEagle = '#95afc0';
const electromagnetic = '#2f3640';
const harleyDavidsonOrange = '#c23616';

function Input({ bgColor=soaringEagle, color=electromagnetic, borderSize=10, borderRadius=10, borderColor=harleyDavidsonOrange}) {
    const styles = {
        height: 30,
        background: bgColor,
        color: color,
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderSize: borderSize
    }

    return (
        <div>
            <h2>2. Input i Textarea</h2>
            <input type='text' style={styles}></input>
        </div>
    );
}

export default Input;