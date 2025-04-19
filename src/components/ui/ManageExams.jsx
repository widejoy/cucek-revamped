import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon
} from '@chakra-ui/accordion';
import { Text, Input, Button, Heading } from '@chakra-ui/react';

function ManageExams() {
    const [exam, setExam] = useState({
        name: "",
        description: "",
    })

    const [exams, setExams] = useState([])

    const { class_id, subject_id } = useParams()

    useEffect(() => {

        fetch(`http://127.0.0.1:8000/api/subjects/${subject_id}/exams/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then((res) => {
            if (res.status !== 200){
                return
            }
            res.json().then((data) => {
                setExams(data.exams)
            })
        })

    }, [])



    function handleExam() {
        async function addExam() {
            const url = `http://localhost:8000/api/class/${class_id}/${subject_id}/add-exam/`;
            const body = {
                name: exam.name,
                description: exam.description,
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
            return data;
        }
        addExam();
        window.location.reload()
    }

    return (
        <Container className="base">
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Heading mb={2} textAlign="center">
                                Add Exam
                            </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text mb={2}>Exam Name:</Text>
                        <Input
                            value={exam.name}
                            placeholder="Enter exam name"
                            onChange={(e) => setExam({ ...exam, name: e.target.value })}
                            mb={4}
                        />
                        <Input
                            value={exam.description}
                            placeholder="Enter exam description"
                            onChange={(e) => setExam({ ...exam, description: e.target.value })}
                            mb={4}
                        />
                        <Button colorScheme="teal" onClick={handleExam}>
                            Add Exam
                        </Button>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <br />
            <br />
            <br />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {exams.map((exam) => (
                    <div
                        key={exam.id}
                        style={{
                            backgroundColor: '#1A202C',
                            color: '#E2E8F0',
                            border: '1px solid #2D3748',
                            borderRadius: '8px',
                            padding: '16px',
                        }}
                    >
                        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                            {exam.name}
                        </h2>
                        <p style={{ fontSize: '14px', color: '#A0AEC0', marginBottom: '8px' }}>
                            {exam.description}
                        </p>
                        <p style={{ fontSize: '14px', margin: '4px 0' }}>
                            <strong>Class:</strong> {exam.class_assigned}
                        </p>
                        <p style={{ fontSize: '14px', margin: '4px 0' }}>
                            <strong>Subject:</strong> {exam.subject}
                        </p>
                        <a href={`/class/${class_id}/subject/${subject_id}/exams/${exam.id}`} className="link">
                            View Details →
                        </a>
                    </div>
                ))}
            </div>

            <style>
                {`
      .base {
        padding: 40px 20px;
        background-color: #111;
        min-height: 100vh;
      }

      .link {
        color: #4fd1c5;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s ease;
      }

      .link:hover {
        color: #38b2ac;
      }
    `}
            </style>
        </Container>

    )

}

export default ManageExams
