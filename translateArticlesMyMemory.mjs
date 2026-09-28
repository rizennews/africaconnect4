import fs from 'fs';
import https from 'https';

async function translateText(text, targetLang) {
  if (!text) return text;
  if (Array.isArray(text)) {
    const res = [];
    for (const t of text) res.push(await translateText(t, targetLang));
    return res;
  }
  if (typeof text !== 'string') return text;
  
  // We can't translate very long strings easily without chunking, but these are small.
  try {
    const res = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|' + targetLang);
    const json = await res.json();
    if (json.responseData && json.responseData.translatedText) {
       // MyMemory has a weird bug where it returns rate limits inside translatedText sometimes
       if (json.responseData.translatedText.includes('MYMEMORY WARNING')) {
         console.warn('MyMemory Warning:', json.responseData.translatedText);
         return text; 
       }
       return json.responseData.translatedText;
    }
    return text;
  } catch (e) {
    console.error('Error translating:', text.substring(0, 20), e.message);
    return text;
  }
}

async function translateArticle(article, targetLang) {
  const translated = JSON.parse(JSON.stringify(article));
  
  translated.title = await translateText(article.title, targetLang);
  
  if (translated.tableOfContents) {
    for (const toc of translated.tableOfContents) {
      toc.title = await translateText(toc.title, targetLang);
    }
  }
  
  if (translated.content) {
    if (translated.content.intro) {
      translated.content.intro = await translateText(translated.content.intro, targetLang);
    }
    
    if (translated.content.sections) {
      for (const section of translated.content.sections) {
        if (section.heading) section.heading = await translateText(section.heading, targetLang);
        if (section.paragraphs) section.paragraphs = await translateText(section.paragraphs, targetLang);
        if (section.quote) {
          section.quote.text = await translateText(section.quote.text, targetLang);
          section.quote.author = await translateText(section.quote.author, targetLang);
        }
      }
    }
    
    if (translated.content.cta) {
      translated.content.cta.label = await translateText(translated.content.cta.label, targetLang);
      translated.content.cta.linkText = await translateText(translated.content.cta.linkText, targetLang);
    }
  }
  
  return translated;
}

async function main() {
  const { ARTICLES } = await import('./src/data/articles.js');
  
  console.log('Translating to French...');
  const articlesFr = [];
  for (const a of ARTICLES) articlesFr.push(await translateArticle(a, 'fr'));
  
  console.log('Translating to Portuguese...');
  const articlesPt = [];
  for (const a of ARTICLES) articlesPt.push(await translateArticle(a, 'pt'));
  
  const header = `import { ArticleData } from './articles';\n\n`;
  
  fs.writeFileSync('./src/data/articles_fr.ts', header + `export const ARTICLES_FR: ArticleData[] = ` + JSON.stringify(articlesFr, null, 2) + `;\n`);
  fs.writeFileSync('./src/data/articles_pt.ts', header + `export const ARTICLES_PT: ArticleData[] = ` + JSON.stringify(articlesPt, null, 2) + `;\n`);
  console.log('Done!');
}

main().catch(console.error);
