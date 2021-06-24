import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  fieldNameJPContainer: {
    fontSize: "14px",
    marginTop: "16px",
    height: "100%",
  },
  fieldNameJPTitle: {
    fontSize: "14px",
    paddingLeft: "14px",
    fontWeight: "bold"
  },
  fieldNameJP: {
    fontSize: "14px",
    marginTop: "4px",
    width: "100%",
    borderRadius: "18px",
    padding: "0 18px",
    border: `0.5px solid ${theme.palette.olive.textColorThree}`
  },
  fieldNameENContainer: {
    marginTop: "16px",
  },
  fieldNameENTitle: {
    fontSize: "14px",
    paddingLeft: "14px",
  },
  fieldNameEN: {
    fontSize: "14px",
    marginTop: "4px",
    width: "100%",
    borderRadius: "18px",
    padding: "0 18px",
    border: `0.5px solid ${theme.palette.olive.textColorThree}`
  },
  fieldMemoContainer: {
    marginTop: "16px",
  },
  fieldMemoTitle: {
    fontSize: "14px",
    paddingLeft: "14px",
  },
  fieldMemo: {
    fontSize: "14px",
    marginTop: "4px",
    width: "100%",
    borderRadius: "18px",
    padding: "10px 18px",
    border: `0.5px solid ${theme.palette.olive.textColorThree}`
  },
  fieldGroupTypeContainer: {
    marginTop: "22px",
  },
  fieldGroupTypeTitle: {
    fontSize: "14px",
    paddingLeft: "14px",
    fontWeight: "bold"
  },
  fieldError: {
    border: `1px solid ${theme.palette.olive.red}`,
  },
  errorText: {
    fontSize: 12,
    marginLeft: 20,
    color: theme.palette.olive.red
  },
}));
