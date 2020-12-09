import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import AppCompstyle from "./appCompstyle";

const userFormat = ({ formId, accountForm, forNewAccount = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: accountForm.name,
    lastname: accountForm.name,
    email: accountForm.email,
  });

  console.log(form);

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/visitors/${id}`, {
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

      mutate(`/api/visitors/${id}`, data, false); // Update the local data without a revalidation
      router.push(`/${id}`);
    } catch (error) {
      setMessage("Failed to update account");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
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

      router.push("/coronaApp");
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
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="inputForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="name">Naam</label>
          <input
            type="text"
            maxLength="20"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastnam">Achternaam</label>
          <input
            type="text"
            maxLength="20"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            maxLength="60"
            value={form.email}
            onChange={handleChange}
          />

          <button type="submit" className="btnSub">
            Opslaan
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

export default userFormat;
