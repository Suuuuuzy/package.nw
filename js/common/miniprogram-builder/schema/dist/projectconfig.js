module.exports = {
  "type": "object",
  "properties": {
    "libVersion": {
      "type": "string"
    },
    "editorSetting": {
      "type": "object",
      "properties": {
        "tabIndent": {
          "enum": [
            "auto",
            "insertSpaces",
            "tab"
          ],
          "type": "string"
        },
        "tabSize": {
          "anyOf": [
            {
              "enum": [
                "\t"
              ],
              "type": "string"
            },
            {
              "type": "number"
            }
          ]
        }
      }
    },
    "cloudfunctionRoot": {
      "type": "string"
    },
    "cloudfunctionTemplateRoot": {
      "type": "string"
    },
    "cloudcontainerRoot": {
      "type": "string"
    },
    "srcMiniprogramRoot": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "simulatorType": {
      "type": "string"
    },
    "simulatorPluginLibVersion": {},
    "miniprogramRoot": {
      "type": "string"
    },
    "qcloudRoot": {
      "type": "string"
    },
    "pluginRoot": {
      "type": "string"
    },
    "cloudbaseRoot": {
      "type": "string"
    },
    "compileType": {
      "type": "string"
    },
    "pluginAppid": {
      "type": "string"
    },
    "jsserverRoot": {
      "type": "string"
    },
    "projectname": {
      "type": "string"
    },
    "appid": {
      "type": "string"
    },
    "packOptions": {
      "type": "object",
      "properties": {
        "ignore": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "type",
              "value"
            ]
          }
        },
        "include": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "type",
              "value"
            ]
          }
        }
      }
    },
    "watchOptions": {
      "type": "object",
      "properties": {
        "ignore": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "setting": {
      "type": "object",
      "properties": {
        "es6": {
          "type": "boolean"
        },
        "enhance": {
          "type": "boolean"
        },
        "postcss": {
          "type": "boolean"
        },
        "minified": {
          "type": "boolean"
        },
        "minifyWXSS": {
          "type": "boolean"
        },
        "minifyWXML": {
          "type": "boolean"
        },
        "uglifyFileName": {
          "type": "boolean"
        },
        "ignoreUploadUnusedFiles": {
          "type": "boolean"
        },
        "autoAudits": {
          "type": "boolean"
        },
        "urlCheck": {
          "type": "boolean"
        },
        "compileHotReLoad": {
          "type": "boolean"
        },
        "preloadBackgroundData": {
          "type": "boolean"
        },
        "lazyloadPlaceholderEnable": {
          "type": "boolean"
        },
        "useStaticServer": {
          "type": "boolean"
        },
        "babelSetting": {
          "type": "object",
          "properties": {
            "outputPath": {
              "type": "string"
            },
            "ignore": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "disablePlugins": {
              "type": "array",
              "items": {}
            }
          }
        },
        "useCompilerPlugins": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "enum": [
                  "less",
                  "sass",
                  "typescript"
                ],
                "type": "string"
              }
            },
            {
              "enum": [
                false
              ],
              "type": "boolean"
            }
          ]
        },
        "disableUseStrict": {
          "type": "boolean"
        },
        "uploadWithSourceMap": {
          "type": "boolean"
        },
        "localPlugins": {
          "type": "boolean"
        },
        "packNpmManually": {
          "type": "boolean"
        },
        "packNpmRelationList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "packageJsonPath": {
                "type": "string"
              },
              "miniprogramNpmDistDir": {
                "type": "string"
              }
            }
          }
        },
        "coverView": {
          "type": "boolean"
        },
        "ignoreDevUnusedFiles": {
          "type": "boolean"
        },
        "checkInvalidKey": {
          "type": "boolean"
        },
        "showShadowRootInWxmlPanel": {
          "type": "boolean"
        },
        "useIsolateContext": {
          "type": "boolean"
        },
        "useMultiFrameRuntime": {
          "type": "boolean"
        },
        "useApiHook": {
          "type": "boolean"
        },
        "useApiHostProcess": {
          "type": "boolean"
        },
        "useLanDebug": {
          "type": "boolean"
        },
        "enableEngineNative": {
          "type": "boolean"
        },
        "showES6CompileOption": {
          "type": "boolean"
        }
      }
    },
    "staticServerOptions": {
      "type": "object",
      "properties": {
        "servePath": {
          "type": "string"
        }
      }
    },
    "scripts": {
      "type": "object",
      "properties": {
        "beforeCompile": {
          "type": "string"
        },
        "beforePreview": {
          "type": "string"
        },
        "beforeUpload": {
          "type": "string"
        }
      }
    },
    "debugOptions": {
      "type": "object",
      "properties": {
        "hideInDevtools": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "condition": {
      "type": "object",
      "properties": {
        "game": {
          "type": "object",
          "properties": {
            "current": {
              "type": "number"
            },
            "list": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "pathName": {
                    "type": "string"
                  },
                  "query": {
                    "type": "string"
                  },
                  "scene": {
                    "type": [
                      "null",
                      "string",
                      "number"
                    ]
                  },
                  "shareInfo": {},
                  "referrerInfo": {},
                  "chatroomUsernameInfo": {},
                  "groupInfo": {}
                }
              }
            }
          }
        },
        "gamePlugin": {
          "type": "object",
          "properties": {
            "current": {
              "type": "number"
            },
            "list": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "query": {
                    "type": "string"
                  },
                  "scene": {
                    "type": [
                      "null",
                      "string",
                      "number"
                    ]
                  },
                  "shareInfo": {},
                  "referrerInfo": {},
                  "groupInfo": {}
                }
              }
            }
          }
        },
        "plugin": {
          "type": "object",
          "properties": {
            "current": {
              "type": "number"
            },
            "list": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "pathName": {
                    "type": "string"
                  },
                  "query": {
                    "type": "string"
                  },
                  "launchMode": {
                    "type": "string"
                  },
                  "scene": {
                    "type": [
                      "null",
                      "string",
                      "number"
                    ]
                  },
                  "shareInfo": {},
                  "referrerInfo": {},
                  "groupInfo": {}
                }
              }
            }
          }
        },
        "miniprogram": {
          "type": "object",
          "properties": {
            "current": {
              "type": "number"
            },
            "list": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "pathName": {
                    "type": "string"
                  },
                  "query": {
                    "type": "string"
                  },
                  "launchMode": {
                    "type": "string"
                  },
                  "scene": {
                    "type": [
                      "null",
                      "string",
                      "number"
                    ]
                  },
                  "partialCompile": {
                    "type": "object",
                    "properties": {
                      "enabled": {
                        "type": "boolean"
                      },
                      "pages": {
                        "type": "array",
                        "items": {}
                      }
                    }
                  },
                  "shareInfo": {},
                  "referrerInfo": {},
                  "chatroomUsernameInfo": {},
                  "groupInfo": {}
                }
              }
            }
          }
        }
      }
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1671524984901
}