const app = getApp()
const emojiMap = new Map([
  ['1', '[微笑]'],
  ['2', '[撇嘴]']
])
Page({
  data: {},
  onShow(ev) {
    console.log(emojiMap)
    console.log(emojiMap.size)
    console.log(emojiMap.values())
  }
})