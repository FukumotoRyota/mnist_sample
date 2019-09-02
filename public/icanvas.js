class Icanvas {
  constructor(area, signaturePad) {
    this.area = area;
    this.signaturePad = signaturePad;
  }
  getImageData = (width, height) => {
    // 指定サイズに変換
    const tmpCanvas = document.createElement('canvas').getContext('2d');
    console.log(tmpCanvas)
    tmpCanvas.drawImage(this.area, 0, 0, width, height);
    // グレースケールに変換
    let imageData = tmpCanvas.getImageData(0, 0, width, height);
    console.log(imageData)
    for (let i = 0; i < imageData.data.length; i+=4) {
      const avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
      imageData.data[i] = imageData.data[i+1] = imageData.data[i+2] = avg;
    }
    return imageData;
  }
  reset() {
    this.signaturePad.clear();
  }
}