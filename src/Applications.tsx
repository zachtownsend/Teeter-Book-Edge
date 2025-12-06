import React from "react";
import TSingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import { ISingleApplication } from "./types";

const Applications = ({
  applications,
}: {
  applications: ISingleApplication[];
}) => {
  return (
    <div className={styles.Applications}>
      {applications.map((application) => (
        <TSingleApplication key={application.id} application={application} />
      ))}
    </div>
  );
};

export default Applications;
