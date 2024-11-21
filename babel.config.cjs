const targets = {
  node: 20,
};

module.exports = {
  "presets": [
    "@babel/preset-env",
    ['@babel/preset-react', { runtime: 'automatic' }],
    "@babel/preset-typescript"
  ],
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  },
  "plugins": [["@babel/transform-runtime"]]
};
