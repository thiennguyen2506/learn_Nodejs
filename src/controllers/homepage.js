import exxpress from "express";

let getHomepage = (req, res) => {
    return res.render("index");
}

module.exports = {
    getHomepage,
}