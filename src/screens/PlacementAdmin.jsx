import React, { useEffect, useState } from 'react';
import './CompaniesList.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function PlacementAdmin() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
          throw new Error('No access token found');
        }

        const response = await fetch('http://127.0.0.1:8000/api/placement/company/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching companies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <div style={{ color: 'white', padding: '2rem' }}>Loading companies...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', padding: '2rem' }}>Error: {error}</div>;
  }

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
          Placement Companies
        </h1>

        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <Button variant="solid" colorScheme="blue" onClick={() => navigate("/add-company")}>
            Add Company
          </Button>
        </div>

        {companies.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              color: '#E2E8F0'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1a1a1a' }}>
                  <th style={thStyle}>Company</th>
                  <th style={thStyle}>Job Description</th>
                  <th style={thStyle}>Min CGPA</th>
                  <th style={thStyle}>Min 10th %</th>
                  <th style={thStyle}>Min 12th %</th>
                  <th style={thStyle}>Max Backlogs</th>
                  <th style={thStyle}>Package (LPA)</th>
                  <th style={thStyle}>Applications</th>
                </tr>
              </thead>
              <tbody>
                {companies.map(company => (
                  <tr key={company.id} style={{ borderBottom: '1px solid #2D3748' }}>
                    <td style={tdStyle}>{company.name}</td>
                    <td style={tdStyle}>{company.job_description}</td>
                    <td style={tdStyle}>{company.min_cgpa}</td>
                    <td style={tdStyle}>{company.min_10th || '-'}</td>
                    <td style={tdStyle}>{company.min_12th || '-'}</td>
                    <td style={tdStyle}>{company.max_backlogs}</td>
                    <td style={tdStyle}>{(company.package / 100000).toFixed(2)}</td>
                    <td style={tdStyle}>
                      <button
                        onClick={() => navigate(`/placement-applications/${company.id}`)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#3182ce',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        View Applications
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ marginTop: '20px' }}>No companies found</p>
        )}
      </div>
    </div>
  );
}

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

export default PlacementAdmin;
