class Imodel {
  constructor() {
    this.model = null
  }
  load(url) {
    return new Promise((resolve, reject) => {
      tf.loadLayersModel(url)
      .then((model) => {
        this.model = model;
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
  prediction(imageData) {
    const score = tf.tidy(() => {
      let input = tf.browser.fromPixels(imageData, 1);
      input = tf.cast(input, 'float32').div(tf.scalar(255));
      input = input.expandDims();
      return this.model.predict(input).dataSync();
    });
    return score.indexOf(Math.max.apply(null, score));
  }
}