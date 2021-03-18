import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import AppCompstyle from "./appCompstyle";

const SignUpForm = ({ formId, accountForm, forNewAccount = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

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

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    const { id } = router.query;
    try {
      const res = await fetch("/api/visitors", {
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

      router.push(`/apicms/verify`);
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
    if (!form.email) err.email = "Name is required";
    if (!form.password) err.password = "Last name is required";
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
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            maxLength="60"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            maxLength="60"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit" className="btnSub">
            Creeëer je account
          </button>
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
