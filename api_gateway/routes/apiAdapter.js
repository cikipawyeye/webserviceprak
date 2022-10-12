const axios = require("axios");

const {TIMEOUT} = process.env;

module.exports = (baseUrlsrv) => {
    return axios.create({
        baseURL: baseUrlsrv,
        timeout: TIMEOUT
    });
}