import React, { useState } from "react";
import { Modal } from "../../components";
import { Grid, Grow, Typography, Button } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  if (!articles.length) {
    return (
      <React.Fragment>
        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {infoCards.map((infoCard, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.infoCard}
              >
                <div
                  className={classes.card}
                  style={{ backgroundColor: infoCard.color }}
                >
                  <Typography variant="h5" component="h5">
                    {infoCard.title}
                  </Typography>
                  {infoCard.info && (
                    <div>
                      <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                      {infoCard.info}
                    </div>
                  )}
                  <div>
                    Try saying: <br /> <i>{infoCard.text}</i>
                  </div>
                </div>
              </Grid>
            ))}

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </Grid>
        </Grow>
        <Typography m={2} align="center">
          <Button
            variant="contained"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Do you need help?
          </Button>
        </Typography>
      </React.Fragment>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
