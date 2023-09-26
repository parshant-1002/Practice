import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function DetailsForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreateMode = !id;
  useEffect(() => {
    if (!isCreateMode) {
      axios
        .get(`https://6406ceb877c1a905a0e3b7d3.mockapi.io/data/${id}`)
        .then((response) => {
          const data = response.data;
          setName(data?.e_name);
          setAge(data?.e_age);
          setContact(data?.e_contact);
          setEmail(data?.e_email);
        });
    }
  }, [id, isCreateMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      Email.trim() === "" ||
      Contact.trim() === ""
    ) {
      alert("Enter all the credentials!!");
      return;
    }
    if (
      name.trim() !== "" &&
      age.trim() !== "" &&
      Email.trim() !== "" &&
      Contact.trim() !== ""
    ) {
      if (
        Contact.trim().length === 10 &&
        name
          .trim()
          .split("")
          .every((val) => isNaN(val))
      ) {
        const apiUrl = isCreateMode
          ? "https://6406ceb877c1a905a0e3b7d3.mockapi.io/data"
          : `https://6406ceb877c1a905a0e3b7d3.mockapi.io/data/${id}`;
        const axiosMethod = isCreateMode ? axios.post : axios.put;

        axiosMethod(apiUrl, {
          e_name: name,
          e_age: age,
          e_email: Email,
          e_contact: Contact
        }).then(() => {
          navigate("/Show");
          setName("");
          setAge("");
          setEmail("");
          setContact("");
        });
      }
    }
  };

  const validateName = (e) => {
    if (
      e
        .split("")
        .every(
          (val) => e[0] !== " " || (isNaN(val) && /^[a-zA-Z\s]*$/.test(val))
        )
    ) {
      setValid(false);
      setName(e);
    } else {
      setValid(true);
      setMessage("Enter valid name");
    }
  };

  const validateAge = (e) => {
    if (!isNaN(e) && e.trim() !== "" && e >= 0) {
      setValid(false);
      setAge(e);
    } else {
      setValid(true);
      setMessage("Enter valid age");
    }
  };

  const validateContact = (e) => {
    if (
      e.length <= 10 &&
      /^[0-9]*$/.test(e) &&
      e[0] !== " " &&
      !/[@!#$%^&*()_+~`,.<>?;:'{}[\]\\|"]/g.test(e)
    ) {
      setValid(false);
      setContact(e);
    } else {
      setValid(true);
      setMessage("Enter valid contact number");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border border-dark rounded-4">
            <div className="card-header bg-dark text-center rounded-top-4 text-white">
              <h1>{isCreateMode ? "Create Data" : "Edit Data"}</h1>
            </div>
            <div className="card-body">
              <form
                className="form-group"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Enter name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => validateName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="age"
                    className="form-label"
                  >
                    Enter age:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => validateAge(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Enter email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contact"
                    className="form-label"
                  >
                    Enter Contact no.:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    placeholder="Contact no."
                    value={Contact}
                    onChange={(e) => validateContact(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  {valid ? (
                    <div className="p-2 text-center text-danger">{message}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    value={isCreateMode ? "Submit" : "Update"}
                    className="btn btn-dark"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
