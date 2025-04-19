import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function It() {
  const sectionContent = {
    team: (
      <>
        The impact of technological advancements on human life is not complete
        without the role of Information Technology across all axes. The
        all-pervading nature of Information Technology has culminated in a huge
        demand for education in the field. The steady rise in the number of
        students opting to specialize in Information Technology is a testament
        to this demand.
        <br />
        <br />
        Education in Information Technology imparts knowledge to meet the needs
        of users within organizational and societal contexts. Our B.Tech (IT)
        program equips graduates with the skills and knowledge required to take
        on professional positions upon graduation. The Division of Information
        Technology was started in 1999 and offers a B.Tech degree in IT with an
        annual intake of 60 students, approved by the All India Council for
        Technical Education (AICTE). The program also assists graduates in
        attaining leadership positions and pursuing postgraduate studies and
        research.
        <br />
        <br />
        Core areas covered by our curriculum include programming, networking,
        web systems, information management, and human-computer interaction. The
        program is designed to help graduates develop a practical understanding
        of technologies and acquire expertise for successful careers.
        <br />
        <br />
        The vibrant faculty members of the department possess demonstrated
        expertise in many areas of Information Technology and have a flair for
        teaching. The department comprises a mix of faculty with industrial and
        academic experience, along with essential mentorship qualities for
        students.
      </>
    ),
    vision: (
      <>
        To transform into a <b>knowledge hub in information technology</b> by
        creating and exchanging information through <b>leading-edge research</b>{" "}
        and <b>innovation</b>, thereby creating IT professionals, researchers,
        and entrepreneurs with instilled altruistic values.
      </>
    ),
    achievements: (
      <>
        <b>Academic Achievements:</b>
        <br />
        - The first rank in B.Tech Information Technology under the University
        was secured by Ms. BINZEER C.K (2003 Batch).
        <br />
        - The first rank in B.Tech Information Technology under the University
        was secured by Sri ANURAG (2006 Batch).
        <br />
        - The second rank in B.Tech Information Technology under the University
        was secured by Ms. RIYA (2018 Batch).
        <br />
        <br />
        <b>Departmental Achievements:</b>
        <br />
        - Information Technology was the first department in CUCEK to publish
        the first technical journal, covering trends in various technologies.
        <br />
        - Students have been consecutive volleyball champions since 2014.
        <br />- Students were overall champions of SATTVA 2020.
      </>
    ),
    association: (
      <>
        <b>Association Activities:</b>
        <br />
        - Ours was the first association of its kind in CUCEK.
        <br />
        - The association conducted the first All Kerala Technical Fest at
        Changanacherry Town Hall.
        <br />- The department organizes a variety of informative events under
        the banner <b>IGNITZ</b>, including seminars, value-added programs,
        workshops, quizzes, and more.
        <br />- Activities include paper presentations, debugging contests,
        debates, design contests, and exhibitions.
      </>
    ),
    hod: (
      <>
        Our Head of Department, <b>Dr. Jabir K V T</b>, is a visionary leader
        striving to take IoT and related research to new heights.
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/it/1.jpg"
      branchName="Information Technology"
      subtitle="Where Innovation Meets Expertise"
      sectionContent={sectionContent}
      hodPhoto={
        "https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/IT/FACULTY%20PICS/02.jpg"
      }
      hodName={"Dr. Jabir K V T"}
    />
  );
}
