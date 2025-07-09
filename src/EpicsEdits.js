"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epicItemClass = void 0;
const WTTInstanceManager_1 = require("./WTTInstanceManager");
class epicItemClass {
    Instance = new WTTInstanceManager_1.WTTInstanceManager();
    preSptLoad(Instance) {
        this.Instance = Instance;
    }
    postDBLoad() {
        this.epicEdits();
    }
    epicEdits() {
        const db = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            //    if (fileData._id === "5447a9cd4bdc2dbd208b4567") {
            //        fileData._props.Slots[2]._props.filters[0].Filter.push("5bb20d53d4351e4502010a69");
            //    } //pushing HK upper to M4A1
        }
    }
}
exports.epicItemClass = epicItemClass;
//# sourceMappingURL=EpicsEdits.js.map