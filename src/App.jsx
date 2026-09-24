import { useState } from "react";
import "./App.css";

function App() {
  // general section
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);

  // toggle section off
  function change() {
    setisSubmitted(false);
  }

  // toggle section on
  function onConfirm() {
    setisSubmitted(true);
  }

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function phoneChange(e) {
    setPhone(e.target.value);
  }

  // education section
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function schoolChange(e) {
    setSchool(e.target.value);
  }

  function titleChange(e) {
    setTitle(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }

  // work section
  const [company, setCompany] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  // display submitted application
  // can not be inside the body of onConfirm
  if (isSubmitted) {
    return (
      <>
        <div>
          <h1>General</h1>
          <h2>Name</h2>
          <p>{name}</p>
          <h2>Email</h2>
          <p>{email}</p>
          <h2>Phone</h2>
          <p>{phone}</p>
          <button onClick={change}>Edit</button>
          <button onClick={onConfirm}>Submit</button>
        </div>

        <div>
          <h1>Education</h1>
          <h2>School</h2>
          <p>{school}</p>
          <h2>Title</h2>
          <p>{title}</p>
          <h2>Date</h2>
          <p>{date}</p>
          <button onClick={change}>Edit</button>
          <button onClick={onConfirm}>Submit</button>
        </div>

        <div>
          <h1>Work</h1>
          <h2>Company</h2>
          <p>{company}</p>
          <h2>Company Title</h2>
          <p>{companyTitle}</p>
          <h2>Responsibilities</h2>
          <p>{responsibilities}</p>
          <h2>Start Date</h2>
          <p>{startDate}</p>
          <h2>End Date</h2>
          <p>{endDate}</p>
          <button onClick={change}>Edit</button>
          <button onClick={onConfirm}>Submit</button>
        </div>
      </>
    );
  }

  // fix: change editName, editEmail, and editPhone props to nameChange, emailChange, and phoneChange so that the prop names match
  return (
    <>
      <h1>General</h1>
      <General
        name={name}
        email={email}
        phone={phone}
        nameChange={nameChange}
        emailChange={emailChange}
        phoneChange={phoneChange}
        status={isSubmitted}
        change={change}
        submit={onConfirm}
      />

      <h1>Education</h1>
      <Education
        school={school}
        title={title}
        date={date}
        schoolChange={schoolChange}
        titleChange={titleChange}
        dateChange={dateChange}
        status={isSubmitted}
        change={change}
        submit={onConfirm}
      />

      <h1>Work</h1>
      <Work
        company={company}
        companyTitle={companyTitle}
        responsibilities={responsibilities}
        companyChange={companyChange}
        responsibilitiesChange={responsibilitiesChange}
        companyTitleChange={companyTitleChange}
        startDate={startDate}
        endDate={endDate}
        changeStart={changeStart}
        changeEnd={changeEnd}
        status={isSubmitted}
        change={change}
        submit={onConfirm}
      />
    </>
  );
}

// general component
function General({
  isSubmitted,
  name,
  email,
  phone,
  nameChange,
  emailChange,
  phoneChange,
  change,
  submit,
}) {
  return (
    <>
      <fieldset attribute={isSubmitted ? "disabled" : ""}>
        <label>
          Name:{" "}
          <input id="name" type="text" value={name} onChange={nameChange} />
        </label>
        <label>
          Email:{" "}
          <input id="email" type="email" value={email} onChange={emailChange} />
        </label>
        <label>
          Phone:{" "}
          <input id="phone" type="tel" value={phone} onChange={phoneChange} />
        </label>
      </fieldset>
      <button onClick={change}>Edit</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

// education section
function Education({
  isSubmitted,
  school,
  title,
  date,
  schoolChange,
  titleChange,
  dateChange,
  change,
  submit,
}) {
  return (
    <>
      <fieldset attribute={isSubmitted ? "disabled" : ""}>
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
          <input id="title" type="text" value={title} onChange={titleChange} />
        </label>
        <label>
          Date of study:{" "}
          <input id="date" type="date" value={date} onChange={dateChange} />
        </label>
      </fieldset>
      <button onClick={change}>Edit</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

// work section
function Work({
  isSubmitted,
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
  change,
  submit,
}) {
  return (
    <>
      <fieldset attribute={isSubmitted ? "disabled" : ""}>
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
          Company Title:{" "}
          <input
            id="companyTitle"
            type="text"
            value={companyTitle}
            onChange={companyTitleChange}
          />
        </label>
        <label>
          Main responsibilities:{" "}
          <textarea
            id="responsibilities"
            type="text"
            rows="10"
            cols="50"
            value={responsibilities}
            onChange={responsibilitiesChange}
          />
        </label>
        <label>
          Start Date:
          <input
            id="workDate"
            type="date"
            value={startDate}
            onChange={changeStart}
          />
        </label>
        <label>
          End Date:{" "}
          <input
            id="workDate"
            type="date"
            value={endDate}
            onChange={changeEnd}
          />
        </label>
      </fieldset>
      <button onClick={change}>Edit</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default App;
