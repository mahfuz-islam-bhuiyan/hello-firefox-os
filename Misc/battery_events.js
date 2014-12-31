

 battery.addEventListener('chargingchange', function() {
    console.log("Battery charging? " + battery.charging ? "Yes" : "No");
  });

  battery.addEventListener('levelchange', function() {
    console.log("Battery level: " + battery.level * 100 + " %");
  });