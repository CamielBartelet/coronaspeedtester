import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import camielStyles from "./camielStyles";

const newTestlocation = ({
  formId,
  appointmentForm,
  forNewEvent = true,
  saveModal,
}) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    id: appointmentForm.id,
    location: appointmentForm.location,
    date: appointmentForm.date,
    starttime: appointmentForm.starttime,
    endtime: appointmentForm.endtime,
    availableappointments: appointmentForm.availableappointments,
  });

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/appointments/${id}`, {
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

      mutate(`/api/appointments/${id}`, data, false); // Update the local data without a revalidation
      router.push(`/cms/testlocation/${id}/appointmentDash`);
    } catch (error) {
      setMessage("Failed to update testlocation");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    const { id } = router.query;
    try {
      const res = await fetch("/api/appointments", {
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

      router.push(`/cms/testlocation/${id}/appointmentDash`);
      saveModal();
    } catch (error) {
      setMessage("Failed to add appointment");
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
    if (!form.location) err.location = "Name is required";
    return err;
  };

  return (
    <>
      <style jsx>{camielStyles}</style>
      <div className="inputEv">
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="inputForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="id">Id</label>
          <input
            type="text"
            maxLength="20"
            name="id"
            value={form.id}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Regio</label>
          <input
            type="text"
            maxLength="20"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Datum</label>
          <input
            type="text"
            maxLength="20"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="starttime">Start tijd</label>
          <input
            type="text"
            maxLength="20"
            name="starttime"
            value={form.starttime}
            onChange={handleChange}
            required
          />

          <label htmlFor="endtime">Eind tijd</label>
          <input
            name="endtime"
            maxLength="60"
            value={form.endtime}
            onChange={handleChange}
          />

          <label htmlFor="availableappointments">Beschikbare afspraken</label>
          <input
            name="availableappointments"
            maxLength="60"
            value={form.availableappointments}
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

export default newTestlocation;
