import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewApplications = () => {
    const { company_id } = useParams();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:8000/api/placement/company/${company_id}/applications/`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setApplications(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplication();
    }, [company_id]);

    const getDynamicKeys = () => {
        const keysSet = new Set();
        applications.forEach(app => {
            if (app.other_details) {
                Object.keys(app.other_details).forEach(key => keysSet.add(key));
            }
        });
        return Array.from(keysSet);
    };

    const dynamicKeys = getDynamicKeys();

    return (
        <div style={{
            backgroundColor: '#000',
            minHeight: '100vh',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            color: '#fff'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1100px',
                backgroundColor: '#111',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 0 25px rgba(255,255,255,0.05)'
            }}>
                <h1 style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#fff'
                }}>
                    Placement Applications
                </h1>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : applications.length === 0 ? (
                    <p>No applications found.</p>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            color: '#E2E8F0'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1a1a1a' }}>
                                    <th style={thStyle}>Username</th>
                                    <th style={thStyle}>Email</th>
                                    <th style={thStyle}>Company</th>
                                    <th style={thStyle}>Job Role</th>
                                    <th style={thStyle}>Package</th>
                                    {dynamicKeys.map((key) => (
                                        <th key={key} style={thStyle}>
                                            {key.replace(/_/g, ' ').toUpperCase()}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, index) => (
                                    <tr key={index} style={{ borderBottom: '1px solid #2D3748' }}>
                                        <td style={tdStyle}>{app.user?.username}</td>
                                        <td style={tdStyle}>{app.user?.email}</td>
                                        <td style={tdStyle}>{app.company?.name}</td>
                                        <td style={tdStyle}>{app.company?.job_description}</td>
                                        <td style={tdStyle}>{(app.company?.package / 100000).toFixed(2)}</td>
                                        {dynamicKeys.map((key) => (
                                            <td key={key} style={tdStyle}>
                                                {String(app.other_details?.[key] ?? "-")}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

const thStyle = {
    padding: '12px',
    borderBottom: '1px solid #444',
    fontWeight: 'bold',
    textAlign: 'left',
};

const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #2D3748',
};

export default ViewApplications;
