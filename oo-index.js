class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

    attack() {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
      eventArea.prepend(div);
      imageArea.className = 'attack';
    }
  }



let mary = new Unicorn('mary', 'batman')



const attackButton = document.getElementById('attack').addEventListener("click", mary.attack)
