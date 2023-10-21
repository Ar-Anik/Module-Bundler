console.log("New Introduce in Parcel");
import("./about.js").then((module) => {
  console.log(module);
  module.render();
});
