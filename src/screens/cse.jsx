import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function Cs() {
  const sectionContent = {
    team: (
      <>
        The Division of Computer Science in CUCEK is a proud department with a
        distinct focus on innovation and promoting excellence in the Computing
        field. The division started in 1999 and conducts an undergraduate
        program in <b>Computer Science & Engineering</b> with an intake of 60
        students.
        <br />
        <br />
        The undergraduate program offers a dynamic curriculum with a strong
        emphasis on software design. It provides a comprehensive background in:
        <ul>
          <li>Computer programming languages</li>
          <li>Computer architecture</li>
          <li>Design and application of computer algorithms</li>
        </ul>
        <br />
        The division is driven by 9 outstanding faculty members with expertise
        in various areas, including:
        <ul>
          <li>Artificial Intelligence</li>
          <li>Computer Networks</li>
          <li>Software Engineering</li>
          <li>Computer Graphics</li>
          <li>Human-Computer Interaction</li>
        </ul>
        <br />
        The department provides outstanding educational programs by combining
        cutting-edge knowledge with the latest developments in Computer Science
        pedagogy. Students benefit from the enthusiasm and innovation brought
        into the classes by the faculty.
        <br />
        <br />
        Fully fledged and well-equipped laboratories with high-performance
        computers support the learning process. To enhance practical expertise,
        students undertake:
        <ul>
          <li>One minor project</li>
          <li>A multidisciplinary major project</li>
        </ul>
        during the eight semesters of the B.Tech program. Labs include:
        <ul>
          <li>Project Lab</li>
          <li>Graphics Lab</li>
          <li>Hardware Lab</li>
          <li>Programming Lab</li>
          <li>System Software Lab</li>
        </ul>
      </>
    ),
    vision: (
      <>
        To transform into a top-notch technological and research institution,
        molding globally competent, versatile professionals with creative minds
        and sound practical expertise. To construct a future where technology
        serves humanity by promoting innovation-centric education and
        cutting-edge research in <b>Computer Science & Engineering</b>.
      </>
    ),
    achievements: (
      <>
        <b>Placement Achievements:</b>
        <br />- The division has a strong history of campus placements, with
        students placed in multi-national companies like BOCH, MuSigma,
        Accenture, TCS, and Infosys.
      </>
    ),
    association: (
      <>
        <b>ACES - Association of Computer Science & Engineering Students:</b>
        <br />
        - The association actively organizes seminars, workshops, and other
        technical events regularly.
        <br />- It provides opportunities for students to acquire technical
        skills and knowledge through various events and programs.
      </>
    ),
    hod: (
      <>
        Our Head of Department, <b>Dr. Preetha Mathew</b>, is a visionary leader
        and a pioneer in the field of <b>cryptography</b>.
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/cse/5.jpg"
      branchName="Computer Science"
      subtitle="Your future in our hands"
      sectionContent={sectionContent}
      hodPhoto={
        "https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/CSE/FACULTY%20PICS/01.jpg"
      }
      hodName={"Dr. Preetha Mathew"}
      hodProfilePath={"/"}
    />
  );
}
