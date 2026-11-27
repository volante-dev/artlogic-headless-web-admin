// Generated from the canonical feature038 runtime registry. Legacy002 is unchanged.
import {runtimeMessageDefinitions} from './message-definitions.generated';
export function languageMessageField(id:string){const definition=runtimeMessageDefinitions.find(message=>message.id===id);if(!definition)throw new Error('unknown_message');return {id:definition.id,label:definition.label,maxLength:definition.maxLength,module:definition.module,parameters:definition.parameters};}
