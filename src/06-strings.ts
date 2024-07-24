(() => {
  let productTitle = 'My amazing product';
  // productTitle = null; // Error
  // productTitle = 123; // Error

  productTitle = 'My amazing product v2';
  console.log({ productTitle });

  const productDescription = "My amazing product's description";
  console.log({ productDescription });

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
  `;
  console.log({ summary });
})();
