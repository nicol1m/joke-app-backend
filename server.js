const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

const jokes = {
    cats: [
        "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse!",
        "What is a cat's favorite color? Purr-ple!",
        "What did the cat say when it was confused? 'I'm purr-plexed!'"
    ],
    dogs: [
        "What do you call a cold dog? A chili dog!",
        "Why did the dog sit in the shade? Because it didn't want to be a hot dog!",
        "What kind of dog does Dracula have? A bloodhound!"
    ],
    hamsters: [
        "Why did the hamster sit on the clock? It wanted to be a time traveler!",
        "What do you get when you cross a hamster with a flower? A petal!",
        "What do you call a hamster with a carrot in each ear? Anything you want, it can't hear you!"
    ]
};

app.use(cors());
app.use(bodyParser.json());

app.post('/jokes', (req, res) => {
  console.log('Request received:', req.body);  // Log the request body
  
  const { category } = req.body;

  if (!category || !jokes.hasOwnProperty(category)) {
      console.log('Invalid category:', category);  // Log invalid category
      return res.status(400).json({ error: "Invalid category" });
  }

  const randomIndex = Math.floor(Math.random() * jokes[category].length);
  const joke = jokes[category][randomIndex];
  
  console.log('Sending joke:', joke);  // Log the joke being sent
  res.json({ joke });
});
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
