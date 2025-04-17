import React from "react";
import { coTeachingCommittees } from "../data/CoTeachingCommitteeData";

const CoTeachingCommittee = () => {
  return (
    <>
      <style jsx>{`
        .committee-page {
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
        
        .academic-year {
          font-size: 1.25rem;
          color: #a0aec0;
          margin-bottom: 1rem;
          font-style: italic;
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
          max-width: 60rem;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .committees-container {
          width: 100%;
          max-width: 80rem;
        }
        
        .committee-card {
          background-color: #2d3748;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          border-left: 4px solid #81e6d9;
          overflow: hidden;
        }
        
        .committee-header {
          padding: 1.5rem;
          background-color: #4a5568;
          display: flex;
          align-items: center;
        }
        
        .committee-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #81e6d9;
          margin-right: 1rem;
          min-width: 2.5rem;
        }
        
        .committee-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
        }
        
        .committee-members {
          padding: 1.5rem;
        }
        
        .member-item {
          padding: 0.75rem 0;
          font-size: 1.125rem;
          color: white;
          border-bottom: 1px solid #4a5568;
          display: flex;
        }
        
        .member-item:last-child {
          border-bottom: none;
        }
        
        .member-bullet {
          color: #81e6d9;
          margin-right: 0.75rem;
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .university-name {
            font-size: 1.25rem;
          }
          
          .committee-name {
            font-size: 1.25rem;
          }
          
          .member-item {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="committee-page">
        <div className="header">
          <div className="university-name">COCHIN UNIVERSITY COLLEGE OF ENGINEERING KUTTANAD</div>
          <div className="academic-year">Co-Teaching Committees for the Academic Year, 2021-2022</div>
          <h1 className="title">Co-Teaching Committees</h1>
          <p className="subtitle">
            The Co-Teaching Committees were rearranged as per the decision of the Heads of Divisions.
            The convener in consultation with the Head of Divisions shall include the remaining members of the committees.
          </p>
        </div>

        <div className="committees-container">
          {coTeachingCommittees.map((committee) => (
            <div key={committee.id} className="committee-card">
              <div className="committee-header">
                <div className="committee-number">{committee.id}.</div>
                <div className="committee-name">{committee.name}</div>
              </div>
              <div className="committee-members">
                {committee.members.map((member, index) => (
                  <div key={index} className="member-item">
                    <span className="member-bullet">•</span>
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoTeachingCommittee;