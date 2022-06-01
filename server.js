const path = require("path");
const {expressApp} = require("./config.js");
const random = require("./random.js");

const rappers = {
    "21 savage": {
        age: 29,
        birthName: "Sheyaa Bin Abraham-Joseph",
        birthLocation: "London, UK"
    },
    "chance the rapper": {
        age: 29,
        birthName: "Chancelor Jonathan Bennett",
        birthLocation: "Chicago, Illinois"
    },
    "dylan": {
        age: 29,
        birthName: "Dylan",
        birthLocation: "Dylan"
    }
}
expressApp.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

expressApp.get("/api/:name", (req, res) => {
    const targetName = req.params.name.toLowerCase();
    let result;
    if (targetName === "random") {
        result = rappers[random.choice(Object.keys(rappers))];
    } else {
        result = rappers[targetName];
        if (!result) {
            result = rappers["dylan"];
        }
    }
    result.success = true;
    res.json(result);
});