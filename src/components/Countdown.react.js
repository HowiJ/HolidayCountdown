/**
 * @format
 */

import React from "react";

import moment from "moment";
import plural from "../utils/plural";

const now = new Date();

/*
 * type Props
 *    year: number | string
 *    month: number | string
 *    day: number | string
 *    period: 'day' | 'month' | 'year'
 */

const Countdown = ({
  year = now.getFullYear(),
  month = now.getMonth() + 1,
  day,
  period = "day"
}) => {
  const momentTarget = moment(`${year}-${month}-${day}`);
  const momentNow = moment();
  const periodTillTarget = momentTarget.diff(momentNow, period);
  return (
    <span>
      {periodTillTarget} {plural(period, periodTillTarget)}
    </span>
  );
};

export default Countdown;
