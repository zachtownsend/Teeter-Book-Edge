import React from "react";
import styles from "./SingleApplication.module.css";
import { ISingleApplication } from "./types";
import formatDate from "./utils/formatDate";
import formatCurrency from "./utils/formatCurrency";

const SingleApplication = ({
  application,
}: {
  application: ISingleApplication;
}) => {
  const formattedDateCreated = formatDate(new Date(application.date_created));
  const formattedExpiryDate = formatDate(new Date(application.expiry_date));
  const formattedLoanAmount = formatCurrency(application.loan_amount);
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formattedLoanAmount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {formattedDateCreated}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formattedExpiryDate}
      </div>
    </div>
  );
};

export default SingleApplication;
