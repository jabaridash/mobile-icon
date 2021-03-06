const scales = {
  ios: [
    { width: 20, scale: 1 },
    { width: 20, scale: 2 },
    { width: 20, scale: 3 },
    { width: 29, scale: 1 },
    { width: 29, scale: 2 },
    { width: 29, scale: 3 },
    { width: 40, scale: 1 },
    { width: 40, scale: 2 },
    { width: 40, scale: 3 },
    { width: 60, scale: 2 },
    { width: 60, scale: 3 },
    { width: 76, scale: 1 },
    { width: 76, scale: 2 },
    { width: 20, scale: 1 },
    { width: 83.5, scale: 2 },
    { width: 1024, scale: 1 },
  ].map(scale => {
    return {
      width: scale.width,
      height: scale.width,
      scale: scale.scale,
      resolution: {
        width: scale.width * scale.scale,
        height: scale.width * scale.scale,
      }
    }
  }),
  android: [
    { width: 192, dpi: "xxxhdpi" },
    { width: 144, dpi: "xxhdpi" },
    { width: 96, dpi: "xhdpi" },
    { width: 72, dpi: "hdpi" },
    { width: 48, dpi: "mdpi" },
    { width: 36, dpi: "ldpi" },
    { width: 512, dpi: "market" },
  ].map(scale => {
    return {
      width: scale.width,
      height: scale.width,
      dpi: scale.dpi,
    }
  })
}

module.exports = (req, res, next) => {
  req.scales = scales

  next()
}
