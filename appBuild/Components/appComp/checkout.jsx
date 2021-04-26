function Checkout({ link }) {
    return (
      <h1>{link}</h1>
    )
  }

export async function getServerSideProps(context) {
    console.log("hey")

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"eventId":"6YaldE9lRRZMG3LB","ticketId":"8qX7ZMx670Og5DQj","user":{"firstName":"Lars","lastName":"van Erp","email":"larsverp2803@gmail.com","postalCode":"5673RE","dateOfBirth":"28-03-2000","phone":"0647169791"}});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };


    const response = await fetch("http://localhost:3000/api/tickets", requestOptions);
    const data = await response.json();
    const link = data.redirect_url;


    return {
      props: {
        link,
      },
    }
  }


export default Checkout
