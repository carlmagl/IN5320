import React, { useState } from "react";
import styles from ".././App.module.css";
import moment from "moment";

import { TableRow, TableCell, Tag } from "@dhis2/ui";
import OverviewButton from "./OverviewButtons";
import TrackerButton from "./TrackerButton";

function checkIfCompleted(status) {
  return status === "COMPLETED";
}

function checkIfOverDue(dueDate, status) {
  return moment().diff(dueDate, "days") > 0 && status !== "COMPLETED";
}

function getStatus(dueDate, status) {
  if (moment().diff(dueDate, "days") > 0 && status !== "COMPLETED") {
    return "OVERDUE";
  }
  return status;
}

function checkIfDateHasExpired(dueDate, status) {
  if (moment().diff(dueDate, "days") > 0 && status !== "COMPLETED") {
    return styles.red;
  }
  return "";
}

/* checks if dateRange is an array or one todays date.  */
function findDateFromRange(dateRange) {
  return Array.isArray(dateRange) ? dateRange[1] : dateRange[0];
}

const Case = (props) => {
  const [clikedTracker, setClickedTracker] = useState(false);

  return (
    <>
      <TableRow key={props.caseSubject.trackedEntityInstance}>
        <TableCell
          className={checkIfDateHasExpired(
            props.caseSubject.enrollments[0].events[0].dueDate,
            props.caseSubject.enrollments[0].status
          )}
        >
          {props.caseSubject.enrollments[0].events[0].dueDate
            ? moment(
                props.caseSubject.enrollments[0].events[0].dueDate
              ).fromNow()
            : "N/A"}
        </TableCell>
        <TableCell>
          {props.caseSubject.programOwners[0].program === "uYjxkTbwRNf"
            ? "INDEX"
            : "CONTACT"}
        </TableCell>
        <TableCell>
          {props.caseSubject.attributes.find(
            (element) => element.attribute === "sB1IHYu2xQT"
          ).value
            ? props.caseSubject.attributes.find(
                (element) => element.attribute === "sB1IHYu2xQT"
              ).value
            : "N/A"}
        </TableCell>
        <TableCell>
          {props.caseSubject.attributes.find(
            (element) => element.attribute === "ENRjVGxVL6l"
          ).value
            ? props.caseSubject.attributes.find(
                (element) => element.attribute === "ENRjVGxVL6l"
              ).value
            : "N/A"}
        </TableCell>
        <TableCell>
          {props.caseSubject.attributes.find(
            (element) => element.attribute === "fctSQp5nAYl"
          )
            ? props.caseSubject.attributes.find(
                (element) => element.attribute === "fctSQp5nAYl"
              ).value
            : "N/A"}
        </TableCell>
        <TableCell>
          <Tag
            dataTest="dhis2-uicore-tag"
            positive={checkIfCompleted(props.caseSubject.enrollments[0].status)}
            negative={checkIfOverDue(
              props.caseSubject.enrollments[0].events[0].dueDate,
              props.caseSubject.enrollments[0].status
            )}
          >
            {getStatus(
              props.caseSubject.enrollments[0].events[0].dueDate,
              props.caseSubject.enrollments[0].status
            )}
          </Tag>
        </TableCell>
        <TableCell>
          {props.caseSubject.programOwners[0].program === "uYjxkTbwRNf" ? (
            <OverviewButton
              setClickedModal={props.setClickedModal}
              name="Overview"
              caseSubject={props.caseSubject.enrollments[0].status}
            />
          ) : (
            ""
          )}
        </TableCell>
        <TableCell>
          <TrackerButton
            setClickedTracker={setClickedTracker}
            name="Tracker Capture"
            data={props.caseSubject.enrollments[0].trackedEntityInstance}
            program={props.caseSubject.programOwners[0].program}
          />
        </TableCell>
      </TableRow>
    </>
  );
};

export default Case;