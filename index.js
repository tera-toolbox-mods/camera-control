const SettingsUI = require('tera-mod-ui').Settings;

module.exports = function Shaker(mod) {
    if(mod.proxyAuthor !== 'caali' || !global.TeraProxy) {
        mod.warn('You are trying to use Shaker on an unsupported legacy version of tera-proxy.');
        mod.warn('The module may not work as expected, and even if it works for now, it may break at any point in the future!');
        mod.warn('It is highly recommended that you download the latest official version from the #proxy channel in https://discord.gg/dUNDDtw');
    }

    mod.clientInterface.configureCameraShake(mod.settings.enabled, mod.settings.power, mod.settings.speed);

    // Commands
    mod.command.add('shaker', {
        $default(mode, power, speed) {
            if (!mode) {
                if (ui)
                    ui.show();
                else
                    mod.command.message('Must specify mode (on/off)!');

                return;
            }

            mod.settings.enabled = mode.toLowerCase() === 'on';
            mod.settings.power = Number(power) || 1.0;
            mod.settings.speed = Number(speed) || 1.0;

            mod.clientInterface.configureCameraShake(mod.settings.enabled, mod.settings.power, mod.settings.speed);
            mod.command.message(`Camera shaking ${mod.settings.enabled ? 'enabled' : 'disabled'}!`);
        }
    });

    // Settings UI
    let ui = null;
    if (global.TeraProxy.GUIMode) {
        ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 167 });
        ui.on('update', settings => {
            mod.settings = settings;
            mod.clientInterface.configureCameraShake(mod.settings.enabled, mod.settings.power, mod.settings.speed);
        });

        this.destructor = () => {
            if (ui) {
                ui.close();
                ui = null;
            }
        };
    }
}
