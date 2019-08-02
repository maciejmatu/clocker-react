import React from "react";
import "./App.css";

export function TimeComponent({ delay = 100, location = "Europe/Berlin" }) {
  const [{ datetime }, setTimeData] = React.useState({});
  const [isLoadingTime, setLoadingTime] = React.useState(false);

  React.useEffect(() => {
    setLoadingTime(true);
    fetch(
      `http://slowwly.robertomurray.co.uk/delay/${delay}/url/http://worldtimeapi.org/api/timezone/${location}`
    )
      .then(res => res.json())
      .then(data => {
        setLoadingTime(false);
        setTimeData(data);
      });
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
