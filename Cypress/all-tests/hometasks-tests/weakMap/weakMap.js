let activeUsers = [
    {name: "Вася"},
    {name: "Петя"},
    {name: "Маша"}
];
     it('Arrays', () => {
         let weakMap = new WeakMap();

         weakMap.set(activeUsers[0], 1);
         weakMap.set(activeUsers[1], 2);
         weakMap.set(activeUsers[2], 3);

         activeUsers.splice(0, 1);
         cy.log(weakMap.has(activeUsers[2]))
})