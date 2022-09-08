import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "0 5%",
    paddingBottom: 24,
    width: "100%",
    margin: 0,
    fontSize: "18",
    fontFamily: "system-ui",
  },
});
