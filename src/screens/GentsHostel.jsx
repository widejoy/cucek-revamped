import React from "react";
import { GentsHostelData } from "../data/GentsHostelData";

const GentsHostel = () => {
  return (
    <>
      <style jsx>{`
        .gents-hostel-page {
          min-height: 100vh;
          background-color: #1a202c; /* Changed from gray-900 */
          color: white; /* Changed from gray-100 */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 3rem 1rem;
        }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #38b2ac, #81e6d9); /* Teal gradient */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: #a0aec0; /* Changed from gray-400 */
          max-width: 42rem;
          margin: 0 auto;
        }
        
        .table-container {
          width: 100%;
          max-width: 80rem;
          background-color: #2d3748; /* Changed from gray-800 */
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          border: 1px solid #4a5568; /* Changed from gray-700 */
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        thead {
          background-color: #4a5568; /* Darker gray-blue */
        }
        
        th {
          padding: 1.25rem 2rem;
          text-align: left;
          font-size: 0.875rem;
          font-weight: 600;
          color: #81e6d9; /* Teal-300 */
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #4a5568;
        }
        
        tbody {
          background-color: #2d3748;
        }
        
        tr {
          transition: background-color 0.15s ease;
          border-bottom: 1px solid #4a5568;
        }
        
        tr:hover {
          background-color: #4a5568;
        }
        
        td {
          padding: 1rem 2rem;
          font-size: 1.125rem;
          vertical-align: middle;
        }
        
        .hostel-name {
          color: #81e6d9; /* Teal-300 */
          white-space: normal;
        }
        
        .hostel-address {
          font-size: 0.875rem;
          color: #a0aec0; /* Gray-400 */
          margin-top: 0.25rem;
        }
        
        .contact-link {
          color: #81e6d9; /* Teal-300 */
          text-decoration: none;
          transition: color 0.15s ease;
        }
        
        .contact-link:hover {
          color: #b2f5ea; /* Teal-200 */
          text-decoration: underline;
        }
      `}</style>

      <div className="gents-hostel-page">
        {/* Header with improved styling */}
        <div className="header">
          <h1 className="title">Gents Hostels near CUCEK</h1>
          <p className="subtitle">
            Explore the list of nearby hostels available for students with complete contact information.
          </p>
        </div>

        {/* Enhanced Table Container */}
        <div className="table-container">
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hostel Name & Address</th>
                  <th>Owner/Manager</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {GentsHostelData.map((hostel, index) => (
                  <tr key={index}>
                    <td style={{ whiteSpace: 'nowrap', fontWeight: 500, color: 'white' }}>
                      {index + 1}
                    </td>
                    <td className="hostel-name">
                      {hostel.name}
                      {hostel.address && (
                        <p className="hostel-address">{hostel.address}</p>
                      )}
                    </td>
                    <td style={{ whiteSpace: 'nowrap', color: 'white' }}>
                      {hostel.owner || "N/A"}
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <a href={`tel:${hostel.phone}`} className="contact-link">
                        {hostel.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GentsHostel;