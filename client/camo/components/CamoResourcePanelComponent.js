import * as m from 'mithril';
import ResourcePanelComponent from '../../common/components/ResourcePanelComponent';

export default class CamoResourcePanelComponent extends ResourcePanelComponent {
  icons() {
    return {
      human: require('../assets/ui/human.png'),
      orc: require('../assets/ui/orc.png'),
      nightelf: require('../assets/ui/nightelf.png'),
      undead: require('../assets/ui/undead.png'),
      gold: require('../assets/ui/gold.png'),
      lumber: require('../assets/ui/lumber.png'),
      supply: require('../assets/ui/supply.png')
    };
  }

  type() {
    if (!app.settings.resourcePanelType) {
      return 'human';
    }

    if (app.settings.resourcePanelType === 'auto') {
      return app.game.players[0].race.toLowerCase();
    }

    return app.settings.resourcePanelType;
  }
}
