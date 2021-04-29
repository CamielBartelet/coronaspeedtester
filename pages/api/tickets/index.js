var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + process.env.EVENTGOOSE_API_KEY);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "eventgoose_session=FOtUVItcJk7vDOOuZaLoIX7B4E4dqxR88f0M09MW; SERVERID=live-site1");

async function addToCart(eventId, ticketId) {
    var body = JSON.stringify({
        "event_id" : eventId,
        "shop_id" : "vyWmQaM63KEX5wqY",
        "tickets" : {
            [ticketId] : 1
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };

    const response = await fetch("https://api.eventgoose.com/v1/checkouts", requestOptions);
    const data = await response.json();

    return data.session;
}

async function postCustomer(sessionId, user) {
    var body = JSON.stringify({
    "event_id" : "6YaldE9lRRZMG3LB",
        "first_name" : user.firstName,
        "last_name" : user.lastName,
        "email" : "larsverp2803@gmail.com",
        "email_confirmation" : "larsverp2803@gmail.com",
        "phone" : user.phone,
        "accept_eg" : true,
        "fields" : {
            "general" : {
                "postal_code" : user.postalCode,
                "date_of_birth" : user.dateOfBirth,
                "quarantine_check" : true
            },
            "8qX7ZMx670Og5DQj" : [{
                "name" : user.firstName + " " + user.lastName,
                "date_of_birth" : user.dateOfBirth
            }]
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };

    const response = await fetch("https://api.eventgoose.com/v1/checkouts/"+sessionId+"/customer", requestOptions);
    const data = await response.json();
}

async function selectPaymentIssuer(sessionId, eventId, issuer) {
    var body = JSON.stringify({
        "event_id" : eventId,
        "payment_method_id" : "zQaj9N2LbE85WKn1",
        "issuer" : issuer
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };

    const response = await fetch("https://api.eventgoose.com/v1/checkouts/"+sessionId+"/payment-method", requestOptions);
    const data = await response.json();

    return data;
}

export default async function handler(req, res) {

    if(req.method != "POST"){
        return res.status(405).json({
            "error" : true,
            "reason" : "Method Not Allowed"
        })
    }

    var body = req.body;

    if(body.eventId == null || body.ticketId == null || body.user == null){
        return res.status(400).json({
            "error" : true,
            "reason" : "One or more required fields are missing."
        })
    }

    var eventId = body.eventId;
    var ticketId = body.ticketId;
    var user = body.user[0];
    var issuer = "BUNQNL2A";

    const sessionId = await addToCart(eventId, ticketId);

    await postCustomer(sessionId, user);

    const payment = await selectPaymentIssuer(sessionId, eventId, issuer);

    return res.status(200).json({
        "error" : false,
        "reason" : "Your payment link is created 🥳",
        "redirect_url": payment.redirect_url
    });
}
