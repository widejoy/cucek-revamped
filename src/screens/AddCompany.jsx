import React, { useState } from 'react';
import './AddPlacementCompany.css'; // We'll create this CSS file
import { useNavigate } from 'react-router-dom';

function AddCompany() {
  const [formData, setFormData] = useState({
    name: '',
    job_description: '',
    min_cgpa: '',
    min_10th: '',
    min_12th: '',
    max_backlogs: '',
    package: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });
    
    try {
      const accessToken = localStorage.getItem('accessToken');
      
      const response = await fetch('http://127.0.0.1:8000/api/placement/company/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          min_cgpa: parseFloat(formData.min_cgpa),
          min_10th: parseFloat(formData.min_10th),
          min_12th: parseFloat(formData.min_12th),
          max_backlogs: parseInt(formData.max_backlogs),
          package: parseInt(formData.package)
        })
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setMessage({ text: 'Company added successfully!', type: 'success' });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        job_description: '',
        min_cgpa: '',
        min_10th: '',
        min_12th: '',
        max_backlogs: '',
        package: ''
      });

    } catch (error) {
      setMessage({ text: `Error: ${error.message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-company-container">
      <h1 className="form-title">Add New Placement Company</h1>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="company-form">
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Google"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="job_description">Job Description</label>
          <textarea
            id="job_description"
            name="job_description"
            value={formData.job_description}
            onChange={handleChange}
            placeholder="Software Engineer"
            required
            rows="4"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="min_cgpa">Minimum CGPA</label>
            <input
              id="min_cgpa"
              name="min_cgpa"
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={formData.min_cgpa}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="min_10th">Minimum 10th %</label>
            <input
              id="min_10th"
              name="min_10th"
              type="number"
              min="0"
              max="100"
              value={formData.min_10th}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="min_12th">Minimum 12th %</label>
            <input
              id="min_12th"
              name="min_12th"
              type="number"
              min="0"
              max="100"
              value={formData.min_12th}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="max_backlogs">Max Backlogs Allowed</label>
            <input
              id="max_backlogs"
              name="max_backlogs"
              type="number"
              min="0"
              value={formData.max_backlogs}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="package">Package (LPA)</label>
          <input
            id="package"
            name="package"
            type="number"
            min="0"
            value={formData.package}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Add Company'}
        </button>
        <button
          className="submit-button"
          onClick={()=>navigate("/companies")}
        >
          Back to Companies
        </button>
      </form>
    </div>
  );
}

export default AddCompany;