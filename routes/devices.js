const express = require("express");
const app = express();
const device = require("../models/device");

app.get("/:brand", (req, res) => {
    device.find({ brand: req.params.brand }, (err, devices) => {
        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        } else {
            res.status(200).json({
                message: "ok",
                devices
            });
        }
    });
});

app.post("/", (req, res) => {
    const device = new Device({
        model: req.body.model,
        brand: req.body.brand,
        price: req.body.price
    });
    device.save((err, newDevice) => {
        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        } else {
            res.status(200).json({
                message: "ok",
                device: newDevice
            });
        }
    });
});

app.put("/:id", (req, res) => {
    device.findByIdAndUpdate( req.params.id, req.body, { new: true },
        (err, updatedDevice) => {
            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            } else {
                res.status(200).json({
                    message: "ok",
                    device: updatedDevice
                });
            }
        }
    );
});

app.delete("/:id", (req, res) => {
    device.findByIdAndDelete(req.params.id, (err, infoDeleted) => {
        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        } else {
            res.status(200).json({
                message: "ok",
                info: infoDeleted
            });
        }
    });
});

module.exports = app;
