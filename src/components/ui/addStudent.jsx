import React, { useState } from 'react';
import { Text, Input, Button } from '@chakra-ui/react';


const AddStudent = ({ class_id }) => {
    const [student, setStudent] = useState("");

    function handleStudent() {
        async function addStudent() {
            const url = `http://localhost:8000/api/class/${class_id}/add-student/`
            const body = {
                student_id: student
            }
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`, 
                    "content-type": "application/json"
                },
                body: JSON.stringify(body)

            }

            response = await fetch(url, options)
            data = await response.json()
            return data()
        }
        addStudent()
        window.location.reload(false);
    }
    return (
        <>
            <Text mb={2}>Student ID:</Text>
            <Input
                value={student.id}
                placeholder="Enter student ID"
                onChange={(e) => { setStudent(e.target.value) }}
                mb={4}
            />
            <Button colorScheme="teal" onClick={handleStudent}>Add</Button>
        </>
    );
};

export default AddStudent;
