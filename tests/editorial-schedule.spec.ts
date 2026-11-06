import {test,expect} from "@playwright/test";
import {scheduleCandidates} from "../lib/editorial/schedule";
test("resolves site time independently of the browser and requires a choice at the autumn clock change",()=>{
 expect(scheduleCandidates("2026-11-01T11:00","Europe/Paris")).toEqual([{iso:"2026-11-01T10:00:00.000Z",offset:"GMT+01:00"}]);expect(scheduleCandidates("2027-03-28T02:30","Europe/Paris")).toEqual([]);expect(scheduleCandidates("2027-10-31T02:30","Europe/Paris").map(value=>value.iso)).toEqual(["2027-10-31T00:30:00.000Z","2027-10-31T01:30:00.000Z"]);
});
