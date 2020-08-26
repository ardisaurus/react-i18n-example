import React from "react";
import { FormattedMessage } from "react-intl";
import { MESSAGES } from "../i18n/messages/constant";

export default function report() {
  return (
    <div>
      <FormattedMessage id={MESSAGES.REPORT.REPORT} /> :{2 + 2}
    </div>
  );
}
