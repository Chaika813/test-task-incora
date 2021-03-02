import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  },

}));

export default function (props) {
  const classes = useStyles();

  const { id, name, body, email } = props;

  return(
  <List container>
          <React.Fragment >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {email}
                    </Typography>
                    {` - ${body}`}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
          </List>
  )
};