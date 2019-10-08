import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import overrides from './overrides'
export const theme = createMuiTheme({
  palette,
  overrides: {
    MuiChip: {
      clickableColorSecondary: {
        "&:hover, &:focus": {
          backgroundColor: "#4DB6AC"
        },
        "&:focus": {
          backgroundColor: "#00695C"
        }
      }
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
})