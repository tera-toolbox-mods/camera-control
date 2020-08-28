module.exports = [
    {
        "key": "shakeEnabled",
        "name": "Enable camera shaking",
        "type": "bool"
    },
    {
        "key": "shakePower",
        "name": "Shaking power multiplier (if enabled)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    },
    {
        "key": "shakeSpeed",
        "name": "Shaking speed multiplier (if enabled)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    },
    {
        "key": "fovEnabled",
        "name": "Enable FOV (field of view) override",
        "type": "bool"
    },
    {
        "key": "fovValue",
        "name": "FOV override value (if enabled)",
        "type": "number",
        "min": 30.0,
        "max": 120.0,
        "step": 1.0
    },
    {
        "key": "distanceEnabled",
        "name": "Enable distance override",
        "type": "bool"
    },
    {
        "key": "distanceValue",
        "name": "Distance override value (if enabled)",
        "type": "number",
        "min": 10.0,
        "max": 1000.0,
        "step": 10.0
    }
];
