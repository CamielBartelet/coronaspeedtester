import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import AppCompstyle from "./appCompstyle";

const SignUpForm = ({ onnext, formId, accountForm, forNewAccount = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  console.log(router.query);

  const [form, setForm] = useState({
    name: accountForm.name,
    lastname: accountForm.lastname,
    email: accountForm.email,
    password: accountForm.password,
    postalCode: accountForm.postalCode,
    postalNumber: accountForm.postalNumber,
    phone: accountForm.phone,
    bsnnumber: accountForm.bsnnumber,
  });

  const goNext = () => onnext();

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    const { id } = router.query;
    try {
      const res = await fetch("/api/accounts", {
        method: "POST",
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
      goNext();
    } catch (error) {
      setMessage("Failed to add user");
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
      forNewAccount ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.lastname) err.lastname = "Last name is required";
    return err;
  };

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="inputEv">
        <form id={formId} className="inputForm">
          <label htmlFor="name">Voornaam</label>
          <input
            name="name"
            maxLength="40"
            value={form.name}
            placeholder="John"
            onChange={handleChange}
          />
          <label htmlFor="lastname">Achternaam</label>
          <input
            type="text"
            maxLength="40"
            name="lastname"
            value={form.lastname}
            placeholder="Doe"
            onChange={handleChange}
            required
          />
          <label htmlFor="postalCode">Postcode</label>
          <input
            name="postalCode"
            maxLength="6"
            value={form.postalCode}
            placeholder="1234AB"
            onChange={handleChange}
          />
          <label htmlFor="postalNumber">Huisnummer</label>
          <input
            name="postalNumber"
            maxLength="5"
            value={form.postalNumber}
            placeholder="12"
            onChange={handleChange}
          />
          <label htmlFor="phone">Telefoon</label>
          <input
            name="phone"
            maxLength="15"
            value={form.phone}
            onChange={handleChange}
          />
          <label htmlFor="bsnnumber">BSN-nummer</label>
          <input
            name="bsnnumber"
            maxLength="9"
            value={form.bsnnumber}
            onChange={handleChange}
          />
          <div className="formButton" onClick={handleSubmit}>
            <div className="formButtonCont">Gegevens opslaan</div>
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

export default SignUpForm;
