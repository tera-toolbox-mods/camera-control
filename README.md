# Camera Control
TERA Toolbox mod allowing you to configure or disable camera shaking effects, change camera FOV (field of view), and override camera distance.

## Configuration
Either open the settings screen by typing `/toolbox camera` in chat, or use any of the commands below. All settings are persistent and shared across all clients/accounts/characters.

### Camera Shaking
- `/toolbox camera shake on [power: Number] [speed: Number]` - Enable camera shaking, optionally specifying speed & power multipliers. Example: `/toolbox camera shake on 0.1 1.0` enables camera shaking at regular speed but with only 10% strength.
- `/toolbox camera shake off` - Disables camera shaking entirely.

### Camera FOV (field of view) override
- `/toolbox camera fov disable` - Disables FOV override. The game will return to default FOV on next restart.
- `/toolbox camera fov [value: Number]` - Enables FOV override. Example: `/toolbox camera fov 90` overrides FOV to 90 degrees.

### Camera distance override
- `/toolbox camera distance disable` - Disables distance override. The game will return to default camera distance on next restart.
- `/toolbox camera distance [value: Number]` - Enables distance override. Example: `/toolbox camera distance 500` overrides camera distance to 500 units.
