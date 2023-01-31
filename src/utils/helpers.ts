export type getRandomValueConfig= {
  values: Array<any>,
  chances: Array<number>,
}

export function getRandomArrayElement(array: Array<any>) {
  const max = array?.length - 1;
  return array[max];
}

export function getRandomValue(config: getRandomValueConfig) {
  const { values, chances } = config;

  const chancesSum = chances.reduce((partialSum, a) => partialSum + a, 0);
  const normalizedChances = chances.map(chance => chance / (chancesSum / 100));
  const distributionLevels = Math.min(values.length, chances.length);
  const randomChance = Math.random() * 100;

  let lowerChanceLimit = 0;

  for (let i = 0; i < distributionLevels; i++) {
    const higherChanceLimit = lowerChanceLimit + normalizedChances[i];
    if (
      randomChance >= lowerChanceLimit &&
      randomChance < higherChanceLimit
    ) {
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

export const onIntersect = (
  elementToWatch: HTMLElement,
  callback: (target: Element) => void,
  outCallback: (target: Element) => void,
  once = false,
  options = { threshold: 0 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      callback(entry.target);

      if (once) {
        observer.unobserve(entry.target);
      }
    }

    else {
      outCallback(entry.target);
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
};
