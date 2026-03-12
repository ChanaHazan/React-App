import React, { useEffect, useState } from 'react'
import { deleteStudent, getAllStudents, insertStudent, updateStudent } from '../services/students'

const Students = () => {

    const [name,setName]=useState("")
    const [studentList, setStudentList] = useState([])

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        try {
            const students = await getAllStudents()
            setStudentList(students)
        } catch (error) {
            console.log("error occured at fetching data", error.message)
        }

    }

    const handleInsertStudent = async (StudentName) => {
        try {
            const newStudent = await insertStudent({name : StudentName })
            setStudentList(prev => [...prev, newStudent])
        } catch (error) {
            console.log("error occured at create student", error.message)
        } 
    }

    const handleEditStudent = async (id) => {
        const studentDetails = {name: "updated student", email: "zippy@gmail.com", grade: 10}
        try {
            const upodatedStudent =  await updateStudent(id, studentDetails)
            setStudentList(prev => prev.map(s => s.id === id ? upodatedStudent : s))
        } catch (error) {
            console.log("error occured at updsate student", error.message)
        }
    }

    const handleDelete  = async (id) => {
        try {
            await deleteStudent(id)

            setStudentList(prev => prev.filter(s => s.id !== id ))
        } catch (error) {
            console.log("error occured at delete student", error.message)
        }
    }

    return (
        <div>
            <h2>Hello Students</h2>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>handleInsertStudent(name)}>Add Student</button>
            {
                studentList.map(s => (
                    <div key={s.id}>
                        <h3>Name: {s.name}</h3>
                        <div>
                            <button onClick={ () => handleEditStudent(s.id)}>Edit</button>
                            <button onClick={ () => handleDelete(s.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Students