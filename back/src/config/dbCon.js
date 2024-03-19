const mongoose = require("mongoose");

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://ruizzmarin20:NBcofcAMMHiDRkBP@educluster.7crxysp.mongodb.net/proyecto2_DB?retryWrites=true&w=majority&appName=eduCluster"
    );
};

module.exports = dbCon;