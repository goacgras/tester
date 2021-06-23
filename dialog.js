import React, { useState, cloneElement } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { FormattedMessage } from "react-intl";
import Button from "../Button/ButtonOval";

import { useStyles } from "./styles";

const EmptyDialog = ({
  isOpen,
  handleClose,
  titleTextId,
  titleTextDefault,
  titleIcon,
  children,
  onHandleSubmit,
  submitButtonTextId,
  submitButtonTextDefault,
  submitButtonIcon,
  cancelButtonTextId,
  cancelButtonTextDefault,
  showDeleteButton,
  onDeleteHandler
}) => {
  const [dataForm, setDataForm] = useState({});
  const style = useStyles();

  const submitButtonHandler = () => {
    onHandleSubmit(dataForm);
  };

  const deleteButtonHandler = () => {
    onDeleteHandler(dataForm);
  };

  return (
    <>
      <Dialog
        fullWidth
       // classes={{ paper: style.dialogBox }}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-empty-dialog"
      >
        <DialogTitle className={style.dialogTitleWrapper} id="empty-dialog-title">
          <Grid container>
            <Grid item>
              <span className={style.eventNoteWrapper}>
                {
                  cloneElement(titleIcon, {
                    className: style.eventNoteIcon
                  })
                }
              </span>
            </Grid>
            <Grid item xs={11}>
              <Typography className={style.dialogTitle}>
                <FormattedMessage id={titleTextId} defaultMessage={titleTextDefault} />
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {
             cloneElement(children, {
               setDataForm
             })
          }
        </DialogContent>
        <DialogActions className={style.dialogAction}>
          <div>
            {
              showDeleteButton && (
                <Button
                  onClick={deleteButtonHandler}
                  variant="outlined"
                  startIcon={<DeleteForeverIcon className={style.deleteButtonIcon} />}
                  className={style.deleteButton}
                >
                  <FormattedMessage id="app.general.delete" defaultMessage="Delete" />
                </Button>
              )
            }

          </div>
          <div>
            <Button
              onClick={handleClose}
              color="primary"
              variant="outlined"
              className="cancel-button"
            >
              <FormattedMessage id={cancelButtonTextId} defaultMessage={cancelButtonTextDefault} />
            </Button>
            <Button
              data-testid="empty-submit-btn"
              variant="contained"
              onClick={submitButtonHandler}
              color="primary"
              startIcon={cloneElement(submitButtonIcon, { className: style.applyButtonIcon })}
              className={style.applyButton}
            >
              <FormattedMessage id={submitButtonTextId} defaultMessage={submitButtonTextDefault} />
            </Button>
          </div>

        </DialogActions>
      </Dialog>

    </>
  );
};

export default EmptyDialog;
