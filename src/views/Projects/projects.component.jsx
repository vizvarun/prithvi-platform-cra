import React from "react";
import { Link } from "react-router-dom";
import "./projects.styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ProjectList from "./project-list";

const useStyles = makeStyles({
  root: {
    minWidth: "fit-content",
    minHeight: "60vh",
    textAlign: "center",
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <div className="project-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/home">
            <ArrowBackIcon
              style={{ width: "16px", height: "16px", marginTop: "5px" }}
            />
          </Link>
          <p style={{ paddingLeft: "20px" }}>Projects</p>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <Card className={classes.root}>
            <CardContent>
              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card className={classes.root}>
            <Link to="/createProject">
              <CardContent style={{ cursor: "pointer" }}>
                <AddCircleIcon fontSize="large" style={{ color: "#F07C37" }} />
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
