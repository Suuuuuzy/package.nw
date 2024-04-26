module.exports = {
  "type": "object",
  "properties": {
    "navigationBarBackgroundColor": {
      "type": "string"
    },
    "navigationBarTextStyle": {
      "enum": [
        "black",
        "white"
      ],
      "type": "string"
    },
    "navigationBarTitleText": {
      "type": "string"
    },
    "navigationStyle": {
      "enum": [
        "custom",
        "default"
      ],
      "type": "string"
    },
    "backgroundColor": {
      "type": "string"
    },
    "backgroundTextStyle": {
      "enum": [
        "dark",
        "light"
      ],
      "type": "string"
    },
    "enablePullDownRefresh": {
      "type": "boolean"
    },
    "onReachBottomDistance": {
      "type": "number"
    },
    "disableScroll": {
      "type": "boolean"
    },
    "disableSwipeBack": {
      "type": "boolean"
    },
    "backgroundColorTop": {
      "type": "string"
    },
    "backgroundColorBottom": {
      "type": "string"
    },
    "usingComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "pageOrientation": {
      "enum": [
        "auto",
        "landscape",
        "portrait"
      ],
      "type": "string"
    },
    "visualEffectInBackground": {
      "enum": [
        "hidden",
        "none"
      ],
      "type": "string"
    },
    "restartStrategy": {
      "enum": [
        "homePage",
        "homePageAndLatestPage"
      ],
      "type": "string"
    },
    "component": {
      "type": "boolean"
    },
    "componentGenerics": {
      "type": "object",
      "additionalProperties": {
        "anyOf": [
          {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          },
          {
            "type": "boolean"
          }
        ]
      }
    },
    "singlePage": {
      "type": "object",
      "properties": {
        "navigationBarFit": {
          "enum": [
            "float",
            "squeezed"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "pageJSONLight": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "pageJSONDark": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "enablePassiveEvent": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "type": "boolean"
          }
        },
        {
          "type": "boolean"
        }
      ]
    },
    "style": {
      "enum": [
        "v2"
      ],
      "type": "string"
    },
    "componentPlaceholder": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "renderer": {
      "enum": [
        "cover-view",
        "skyline",
        "webview",
        "xr-frame"
      ],
      "type": "string"
    },
    "initialRenderingCache": {
      "enum": [
        "dynamic",
        "static"
      ],
      "type": "string"
    },
    "handleWebviewPreload": {
      "enum": [
        "auto",
        "manual",
        "static"
      ],
      "type": "string"
    }
  },
  "additionalProperties": false,
  "definitions": {
    "IOriginalPageJSON": {
      "type": "object",
      "properties": {
        "navigationBarBackgroundColor": {
          "type": "string"
        },
        "navigationBarTextStyle": {
          "enum": [
            "black",
            "white"
          ],
          "type": "string"
        },
        "navigationBarTitleText": {
          "type": "string"
        },
        "navigationStyle": {
          "enum": [
            "custom",
            "default"
          ],
          "type": "string"
        },
        "backgroundColor": {
          "type": "string"
        },
        "backgroundTextStyle": {
          "enum": [
            "dark",
            "light"
          ],
          "type": "string"
        },
        "enablePullDownRefresh": {
          "type": "boolean"
        },
        "onReachBottomDistance": {
          "type": "number"
        },
        "disableScroll": {
          "type": "boolean"
        },
        "disableSwipeBack": {
          "type": "boolean"
        },
        "backgroundColorTop": {
          "type": "string"
        },
        "backgroundColorBottom": {
          "type": "string"
        },
        "backgroundColorContent": {
          "type": "string"
        },
        "usingComponents": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "pageOrientation": {
          "enum": [
            "auto",
            "landscape",
            "portrait"
          ],
          "type": "string"
        },
        "visualEffectInBackground": {
          "enum": [
            "hidden",
            "none"
          ],
          "type": "string"
        },
        "initialRenderingCache": {
          "enum": [
            "dynamic",
            "static"
          ],
          "type": "string"
        },
        "restartStrategy": {
          "enum": [
            "homePage",
            "homePageAndLatestPage"
          ],
          "type": "string"
        },
        "renderer": {
          "enum": [
            "cover-view",
            "skyline",
            "webview",
            "xr-frame"
          ],
          "type": "string"
        },
        "component": {
          "type": "boolean"
        },
        "componentGenerics": {
          "type": "object",
          "additionalProperties": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "singlePage": {
          "type": "object",
          "properties": {
            "navigationBarFit": {
              "enum": [
                "float",
                "squeezed"
              ],
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "handleWebviewPreload": {
          "enum": [
            "auto",
            "manual",
            "static"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1677220585156
}