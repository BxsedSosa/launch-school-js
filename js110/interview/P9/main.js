let countSubstrings = (string, key) => {
  const RE = new RegExp(key);
  let count = 0;
  let left = 0;

  while (left < string.length) {
    let right = key.length + left;

    if (right > string.length) break;

    if (RE.test(string.slice(left, right))) {
      count += 1;
      left = right;
      continue;
    }

    left += 1;
  }
  return count;
};

const p = console.log;
p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
