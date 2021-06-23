import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import { FormHelperText } from "@material-ui/core";
import { useStyles } from "./styles";

const GroupRegistrationForm = ({ setDataForm, isFormValid, reset }) => {
  const [groupNameJP, setGroupNameJP] = useState("");
  const [groupNameEN, setGroupNameEN] = useState("");
  const [groupMemo, setGroupMemo] = useState("");
  const [groupType, setGroupType] = useState("executive");

  const style = useStyles();

  const groupTypeChangeHandler = (e) => {
    setGroupType(e.target.value);
  };

  useEffect(() => {
    if (reset) {
      setGroupNameJP("");
      setGroupNameEN("");
      setGroupMemo("");
      setGroupType("executive");
    }
  }, [reset]);

  useEffect(() => {
    setDataForm({
      name: groupNameJP,
      nameEn: groupNameEN,
      classification: groupType,
      memo: groupMemo
    });
  }, [groupNameEN, groupNameJP, groupMemo, groupType]);

  return (
    <form>
      <div>
        <div className={style.fieldNameJPContainer}>
          <Typography
            className={style.fieldNameJPTitle}
          >
            Group Name (JP)
          </Typography>
        </div>
        <div>
          <Input
            data-testid="group-registration-form-field-name-jp"
            className={clsx(style.fieldNameJP, { [style.fieldError]: !isFormValid })}
            value={groupNameJP}
            onChange={(e) => setGroupNameJP(e.target.value)}
            disableUnderline
            name="nameJp"
            required

          />
          {
            !isFormValid && (
              <FormHelperText className={style.errorText}>
                *Required
              </FormHelperText>
            )
          }
        </div>
        <div className={style.fieldNameENContainer}>
          <Typography
            className={style.fieldNameENTitle}
          >
            Group Name (EN)
          </Typography>
        </div>
        <div>
          <Input
            data-testid="group-registration-form-field-name-en"
            className={style.fieldNameEN}
            value={groupNameEN}
            onChange={(e) => setGroupNameEN(e.target.value)}
            disableUnderline
            name="nameJp"
          />
        </div>
        <div className={style.fieldMemoContainer}>
          <Typography
            className={style.fieldMemoTitle}
          >
            Memo
          </Typography>
        </div>
        <div>
          <Input
            data-testid="group-registration-form-memo"
            className={style.fieldMemo}
            value={groupMemo}
            onChange={(e) => setGroupMemo(e.target.value)}
            disableUnderline
            name="nameJp"
            multiline
            rows="5"
            type="string"
          />
        </div>
      </div>
      <div className={style.fieldGroupTypeContainer}>
        <Typography className={style.fieldGroupTypeTitle}>
          Group Type
        </Typography>
        <div>
          <RadioGroup row aria-label="group-type" value={groupType} onChange={groupTypeChangeHandler}>
            <FormControlLabel value="executive" control={<Radio />} label="Executive" />
            <FormControlLabel value="user" control={<Radio />} label="User" />
          </RadioGroup>
        </div>
      </div>
    </form>
  );
};

export default GroupRegistrationForm;
