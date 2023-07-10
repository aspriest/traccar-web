import { grey } from '@mui/material/colors';
import createPalette from '@mui/material/styles/createPalette';
import { loadImage, prepareIcon } from './mapUtil';

import directionSvg from '../../resources/images/direction.svg';
import backgroundSvg from '../../resources/images/background.svg';
import carSvg from '../../resources/images/icon/car.svg';
<<<<<<< HEAD:src/map/core/preloadImages.js
<<<<<<< HEAD:src/map/core/preloadImages.js
import camperSvg from '../../resources/images/icon/camper.svg';
import craneSvg from '../../resources/images/icon/crane.svg';
=======
/* import craneSvg from '../../resources/images/icon/crane.svg'; */
>>>>>>> 4c45eb1b (Commeneted out unsued icons.):modern/src/map/core/preloadImages.js
=======
>>>>>>> 19053d5f (Have added Icons, and Montserat. Well done.):modern/src/map/core/preloadImages.js
import defaultSvg from '../../resources/images/icon/default.svg';
import pickupSvg from '../../resources/images/icon/pickup.svg';
import truckSvg from '../../resources/images/icon/truck.svg';
import vanSvg from '../../resources/images/icon/van.svg';

<<<<<<< HEAD:src/map/core/preloadImages.js
/* export const mapIcons = {
  animal: animalSvg,
  bicycle: bicycleSvg,
  boat: boatSvg,
  bus: busSvg,
  car: carSvg,
  camper: camperSvg,
  crane: craneSvg,
  default: defaultSvg,
  helicopter: helicopterSvg,
  motorcycle: motorcycleSvg,
  offroad: offroadSvg,
  person: personSvg,
  pickup: pickupSvg,
  plane: planeSvg,
  scooter: scooterSvg,
  ship: shipSvg,
  tractor: tractorSvg,
  train: trainSvg,
  tram: tramSvg,
  trolleybus: trolleybusSvg,
  truck: truckSvg,
  van: vanSvg,
}; */

=======
>>>>>>> 19053d5f (Have added Icons, and Montserat. Well done.):modern/src/map/core/preloadImages.js
export const mapIcons = {
  car: carSvg,
  default: defaultSvg,
  pickup: pickupSvg,
  truck: truckSvg,
  van: vanSvg,
};

export const mapIconKey = (category) => (mapIcons.hasOwnProperty(category) ? category : 'default');

export const mapImages = {};

const mapPalette = createPalette({
  neutral: { main: grey[500] },
});

export default async () => {
  const background = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(Object.keys(mapIcons).map(async (category) => {
    const results = [];
    ['info', 'success', 'error', 'neutral'].forEach((color) => {
      results.push(loadImage(mapIcons[category]).then((icon) => {
        mapImages[`${category}-${color}`] = prepareIcon(background, icon, mapPalette[color].main);
      }));
    });
    await Promise.all(results);
  }));
};
