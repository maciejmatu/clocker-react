import React from "react";
import { reportError } from "./setupErrorLogger";

// const apiPath = "https://clocker-next.maciejmatu.now.sh/api";
const apiPath = "http://localhost:3000/api";

export function TimeComponent({ delay = 100, location = "Europe/Berlin" }) {
  const [{ datetime }, setTimeData] = React.useState({});
  const [isLoadingTime, setLoadingTime] = React.useState(false);

  React.useEffect(() => {
    setLoadingTime(true);
    fetch(
      `${apiPath}/time?delay=${delay}&location=${encodeURIComponent(location)}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(data => {
        setLoadingTime(false);
        setTimeData(data);
      })
      .catch(reportError);
  }, [delay, location]);

  if (!isLoadingTime && datetime) {
    console.log(datetime);
    const date = datetime.slice(0, 10);
    const time = datetime.slice(11, 19);
    const millisecondsAndTimeZone = datetime.slice(20, 29);

    return (
      <p>
        The time in <strong>{location}</strong> is {date},{" "}
        <strong>{time}</strong>, {millisecondsAndTimeZone}
      </p>
    );
  }

  return <p>Loading {location} time...</p>;
}
