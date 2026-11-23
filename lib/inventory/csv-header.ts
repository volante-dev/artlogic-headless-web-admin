/** Only the first CSV record is inspected in the browser; the server validates every row. */
export function inventoryCsvHeader(text:string,delimiter:","|";"){
 const cells:string[]=[];let value="",quoted=false,closed=false;const source=text.replace(/^\uFEFF/,"");
 for(let index=0;index<source.length;index++){
  const character=source[index]!;
  if(quoted){if(character==='"'){if(source[index+1]==='"'){value+='"';index++;}else{quoted=false;closed=true;}}else value+=character;continue;}
  if(character==='"'){if(value||closed)throw new Error("csv_header_invalid");quoted=true;continue;}
  if(character===delimiter||character==='\r'||character==='\n'){cells.push(value);value="";closed=false;if(character!==delimiter)return checked(cells);continue;}
  if(closed)throw new Error("csv_header_invalid");value+=character;
 }
 if(quoted)throw new Error("csv_header_incomplete");cells.push(value);return checked(cells);
}
function checked(cells:string[]){if(cells.length>256||cells.some(cell=>!cell||cell!==cell.trim()||cell.length>200||/[\0\r\n]/.test(cell))||new Set(cells).size!==cells.length)throw new Error("csv_header_invalid");return cells;}
