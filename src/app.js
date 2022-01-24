// const path = require("path");
const express = require("express");
// const request = require("postman-request");
const fulfillmentResponse = require("./utils/fulfillmentResp");
const sendsms = require("./utils/sendsms");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.post("/sendsms", (req, res) => {

    if(req.body && req.body.sessionInfo) {
        console.log("req.body.sessionInfo", JSON.stringify(req.body.sessionInfo));
        console.log("req.body.fulfillmentInfo", JSON.stringify(req.body.fulfillmentInfo));
    }
    
    sendsms("+919845274186", (error, data) => {
        if(error) {
            queryText = ["SMS Failure."];
            return res.send(fulfillmentResponse(queryText));
        }
        queryText = ["SMS Sent."];
        res.send(fulfillmentResponse(queryText));

    });
    
        // .then(message => console.log(message.sid));
});

app.post("/storetimingsgreet", (req, res) => {
    
    console.log("req.body", JSON.stringify(req.body));
    if(req.body && req.body.fulfillmentInfo.tag === "storetimingsgreet") {

        queryText = ["Please drop by."];
        res.send(fulfillmentResponse(queryText));
    }
    
});

app.listen(port, () => {
    console.log(`test-cx-webhook app running on port ${port}`);
});