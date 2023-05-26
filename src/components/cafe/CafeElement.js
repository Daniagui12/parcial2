
function CafeElement(props) {
    // This returns an entry in a table
    return (
        <tr>
            <td>{props.cafe.nombre}</td>
            <td>{props.cafe.tipo}</td>
            <td>{props.cafe.region}</td>
        </tr>
    );  
}

export default CafeElement;