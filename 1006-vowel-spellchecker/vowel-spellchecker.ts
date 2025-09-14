
type dictionary = { [key: string]: string };

function devowel(word: string): string {
  return word.toLowerCase().replace(/[aeiou]/g, "*");
}

function spellchecker(wordlist: string[], queries: string[]): string[] {

  const exact: dictionary = {};
  const caseInsensitive: dictionary = {};
  const vowel: dictionary = {};

  for (let word of wordlist) {
    if (!(word in exact)) {
      exact[word] = word;
    }
    
    let lower = word.toLowerCase();
    if (!(lower in caseInsensitive)) {
      caseInsensitive[lower] = word;
    }
    

    let vkey = devowel(word);
    if (!(vkey in vowel)) {
      vowel[vkey] = word;
    }
  }

  const result: string[] = [];

  for (let query of queries) {
    if (query in exact) {
    
      result.push(exact[query]);
    } else if (query.toLowerCase() in caseInsensitive) {
      
      result.push(caseInsensitive[query.toLowerCase()]);
    } else if (devowel(query) in vowel) {

      result.push(vowel[devowel(query)]);
    } else {
      result.push("");
    }
  }

  return result;
}