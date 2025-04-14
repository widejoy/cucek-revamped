import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, Heading, Text } from "@chakra-ui/react";
import AddStudent from "./addStudent";

const ClassDetails = () => {
  const { class_id } = useParams();
  const navigate = useNavigate();

  const [studentDetails, setStudentDetails] = useState([]);
  const [subjectDetails, setSubjectDetails] = useState([]);
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

    fetchClassDetails();
  }, [class_id]);

  const handleViewResults = (subjectId) => {
    navigate(`/classes/${class_id}/subject/${subjectId}/results/${subjectId}`);
  };

  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={6}
      bg="gray.800"
      borderRadius="lg"
      color="white"
    >
      <Heading mb={2} textAlign="center">
        {classDetails.name}
      </Heading>
      <Text mb={6} textAlign="center" color="gray.300">
        {classDetails.description}
      </Text>

      <AddStudent class_id={class_id} />

      {loading && <Text mt={4}>Loading...</Text>}
      {error && <Text color="red.400">{error}</Text>}

      {/* Student Table */}
      <Box mt={8}>
        <Heading size="md" mb={4}>
          Students
        </Heading>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#2D3748" }}>
            <tr>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.length > 0 ? (
              studentDetails.map((student, idx) => (
                <tr key={idx} style={rowStyle}>
                  <td style={tdStyle}>{student.username}</td>
                  <td style={tdStyle}>{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={tdStyle} colSpan="2">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Box>

      {/* Subjects Table */}
      <Box mt={8}>
        <Heading size="md" mb={4}>
          Subjects
        </Heading>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#2D3748" }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjectDetails.length > 0 ? (
              subjectDetails.map((subject, idx) => (
                <tr key={idx} style={rowStyle}>
                  <td style={tdStyle}>{subject.name}</td>
                  <td style={tdStyle}>{subject.description}</td>
                  <td style={tdStyle}>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleViewResults(subject.id)}
                    >
                      View Results
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={tdStyle} colSpan="3">
                  No subjects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  color: "#E2E8F0",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #444",
};

const rowStyle = {
  transition: "background 0.2s ease-in-out",
};

export default ClassDetails;
