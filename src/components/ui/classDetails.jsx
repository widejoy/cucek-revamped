import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddStudent from "./addStudent";

const ClassDetails = () => {
  const { class_id } = useParams();
  const navigate = useNavigate();

  const [studentDetails, setStudentDetails] = useState([]);
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [classDetails, setClassDetails] = useState({});

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8000/api/class/${class_id}/details/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data?.students && data?.class) {
          setStudentDetails(data.students);
          setClassDetails(data.class);
        }

        if (data?.subjects) {
          setSubjectDetails(data.subjects);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserRole = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'http://127.0.0.1:8000/api/class/1/role/',
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        if (data?.role) {
          setUserRole(data.role)
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchClassDetails();
    fetchUserRole();
  }, [class_id]);

  const handleViewResults = (subjectId) => {
    navigate(`/classes/${class_id}/subject/${subjectId}/results/${subjectId}`);
  };



  return (
    // ... all the same imports and logic

    <div className="container">
      <div className="card">
        <h1 className="title">{classDetails.name || "Class Details"}</h1>
        <p className="subtitle">{classDetails.description || ""}</p>
        {userRole === "Teacher" && <AddStudent class_id={class_id} />}

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        <div className="section">
          <h2 className="section-title">Students</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.length > 0 ? (
                studentDetails.map((student, idx) => (
                  <tr key={idx}>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2 className="section-title">Subjects</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subjectDetails.length > 0 ? (
                subjectDetails.map((subject, idx) => (
                  <tr key={idx}>
                    <td>{subject.name}</td>
                    <td>{subject.description}</td>
                    <td>
                      <button
                        className="button"
                        onClick={() => handleViewResults(subject.id)}
                      >
                        View Results
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No subjects found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
    .container {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      background-color: #111;
      min-height: 100vh;
    }

    .card {
      background-color: #1a1a1a;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      color: #f8fafc;
      max-width: 1100px;
      width: 100%;
    }

    .title {
      font-size: 2rem;
      margin-bottom: 8px;
      color: #ccc;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 24px;
    }

    .section {
      margin-top: 32px;
    }

    .section-title {
      font-size: 1.3rem;
      margin-bottom: 16px;
      color: #f1f5f9;
    }

    .table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 8px;
      overflow: hidden;
    }

    .table th,
    .table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #1a1a1a;
    }

    .table th {
      background-color: #1c2535;
      color: #f8fafc;
    }

    .table td {
      color: #cbd5e1;
    }

    .table tr:hover {
      background-color: #334155;
    }

    .button {
      background-color: #2563eb;
      color: #fff;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #3b82f6;
    }

    .error {
      color: #f87171;
      margin-top: 16px;
    }

    .loading {
      margin-top: 16px;
      font-style: italic;
      color: #cbd5e1;
    }
  `}</style>
    </div>

  );
};

export default ClassDetails;
