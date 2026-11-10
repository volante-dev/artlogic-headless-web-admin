import {test,expect} from '@playwright/test';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ArtlogicFeedDate} from '../../components/ArtlogicFeedDate';
test('formats the source wall-clock value without timezone conversion',()=>{
 const html=renderToStaticMarkup(createElement(ArtlogicFeedDate,{value:'2026-11-10 11:28:48'}));
 expect(html).toContain('10/11/2026 à 11:28:48');expect(html).toContain('dateTime="2026-11-10T11:28:48"');expect(html).not.toContain('Z');
});
test('shows an honest empty state for historical imports without metadata',()=>{
 for(const value of [null,undefined,'invalid'])expect(renderToStaticMarkup(createElement(ArtlogicFeedDate,{value}))).toContain('Non disponible');
});
