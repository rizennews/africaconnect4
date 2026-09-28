import fs from 'fs';
import https from 'https';

async function translateText(text, targetLang) {
  if (!text) return text;
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + targetLang + '&dt=t&q=' + encodeURIComponent(text);
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed[0].map(x => x[0]).join(''));
        } catch (e) {
          resolve(text);
        }
      });
    }).on('error', () => resolve(text));
  });
}

async function translateEvent(ev, targetLang) {
  const translated = JSON.parse(JSON.stringify(ev));
  translated.title = await translateText(ev.title, targetLang);
  if (ev.description) translated.description = await translateText(ev.description, targetLang);
  
  if (ev.month) {
    // Translate month manually or let Google do it? Google is fine
    translated.month = await translateText(ev.month, targetLang);
  }
  if (ev.location) {
     if (ev.location === 'Virtual') translated.location = targetLang === 'fr' ? 'Virtuel' : 'Virtual';
     else translated.location = await translateText(ev.location, targetLang);
  }
  return translated;
}

async function main() {
  // Read events.ts directly
  let tsContent = fs.readFileSync('./src/data/events.ts', 'utf8');
  // Strip types
  tsContent = tsContent.replace(/export const pastEvents: EventData\[\] = /, 'global.pastEvents = ');
  tsContent = tsContent.replace(/export const presentEvents: EventData\[\] = /, 'global.presentEvents = ');
  tsContent = tsContent.replace(/export const futureEvents: EventData\[\] = /, 'global.futureEvents = ');
  tsContent = tsContent.replace(/import \{ EventData \} from '@\/components\/EventsGrid';/, '');
  
  fs.writeFileSync('./src/data/events_temp.js', tsContent);
  await import('./src/data/events_temp.js');
  
  const { pastEvents, presentEvents, futureEvents } = global;
  
  for (const lang of ['fr', 'pt']) {
    console.log('Translating to ' + lang + '...');
    const pastFr = [];
    for (const e of pastEvents) pastFr.push(await translateEvent(e, lang));
    
    const presentFr = [];
    for (const e of presentEvents) presentFr.push(await translateEvent(e, lang));
    
    const futureFr = [];
    for (const e of futureEvents) futureFr.push(await translateEvent(e, lang));
    
    const content = `import { EventData } from '@/components/EventsGrid';\n\n` +
      `export const pastEvents: EventData[] = ${JSON.stringify(pastFr, null, 2)};\n\n` +
      `export const presentEvents: EventData[] = ${JSON.stringify(presentFr, null, 2)};\n\n` +
      `export const futureEvents: EventData[] = ${JSON.stringify(futureFr, null, 2)};\n`;
      
    fs.writeFileSync('./src/data/events_' + lang + '.ts', content);
  }
  
  fs.unlinkSync('./src/data/events_temp.js');
  console.log('Done!');
}

main().catch(console.error);
