// export const someFunction = () => {
//     let newValue = new LargeObject();
//     newValue.callSomeMethod();
// }

let newValue
export const someFunction = () => {
    newValue = new LargeObject();
    newValue.callSomeMethod();
}