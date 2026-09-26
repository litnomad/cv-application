import { Fragment, useState } from "react";
import "../styles/App.css";

/* demo CV */
const background = [
  {
    id: 0,
    name: "Name",
    email: "your email address",
    phone: "your phone number",
  },
];

const education = [
  {
    id: 1,
    schoolName: "school",
    studyTitle: "study title",
    studyDate: "study date",
  },
];

const work = [
  {
    id: 2,
    company: "company name",
    title: "company title",
    responsibilities: "responsibilities",
    startDate: "start date",
    endDate: "end date",
  },
];

function App() {
  // background section
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedBackground, setSubmittedBackground] = useState(false);

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function phoneChange(e) {
    setPhone(e.target.value);
  }

  function toggleBackground() {
    setSubmittedBackground(!submittedBackground);
  }

  // education section
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [submittedEducation, setSubmittedEducation] = useState(false);

  function schoolChange(e) {
    setSchool(e.target.value);
  }

  function titleChange(e) {
    setTitle(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }

  function toggleEducation() {
    setSubmittedEducation(!submittedEducation);
  }

  // work section
  const [company, setCompany] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submittedWork, setSubmittedWork] = useState(false);

  function companyChange(e) {
    setCompany(e.target.value);
  }

  function companyTitleChange(e) {
    setCompanyTitle(e.target.value);
  }

  function responsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }

  function changeStart(e) {
    setStartDate(e.target.value);
  }

  function changeEnd(e) {
    setEndDate(e.target.value);
  }

  function toggleWork() {
    setSubmittedWork(!submittedWork);
  }

  return (
    <>
      <div className="form">
        <Background
          name={name}
          email={email}
          phone={phone}
          nameChange={nameChange}
          emailChange={emailChange}
          phoneChange={phoneChange}
          submittedBackground={submittedBackground}
          toggleBackground={toggleBackground}
        />

        <Education
          school={school}
          title={title}
          date={date}
          schoolChange={schoolChange}
          titleChange={titleChange}
          dateChange={dateChange}
          submittedEducation={submittedEducation}
          toggleEducation={toggleEducation}
        />

        <Work
          company={company}
          companyTitle={companyTitle}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
          companyChange={companyChange}
          companyTitleChange={companyTitleChange}
          responsibilitiesChange={responsibilitiesChange}
          changeStart={changeStart}
          changeEnd={changeEnd}
          submittedWork={submittedWork}
          toggleWork={toggleWork}
        />
      </div>
      <div className="preview">
        <h1>CV Preview</h1>
        {background.map((info) => (
          <Fragment key={info.id}>
            <h2>{submittedBackground ? name : info.name}</h2>
            <hr></hr>
            <ul className="contact">
              <li>{submittedBackground ? email : info.email}</li>
              <li>{submittedBackground ? phone : info.phone}</li>
            </ul>
          </Fragment>
        ))}

        <h2>Education</h2>
        <hr></hr>
        {education.map((info) => (
          <ul key={info.id}>
            <li>{submittedEducation ? school : info.schoolName}</li>
            <li>{submittedEducation ? title : info.studyTitle}</li>
            <li>{submittedEducation ? date : info.studyDate}</li>
          </ul>
        ))}

        <h2>Experience</h2>
        <hr></hr>
        {work.map((info) => (
          <ul key={info.id}>
            <li>{submittedWork ? company : info.company}</li>
            <li>{submittedWork ? companyTitle : info.title}</li>
            <li>{submittedWork ? responsibilities : info.responsibilities}</li>
            <li>{submittedWork ? startDate : info.startDate}</li>
            <li>{submittedWork ? endDate : info.endDate}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

// background component
function Background({
  submittedBackground,
  name,
  email,
  phone,
  nameChange,
  emailChange,
  phoneChange,
  toggleBackground,
}) {
  if (!submittedBackground) {
    return (
      <>
        <fieldset>
          <legend>Background</legend>
          <label>
            Name:{" "}
            <input id="name" type="text" value={name} onChange={nameChange} />
          </label>
          <label>
            Email:{" "}
            <input
              id="email"
              type="email"
              value={email}
              onChange={emailChange}
            />
          </label>
          <label>
            Phone:{" "}
            <input id="phone" type="tel" value={phone} onChange={phoneChange} />
          </label>
        </fieldset>
        <button onClick={toggleBackground}>Submit</button>
      </>
    );
  }
  return (
    <>
      <legend>Background</legend>
      <button onClick={toggleBackground}>Edit</button>
    </>
  );
}

// education section
function Education({
  submittedEducation,
  school,
  title,
  date,
  schoolChange,
  titleChange,
  dateChange,
  toggleEducation,
}) {
  if (!submittedEducation) {
    return (
      <>
        <fieldset attribute={submittedEducation ? "disabled" : ""}>
          <legend>Education</legend>
          <label>
            School name:{" "}
            <input
              id="school"
              type="text"
              value={school}
              onChange={schoolChange}
            />
          </label>
          <label>
            Title of study:{" "}
            <input
              id="title"
              type="text"
              value={title}
              onChange={titleChange}
            />
          </label>
          <label>
            Date of study:{" "}
            <input id="date" type="date" value={date} onChange={dateChange} />
          </label>
        </fieldset>

        <button onClick={toggleEducation}>Submit</button>
      </>
    );
  }
  return (
    <>
      <legend>Education</legend>
      <button onClick={toggleEducation}>Edit</button>
    </>
  );
}

// work section
function Work({
  submittedWork,
  company,
  companyTitle,
  responsibilities,
  startDate,
  endDate,
  companyChange,
  companyTitleChange,
  responsibilitiesChange,
  changeStart,
  changeEnd,
  toggleWork,
}) {
  if (!submittedWork) {
    return (
      <>
        <fieldset attribute={submittedWork ? "disabled" : ""}>
          <legend>Work</legend>
          <label>
            Company Name:{" "}
            <input
              id="company"
              type="text"
              value={company}
              onChange={companyChange}
            />
          </label>
          <label>
            Title:{" "}
            <input
              id="companyTitle"
              type="text"
              value={companyTitle}
              onChange={companyTitleChange}
            />
          </label>
          <label for="responsibilities">Main responsibilities: </label>
          <textarea
            id="responsibilities"
            type="text"
            rows="5"
            cols="20"
            value={responsibilities}
            onChange={responsibilitiesChange}
          />

          <label>
            Start Date:
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={changeStart}
            />
          </label>
          <label>
            End Date:{" "}
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={changeEnd}
            />
          </label>
        </fieldset>

        <button onClick={toggleWork}>Submit</button>
      </>
    );
  }
  return (
    <>
      <legend>Work</legend>
      <button onClick={toggleWork}>Edit</button>
    </>
  );
}

export default App;
