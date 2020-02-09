const regexp = /^([一-龥][ 　]?)*(((([ァ-ン]|ー)[ 　]?)*([ァ-ン]|ー))|[一-龥])$/

const targets = [
  // 文字列
  ['漢字', true],
  ['カタカナ', true],
  ['漢字カタカナ', true],
  ['あ漢字カタカナ', false],
  ['漢字あカタカナ', false],
  ['漢字カタカナあ', false],
  // 半角スペース
  [' 漢字カタカナ', false],
  ['  漢字カタカナ', false],
  ['漢字 カタカナ', true],
  ['漢字  カタカナ', false],
  ['漢字 カ タカナ', true],
  ['漢字 カ  タカナ', false],
  ['漢字カタカナ ', false],
  ['漢字カタカナ  ', false],
  // 全角スペース
  ['　漢字カタカナ', false],
  ['　　漢字カタカナ', false],
  ['漢字　カタカナ', true],
  ['漢字　　カタカナ', false],
  ['漢字　カ　タカナ', true],
  ['漢字　　カ　　タカナ', false],
  ['漢字カタカナ　', false],
  ['漢字カタカナ　　', false],
]


describe('OKになるテスト', () => {
  targets.filter(t => t[1]).forEach(t => {
    test(t[0], () => {
      expect(t[0]).toMatch(regexp);
    })
  })
})

describe('NGになるテスト', () => {
  targets.filter(t => !t[1]).forEach(t => {
    test(t[0], () => {
      expect(t[0]).not.toMatch(regexp);
    })
  })
})
