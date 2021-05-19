import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import AppCompstyle from "./appCompstyle";

const UserSettings = ({ formId, accountForm, forNewEvent = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    email: accountForm.email,
    emailVerified: accountForm.emailVerified,
    createdAt: accountForm.createdAt,
    updatedAt: accountForm.updatedAt,
    phone: accountForm.phone,
    bsnnumber: accountForm.bsnnumber,
    firstName: accountForm.firstName,
    lastName: accountForm.lastName,
    postalCode: accountForm.postalCode,
    dateOfBirth: accountForm.dateOfBirth,
  });

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/accounts/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/accounts/${id}`, data, false); // Update the local data without a revalidation
      router.push(`/${id}`);
    } catch (error) {
      setMessage("Failed to update organisation");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      putData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    if (!form.phone) err.phone = "Phone is required";
    if (!form.bsnnumber) err.bsnnumber = "Bsnnumber is required";
    if (!form.postalCode) err.postalCode = "Postalcode is required";
    if (!form.firstName) err.firstName = "First name is required";
    if (!form.lastName) err.lastName = "Last name is required";
    return err;
  };

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="inputEv">
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="inputForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="firstName">Voornaam</label>
          <input
            name="firstName"
            maxLength="50"
            value={form.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Achternaam</label>
          <input
            name="lastName"
            maxLength="50"
            value={form.lastName}
            onChange={handleChange}
          />
          <label htmlFor="phone">Telefoon</label>
          <input
            name="phone"
            maxLength="15"
            value={form.phone}
            onChange={handleChange}
            placeholder="0612345678"
          />
          <label htmlFor="bsnnumber">BSN nummber (laatste 4 cijfers)</label>
          <input
            name="bsnnumber"
            maxLength="4"
            value={form.bsnnumber}
            onChange={handleChange}
            placeholder="5678"
          />
          <label htmlFor="postalCode">Postcode</label>
          <input
            name="postalCode"
            maxLength="6"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="1234AB"
          />
          <label htmlFor="postalCode">Postcode</label>
          <input
            name="postalCode"
            maxLength="6"
            value={form.postalCode}
            onChange={handleChange}
          />
          <label htmlFor="dateOfBirth">Geboortedatum</label>
          <input
            name="dateOfBirth"
            maxLength="8"
            value={form.dateOfBirth}
            onChange={handleChange}
          />

          <div className="signupbtn">
            <button className="signbtnCont" type="submit">
              Opslaan
            </button>
          </div>
        </form>
        <p>{message}</p>
        <div>
          {Object.keys(errors).map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSettings;
