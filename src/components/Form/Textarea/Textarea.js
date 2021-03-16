const soaringEagle = '#95afc0';
const electromagnetic = '#2f3640';
const harleyDavidsonOrange = '#c23616';

function Textarea({ bgColor=soaringEagle, color=electromagnetic, borderSize=10, borderRadius=10, borderColor=harleyDavidsonOrange}) {
    const styles = {
        width: 300,
        height: 100,
        padding: 20,
        marginTop: 10,
        background: bgColor,
        color: color,
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderWidth: borderSize
    }

    return (
        <div>
            <textarea style={styles}></textarea>
        </div>
    );
}

export default Textarea;