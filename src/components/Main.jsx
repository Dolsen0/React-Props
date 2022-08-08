import React from "react";
import StudentCard from "./StudentCard";

const student = {
    name: "Derek Olsen",
    age: '36',
    term: 'su22',
}



function Main({name}) {
    return(
        <main>
            <h1>Hello {name || "Guest"}</h1>
           {name && <StudentCard student = {student} />}
        </main>
    )
}



export default Main;