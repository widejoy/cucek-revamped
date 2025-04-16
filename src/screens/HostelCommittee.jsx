import { mensHostels, ladiesHostels } from "../data/HostelCommitteeData";

const HostelCommittee = () => {
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
        
        .committees-container {
          width: 100%;
          max-width: 80rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .committee-card {
          background-color: #2d3748;
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          border: 1px solid #4a5568;
          padding: 2rem;
        }
        
        .committee-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #81e6d9;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .member-list {
          list-style-type: none;
          padding: 0;
        }
        
        .member-item {
          padding: 0.75rem 0;
          font-size: 1.125rem;
          color: white;
          border-bottom: 1px solid #4a5568;
        }
        
        .member-item:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .committees-container {
            grid-template-columns: 1fr;
          }
          
          .committee-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="committee-page">
        <div className="header">
          <h1 className="title">Hostel Committees</h1>
          <p className="subtitle">
            Members responsible for hostel administration and student welfare
          </p>
        </div>

        <div className="committees-container">
          <div className="committee-card">
            <h2 className="committee-title">Men's Hostel Committee</h2>
            <ul className="member-list">
              {mensHostels.map((member, index) => (
                <li key={index} className="member-item">
                  {member}
                </li>
              ))}
            </ul>
          </div>

          <div className="committee-card">
            <h2 className="committee-title">Ladies Hostel Committee</h2>
            <ul className="member-list">
              {ladiesHostels.map((member, index) => (
                <li key={index} className="member-item">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelCommittee;