import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function Eee() {
  const sectionContent = {
    team: (
      <>
        The Electrical and Electronics Engineering Division of Cochin University
        College of Engineering, Kuttanadu was established in 1999 under Cochin
        University of Science and Technology, which offers B.Tech degree program
        in Electrical and Electronics Engineering.
        <br />
        <br />
        The Division has a combined faculty of experienced persons from industry
        and academia as well as a team of young teachers who contribute
        immensely to the establishment of necessary infrastructure and
        procedures for conducting an undergraduate program. The faculty profile
        comprises of personnel with doctorates, doing research work, post
        graduation in various fields, to meet the curriculum requirements.
        Faculty members are encouraged to enhance their qualifications, by
        participation in higher studies and research activities.
        <br />
        <br />
        The Division is housed in spacious blocks consisting of all Laboratory
        facilities for the B,Tech programme, which includes Electrical Machines
        Laboratory, Power Electronics Laboratory, Measurement and Circuits
        Laboratory, Simulation Laboratory, Advanced Electrical Engineering
        Laboratory & Electrical Workshop, all sufficiently furnished with the
        latest equipment and software. The Division is equipped with enough
        space for classrooms, seminar room, and staff room. The Division has a
        Division library which can be availed by the students in addition to the
        main library. The Library has a requisite stock of Textbooks,
        References, National & International journals and manuscripts related to
        electrical engineering.
      </>
    ),
    vision: (
      <>
        To impart quality education with professionalism to budding technocrats
        by moulding technically competent young minds with social commitment and
        moral quality.
        <br />
        To be a Centre of excellence in Electrical and Electronics Engineering
        for the upliftment of mankind by imparting quality education.
        <br />
        To provide innovative solutions for Electrical and Electronics
        Engineering problems and energy crisis to solve socio - economic
        challenges faced by the society
      </>
    ),
    achievements: (
      <>
        •The Division owns the credit of having equipped with all the laboratory
        facilities right from its inception, all which came in to reality
        because of the proper tracking of the dream with wings of the then HOD,
        especially the Electrical Machine Lab which is unique of its kind ever
        set in CUSAT.
        <br />
        •A regular good record of pass percentage in University exams is
        maintained
        <br />
        •Has good record of placements among students
        <br />
        •A team of dedicated faculty members aiming at the target of quality
        output products for a better tomorrow
        <br />
        •Appropriate participation of students in activities outside campus
        <br />
        •Intra college Sports Championship winner for the past two consecutive
        years, 2014 & 2015
      </>
    ),
    association: (
      <>
        The Electrical & Electronics Engineering Students Association (BLITZ) is
        a student body that was setup to provide additional motivation to the
        students of the Division, during their course of study. It operates with
        full support of the faculty and staff of the division. The activity of
        this Association relies on the skills, enthusiasm, openness and
        involvement of its members. The Association targets the full potential
        of every member as a professional, seeking solutions for their technical
        & general problems.
        <br />
        <br />
        The BLITZ intends to
        <br />
        •promote general awareness of students about various recent advances in
        the field of Electrical Engineering
        <br />
        •encourage a spirit of hands-on learning
        <br />
        •organize social events for its members
        <br />
        •To further the knowledge and awareness in the field of Electrical and
        Electronics Engineering through meetings, discussions, quizzes etc.
      </>
    ),
    hod: (
      <>
        Our Head of Department, <b>Priya R Krishnan</b>, is a visionary leader.
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/eee/6.jpg"
      branchName="Electrical and Electronics"
      subtitle=""
      sectionContent={sectionContent}
      hodPhoto={
        "https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/EEE/FACULTY%20PICS/04.jpg"
      }
      hodName={"PRIYA R KRISHNAN"}
      hodProfilePath="https://iqac.cusat.ac.in/Web/profile_view/196/Mrs.PRIYARKRISHNAN"
    />
  );
}
