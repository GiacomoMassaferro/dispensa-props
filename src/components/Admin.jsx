function Admin() {
    const isAdmin = true;
    const username = "Ambrogio";
    return (
        <>
            {isAdmin && <p>Pannello Amministratore</p>}
            <p>{username || "Ospite"}</p>
        </>
    );
}

export default Admin;