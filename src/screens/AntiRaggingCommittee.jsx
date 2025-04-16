import React from "react";
import { antiRaggingMembers } from "../data/AntiRggingCommitteeData";

const AntiRaggingCommittee = () => {
  return (
    <>
      <style jsx>{`
        .anti-ragging-page {
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
        
        .university-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #81e6d9;
          margin-bottom: 0.5rem;
        }
        
        .committee-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 2rem;
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
          vertical-align: top;
          border-bottom: 1px solid #4a5568;
        }
        
        .category-cell {
          font-weight: 600;
          color: #81e6d9;
          width: 30%;
        }
        
        .members-cell {
          color: white;
        }
        
        .member-item {
          margin-bottom: 0.5rem;
        }
        
        .member-item:last-child {
          margin-bottom: 0;
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
          
          .committee-name {
            font-size: 1.5rem;
          }
          
          th, td {
            padding: 0.75rem;
            font-size: 0.875rem;
          }
          
          .category-cell {
            width: 35%;
          }
        }
      `}</style>

      <div className="anti-ragging-page">
        <div className="header">
          <div className="university-name">COCHIN UNIVERSITY COLLEGE OF ENGINEERING KUTTANAD</div>
          <h1 className="title">Anti-Ragging Committee</h1>
          <p className="subtitle">
            Members responsible for preventing and addressing ragging incidents in the campus
          </p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {antiRaggingMembers.map((group, index) => (
                <tr key={index}>
                  <td className="category-cell">{group.category}</td>
                  <td className="members-cell">
                    {group.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="member-item">
                        {member}
                      </div>
                    ))}
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

export default AntiRaggingCommittee;