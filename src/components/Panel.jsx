function Pannell(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

function App() {
    return (
        <Pannell>
            <h1>React</h1>
            <p>è un casino all'inizio ma dicono diventi più facile</p>
        </Pannell>
    );
}

export default App;