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
    firstname: accountForm.firstname,
    surname: accountForm.surname,
    phone: accountForm.phone,
    bsnnumber: accountForm.bsnnumber,
    postalCode: accountForm.postalCode,
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
    if (!form.firstname) err.firstname = "First name is required";
    if (!form.surname) err.surname = "Last name is required";
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
          <label htmlFor="firstname">Voornaam</label>
          <input
            name="firstname"
            maxLength="50"
            value={form.name}
            onChange={handleChange}
            placeholder="John"
          />
          <label htmlFor="surname">Achternaam</label>
          <input
            name="surname"
            maxLength="50"
            value={form.surname}
            onChange={handleChange}
            placeholder="Doe"
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
