import { useState } from "react";
import "../styles/App.css";

/* CV demo */
const background = {
  name: "Name",
  email: "your email address",
  phone: "your phone number",
};

const education = {
  school: "school",
  title: "study title",
  date: "study date",
};

const work = {
  company: "company name",
  companyTitle: "company title",
  responsibilities: "responsibilities",
  startDate: "start date",
  endDate: "end date",
};

function App() {
  // background section
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedBackground, setSubmittedBackground] = useState(false);

  function toggleBackground() {
    setSubmittedBackground(!submittedBackground);
  }

  function handleBackgroundSubmit(e) {
    e.preventDefault();

    const backgroundForm = e.target;
    const backgroundFormData = new FormData(backgroundForm);

    const formJson = Object.fromEntries(backgroundFormData.entries());

    setName(formJson.name);
    setPhone(formJson.phone);
    setEmail(formJson.email);

    toggleBackground();
  }

  // education section
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [submittedEducation, setSubmittedEducation] = useState(false);

  function toggleEducation() {
    setSubmittedEducation(!submittedEducation);
  }

  function handleEducationSubmit(e) {
    e.preventDefault();

    const educationForm = e.target;
    const educationFormData = new FormData(educationForm);

    const formJson = Object.fromEntries(educationFormData.entries());

    setSchool(formJson.school);
    setTitle(formJson.title);
    setDate(formJson.date);

    toggleEducation();
  }

  // work section
  const [company, setCompany] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submittedWork, setSubmittedWork] = useState(false);

  function toggleWork() {
    setSubmittedWork(!submittedWork);
  }

  function handleWorkSubmit(e) {
    e.preventDefault();

    const workForm = e.target;
    const workFormData = new FormData(workForm);

    const formJson = Object.fromEntries(workFormData.entries());

    setCompany(formJson.company);
    setCompanyTitle(formJson.companyTitle);
    setResponsibilities(formJson.responsibilities);
    setStartDate(formJson.startDate);
    setEndDate(formJson.endDate);

    toggleWork();
  }

  return (
    <>
      <div className="form">
        <Background
          name={name}
          email={email}
          phone={phone}
          handleBackgroundSubmit={handleBackgroundSubmit}
          submittedBackground={submittedBackground}
          toggleBackground={toggleBackground}
        />

        <Education
          school={school}
          title={title}
          date={date}
          handleEducationSubmit={handleEducationSubmit}
          submittedEducation={submittedEducation}
          toggleEducation={toggleEducation}
        />

        <Work
          company={company}
          companyTitle={companyTitle}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
          handleWorkSubmit={handleWorkSubmit}
          submittedWork={submittedWork}
          toggleWork={toggleWork}
        />
      </div>
      <div className="preview">
        <h1>CV Preview</h1>

        <h2>{name.length === 0 ? background.name : name}</h2>
        <hr></hr>
        <ul className="contact">
          <li>{email.length === 0 ? background.email : email}</li>
          <li>{phone.length === 0 ? background.phone : phone}</li>
        </ul>

        <h2>Education</h2>
        <hr></hr>
        <ul>
          <li>{school.length === 0 ? education.school : school}</li>
          <li>{title.length === 0 ? education.title : title}</li>
          <li>{date.length === 0 ? education.date : date}</li>
        </ul>

        <h2>Experience</h2>
        <hr></hr>
        <ul>
          <li>{company.length === 0 ? work.company : company}</li>
          <li>
            {companyTitle.length === 0 ? work.companyTitle : companyTitle}
          </li>
          <li>
            {responsibilities.length === 0
              ? work.responsibilities
              : responsibilities}
          </li>
          <li>{startDate.length === 0 ? work.startDate : startDate}</li>
          <li>{endDate.length === 0 ? work.endDate : endDate}</li>
        </ul>
      </div>
    </>
  );
}

// background component
function Background({
  name,
  email,
  phone,
  submittedBackground,
  handleBackgroundSubmit,
  toggleBackground,
}) {
  if (!submittedBackground) {
    return (
      <>
        <form method="post" onSubmit={handleBackgroundSubmit}>
          <fieldset>
            <legend>Background</legend>
            <label>
              Name:{" "}
              <input id="name" type="text" name="name" defaultValue={name} />
            </label>
            <label>
              Email:{" "}
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={email}
              />
            </label>
            <label>
              Phone:{" "}
              <input id="phone" type="tel" name="phone" defaultValue={phone} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
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
  handleEducationSubmit,
  toggleEducation,
}) {
  if (!submittedEducation) {
    return (
      <>
        <form method="post" onSubmit={handleEducationSubmit}>
          <fieldset>
            <legend>Education</legend>
            <label>
              School name:{" "}
              <input
                id="school"
                type="text"
                name="school"
                defaultValue={school}
              />
            </label>
            <label>
              Title of study:{" "}
              <input id="title" type="text" name="title" defaultValue={title} />
            </label>
            <label>
              Date of study:{" "}
              <input id="date" type="date" name="date" defaultValue={date} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
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
  handleWorkSubmit,
  toggleWork,
}) {
  if (!submittedWork) {
    return (
      <>
        <form method="post" onSubmit={handleWorkSubmit}>
          <fieldset>
            <legend>Work</legend>
            <label>
              Company Name:{" "}
              <input
                id="company"
                type="text"
                name="company"
                defaultValue={company}
              />
            </label>
            <label>
              Title:{" "}
              <input
                id="companyTitle"
                type="text"
                name="companyTitle"
                defaultValue={companyTitle}
              />
            </label>
            <label htmlFor="responsibilities">Main responsibilities: </label>
            <textarea
              id="responsibilities"
              type="text"
              rows="5"
              cols="20"
              name="responsibilities"
              defaultValue={responsibilities}
            />
            <label>
              Start Date:
              <input
                id="startDate"
                type="date"
                name="startDate"
                defaultValue={startDate}
              />
            </label>
            <label>
              End Date:{" "}
              <input
                id="endDate"
                type="date"
                name="endDate"
                defaultValue={endDate}
              />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
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
