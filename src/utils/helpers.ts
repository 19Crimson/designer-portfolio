export type getRandomValueConfig= {
  values: Array<any>,
  chances: Array<number>,
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomValue(config: getRandomValueConfig) {
  const { values, chances } = config;
  const distributionLevels = Math.min(values.length, chances.length);
  let lowerChanceLimit = 0;
  const randomChance = Math.random() * 100;

  for (let i = 0; i < distributionLevels; i++) {
    const higherChanceLimit = lowerChanceLimit + chances[i];
    if (
      randomChance >= lowerChanceLimit &&
      randomChance < higherChanceLimit
    ) {
      if (chances.length === 2) {
        console.log('randomChance', randomChance);
        console.log('chanceLimits', lowerChanceLimit, higherChanceLimit);
        console.log('value', values[i]);
      }
      return values[i];
    }
    lowerChanceLimit = higherChanceLimit;
  }
}

export function scrrollTop () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export function getImageOnload (
  url: string,
  cb: (
    img?: HTMLImageElement,
    err?: string|Event,
  ) => void
) {
  const img = new Image();
  img.onload = () => cb(img);
  img.onerror = (err) => cb(undefined, err);
  img.src = url;
}