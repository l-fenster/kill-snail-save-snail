class Defence {
  constructor() {
    const originalElements = ["Fire", "Water", "Rock"];
    const secondaryElement = ["Metal", "Mist", "Tree"];
    const tertiaryElement = [""];
    const possibleDefences = [
      "Bucket of Water",
      "Rain",
      "Sword",
      "Antidote",
      "Wet Rocks",
      "Torch",
      "Spear",
      "Gun",
      "Spear",
    ];
    this.fire = document.getElementById("element-a");
    this.water = document.getElementById("element-b");
    this.rock = document.getElementById("element-c");
    this.metal = document.getElementById("element-ab");
    this.mist = document.getElementById("element-bc");
    this.tree = document.getElementById("element-ac");
  }
  makeMetal(element) {
    this.element.classList.add("show");
  }
  onDragStart(event) {
    event.dataTransfer;
    event.setData("plain/text", event.target.id);
    event.currentTarget;
    event.style;
    event.backgroundColor = "yellow";
  }
}
