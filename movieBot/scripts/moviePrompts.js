function botReplyPrompt(userInput) {
  const prompt = `Generate a short message to enthusiastically say an outline sounds interesting and that you need some minutes to think about it.
    ###
    outline: Two dogs fall in love and move to Hawaii to learn to surf.
    message: I'll need to think about that. But your idea is amazing! I love the bit about Hawaii!
    ###
    outline: A plane crashes in the jungle and the passengers have to walk 1000km to safety.
    message: I'll spend a few moments considering that. But I love your idea!! A disaster movie in the jungle!
    ###
    outline: A group of corrupt lawyers try to send an innocent woman to jail.
    message: Wow that is awesome! Corrupt lawyers, huh? Give me a few moments to think!
    ###
    outline: ${userInput}
    message: 
    `;
  // `Generate a short message to enthusiastically say "${userPrompt}" sounds interesting and that you need some minutes to think about it. Mention one aspect of the sentence.`,
  return prompt;
}

function synopsisPrompt(userInput) {
  const prompt = `Generate an engaging, professional and marketable movie synopsis based on an outline
  ###
  outline: A big-headed daredevil fighter pilot goes back to school only to be sent on a deadly mission.
  synopsis: The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman. But Maverick isn't only competing to be the top fighter pilot, he's also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood. Maverick gradually earns the respect of his instructors and peers - and also the love of Charlotte, but struggles to balance his personal and professional life. As the pilots prepare for a mission against a foreign enemy, Maverick must confront his own demons and overcome the tragedies rooted deep in his past to become the best fighter pilot and return from the mission triumphant.
  ###
  outline: ${userInput}
  synopsis: 
  `;
  // `Generate an engaging, professional and marketable movie synopsis based on the following idea: ${userPrompt}`,;
  return prompt;
}

function titlePrompt(synopsis) {
  const prompt = `Generate a catchy movie title for this synopsis: ${synopsis} which is less than 6 words`;
  return prompt;
}

function imagePrompt(title, synopsis) {
  const prompt = `Give a short description of an image which could be used to advertise a movie based on a title and synopsis. The description should be rich in visual detail but contain no names.
  ###
  title: Love's Time Warp
  synopsis: When scientist and time traveller Wendy is sent back to the 1920s to assassinate a future dictator, she never expected to fall in love with them. As Wendy infiltrates the dictator's inner circle, she soon finds herself torn between her mission and her growing feelings for the leader. With the help of a mysterious stranger from the future, Wendy must decide whether to carry out her mission or follow her heart. But the choices she makes in the 1920s will have far-reaching consequences that reverberate through the ages.
  image description: A silhouetted figure stands in the shadows of a 1920s speakeasy, her face turned away from the camera. In the background, two people are dancing in the dim light, one wearing a flapper-style dress and the other wearing a dapper suit. A semi-transparent image of war is super-imposed over the scene.
  ###
  title: zero Earth
  synopsis: When bodyguard Kob is recruited by the United Nations to save planet Earth from the sinister Simm, an alien lord with a plan to take over the world, he reluctantly accepts the challenge. With the help of his loyal sidekick, a brave and resourceful hamster named Gizmo, Kob embarks on a perilous mission to destroy Simm. Along the way, he discovers a newfound courage and strength as he battles Simm's merciless forces. With the fate of the world in his hands, Kob must find a way to defeat the alien lord and save the planet.
  image description: A tired and bloodied bodyguard and hamster standing atop a tall skyscraper, looking out over a vibrant cityscape, with a rainbow in the sky above them.
  ###
  title: ${title}
  synopsis: ${synopsis}
  image description: 
  `;
  return prompt;
}

function imageUrlPrompt(imagePrompt) {
  const prompt = `${imagePrompt} & avoid adding text in the image`;
  return prompt;
}

export {
  botReplyPrompt,
  synopsisPrompt,
  titlePrompt,
  imagePrompt,
  imageUrlPrompt,
};

//  ### is the seprator between the inputs. we can ues either """" or ### as seperator
// while using createCompletion we can give some sampel inputs along with our prompts, the model will complete the prompt as the above inputs given to it.
