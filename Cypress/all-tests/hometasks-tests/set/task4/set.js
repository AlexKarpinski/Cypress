let currencySet = new Set(['USD', 'RUR', 'BYN']);

console.log('Set has USD value: ' + currencySet.has('USD'));
currencySet.delete('USD');
console.log('Set has USD value: ' + currencySet.has('USD'));
