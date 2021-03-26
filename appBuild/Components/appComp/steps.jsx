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
              <img src="/icons/list-numbered.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Meld je aan bij Renorm</td>
            <td>
              <img src="/icons/login-24px.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vul je persoonlijke gegevens in</td>
            <td>
              <img src="/icons/how_to_reg-24px.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Verifiëer je gegevens</td>
            <td>
              <img src="/icons/verified-24px.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Testlocatie kiezen</td>
            <td>
              <img src="/icons/location_on-24px.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Testmoment kiezen</td>
            <td>
              <img src="/icons/calendar.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Test afnemen</td>
            <td>
              <img
                src="/icons/test-tube-svgrepo-com.svg"
                width="35"
                height="35"
              />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Test resultaat ontvangen</td>
            <td>
              <img src="/icons/box-add.svg" width="35" height="35" />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Je ticket ontvangen</td>
            <td>
              <img src="/icons/ticket.svg" width="35px" height="35" />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Feesten op het festival</td>
            <td>
              <img src="/icons/celebration.svg" width="35" height="35" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Steps;
