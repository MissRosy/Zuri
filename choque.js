AFRAME.registerComponent("choque", {
  schema: {
    elementId: { type: "string", default: "#niño1" },
  },

  update: function () {
    this.isCollided(this.data.elementId);
  },

  isCollided: function (elementId) {
      console.log(elementId)
    const element = document.querySelector(elementId);
    console.log(element)
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#niño")) {
        console.log("Atropellaste al niño");
      } 
      else if (elementId.includes("#gato")) {
        console.log("Y también al gato");
      } 
    });
  },
});