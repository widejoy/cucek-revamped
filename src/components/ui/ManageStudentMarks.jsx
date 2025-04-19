import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Button } from '@chakra-ui/react';

const ManageStudentMarks = () => {
    const { class_id, subject_id, exam_id } = useParams();
    const [students, setStudents] = useState([]);
    const [marksMap, setMarksMap] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const calculateGrade = (marks) => {
        if (marks >= 90) return "S";
        if (marks >= 80) return "A";
        if (marks >= 70) return "B";
        if (marks >= 60) return "C";
        if (marks >= 50) return "D";
        return "F";
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/class/${class_id}/details/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const data = await response.json();
                setStudents(data.students || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchResults = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/view-exam-results/${exam_id}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                    }
                );
                if (response.ok) {
                    const resultData = await response.json();
                    const resultsArray = Array.isArray(resultData.results)
                        ? resultData.results
                        : Object.values(resultData.results);
                    const initialMarks = {};
                    resultsArray.forEach((res) => {
                        initialMarks[res.student_id] = res.marks;
                    });
                    setMarksMap(initialMarks);
                }
            } catch (err) {
                console.error('Error fetching results:', err);
            }
        };

        fetchStudents();
        fetchResults();
    }, [class_id]);

    const handleMarkChange = (studentId, value) => {
        setMarksMap({ ...marksMap, [studentId]: value });
    };

    const handlePublishMark = async () => {
        try {
            const marksList = students.map((student) => ({
                student_id: student.id,
                student_name: student.username,
                marks: parseFloat(marksMap[student.id]) || 0,
                grade: calculateGrade(parseFloat(marksMap[student.id])),
            }));

            const response = await fetch(
                `http://localhost:8000/api/exams/${exam_id}/publish-results/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify({ results: marksList, exam_id }),
                }
            );

            if (!response.ok) throw new Error('Failed to publish marks');
            alert('Marks published successfully!');
        } catch (err) {
            console.error(err);
            alert('Error publishing marks');
        }
    };

    const gradeColors = {
        S: "#38A169", // green
        A: "#48BB78",
        B: "#63B3ED",
        C: "#ED8936",
        D: "#F6E05E",
        F: "#F56565", // red
    };

    return (
        <div style={{
            backgroundColor: '#000',
            minHeight: '100vh',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                backgroundColor: '#111',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 0 25px rgba(255,255,255,0.05)',
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '30px',
                }}>Manage Student Marks</h1>

                {loading ? (
                    <p style={{ textAlign: 'center', color: '#fff' }}>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                ) : (
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '20px',
                        color: '#E2E8F0'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1a1a1a' }}>
                                <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>Name</th>
                                <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>Marks</th>
                                <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ? students.map((student) => {
                                const marks = parseFloat(marksMap[student.id]) || 0;
                                const grade = calculateGrade(marks);
                                return (
                                    <tr key={student.id} style={{ borderBottom: '1px solid #2D3748' }}>
                                        <td style={{ padding: '10px' }}>{student.username}</td>
                                        <td style={{ padding: '10px' }}>
                                            <Input
                                                type="number"
                                                placeholder="Enter Marks"
                                                value={marksMap[student.id] || ''}
                                                onChange={(e) => handleMarkChange(student.id, e.target.value)}
                                                size="sm"
                                                width="100px"
                                                color="#000"

                                            />
                                        </td>
                                        <td style={{ padding: '10px', color: gradeColors[grade] || '#fff' }}>
                                            {marksMap[student.id] ? grade : '-'}
                                        </td>
                                    </tr>
                                );
                            }) : (
                                <tr>
                                    <td colSpan="3" style={{ padding: '10px', textAlign: 'center', color: '#bbb' }}>
                                        No students found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="md" colorScheme="teal" onClick={handlePublishMark}>
                        Publish Marks
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ManageStudentMarks;
