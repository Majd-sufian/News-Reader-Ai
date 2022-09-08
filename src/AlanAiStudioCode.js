intent(
  "What does this app do?",
  "What can I do here?",
  reply("This is a  project.")
);

let API_KEY;
let ource = "";
let savedArticles = [];

intent("Give me the  from $(source* (.*))", (p) => {
  let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

  if (p.source.value) {
    NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  }

  api.request(NEWS_API_URL, (error, response, body) => {
    const { articles } = JSON.parse(body);

    if (articles) {
      savedArticles = articles;

      p.play(
        `Here are the (latest|recent) news from ${
          p.source.value && p.source.value
        } .`
      );
      p.play({ command: "newHeadlines", articles });
      p.play("Would you like me to read the headlines?");
      p.then(confirmation);
    } else {
      p.play("Sorry, please try searching for  from a different source");
      return;
    }
  });
});

intent("what's up with $(term* (.*))", (p) => {
  let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

  if (p.term.value) {
    NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`;
  }

  api.request(NEWS_API_URL, (error, response, body) => {
    const { articles, totalResults } = JSON.parse(body);

    if (totalResults > 0) {
      savedArticles = articles;

      p.play({ command: "newHeadlines", articles });
      p.play(`Here are the (latest|recent) articles on ${p.term.value}.`);

      p.play("Would you like me to read the headlines?");
      p.then(confirmation);
    } else {
      p.play("Sorry, please try searching for something else.");
      return;
    }
  });
});

const confirmation = context(() => {
  intent("yes", async (p) => {
    for (let i = 0; i < savedArticles.length; i++) {
      p.play({ command: "highlight", article: savedArticles[i] });
      p.play(`${savedArticles[i].title}`);
    }
  });

  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

intent("open (the|) (article|) (number|) $(number* (.*))", (p) => {
  if (p.number.value) {
    p.play({
      command: "open",
      number: p.number.value,
      articles: savedArticles,
    });
  }
});

intent("(go|) back", (p) => {
  p.play("Sure, going back");
  p.play({ command: "newHeadlines", articles: [] });
});
