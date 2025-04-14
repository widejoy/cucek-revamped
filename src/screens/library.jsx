import LibraryTemplate from "../components/ui/libraryTemplate";
export default function Library() {
  const sectionContent = {
    library: (
      <>
        CUCEK has an excellent library for the benefit of students, faculties
        and researchers. As one of the best established libraries according to
        International Standards, the College Library has a large collection of
        books covering various branches of Engineering and Technology, Science
        and Humanities and its related fields. <br /> <br />
        Reference and Textbooks of national and international authors,
        International and national journals & Non-book materials are available
        to cater various fields of Basic sciences, Engineering and Technology,
        Humanities and Social sciences. <br /> <br />• The College Library
        subscribes National & International Print Journals and e journals.{" "}
        <br /> • The library is located outside the University Administrative
        Block. <br /> • The library management system used by the CUCEK Library
        is KOHA. <br />
        <br />
        About KOHA Koha is web-based ILS, with a SQL database (MySQL preferred)
        backend with cataloguing data stored in MARC and accessible viaZ39.50 or
        SRU. The user interface is very configurable and adaptable and has been
        translated into many languages. Koha has most of the features that would
        be expected in an ILS, including: <br />
        • Various Web 2.0 facilities like tagging, comment, Social sharing and
        RSS feeds <br /> • Union catalogue facility <br /> • Customizable search
        <br /> • Circulation and borrower management <br />
        • Full acquisitions system including budgets and pricing information
        (including supplier and currency conversion) <br /> • Simple
        acquisitions system for the smaller library <br />
        • Ability to cope with any number of branches, patrons, patron
        categories, item categories, items, currencies and other data <br /> •
        Serials system for magazines or newspapers <br /> • Reporting <br /> •
        Reading lists for members <br /> • Off-line Circulation
        <br />
      </>
    ),

    faculty: (
      <>
        Faculty In-charge <br /> - Anish V Nair <br /> Assistant Librarian
      </>
    ),
  };

  return (
    <LibraryTemplate
      image="https://cucek.cusat.ac.in/img/lib/2.jpg"
      branchName="Library"
      sectionContent={sectionContent}
      facultyPhoto={
        "https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/office/anish.jpg"
      }
    />
  );
}
