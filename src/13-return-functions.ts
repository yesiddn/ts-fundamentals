(() => {
  // es buena practica hacer un retorno explicito de las funciones ya que se "firma un contrato" de que siempre se va a retornar un valor de un tipo especifico
  const calcTotal = (prices: number[]): string => {
    let total = prices.reduce((acc, price) => acc + price, 0);
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const response = calcTotal(prices);
    console.log(`Total: ${response}`);
  }

  const response = calcTotal([100, 200, 300]);
  console.log(`Response: ${response}`);

  printTotal([50, 100, 150]);
})();
