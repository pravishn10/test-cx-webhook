
const fulfillmentResponse = (queryText) => {
    let resQueryText = {
        fulfillmentResponse: {
          messages: [
            {
              text: {
                text: queryText,
                allowPlaybackInterruption: true,
              },
            },
          ]
        },
    };
    return resQueryText;
}; 

module.exports = fulfillmentResponse;