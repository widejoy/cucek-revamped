import React, { useEffect, useState } from 'react';
import './PlacementCompanies.css';
import { Button } from '@chakra-ui/react';

function PlacementCompanies() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoveredCompany, setHoveredCompany] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const fetchCompanies = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            
            if (!accessToken) {
                throw new Error('No access token found');
            }

            const response = await fetch('http://127.0.0.1:8000/api/placement/student/company/', {
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

    useEffect(() => {
        fetchCompanies();
    }, []);

    const handleApply = async (companyId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            
            const response = await fetch(`http://127.0.0.1:8000/api/placement/apply/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    company_id: companyId
                })
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            // Show success notification
            alert("application submitted")

            // Refresh the companies list
            await fetchCompanies();

        } catch (error) {
            console.error('Application error:', error);
            alert("application failed")
        }
    };

    const handleMouseEnter = (company, event) => {
        setHoveredCompany(company);
        setTooltipPosition({
            x: event.clientX + 10,
            y: event.clientY + 10
        });
    };

    const handleMouseLeave = () => {
        setHoveredCompany(null);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading companies...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="placement-companies-container">
            <h1 className="page-title">Placement Companies</h1>
            
            {companies.length > 0 ? (
                <div className="table-container">
                    <table className="companies-table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Package (LPA)</th>
                                <th>Min CGPA</th>
                                <th>Min 10th %</th>
                                <th>Min 12th %</th>
                                <th>Eligible</th>
                                <th>Apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company) => (
                                <tr 
                                    key={company.id}
                                    onMouseEnter={(e) => handleMouseEnter(company, e)}
                                    onMouseLeave={handleMouseLeave}
                                    className="company-row"
                                >
                                    <td className="company-name">{company.name}</td>
                                    <td>{company.package}</td>
                                    <td>{company.min_cgpa}</td>
                                    <td>{company.min_10th}%</td>
                                    <td>{company.min_12th}%</td>
                                    <td className={company.is_eligible ? 'eligible-yes' : 'eligible-no'}>
                                        {company.is_eligible ? 'Yes' : 'No'}
                                    </td>
                                    <td>
                                        {company.is_eligible && !company.applied ? (
                                            <Button 
                                                variant="solid" 
                                                colorScheme="blue"
                                                onClick={() => handleApply(company.id)}
                                            >
                                                Apply
                                            </Button>
                                        ) : (
                                            <Button 
                                                variant="outline" 
                                                isDisabled
                                            >
                                                {company.applied ? 'Applied' : 'Not Eligible'}
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="no-companies">No companies found</p>
            )}

            {hoveredCompany && (
                <div 
                    className="job-description-tooltip"
                    style={{
                        left: `${tooltipPosition.x}px`,
                        top: `${tooltipPosition.y}px`
                    }}
                >
                    <h3>{hoveredCompany.name} - Job Description</h3>
                    <div className="job-description-content">
                        {hoveredCompany.job_description}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlacementCompanies;