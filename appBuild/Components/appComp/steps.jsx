import AppCompstyle from "./appCompstyle";

const Steps = () => {
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <h3>Doorloop deze stappen en je ontvangt je ticket.</h3>
      <table className="stepList">
        <tbody>
          <tr>
            <td>1</td>
            <td>Lees en accepteer de voorwaarden</td>
            <td>
              <img src="/icons/list-24px.svg" width="30px" height="30px" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Meld je aan bij Renorm</td>
            <td>
              <img src="/icons/login-24px.svg" width="30px" height="30px" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vul je persoonlijke gegevens in</td>
            <td>
              <img
                src="/icons/how_to_reg-24px.svg"
                width="30px"
                height="30px"
              />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Verifiëer je gegevens</td>
            <td>
              <img src="/icons/verified-24px.svg" width="30px" height="30px" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Testlocatie kiezen</td>
            <td>
              <img
                src="/icons/location_on-24px.svg"
                width="30px"
                height="30px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Steps;
