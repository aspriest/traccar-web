import palette from '../../common/theme/palette';
import { loadImage, prepareIcon } from './mapUtil';

import directionSvg from '../../resources/images/direction.svg';
import backgroundSvg from '../../resources/images/background.svg';
import carSvg from '../../resources/images/icon/car.svg';
import defaultSvg from '../../resources/images/icon/default.svg';
import pickupSvg from '../../resources/images/icon/pickup.svg';
import truckSvg from '../../resources/images/icon/truck.svg';
import vanSvg from '../../resources/images/icon/van.svg';

export const mapIcons = {
  car: carSvg,
  default: defaultSvg,
  pickup: pickupSvg,
  truck: truckSvg,
  van: vanSvg,
};

export const mapIconKey = (category) => (mapIcons.hasOwnProperty(category) ? category : 'default');

export const mapImages = {};

export default async () => {
  const background = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(Object.keys(mapIcons).map(async (category) => {
    const results = [];
    ['primary', 'positive', 'negative', 'neutral'].forEach((color) => {
      results.push(loadImage(mapIcons[category]).then((icon) => {
        mapImages[`${category}-${color}`] = prepareIcon(background, icon, palette().colors[color]);
      }));
    });
    await Promise.all(results);
  }));
};
