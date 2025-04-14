import ArtsAndSportsTemplate from "../components/ui/artsAndSportsTemplate";
export default function ArtsAndSports() {
  const sectionContent = {
    overview: (
      <>
        The college organizes Arts & Sports fest every year under the name
        ‘SATTVA’. SATTVA is organized in the month of February every year. It is
        a platform for the students to show their talents in various events of
        Arts & Sports. The competitions in various events are conducted
        branch-wise and the winning branch is awarded with the ever rolling
        trophy. Our students are also actively participating in the inter
        college Arts festival organized by CUSAT every year, usually in the
        month of March. Our students are selected for the university team in
        cricket, basketball, volleyball, football, table tennis, chess etc. and
        they are representing the university for various inter-university
        events.
        <br />
      </>
    ),

    achievements: (
      <>
        <br />
        - Our College secured 5th position from a total of 32 colleges in Sargam
        2013.
        <br />- Our Student Sri. Hari Krishnan was awarded ‘Kalaprathibha’ in
        Sargam 2013.
      </>
    ),
    activities: (
      <>
        The activities related to sports & games are coordinated by the
        Department of Physical Education, CUSAT. Smt.Priya R Krishnan is the
        faculty in-charge of Sports and Smt.Jayaprabha P is the faculty in
        charge of Arts in the college.
      </>
    ),
    Coordinators: (
      <>
        Names of Committee members (sports & games)
        <br />
        Convener, Sports : Smt.Priya R. Krishnan
        <br />
        Convener, Arts : Smt.Jayaprabha P
        <br />
        Members: Prof.Raju V Kuttickal, Nayana R, Josna Jose, Abin John Joseph,
        Nidhin Sani, Anjali Suresh, Anuroop P V, Anju A Chandran, Deepak Kumar
        Singh, Sibin V Mathew, Vishnu Prathap, Radhika B, Sreelekshmi R
      </>
    ),
  };

  return (
    <ArtsAndSportsTemplate
      image="https://cucek.cusat.ac.in/img/sports/1.jpg"
      branchName="Arts and Sports"
      sectionContent={sectionContent}
    />
  );
}
