function vowelCount(string) {
    let vowels = "aeiouAEIOU";
    let map = {};
  
    for (let i = 0; i < string.length; i++) {
      if (vowels.indexOf(string[i]) !== -1) {
        if (!map[string[i]]) {
          map[string[i]] = 1;
        } else {
          map[string[i]]++;
        }
      }
    }
  
    return map;
  }

  console.log(vowelCount("mynameisamaan"));