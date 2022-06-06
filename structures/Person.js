class Person {
  constructor(name, age, traits) {
    this.name = name;
    this.age = age;
    this.traits = traits;
    this.currentEmotion = "happy";
    this.friends = [];
  }

  think(event) {
    switch (event) {
      case "death": // of someone else
        if (this.traits["painless"]) {
          this.currentEmotion = "happy";
          break;
        }
        if (this.currentEmotion == "sad") {
          this.currentEmotion = "depressive";
          break;
        }
        this.currentEmotion = "sad";
        break;
      case "birthday":
        if (this.currentEmotion == "happy") {
          this.currentEmotion = "excentric";
          break;
        }
        if (this.currentEmotion == "depressive") {
          this.currentEmotion = "depressive";
          break;
        }
        this.currentEmotion = "happy";
        this.age += 1;
        break;
      case "murder":
        if (this.currentEmotion == "depressive") {
          this.currentEmotion = "happy";
          break;
        }
        this.currentEmotion = "fear";
        this.kill();
        break;
    }
  }
  kill() {}
}


module.exports = {Person}