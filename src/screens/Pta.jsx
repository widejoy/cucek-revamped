import PtaTemplate from "../components/ui/PtaTemplate";
export default function Pta() {
  const sectionContent = {
    about: (
      <>
        - To foster and promote cordial relationship among the parents, teachers
        and students of the college/school/department.
        <br />- To help guide and participate in various developmental
        activities of the college/school/departments.
        <br />- To render all possible assistance for smooth working of the
        college/department/school and for maintaining good discipline on the
        campus.
        <br />- To institute scholarships/awards for deserving students of the
        college/school/departments.
        <br />- To provide and ensure essential amenities to the students of the
        college/school/department.
      </>
    ),
    power: (
      <>
        - To plan and implement various activities of the Association.
        <br />- To maintain the funds of the Association received by way of
        membership fee or through any grant/donation/gift.
        <br />- To enroll members of the Association.
        <br />- To convene meetings of the Committee at least once in a
        semester.
        <br />- To periodically check the registers and other records of the
        Association.
        <br />- To scrutinize the budget and annual reports for final approval.
      </>
    ),
    bylaws: <>Click to view PTA Bylaws</>,
  };

  return (
    <PtaTemplate
      image="https://cucek.cusat.ac.in/images/main/1.jpg"
      branchName="Parent Teachers Association"
      sectionContent={sectionContent}
    />
  );
}
