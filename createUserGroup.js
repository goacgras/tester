import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import { FormattedMessage } from "react-intl";
import Check from "@material-ui/icons/Check";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Button from "../../components/Button/ButtonOval";

import PageTitle from "../../components/PageTitle/index";
import EmptyDialog from "../../components/Dialog";
import GroupRegistrationForm from "../../components/Form/GroupRegistration";
import AlertDialog from "../../components/AlertDialog";
import { submitUserGroup } from "./HelperFunction";

const UserSettingPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [dataForm, setDataForm] = useState(null);

  const closeFormHandler = () => {
    setOpenForm(false);
    setFormIsValid(true);
  };

  const handleSubmit = (data) => {
    if (data.name.trim() === "") {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
      setConfirmationDialog((prevState) => !prevState);
      setDataForm(data);
    }
  };

  const confirmationDialogSuccess = async () => {
    const res = await submitUserGroup({ dataForm });
    if (!res) {
      console.log("something went wrong");
    }
    setConfirmationDialog((prevState) => !prevState);
    setDataForm(null);
    setOpenForm(false);
  };

  const confirmationDialogFooter = (
    <Grid container direction="row" spacing={2} justify="center">
      <Grid item>
        <Button
          onClick={() => setConfirmationDialog((prevState) => !prevState)}
          variant="outlined"
          color="primary"
          data-testid="btn-cancel"
          className="cancel-button"
        >
          <FormattedMessage id="app.general.cancel" defaultMessage="Cancel" />
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={confirmationDialogSuccess}
          variant="contained"
          data-testid="btn-display-list"
          color="primary"
          icon={<Check />}
        >
          <FormattedMessage id="app.general.confirm" defaultMessage="Confirm" />
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <PageTitle
          title={<FormattedMessage id="app.containers.Group.Registration.title" defaultMessage="Custom Fields Setting" />}
          buttonDirection="left"
        />
      </Grid>
      <button type="button" onClick={() => setOpenForm(true)}>Open</button>
      {/* Form Dialog */}
      <EmptyDialog
        isOpen={openForm}
        handleClose={closeFormHandler}
        titleTextId="app.containers.Group.Registration.title"
        titleTextDefault="Group Registration"
        onHandleSubmit={handleSubmit}
        submitButtonTextId="app.general.save"
        submitButtonTextDefault="Save"
        cancelButtonTextId="app.general.discard"
        cancelButtonTextDefault="Discard"
        submitButtonIcon={<FlashOnIcon />}
        titleIcon={<EventNoteIcon />}
      >
        {/* User Group Form */}
        <GroupRegistrationForm isFormValid={formIsValid} reset={!dataForm} />
      </EmptyDialog>
      {/* Confirmation Dialog */}
      <AlertDialog isOpenDialog={confirmationDialog} footer={confirmationDialogFooter}>
        <Grid
          container
          direction="column"
          spacing={2}
        >
          <Grid item>
            <CheckCircleOutline color="primary" fontSize="large" />
          </Grid>
          <Grid item>
            <h2><FormattedMessage id="app.containers.CustomField.confirm.add.title" /></h2>
          </Grid>
          <Grid item>
            <FormattedMessage id="app.containers.CustomField.confirm.add.subTitle" />
          </Grid>
        </Grid>
      </AlertDialog>
    </Grid>
  );
};

export default UserSettingPage;
