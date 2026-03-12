import apiClient from "./apiClient"

const getAllStudents = async () => {
    try {
        const res = await apiClient.get("/students")
        return res.data
    } catch (error) {
        throw error
    }
}

const insertStudent = async (studentDetails) => {
    try {
        const res = await apiClient.post("/students", studentDetails)
        return res.data
    } catch (error) {
        throw error
    }
}

const updateStudent = async (id, studentDetails) => {
    try {
      const res = await apiClient.put(`/students/${id}`, studentDetails)
      return res.data
    } catch (error) {
        throw error
    }
}

const deleteStudent = async (id) => {
    try {
        await apiClient.delete(`/students/${id}`)
    } catch (error) {
        throw error
    }
}

export { getAllStudents, insertStudent, updateStudent ,deleteStudent}