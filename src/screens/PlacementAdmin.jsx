import React, { useEffect, useState } from 'react';
import './CompaniesList.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function PlacementAdmin() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
  
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
      return <div className="loading">Loading companies...</div>;
    }
  
    if (error) {
      return <div className="error">Error: {error}</div>;
    }
  
    return (
      <div className="companies-container">
        <h1 className="header">Placement Companies</h1>
        <Button variant="surface" onClick={()=>navigate("/add-company")}>Add Company</Button>
        
        {companies.length > 0 ? (
          <div className="companies-table-container">
            <table className="companies-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Job Description</th>
                  <th>Min CGPA</th>
                  <th>Min 10th %</th>
                  <th>Min 12th %</th>
                  <th>Max Backlogs</th>
                  <th>Package (LPA)</th>
                </tr>
              </thead>
              <tbody>
                {companies.map(company => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.job_description}</td>
                    <td>{company.min_cgpa}</td>
                    <td>{company.min_10th || '-'}</td>
                    <td>{company.min_12th || '-'}</td>
                    <td>{company.max_backlogs}</td>
                    <td>{(company.package / 100000).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-companies">No companies found</p>
        )}
      </div>
    );
}

export default PlacementAdmin