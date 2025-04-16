import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function Mca() {
  const sectionContent = {
    team: (
      <>
        The Division of Computer Applications was established in the year 2000
        in Cochin University College of Engineering Kuttanad under the patronage
        of CUSAT, providing an opportunity for youngsters to impart quality
        education in the sub-fields of IT, a field growing in leaps and bounds.
        <br />
        <br />
        Since its inception, the department has proven itself outstanding in
        imparting quality education in computer applications. The curriculum
        provides a strong theoretical foundation through high-quality teaching
        complemented by extensive practical training. The training objectives
        and curriculum here are benchmarked to the best of institutions.
        <br />
        <br />
        The department is committed to the mission of inculcating value-based,
        socially committed professionalism for the overall development of
        students and society. The department emphasizes theoretical and
        practical lessons with a focus on fundamental concepts.
        <br />
        <br />
        Faculty and staff take up challenges to guide students for campus
        interviews, group discussions, and career readiness. Students are given
        opportunities to improve organizational skills, participate in seminars,
        and engage in group discussions. Apart from academics, participation in
        co-curricular and extra-curricular activities is encouraged to bring out
        students' latent talents.
        <br />
        <br />
        The department’s combined efforts make it a center of excellence for
        pursuing the MCA degree.
      </>
    ),
    vision: (
      <>
        To impart <b>innovation-oriented education</b> and to build{" "}
        <b>globally competent and socially committed professionals</b>.
      </>
    ),
    achievements: (
      <>
        <b>Staff Achievements:</b> <br />
        - MCA HOD, Dr. Preetha Mathew K, secured a Ph.D. in Cryptography from
        IIT Madras.
        <br />
        <br />
        <b>Student Achievements:</b>
        <br />
        - Ms. Siji George secured the First Rank in the University for the
        academic year 2006-2009.
        <br />
        - The top four Rank Holders in the academic year 2011-2014 are:
        <br />
        1. Neethu John (First Rank)
        <br />
        2. Preesha Paul (Second Rank)
        <br />
        3. Anjali M (Third Rank)
        <br />
        4. Sheeba S (Fourth Rank)
        <br />
        - Ms. Aarathi Chandran secured the First Rank in the University for the
        academic year 2012-2015.
        <br />
        <br />
        The department achieves a 90+% success rate and 75% placements in top IT
        establishments every academic year.
      </>
    ),
    association: (
      <>
        <b>SAMCA</b> (Student Association of Master of Computer Applications)
        takes the initiative for all student activities in the department. SAMCA
        emphasizes both curricular and extra-curricular development of students.
        Activities include organizing seminars, cultural events, IT fests, and
        conducting special aptitude and soft-skill development training
        programs.
      </>
    ),
    hod: (
      <>
       
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/mca/3.jpg"
      branchName="Masters of Computer Applications"
      subtitle="Where Innovation Meets Excellence"
      sectionContent={sectionContent}
      hodPhoto={
        ""
      }
      hodName={""}
      hodProfilePath={"/"}
    />
  );
}
