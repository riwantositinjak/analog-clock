// selector
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");
const jam = document.getElementById("jam");

// function
const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;
  detik.style.transform = `rotate(${seconds * timeInterval}deg)`;
  menit.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
  jam.style.transform = `rotate(${hours * 30}${minutes / 2}deg)`;

  console.log(seconds)
};
setInterval(getTime, 1000);
