import React from "react";
import { Typography, Divider, Chip } from "@material-ui/core";
import SimpleModal from "@material-ui/core/Modal";
import useStyles from "./styles";

const Modal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={classes.paper}>
        <Typography variant="h3">Instructions</Typography>

        <Divider />

        <br />

        <Typography variant="h5">
          To use the application, you need to click the Alan button in the right
          corner of the screen.
        </Typography>

        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Terms</Typography>
          <div className={classes.chipContainer}>
            {[
              "Bitcoin",
              "PlayStation 5",
              "Smartphones",
              "Donald Trump",
              "Crypto",
              "Football",
              "Corona",
            ].map((source, i) => (
              <Chip
                key={i}
                label={source}
                color="primary"
                className={classes.chip}
              />
            ))}
            <Chip label="...and more" className={classes.chip} />
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: &quot;What's up with{" "}
          <strong>
            <em>PlayStation 5</em>
          </strong>
          &quot;
        </Typography>

        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Sources</Typography>
          <div className={classes.chipContainer}>
            {[
              "CNN",
              "Wired",
              "BBC News",
              "Time",
              "IGN",
              "Buzzfeed",
              "ABC News",
            ].map((source, i) => (
              <Chip
                key={i}
                label={source}
                color="primary"
                className={classes.chip}
              />
            ))}
            <Chip label="...and more" className={classes.chip} />
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: &quot;Give me the news from{" "}
          <strong>
            <em>CNN</em>
          </strong>
          &quot;
        </Typography>
      </div>
    </SimpleModal>
  );
};

export default Modal;
