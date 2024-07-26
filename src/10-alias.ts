(() => {
  // Alias types
  type UserId = string | number; // la recomendacion es usar pascal case y en lugar de : se usa =
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log('string', userId.toUpperCase());
    }
  }

  // literal types
  type Sizes = 'small' | 'medium' | 'large';
  let shirtSize: Sizes;
  shirtSize = 'small';
  shirtSize = 'medium';
  shirtSize = 'large';
  // shirtSize = 'SMALL'; // error
  // shirtSize = 'extra-large'; // error
})();
