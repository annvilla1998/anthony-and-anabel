const express = require('express');
const router = express.Router();
const Guest = require('../db/models/guest.model');

router.get('/guests', async (req, res) => {
    try {
        const guests = await Guest.find({});
        res.send(guests);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
})

router.post('/guests', async (req, res) => {

    // Validate request
    if (!req.body.firstName || !req.body.lastName) {
        res.status(400).send({ message: "First and last name are required" });
        return;
    }

    // Create a Guest
    const guest = new Guest({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    // Save Guest in the database
    try {
        const data = await guest.save(guest);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Guest."
        });
    }
})

router.delete('/guests/:id', async (req, res) => {

    const { id } = req.params;

    try {
        const data = await Guest.findByIdAndDelete(id);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while deleting the Guest."
        });
    }
    

})

module.exports = router;