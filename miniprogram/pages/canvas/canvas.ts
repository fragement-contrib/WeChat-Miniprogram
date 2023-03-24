const dpr = wx.getSystemInfoSync().pixelRatio
let painter: any

Page({
  onReady() {
    const query = wx.createSelectorQuery().in(this)
    query.select('#mycanvas')
      .fields({ node: true, size: true })
      .exec((res) => {

        const canvas = res[0].node
        painter = canvas.getContext('2d')

        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        painter.scale(dpr, dpr)

        painter.fillStyle = "red"
        painter.fillRect(50, 50, 100, 200)

        painter.font = "18px sans-serif"
        painter.fillText("Canvas 画笔", 170, 100)

      });
  },
  showColor(event: any) {
    let x = event.touches[0].x
    let y = event.touches[0].y

    console.log(painter.getImageData(x * dpr, y * dpr, 1, 1).data)
  }
})