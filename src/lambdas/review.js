import axios from "axios";

exports.hello = () => {
  return "hellow world";
};

exports.handler = (event, context, callback) => {
  exports.hello().then(result => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(result)
    });
  });
};
