import React from "react";
import { internalComplaintsMembers } from "../data/InternalComplaintsData";

const InternalComplaints = () => {
  return (
    <>
      <style jsx>{`
        .complaints-page {
          min-height: 100vh;
          background-color: #1a202c;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 3rem 1rem;
        }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
          width: 100%;
        }
        
        .university-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #81e6d9;
          margin-bottom: 0.5rem;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #38b2ac, #81e6d9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: #a0aec0;
          max-width: 42rem;
          margin: 0 auto;
        }
        
        .table-container {
          width: 100%;
          max-width: 80rem;
          background-color: #2d3748;
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          border: 1px solid #4a5568;
          margin-top: 2rem;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        thead {
          background-color: #4a5568;
        }
        
        th {
          padding: 1.25rem;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: #81e6d9;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #4a5568;
        }
        
        td {
          padding: 1.25rem;
          font-size: 1.125rem;
          vertical-align: middle;
          border-bottom: 1px solid #4a5568;
          color: white;
        }
        
        .position-cell {
          font-weight: 500;
          color: #a0aec0;
        }
        
        .mobile-cell a {
          color: #81e6d9;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .mobile-cell a:hover {
          color: #b2f5ea;
          text-decoration: underline;
        }
        
        tr:last-child td {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .university-name {
            font-size: 1.25rem;
          }
          
          th, td {
            padding: 0.75rem;
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="complaints-page">
        <div className="header">
          <div className="university-name">COCHIN UNIVERSITY COLLEGE OF ENGINEERING KUTTANAD</div>
          <h1 className="title">Internal Complaints Committee</h1>
          <p className="subtitle">
            Committee members responsible for addressing complaints and ensuring a safe environment
          </p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {internalComplaintsMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td className="position-cell">{member.position}</td>
                  <td className="mobile-cell">
                    <a href={`tel:${member.mobile}`}>+91 {member.mobile}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InternalComplaints;