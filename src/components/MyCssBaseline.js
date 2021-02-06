import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  "@global": {
    body: {
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.background.md,
      },
      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.palette.background.sm,
      },
      [theme.breakpoints.down("xs")]: {
        backgroundColor: theme.palette.background.xs,
      },
    },
  },
});

function MyCssBaseline() {
  return null;
}

MyCssBaseline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCssBaseline);
