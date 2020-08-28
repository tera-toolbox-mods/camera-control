const SettingsUI = require('tera-mod-ui').Settings;

exports.NetworkMod = function(mod) {
    function apply() {
        mod.clientInterface.configureCameraShake(mod.settings.shakeEnabled, mod.settings.shakePower, mod.settings.shakeSpeed);
        if (mod.settings.fovEnabled)
            mod.send('S_STEER_DEBUG_COMMAND', 1, { command: `fov ${mod.settings.fovValue}` });
        if (mod.settings.distanceEnabled)
            mod.send('S_DUNGEON_CAMERA_SET', 1, { enabled: true, default: mod.settings.distanceValue, max: mod.settings.distanceValue });
    }

    mod.game.on('enter_game', () => apply());

    // Commands
    mod.command.add('camera', {
        $default() {
            if (ui)
                ui.show();
        },
        shake(mode, shakePower, shakeSpeed) {
            mod.settings.shakeEnabled = mode.toLowerCase() === 'on';
            mod.settings.shakePower = Number(shakePower) || 1.0;
            mod.settings.shakeSpeed = Number(shakeSpeed) || 1.0;

            mod.command.message(`Shaking ${mod.settings.shakeEnabled ? 'enabled' : 'disabled'}!`);
            apply();
        },
        fov(value) {
            if (value === 'disable') {
                mod.settings.fovEnabled = false;
                mod.command.message(`FOV disabled!`);
            } else {
                mod.settings.fovEnabled = true;
                mod.settings.fovValue = Number(value) || 71.0;
                mod.command.message(`FOV set to ${mod.settings.fovValue}!`);
            }

            apply();
        },
        distance(value) {
            if (value === 'disable') {
                mod.settings.distanceEnabled = false;
                mod.command.message(`Distance disabled!`);
            } else {
                mod.settings.distanceEnabled = true;
                mod.settings.distanceValue = Number(value) || 170.0;
                mod.command.message(`Distance set to ${mod.settings.distanceValue}!`);
            }

            apply();
        }
    });

    // Settings UI
    let ui = null;
    if (global.TeraProxy.GUIMode) {
        ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 280 });
        ui.on('update', settings => {
            mod.settings = settings;
            apply();
        });

        this.destructor = () => {
            if (ui) {
                ui.close();
                ui = null;
            }
        };
    }
}
