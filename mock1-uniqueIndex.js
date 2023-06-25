function uniqueIndex(s) {
    var hashmap = {};
    for (var i = 0; i < s.length; i++){
        if (s[i] in hashmap) {
            hashmap[s[i]] += 1;
        }
        else {
            hashmap[s[i]] = 1;
        }
    }
    for (var i = 0; i < s.length; i++){
        if (hashmap[s[i]] == 1) {
            return i;
        }
    }
    return -1
}

console.log(uniqueIndex('leetcode'));