import React, { useState } from 'react';
import { Text, Input, Button } from '@chakra-ui/react';

const AddStudent = ({ class_id }) => {
    const [student, setStudent] = useState("");  // State to hold student ID
    const [subject, setSubject] = useState({
        name: "",          // Subject name
        description: ""    // Subject description
    });

    // Handle student addition
    function handleStudent() {
        async function addStudent() {
            const url = `http://localhost:8000/api/class/${class_id}/add-student/`;
            const body = {
                student_email: student
            };
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            };

            const response = await fetch(url, options);
            const data = await response.json();
            return data; // Return the response data
        }

        addStudent()
            .then(() => window.location.reload(false));  // Reload after successful add
    }

    // Handle subject addition
    function handleSubject() {
        async function addSubject() {
            const url = `http://localhost:8000/api/class/${class_id}/add-subject/`;
            const body = {
                name: subject.name,
                description: subject.description,
                class_id: class_id  // Passing the class_id with the subject
            };
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            };

            const response = await fetch(url, options);
            const data = await response.json();
            return data; // Return the response data
        }

        addSubject()
            .then(() => window.location.reload(false));  // Reload after successful add
    }

    return (
        <>
            {/* Add Student Section */}
            <Text mb={2}>Student email:</Text>
            <Input
                value={student}  // Value of student state
                placeholder="Enter student email"
                onChange={(e) => setStudent(e.target.value)}  // Update student state
                mb={4}
            />
            <Button colorScheme="teal" onClick={handleStudent}>Add Student</Button>
            <br />
            <br />

            {/* Add Subject Section */}
            <Text mb={2}>Subject Name:</Text>
            <Input
                value={subject.name}  // Value of subject name state
                placeholder="Enter subject name"
                onChange={(e) => setSubject({ ...subject, name: e.target.value })}  // Update subject name state
                mb={4}
            />
            <Text mb={2}>Subject Description:</Text>
            <Input
                value={subject.description}  // Value of subject description state
                placeholder="Enter subject description"
                onChange={(e) => setSubject({ ...subject, description: e.target.value })}  // Update subject description state
                mb={4}
            />
            <Button colorScheme="teal" onClick={handleSubject}>Add Subject</Button>
        </>
    );
};

export default AddStudent;
