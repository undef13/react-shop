export default class ShopService {

  data = [
    {
      id: 1,
      title: "Book",
      author: "Valeriia Sushchenko",
      price: 23
    },
    {
      id: 2,
      title: "Book 2",
      author: "Valeriia Sushchenko",
      price: 75
    }
  ];

  getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Oops"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}