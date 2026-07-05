
function Open() {
    const isOpen = false;
    return (
        <div>
            {isOpen ? <p>E' aperto</p> : <p>E' chiuso</p>}
        </div>
    );
}

export default Open;