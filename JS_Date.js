let d = new Date();

console.log(d);
let ustime = d.toLocaleTimeString("en-US", {
  timeZone: "America/New_York",
});
console.log(
  d.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  }),
);
