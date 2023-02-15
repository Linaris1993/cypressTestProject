const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : "https://next.privat24.ua",
    "excludeSpecPattern " : "**/examples/*",
      "imageConfig": {
        "createDiffImage": true, 
        "threshold": 0.01,                     
        "thresholdType": "percent",           
      },
      "name": "custom image name",
      "separator": "custom image separator", 

      "excludeSpecPattern": [
        "**/__snapshots__/*",
        "**/__image_snapshots__/*"
      ]
    }
  });
