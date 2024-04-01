export const handleLocationClick = () => {
  return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.log("Error retrieving location:", error);
          reject(error);
        }
      );
    } else {
      console.log("Geolocation not supported");
      reject("Geolocation not supported");
    }
  });
};