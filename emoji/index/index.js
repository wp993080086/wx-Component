const app = getApp()
const emojiMap = new Map([
  ['1', '[微笑]'],
  ['2', '[撇嘴]']
])
Page({
  data: {
    height: 0,
    newHeight: 0,
    isShow: false
  },
  onShow(e) {
    console.log(emojiMap)
  },
  clickEvent(e) {
    const index = e.currentTarget.dataset.index + ''
    console.log(index)
    console.log(emojiMap.get(index))
  },
  focusEvent(e) {
    const height = e.detail.height
    this.setData({
      height
    })
  },
  showEmoji() {
    const height = this.data.height
    this.setData({
      newHeight: height,
      isShow: true
    })
  },
  showKeyboard() {
    this.setData({
      newHeight: 0,
      isShow: false
    })
  }
})