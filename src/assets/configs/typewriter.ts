/**
 * This config defines keywords and colors lists used for Typewriter conponent
 * For better randomizing keywordsList may contain multiple arrays of objects,
 * whitch of these appears with frequency, defined by chances field (values in %).
 * First keyword is alyays first word of 1st list,
 * second keyword is random word from 1st list,
 * other keywords are picked randomly from random list.
 * Headline is first line phrase, pretext is text placed before keyword
 * Words  and colors dont repeat until all words are used
 */

const headline = 'When product';

const pretext = 'meets';

const colors = [
  '#FF947B',
  '#FFD945',
  '#95FF7B',
  '#7BCFFF',
  '#E07BFF',
  '#7B7CFF',
];

const keywords = [
  {
    chance: 50,
    values: [
      'design',
      'business thinking',
      'UX research',
      'CJM',
      'JTBD',
      'processes',
      'identity',
      'accessibility',
      'aha-moment',
      'growth',
      'insights',
      'relevance',
      'clarity',
      'logic',
    ],
  },
  {
    chance: 40,
    values: [
      'デザイン',
      'ビジネス思考',
      'UXリサーチ',
      'プロセス',
      '身元',
      'アクセシビリティ',
      'あは瞬間',
      '成長',
      'インサイト',
      '関連性',
      '明瞭さ',
      '身份',
      '可達性',
      '啊哈時刻',
      '明晰',
      '邏輯',
    ],
  },
  {
    chance: 10,
    values: [
      'Identität',
      'barrierefreiheit',
      'identita',
      'postřehy',
      'identité',
      'accessibilité',
      'clarté',
      'дизайн',
      'процессы',
      'доступность',
      'рост',
      'դիզայն',
      'բիզնես',
      'աճը',
    ],
  },
];

export {
  keywords,
  colors,
  pretext,
  headline
};
