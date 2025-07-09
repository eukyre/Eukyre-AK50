import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

export class epicItemClass {

    private Instance: WTTInstanceManager = new WTTInstanceManager();

    public preSptLoad(Instance: WTTInstanceManager): void {
        this.Instance = Instance;
    }

    public postDBLoad(): void {

        this.epicEdits();
    }

    public epicEdits(): void {
        const db: IDatabaseTables = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
        //    if (fileData._id === "5447a9cd4bdc2dbd208b4567") {
        //        fileData._props.Slots[2]._props.filters[0].Filter.push("5bb20d53d4351e4502010a69");
        //    } //pushing HK upper to M4A1
        }
    }


}
