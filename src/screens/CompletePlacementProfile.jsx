import React, { useState } from "react";
import { Toaster, toaster } from "../components/ui/toaster";

function CompletePlacementProfile() {
    const [cgpa, setCgpa] = useState("");
    const [percentage10, setPercentage10] = useState("");
    const [percentage12, setPercentage12] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/placement/profile/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({
                    cgpa: parseFloat(cgpa),
                    percentage_10th: parseFloat(percentage10),
                    percentage_12th: parseFloat(percentage12),
                }),
            });

            if (response.ok) {
                toaster.create({
                    title: "success",
                    description: "Profile updated successfully!"
                });
            } else {
                const errorData = await response.json();
                toaster.create({
                    title: "Failed to update profile",
                    description: errorData.detail || "Something went wrong.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toaster.create({
                title: "Network error",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <div style={{
            backgroundColor: "#000",
            color: "#fff",
            minHeight: "100vh",
            padding: "40px 20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1 style={{
                fontSize: "28px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                Complete your placement profile
            </h1>

            <div style={{
                maxWidth: "400px",
                margin: "0 auto",
                backgroundColor: "#1a1a1a",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}>
                <label style={{ fontWeight: "600", fontSize: "14px" }}>
                    CGPA
                </label>
                <input
                    type="number"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    placeholder="e.g. 8.5"
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        margin: "6px 0 16px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#2c2c2c",
                        color: "#fff",
                        fontSize: "14px"
                    }}
                />

                <label style={{ fontWeight: "600", fontSize: "14px" }}>
                    10th Percentage
                </label>
                <input
                    type="number"
                    value={percentage10}
                    onChange={(e) => setPercentage10(e.target.value)}
                    placeholder="e.g. 90.0"
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        margin: "6px 0 16px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#2c2c2c",
                        color: "#fff",
                        fontSize: "14px"
                    }}
                />

                <label style={{ fontWeight: "600", fontSize: "14px" }}>
                    12th Percentage
                </label>
                <input
                    type="number"
                    value={percentage12}
                    onChange={(e) => setPercentage12(e.target.value)}
                    placeholder="e.g. 89.0"
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        margin: "6px 0 24px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#2c2c2c",
                        color: "#fff",
                        fontSize: "14px"
                    }}
                />

                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Complete Profile
                </button>
            </div>

            <Toaster />
        </div>
    );
}

export default CompletePlacementProfile;
