const person = [
    {
        emai: "nickynn07@gmail.com",
        name: "Nick",
        pass: "123456",
        auth: true,
    },
];


const uuuser = (req, res) => {
    res.render("uuuser");
};

const renderIndex = (req, res) => {
    res.render("home", { person });
};
const renderNewEntry = (req, res) => {
    res.render("sign-in");
};
const createNewEntry = (req, res) => {
    console.log(req.body);
    if (
        req.body.emai == person[0].emai &&
        req.body.pass == person[0].pass
    ) {
        person[0].auth = true;
        res.redirect("/home");
    } else {
        res.redirect("uuuser");
    }
};

const renderSignUp = (req, res) => {
    res.send("Created");
    person.push(req.body);
    console.log(req.body);
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderSignUp,
    uuuser,
};
