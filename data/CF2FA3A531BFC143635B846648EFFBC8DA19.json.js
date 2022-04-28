GS.dataCache['CF2FA3A531BFC143635B846648EFFBC8DA19'] = {
    "uid": "CF2FA3A531BFC143635B846648EFFBC8DA19",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Bathroom",
        "type": "vn.scene",
        "parentId": "3B07694818DCA34D2F4941C57D19FE13090A",
        "chapterUid": "3B07694818DCA34D2F4941C57D19FE13090A",
        "order": 0,
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "uid": "4ED8A25C681BB4421D590F05981069128036",
                "indent": 0
            },
            {
                "id": "gs.PlayVideo",
                "params": {
                    "video": {
                        "name": "Teaser 4.0.mp4",
                        "folderPath": "Graphics/Movie",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "volume": 100,
                    "playbackRate": 100,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "CC8B959F5E60F84EE869EA98E8DA7569BFF4",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Bathroom-1.png",
                        "folderPath": "Graphics/Pictures/Maps/Bathroom",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D4CDB3A04C7DE14229993EB645ABCE748EA0",
                "indent": 0
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "hotspots": [
                        {
                            "x": -90,
                            "y": 94,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": -45,
                                "y": 47,
                                "width": 532,
                                "height": 846,
                                "action": 1,
                                "label": "Door",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "folderPath": "Audio/Sounds/Sound effects",
                                    "name": "footstep1.mp3",
                                    "volume": 100,
                                    "playbackRate": 96
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 90
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 532,
                                "height": 846
                            }
                        },
                        {
                            "x": 1412,
                            "y": 742,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1412,
                                "y": 742,
                                "width": 552,
                                "height": 492,
                                "action": 0,
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": "",
                                    "folderPath": ""
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 86
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 552,
                                "height": 492
                            }
                        },
                        {
                            "x": 1244,
                            "y": 354,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1244,
                                "y": 354,
                                "width": 400,
                                "height": 146,
                                "action": 1,
                                "label": "Mirror",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": "",
                                    "folderPath": "Audio/Sounds",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 100
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 400,
                                "height": 146
                            }
                        },
                        {
                            "x": 946,
                            "y": 710,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 946,
                                "y": 710,
                                "width": 143,
                                "height": 100,
                                "action": 0,
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": "",
                                    "folderPath": ""
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 100
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 186,
                                "height": 100
                            }
                        },
                        {
                            "x": 787,
                            "y": 248,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 787,
                                "y": 248,
                                "width": 172,
                                "height": 395,
                                "action": 0,
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": "",
                                    "folderPath": ""
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 78
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 172,
                                "height": 395
                            }
                        },
                        {
                            "x": 1606,
                            "y": 12,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 853,
                                "y": 6,
                                "width": 100,
                                "height": 100,
                                "action": 1,
                                "label": "Back to menu",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": "",
                                    "folderPath": ""
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 84
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 200,
                                "height": 100
                            }
                        },
                        {
                            "x": 1820,
                            "y": 10,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 910,
                                "y": 5,
                                "width": 100,
                                "height": 100,
                                "action": 1,
                                "label": "Inventory",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "folderPath": "Audio/Sounds/Menu",
                                    "name": "menu select 2.mp3",
                                    "volume": 100,
                                    "playbackRate": 100
                                },
                                "onHoverSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "cursor.ogg",
                                    "volume": 100,
                                    "playbackRate": 94
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 100,
                                "height": 100
                            }
                        }
                    ],
                    "predefinedPositionId": 0,
                    "ground": {
                        "name": "Bathroom-1.png",
                        "folderPath": "Graphics/Pictures/Maps/Bathroom",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "hover": {
                        "name": "Bathroom-1 hover.png",
                        "folderPath": "Graphics/Pictures/Maps/Bathroom",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "unselected": null,
                    "selected": null,
                    "selectedHover": null,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B666A55E2DA22141751806176296A0F9C09B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Back to menu"
                },
                "indent": 0,
                "uid": "F1B698A560D675427F79202751727D2457F7"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "1400FB588B5D83420B18D38139212651E8FE",
                        "name": "Title"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B8DACFA51F20E542BF38A947EECBA404690F",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Door"
                },
                "indent": 0,
                "uid": "C5C1F2E860B96741054B9C54402BF07C7BFD"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "hotspots": [],
                    "predefinedPositionId": 0,
                    "ground": {
                        "name": "Bathroom-door.png",
                        "folderPath": "Graphics/Pictures/Maps/Bathroom",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "hover": null,
                    "unselected": null,
                    "selected": null,
                    "selectedHover": null,
                    "duration": 48,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D76C53E2882F974A368AB8C22897360079AC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Inventory"
                },
                "indent": 0,
                "uid": "CC7F6D5B64EC48499B4997E88DCCB5F75FF4"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "Save",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}