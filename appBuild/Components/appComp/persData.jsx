import PersDataForm from "./persDataForm";

const PersData = ({ onnext }) => {
  const accountForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    postalCode: "",
    postalNumber: "",
    phone: "",
    bsnnumber: "",
  };

  return (
    <>
      <div className="contTitle">
        <h2>Vul je persoonlijke gegevens in</h2>
      </div>
      <div className="contText">
        <p>
          Voor het bewaken van de veiligheid hebben we enkele persoonlijke
          gegevens nodig van de bezoekers.
        </p>
      </div>
      <PersDataForm
        onnext={onnext}
        formId="add-persdata-form"
        accountForm={accountForm}
      />
    </>
  );
};
export default PersData;
