import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function Ece() {
  const sectionContent = {
    team: (
      <>
        The Division of Electronics & Communications Engineering started in the
        year 1999. The division offers a B.Tech degree in Electronics &
        Communications with an annual intake of 60 students, approved by the All
        India Council for Technical Education (AICTE).
        <br />
        <br />
        The division plays a vital role in providing dynamic and quality
        electronics engineers to society. It has dedicated and experienced
        faculty committed to excellence in engineering education.
        <br />
        <br />
        The department is equipped with state-of-the-art laboratories that
        provide students with practical knowledge in various areas, including:
        <ul>
          <li>Electronic circuits</li>
          <li>Linear integrated circuits</li>
          <li>Digital electronics</li>
          <li>Microprocessors and microcontrollers</li>
          <li>Communication systems</li>
          <li>Digital signal processing</li>
          <li>Microwave engineering</li>
          <li>Embedded systems</li>
        </ul>
        Additionally, the department offers electives such as optical fiber
        communication, digital image processing, hardware modeling,
        mechatronics, radar and navigation, and ASIC design.
      </>
    ),
    vision: (
      <>
        To be a preeminent center of excellence in the field of{" "}
        <b>electronics and communication engineering</b> by cultivating moral
        and ethical values while generating globally competent, multi-faceted
        electronics and communication engineers.
      </>
    ),
    achievements: (
      <>
        <b>Placement Achievements:</b>
        <br />
        - The division has a strong history of campus placements, with students
        placed in multi-national companies like BOCH, MuSigma, Accenture, TCS,
        and Infosys.
        <br />
        <br />
        <b>Notable Alumni:</b>
        <br />
        - Sri UNICE ROSHIN ISMAEL secured the 146th rank in the Indian Civil
        Service Examination, 2013.
        <br />
        - Ms Shameena K K (2010 batch) received an ONGC scholarship by securing
        the 1st rank in the third year B.Tech (Electronics and Communication) of
        Cochin University of Science and Technology.
        <br />
        <br />
        <b>Higher Education:</b>
        <br />- Students have secured admissions in premier institutes such as
        IITs, IIMs, XLRI, and NITs for M.Tech, MBA, PGDM, and other programs.
      </>
    ),
    association: (
      <>
        <b>WAVES Student Association:</b>
        <br />
        - The association actively organizes seminars, workshops, and other
        technical events to enhance students' knowledge and skills.
        <br />
        - A Robotics Club functions under the association, where students
        participate and win prizes in robotics competitions, including those
        conducted by IIT Madras.
        <br />
        - WAVES has organized robotics workshops that were attended by many
        students from our institution.
        <br />- The association also supports students in organizing
        co-curricular activities.
      </>
    ),
    hod: (
      <>
        Our Head of Department, <b>Dr. Anil Kumar K. K.</b>, is a visionary
        leader driving advancements in electronic research to new heights.
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/ece/2.jpg"
      branchName="Electronics and Communication"
      subtitle="We are Electronics, and we do Communication"
      sectionContent={sectionContent}
      hodPhoto={
        "https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/ECE/FACULTY%20PICS/02.jpg"
      }
      hodName={"Dr. Anil Kumar K. K."}
      hodProfilePath={"/"}
    />
  );
}
