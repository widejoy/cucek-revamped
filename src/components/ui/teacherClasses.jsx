import React, { useState, useEffect } from 'react';

const TeacherClasses = () => {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClasses = async () => {
            const url = 'http://localhost:8000/api/teacher/classes/';
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            };

            try {
                setLoading(true);
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                if (data && data.classes) {
                    setClasses(data.classes);
                } else {
                    setError('Unexpected response structure');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    const styles = {
        page: {
            backgroundColor: '#000',
            minHeight: '100vh',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
        },
        container: {
            width: '100%',
            maxWidth: '1200px',
            backgroundColor: '#111',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 0 25px rgba(255,255,255,0.05)',
        },
        header: {
            color: '#fff',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '30px',
            letterSpacing: '1px',
        },
        loadingWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
        },
        spinner: {
            border: '5px solid rgba(255, 255, 255, 0.2)',
            borderTop: '5px solid #fff',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
        },
        error: {
            color: 'red',
            textAlign: 'center',
            fontSize: '1.2rem',
        },
        noData: {
            color: '#bbb',
            textAlign: 'center',
            fontSize: '1.2rem',
            marginTop: '20px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
        },
        card: {
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '20px',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease-in-out',
        },
        cardTitle: {
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            textTransform: 'uppercase',
        },
        cardDesc: {
            fontSize: '1rem',
            color: '#ccc',
            marginBottom: '15px',
        },
        link: {
            color: '#4fd1c5',
            textDecoration: 'none',
            fontWeight: 'bold',
        },
        '@keyframes': `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `
    };

    return (
        <>
            <style>{styles['@keyframes']}</style>
            <div style={styles.page}>
                <div style={styles.container}>
                    <h1 style={styles.header}>Your Classes</h1>
                    {loading && (
                        <div style={styles.loadingWrapper}>
                            <div style={styles.spinner}></div>
                        </div>
                    )}
                    {error && <div style={styles.error}>{error}</div>}
                    {!loading && !error && classes.length === 0 && (
                        <div style={styles.noData}>No classes found.</div>
                    )}
                    {!loading && !error && classes.length > 0 && (
                        <div style={styles.grid}>
                            {classes.map((classItem) => (
                                <div key={classItem.id} style={styles.card}>
                                    <div style={styles.cardTitle}>{classItem.name}</div>
                                    <div style={styles.cardDesc}>{classItem.description}</div>
                                    <a
                                        href={`/classes/${classItem.id}/`}
                                        style={styles.link}
                                    >
                                        View Details →
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TeacherClasses;
