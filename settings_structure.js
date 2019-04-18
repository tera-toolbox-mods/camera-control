module.exports = [
    {
        "key": "enabled",
        "name": "Enable camera shaking",
        "type": "bool"
    },
    {
        "key": "power",
        "name": "Shaking power multiplier (if enabled)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    },
    {
        "key": "speed",
        "name": "Shaking speed multiplier (if enabled)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    }
];
