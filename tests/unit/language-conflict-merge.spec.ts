import {expect,test as it} from '@playwright/test';
import {mergeAuthoredLanguageEdits} from '../../lib/site-languages/merge-edits';
it('reapplies only local edits and keeps another session’s changes to untouched fields',()=>{
 expect(mergeAuthoredLanguageEdits({fr:'Français',en:'English'},{fr:'Français local',en:'English'},{fr:'Français',en:'English remote',it:'Italiano'})).toEqual({fr:'Français local',en:'English remote',it:'Italiano'});
});
it('keeps explicit clears but never resurrects removed fields or overwrites newly introduced fields',()=>{
 expect(mergeAuthoredLanguageEdits({title:'Old',removed:'Before'},{title:null,removed:'Local',newField:'Unaccepted'},{title:'Remote',newField:'Server'})).toEqual({title:null,newField:'Server'});
});
