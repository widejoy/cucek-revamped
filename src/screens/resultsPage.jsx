import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Button, Input } from "@chakra-ui/react";

const ResultsPage = () => {
  const { class_id } = useParams();
  const [studentDetails, setStudentDetails] = useState([]);
  const [marksMap, setMarksMap] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
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
        if (data?.students) {
          setStudentDetails(data.students);
          const initialMarks = {};
          data.students.forEach((student) => {
            initialMarks[student.id] = student.marks || "";
          });
          setMarksMap(initialMarks);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [class_id]);

  const handleInputChange = (studentId, value) => {
    setMarksMap((prev) => ({
      ...prev,
      [studentId]: value,
    }));
  };

  const calculateGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
  };

  const handlePublishMark = async (studentId, studentName, newMarks) => {
    const numericMarks = parseFloat(newMarks);
    const grade = calculateGrade(numericMarks);

    try {
      console.log(studentId, studentName, numericMarks, grade);
      const response = await fetch(
        `http://localhost:8000/api/exams/${class_id}/publish-results/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            results: [
              {
                student_id: studentId,
                student_name: studentName,
                marks: numericMarks,
                grade: grade,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to publish marks: ${response.status}`);
      }

      const data = await response.json();
      console.log("Marks published successfully", data);
    } catch (error) {
      console.error("Error publishing marks:", error);
    }
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
        Students List
      </Heading>

      {loading && <Text mt={4}>Loading...</Text>}
      {error && <Text color="red.400">{error}</Text>}

      <Box mt={8}>
        <Heading size="md" mb={4}>
          Students
        </Heading>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#2D3748" }}>
            <tr>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Mark</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.length > 0 ? (
              studentDetails.map((student, idx) => (
                <tr key={idx} style={rowStyle}>
                  <td style={tdStyle}>{student.username}</td>
                  <td style={tdStyle}>
                    <Input
                      value={marksMap[student.id]}
                      onChange={(e) =>
                        handleInputChange(student.id, e.target.value)
                      }
                      placeholder="Enter marks"
                      type="number"
                    />
                  </td>
                  <td style={tdStyle}>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() =>
                        handlePublishMark(
                          student.id,
                          student.username,
                          marksMap[student.id]
                        )
                      }
                    >
                      Publish Marks
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={tdStyle} colSpan="3">
                  No students found.
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

export default ResultsPage;
