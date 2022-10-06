const { Router } = require("express");
const router = Router();

const {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderSignUp,
    uuuser
} = require("../controllers/entries.controller");

router.get("/home", renderIndex);
router.get("/sign-in", renderNewEntry);
router.post("/sign-in", createNewEntry);
router.post("/renderSignUp", renderSignUp);
router.get("/uuuser", uuuser);

module.exports = router;
