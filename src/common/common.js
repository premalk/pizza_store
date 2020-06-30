export const arrayOfPizzas = (title, short_description, quantity, price, id, oldArray) => {
  let obj = oldArray;
  obj[id] = {
    id,
    title,
    short_description,
    quantity,
    price,
  }
  return obj;
};
