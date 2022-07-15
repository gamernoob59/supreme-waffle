AFRAME.registerComponent("flying-birds", {
    init: function () {
      for (var i = 1; i <= 50; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = (Math.random()*200+(-100));
        var posY = Math.floor(Math.random() * 2+5);
        var posZ = (Math.random()*200+-100);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.flyingBirds(id, position);
      }
    },
    flyingBirds: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      //creating the bird model entity
      var birdEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      birdEl.setAttribute("id", id);
  
      birdEl.setAttribute("position", position);
      birdEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
  
      birdEl.setAttribute("gltf-model", "./assets/models/fish/fish.gltf");
  
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(birdEl);
    }
  });
  