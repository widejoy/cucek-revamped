import React, { useState, useEffect } from 'react';

const TeacherClasses = () => {
    const [classes, setClasses] = useState([]); // State to store the fetched classes data
    const [error, setError] = useState(null);   // State to store any errors
    const [loading, setLoading] = useState(true); // Loading state to show spinner or message

    useEffect(() => {
        // Function to fetch classes data using fetch
        const fetchClasses = async () => {
            const url = 'http://localhost:8000/api/teacher/classes/';
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            };

            try {
                setLoading(true); // Start loading

                // Make the API call using fetch
                const response = await fetch(url, options);

                // Check if the response is okay (status code 2xx)
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                // Parse the response body as JSON
                const data = await response.json();

                // Check if response has the expected structure
                if (data && data.classes) {
                    setClasses(data.classes); // Update the state with the response data
                } else {
                    setError('Unexpected response structure');
                }
            } catch (error) {
                // Handle errors by setting the error state
                setError(error.message);
            } finally {
                setLoading(false); // End loading
            }
        };

        // Call fetchClasses when the component mounts
        fetchClasses();
    }, []); // Empty dependency array ensures this effect runs only once after the first render

    // Inline styles with animations and beautiful design
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '30px',
            backgroundColor: '#1a202c', // Dark background with more contrast
            borderRadius: '12px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.3s ease-in-out',
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
        },
        title: {
            color: '#f7fafc', // Light color for title
            fontSize: '3rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            marginBottom: '15px',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        },
        loading: {
            marginTop: '20px',
        },
        spinner: {
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTop: '4px solid #3182ce', // Blue color
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
        noClasses: {
            color: '#edf2f7', // Light gray text
            fontSize: '1.2rem',
            textAlign: 'center',
            marginTop: '20px',
            fontStyle: 'italic',
        },
        classesList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
        },
        classCard: {
            backgroundColor: '#2d3748', // Dark card background color
            padding: '25px',
            borderRadius: '15px',
            color: '#edf2f7',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        },
        classTitle: {
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#edf2f7',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        classDescription: {
            color: '#e2e8f0', // Light gray text for class description
            fontSize: '1.1rem',
            fontStyle: 'italic',
            marginBottom: '15px',
        },
        divider: {
            borderTop: '1px solid #e2e8f0',
            margin: '15px 0',
        },
        moreDetails: {
            color: '#3182ce', // Blue text color for the link
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
        },
        moreDetailsHover: {
            textDecoration: 'underline',
            color: '#63b3ed',
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
            <style>{keyframes}</style> {/* Inject keyframes for spinner animation */}
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Classes</h1>
                    {loading && (
                        <div style={styles.loading}>
                            <div style={styles.spinner}></div>
                        </div>
                    )}
                </div>

                {error ? (
                    <div style={styles.errorMessage}>{error}</div>
                ) : classes.length === 0 ? (
                    <div style={styles.noClasses}>No classes available.</div>
                ) : (
                    <div style={styles.classesList}>
                        {classes.map((classItem, index) => (
                            <div key={index} style={styles.classCard}>
                                <h2 style={styles.classTitle}>{classItem.name}</h2>
                                <p style={styles.classDescription}>{classItem.description}</p>
                                <div style={styles.divider}></div>
                                <a href={`/classes/${classItem.id}/`} style={styles.moreDetails}>
                                    More details
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default TeacherClasses;
