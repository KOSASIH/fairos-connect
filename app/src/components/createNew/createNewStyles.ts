import { makeStyles, createStyles } from "@material-ui/styles";
// import interface for component Props and Theme
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./createNew";

const useStyles = makeStyles(() =>
  createStyles({
    NewCard: {
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
      backgroundColor: (style: Props & Theme) => style.backgroundDark,
      width:"50rem",
      height:"30rem",
      display: "flex",
      flexDirection: "column",
      padding:"2.5rem"
    },
    Title:{
      alignItems: "left",
      font:(style: Props & Theme) => style.typography.h2,
      color:(style: Props & Theme) => style.textColorMain,
      borderBottom: "1px solid var(--grey)"
    },
    Body:{
      margin: '5rem 0 0 0',
      font:(style: Props & Theme) => style.typography.p1,
      color:(style: Props & Theme) => style.textColorMain,

    }
  })
);

export default useStyles;
