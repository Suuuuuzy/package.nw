module.exports = {
  "type": "object",
  "properties": {
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
    "mini-ios": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "mini-android": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
    "mini-weixin": {
      "$ref": "#/definitions/IOriginalPageJSON"
    },
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
            "properties": {
              "default": {
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "default"
            ]
          },
          {
            "enum": [
              true
            ],
            "type": "boolean"
          },
          {
            "type": "null"
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
    },
    "componentFramework": {
      "enum": [
        "exparser",
        "glass-easel"
      ],
      "type": "string"
    },
    "homeButton": {
      "type": "boolean"
    },
    "styleIsolation": {
      "enum": [
        "apply-shared",
        "isolated",
        "page-apply-shared",
        "page-isolated",
        "page-shared",
        "shared"
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
                "properties": {
                  "default": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "default"
                ]
              },
              {
                "enum": [
                  true
                ],
                "type": "boolean"
              },
              {
                "type": "null"
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
        },
        "componentFramework": {
          "enum": [
            "exparser",
            "glass-easel"
          ],
          "type": "string"
        },
        "homeButton": {
          "type": "boolean"
        },
        "styleIsolation": {
          "enum": [
            "apply-shared",
            "isolated",
            "page-apply-shared",
            "page-isolated",
            "page-shared",
            "shared"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1691721526769
}