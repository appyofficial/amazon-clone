export default function randomProducts(list, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let random = list[Math.floor(Math.random() * list.length)];
    arr.push(random);
  }
  return arr;
}
