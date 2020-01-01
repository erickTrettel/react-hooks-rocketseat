import React, { useState, useEffect } from "react";

export default function Location() {
  // component state
  const [location, setLocation] = useState({});

  // componentDidMount
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    // componentDidUnmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handlePositionReceived = ({ coords: coordinates }) => {
    const { latitude, longitude } = coordinates;

    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
