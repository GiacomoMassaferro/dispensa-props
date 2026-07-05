import { useState } from 'react'

function Profile(props) {
    return (
        <>
            <h1>Nome: {props.title}</h1>
            <h2>Ruolo: {props.job}</h2>
        </>
    )
}

export default Profile