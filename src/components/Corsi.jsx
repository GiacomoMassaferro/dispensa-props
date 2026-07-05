function CourseCard(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <p>Docente: {props.teacher}</p>
            <div>{props.children}</div>
            <p>{props.aviable ? "Posti disponibili" : "Corso al completo"}</p>
            {props.isNew && <p>Nuovo corso</p>}
        </li>
    );
}

function App() {
    const courses = [
        {
            title: "React Base",
            teacher: "Marta",
            description: "Introduzione ai componenti",
            available: true,
            isNew: true
        },
        {
            title: "JSX",
            teacher: "Luca",
            description: "Scrivere interfacce con sintassi dichiarativa",
            available: false,
            isNew: false
        },
        {
            title: "AI Web Development",
            teacher: "Loris",
            description: "Impara a sviluppare pagine web in modo professionale da zerob e ad integrare l'AI nei processi di sviluppo",
            aviable: false,
            isNew: true,
        }
    ];

    return (
        <ul>
            {courses.map((course, index) => (
                <CourseCard
                    key={index}
                    title={course.title}
                    teacher={course.teacher}
                    aviable={course.available}
                    isNew={course.isNew}
                >{course.description}</CourseCard>
            ))}
        </ul>
    );
}

export default App;