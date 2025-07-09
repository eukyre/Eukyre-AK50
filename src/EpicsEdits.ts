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
            if (fileData._id === "5f6331e097199b7db2128dc2") {
                fileData._props.Slots[2]._props.filters[0].Filter.push("8141dda48ee834e98dc52e7c");
            } //Eotech 551 into tdi x47 chassis
            if (fileData._id === "628a83c29179c324ed269508") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("8141dda48ee834e98dc52e7c");
            } //Eotech 551 into RD704 GT
            if (fileData._id === "649ec127c93611967b034957") {
                fileData._props.Slots[1]._props.filters[0].Filter.push("8141dda48ee834e98dc52e7c");
            } //Eotech 551 into AK12 HG
            if (fileData._id === "653ecd065a1690d9d90491e6") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("8141dda48ee834e98dc52e7c");
            } //Eotech 551 into Tapco DC
            if (fileData._id === "653ece125a1690d9d90491e8") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("8141dda48ee834e98dc52e7c");
            } //Eotech 551 into FAB Defense UAS DC
            if (fileData._id === "5c501a4d2e221602b412b540") {
                fileData._props.Slots[5]._props.filters[0].Filter.push("40fb68bd04fb29edb9495dfb");
            } //Zenit B13N to Vepr Hunter
        }
    }


}
