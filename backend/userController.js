const User = require("./userModel")

const inventory = async(req, res) => {
    try {
        const {name, description, price, quantity} = req.body;

        const newInventory = await new User({
            name,
            description,
            price,
            quantity
        });

        await newInventory.save();
        console.log("Saved");
        res.status(201).json({ message: "Product added successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = inventory