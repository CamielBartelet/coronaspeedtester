import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

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

  /* The POST method adds a new entry in the mongodb database. */
  // const postData = async (form) => {
  //   try {
  //     const res = await fetch("/api/organisations", {
  //       method: "POST",
  //       headers: {
  //         Accept: contentType,
  //         "Content-Type": contentType,
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     // Throw error with status code in case Fetch API req failed
  //     if (!res.ok) {
  //       throw new Error(res.status);
  //     }

  //     router.push("/cms/eventorganisers");
  //     saveModal();
  //   } catch (error) {
  //     setMessage("Failed to add organisation");
  //   }
  // };

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
    return err;
  };

  return (
    <>
      <div className="inputEv">
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="inputForm"
          style={{ display: "flex", flexDirection: "column" }}
        >
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

export default UserSettings;
