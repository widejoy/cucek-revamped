import React from "react";
import AcademicsTemplate from "../components/ui/academics-template";

export default function Ce() {
  const sectionContent = {
    team: (
      <>
        The Division of Civil Engineering came into existence with the inception
        of the Cochin University College of Engineering Kuttanad (CUCEK). The
        division was initially named the Division of Civil Engineering and
        General Science. Separate divisions of Civil Engineering and General
        Science were established starting from the academic year 2005-2006. The
        B.Tech course in Civil Engineering was initiated in the academic year
        2003-2004. The division has been consistently supported by highly
        dedicated faculty and hardworking students.
        <br />
        <br />
        The existing laboratories of the division include:
        <ul>
          <li>Survey Lab</li>
          <li>Concrete Lab</li>
          <li>Strength of Materials Lab</li>
          <li>Environmental Lab</li>
          <li>Geotechnical Engineering Lab (set-up in progress)</li>
          <li>Building Technology Lab (set-up in progress)</li>
          <li>Civil Engineering Workshop</li>
        </ul>
        Procurement of furniture and equipment for additional labs, including:
        <ul>
          <li>Geotechnical Lab</li>
          <li>Transportation Lab</li>
          <li>Non-destructive Testing Lab</li>
          <li>Structural Dynamics Lab</li>
          <li>Computational Lab</li>
        </ul>
        is expected in the near future.
        <br />
        <br />
        Most of the student projects aim to improve the local human habitat
        through new construction techniques, soil stabilization, building
        designs, pontoon bridges, wastewater management, solid waste management,
        crack mitigation, and earthquake-resistant designs.
        <br />
        <br />
        The division currently offers a B.Tech program in Civil Engineering
        (4-year undergraduate course) and a PhD program under the Faculty of
        Engineering, CUSAT, through the School of Engineering. Successful
        students are assured campus placements every year.
      </>
    ),
    vision: (
      <>
        To produce and impart values, knowledge, and skills in various areas of
        Civil Engineering with a global perspective. Our goal is to groom
        professionals with ethical values and excellence to meet the current and
        future challenges in nation-building.
      </>
    ),
    achievements: (
      <>
        <b>Notable Achievements:</b>
        <br />
        - Smt. Indu P Varghese of the 2003-2007 B.Tech Civil Engineering batch
        secured second rank in the B.Tech Civil Engineering degree examination
        (April 2007) under CUSAT.
        <br />
        - Dr. Sunilkumar N, Associate Professor of the division, received the
        Prof. N S Govinda Rao Gold Medal for the best PhD thesis in 2011-2012
        from the Department of Civil Engineering, Indian Institute of Science,
        Bangalore. His thesis was titled, "Smooth Finite Element Methods through
        Reproducing Kernel DMS-splines".
        <br />- The 2011-2015 batch B.Tech students presented their projects at
        the International Conference on Recent Advances in Civil Engineering
        (ICRACE ‘16), 2016. Some notable papers include:
        <ul>
          <li>
            "Stabilization of Sub-Soil under Typical Road Pavements in Kuttanad
            using Coir Geo-textiles" presented by Agaja A B.
          </li>
          <li>
            "Planning and Design of a Floating Bridge Across the River Pampa at
            Kavalam" presented by Rabeenson Thomas.
          </li>
        </ul>
        - Pratyush Kumar of the B.Tech Civil Engineering 2012-2016 batch was
        shortlisted for direct PhD selection at IIT Chennai in October 2015. He
        also secured admission for M.Tech in IIT Bombay, IIT Bhubaneswar, and
        IIT Patna, and ranked first on the waiting list for IIT Roorkee.
        <br />
        - The students of the division are the defending overall champions
        (2015-2016) of CUCEK's sports and arts festival and have secured second
        place in the previous year (2014-2015).
        <br />- The V Semester B.Tech Civil Engineering batch (2011 Admission)
        won first place in the Athappookkalam (Flower Carpet) competition during
        Onam celebrations in 2013, and the same batch (2013 Admission) repeated
        the victory in 2015.
      </>
    ),
    association: (
      <>
        <b>Federation of Remarkable Civil Engineers (FORCE):</b>
        <br />
        The Association of Civil Engineering Students was established in the
        academic year 2012-2013 under the name “Federation of Remarkable Civil
        Engineers (FORCE)”. The association was inaugurated by Sri. Vinayakumar,
        Executive Engineer, Water Authority, on 21.01.2013.
        <br />
        FORCE aims at conducting technical programs for the benefit of students,
        faculty, and other stakeholders in Civil Engineering. These programs
        include:
        <ul>
          <li>Seminars and project presentations</li>
          <li>Model making</li>
          <li>Technical games and quizzes</li>
          <li>Lectures for contractors, masons, and the public</li>
          <li>Visits to industries and construction sites</li>
          <li>Support for academically weaker students through study groups</li>
        </ul>
        The executive committee of FORCE consists of the president,
        vice-president, secretary, joint-secretary, treasurer, and five
        executive committee members, all elected from the B.Tech Civil
        Engineering students every year on 21st January. The functions of the
        association are overseen by a faculty advisor.
        <br />
        <br />
        <b>Notable former presidents:</b>
        <ul>
          <li>Sri. Senjo Sebastian (2011-2015 batch)</li>
          <li>Sri. Lalkrishna (2012-2015 batch)</li>
          <li>
            Sri. Earnest Antony Green (2013-2016 batch), the current president.
          </li>
        </ul>
      </>
    ),
    hod: (
      <>
        Our Head of Department, <b>Dr. Sunil Kumar N</b>, is a visionary leader.
      </>
    ),
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/civil/10.jpg"
      branchName="Civil Engineering"
      subtitle="We are civil and we do engineering"
      sectionContent={sectionContent}
      hodPhoto="https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/CE/FACULTY%20PICS/01.jpg"
      hodName={"Dr. Sunil Kumar N"}
      hodProfilePath={"/"}
    />
  );
}
