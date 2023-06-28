function adPrompt(productName, productDesc, productTarget) {
  const prompt = `Use a product name, a product description and a target market to create advertising copy for a product.
    ###
    product name: Flask Tie
    product description: A tie with a pouch to hold liquids and a straw to drink through
    product traget market: office workers
    advertising copy: Are you tired of having to worry about how much to drink throughout the day? With the Flask Tie, you can stay hydrated on-the-go! Our unique tie features a pouch that enables you to securely hold and sip your favorite drinks with the built-in straw! The water cooler is history! Long live Flask Tie!
    ###
    product name: SolarSwim
    product description: Swimming costumes for all genders with solar cells to charge your devices while you sunbathe.
    product traget market: Aimed at young adults
    advertising copy: Don't miss a beat while you're having fun in the sun! SolarSwim is the perfect choice for the tech-savvy, on-the-go millennial. Our innovative swimming costumes come with integrated solar cells that allow you to charge and access your devices while you're at the beach or pool. Enjoy your summer break with SolarSwim!  
    ###
    product name: ${productName}
    product description: ${productDesc}
    product traget market: ${productTarget}
    advertising copy: 
    `;
  // prompt: `Create 50 words of advertising copy for ${productName}, which can be described as ${productDesc} aimed at ${productTarget}.`
  return prompt;
}

export { adPrompt };
