GS.dataCache['604EB3472EDB6042D08B4C27798759D51A7A'] = {
    "uid": "604EB3472EDB6042D08B4C27798759D51A7A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Save Game",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "604EB3472EDB6042D08B4C27798759D51A7A",
        "isFolder": false,
        "parentId": "ROOT",
        "data": {
            "name": "Save Game",
            "startCondition": 0,
            "conditionEnabled": true,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "",
                    "type": 2,
                    "booleanVariable": {
                        "name": "Save Game",
                        "index": 2,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    }
                }
            ],
            "commands": [
                {
                    "id": "gs.PrepareSaveGame",
                    "params": {
                        "snapshot": 0
                    },
                    "uid": "B5A210743C5051427E0B73A199CC689BCC1F",
                    "indent": 0
                },
                {
                    "id": "gs.SaveGame",
                    "params": {
                        "slot": 1,
                        "thumbWidth": 0,
                        "thumbHeight": 0
                    },
                    "uid": "0ECDF3883FDB914AD01AD0174B2097F09AB4",
                    "indent": 0
                }
            ],
            "index": "604EB3472EDB6042D08B4C27798759D51A7A",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "Save Game",
                "index": 2,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            },
            "numberVariables": [
                {
                    "name": "",
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
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}