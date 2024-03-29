import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import formStyles from "./formStyles";

const newOrganiser = ({ formId, eventForm, forNewEvent = true, saveModal }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: eventForm.name,
    region: eventForm.region,
    email: eventForm.email,
    phone: eventForm.phone,
    capacity: eventForm.capacity,
  });

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/organisations/${id}`, {
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

      mutate(`/api/organisations/${id}`, data, false); // Update the local data without a revalidation
      router.push(`/cms/eventorganiser/${id}`);
    } catch (error) {
      setMessage("Failed to update organisation");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/organisations", {
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

      router.push("/cms/eventorganisers");
      saveModal();
    } catch (error) {
      setMessage("Failed to add organisation");
    }
  };

  const options = [
    { value: "Eindhoven", label: "Eindhoven", capacity: "500" },
    { value: "Amsterdam", label: "Amsterdam", capacity: "1000" },
    { value: "Maastricht", label: "Maastricht", capacity: "250" },
  ];

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
      forNewEvent ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    return err;
  };

  const regionCheck = (e) => {
    const target = e.target;
    const value = target.value;
    setForm({
      ...form,
      region: value,
      capacity: options.find((e) => e.value === value).capacity,
    });
  };

  return (
    <>
      <style jsx>{formStyles}</style>
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

          <label htmlFor="region">Locatie/Regio</label>
          <select
            name="region"
            onChange={(e) => {
              handleChange(e);
              regionCheck(e);
            }}
            required
          >
            <option disabled selected value>
              -- select an option --
            </option>
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.value}
              </option>
            ))}
          </select>

          {!form.region ? (
            ""
          ) : (
            <>
              <label htmlFor="maxcap">
                Bezoekersaantal (max:
                {options.find((e) => e.value === form.region).capacity})
              </label>

              <input
                name="capacity"
                type="number"
                // defaultValue={form.capacity}
                min="0"
                value={form.capacity}
                max={options.find((e) => e.value === form.region).capacity}
                onChange={handleChange}
                required
              ></input>
            </>
          )}

          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            maxLength="60"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Telefoon</label>
          <input
            name="phone"
            maxLength="60"
            value={form.phone}
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

export default newOrganiser;
