import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Heading, Text } from '@chakra-ui/react';
import AddStudent from './addStudent';

const ClassDetails = () => {
    const { class_id } = useParams(); // Get the class ID from the URL
    const [studentDetails, setStudentDetails] = useState([]); // State to store student details
    const [subjectDetails, setSubjectDetails] = useState([]); // State to store subject details
    const [error, setError] = useState(null); // Error state
    const [loading, setLoading] = useState(true); // Loading state
    const [classDetails, setClassDetails] = useState({});

    useEffect(() => {
        const fetchClassDetails = async () => {
            const url = `http://localhost:8000/api/class/${class_id}/details/`; // Fetch URL for specific class details
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            };

            try {
                setLoading(true); // Set loading to true while fetching data

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();

                if (data && data.students && data.class) {
                    setStudentDetails(data.students);
                    setClassDetails(data.class);
                } else {
                    setError('Unexpected response structure for students');
                }

                if (data.subjects) {
                    setSubjectDetails(data.subjects); // Update subjects data
                } else {
                    setError('Unexpected response structure for subjects');
                }
            } catch (error) {
                setError(error.message); // Set error state
            } finally {
                setLoading(false); // Set loading to false once fetch is complete
            }
        };

        fetchClassDetails(); // Call the fetch function when the component mounts
    }, [class_id]); // Depend on class_id to refetch when the ID changes

    // Styles for the tables and other elements
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px',
            backgroundColor: '#2D3748',
            borderRadius: '12px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            height: 'auto',
            color: '#E2E8F0',
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
        },
        title: {
            color: '#E2E8F0',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '10px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        },
        description: {
            color: '#A0AEC0',
            fontSize: '1.2rem',
            marginBottom: '30px',
        },
        loading: {
            marginTop: '20px',
        },
        spinner: {
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTop: '4px solid #3182ce',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            animation: 'spin 1.5s linear infinite',
        },
        errorMessage: {
            color: 'red',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '30px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '30px',
            borderRadius: '8px',
            overflow: 'hidden',
        },
        th: {
            padding: '15px',
            backgroundColor: '#4A5568',
            color: '#E2E8F0',
            textAlign: 'left',
            fontSize: '1.1rem',
            fontWeight: '600',
        },
        td: {
            padding: '15px',
            borderBottom: '1px solid #2D3748',
            color: '#E2E8F0',
            fontSize: '1rem',
        },
        tableHeader: {
            fontSize: '1.5rem',
            fontWeight: '700',
            padding: '15px',
            color: '#E2E8F0',
            textAlign: 'center',
            backgroundColor: '#2D3748',
        },
        tableRow: {
            transition: 'background-color 0.3s ease',
        },
        tableRowHover: {
            backgroundColor: '#4A5568',
        },
    };

    // Keyframes for spinner animation
    const keyframes = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
  `;

    return (
        <>
            <style>{keyframes}</style> 
            <div style={styles.container}>
                <div style={styles.header}>
                    <Heading as="h2" style={styles.title}>{classDetails.name}</Heading>
                    <Text style={styles.description}>{classDetails.description}</Text>
                    <AddStudent class_id={class_id} />

                    {loading && (
                        <div style={styles.loading}>
                            <div style={styles.spinner}></div>
                        </div>
                    )}
                </div>

                {error ? (
                    <div style={styles.errorMessage}>{error}</div>
                ) : (
                    <>
                        {/* Table for student data */}
                        <table style={styles.table}>
                            <thead>
                                <tr style={styles.tableHeader}>
                                    <th style={styles.th}>Username</th>
                                    <th style={styles.th}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentDetails.length > 0 ? (
                                    studentDetails.map((student, index) => (
                                        <tr
                                            key={index}
                                            style={styles.tableRow}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.tableRowHover.backgroundColor}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                                        >
                                            <td style={styles.td}>{student.username}</td>
                                            <td style={styles.td}>{student.email}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" style={styles.td}>No students found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Table for subject data */}
                        <table style={styles.table}>
                            <thead>
                                <tr style={styles.tableHeader}>
                                    <th style={styles.th}>Subject Name</th>
                                    <th style={styles.th}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectDetails.length > 0 ? (
                                    subjectDetails.map((subject, index) => (
                                        <tr
                                            key={index}
                                            style={styles.tableRow}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.tableRowHover.backgroundColor}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                                        >
                                            <td style={styles.td}>{subject.name}</td>
                                            <td style={styles.td}>{subject.description}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" style={styles.td}>No subjects found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </>
    );
};

export default ClassDetails;
