import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import camielStyles from "./camielStyles";

const inputEvents = ({ formId, eventForm, forNewEvent = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: eventForm.name,
    owner_name: eventForm.owner_name,
    date: eventForm.date,
    email: eventForm.email,
    image: eventForm.image,
  });

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/events/${id}`, {
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

      mutate(`/api/events/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update event");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/events", {
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

      router.push("/");
    } catch (error) {
      setMessage("Failed to add event");
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
      forNewEvent ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.owner_name) err.owner_name = "Owner is required";
    if (!form.image) err.image = "Image URL is required";
    return err;
  };
  return (
    <div className={camielStyles.inputEv}>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="owner_name">Owner</label>
        <input
          type="text"
          maxLength="20"
          name="owner_name"
          value={form.owner_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          name="date"
          maxLength="60"
          value={form.date}
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          maxLength="60"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="url"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </div>
  );
};

export default inputEvents;
