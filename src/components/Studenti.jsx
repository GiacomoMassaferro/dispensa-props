
function Studente(props) {

    return <li>{props.name}</li>;
}

function Studenti() {
    const listaStudenti = ["Francesca", "Giacomo", "Lorenzo", "Asdrubale"];
    return (
        <ul>
            {listaStudenti.map((studente, index) => (
                <Studente key={index} name={studente} />
            ))}
        </ul>
    );
}
export default Studenti;