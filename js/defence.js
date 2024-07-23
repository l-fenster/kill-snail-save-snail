class Defence {
  constructor(element1, element2, element3) {
    this.element1 = element1;
    this.element2 = element2;
    this.element3 = element3;
  }
}

/*

function defensiveChoice(element1, element2, combination) {
  if (
    (element1 === "Fire" && element2 === "Water") ||
    (element1 === "Water" && element2 === "Fire")
  ) {
    return combination = "Mist";
  }
  else if (
    (element1 === "Fire" && element2 === "Rock") ||
    (element1 === "Rock" && element2 === "Fire")
  ) {
    return combination = "Metal";
  }
  else if
  (element1 === "Water" && element2 === "Rock") ||
  (element1 === "Rock" && element2 === "Water") {
    return combination = "Tree"
}
else if
(element1 === "Water" && element2 === "Metal") ||
(element1 === "Metal" && element2 === "Water") {
  return combination = "Bucket of Water";
}
else if
(element1 === "Metal" && element2 === "Fire") ||
(element1 === "Fire" && element2 === "Metal") {
  return combination = "Sword";
}
else if
(element1 === "Metal" && element2 === "Rock") ||
(element1 === "Rock" && element2 === "Metal") {
  return combination = "Gun";
}
else if
(element1 === "Mist" && element2 === "Water") ||
(element1 === "Water" && element2 === "Mist") {
  return combination = "Rain";
}
else if
(element1 === "Mist" && element2 === "Fire") ||
(element1 === "Fire" && element2 === "Mist") {
  return combination = "Smoke";
}
else if
(element1 === "Mist" && element2 === "Rock") ||
(element1 === "Rock" && element2 === "Mist") {
  return combination = "Wet Rocks";
}
else if
(element1 === "Tree" && element2 === "Water") ||
(element1 === "Water" && element2 === "Tree") {
  return combination = "Antidote";
}
else if
(element1 === "Tree" && element2 === "Fire") ||
(element1 === "Fire" && element2 === "Tree") {
  return combination = "Torch";
}
else if
(element1 === "Tree" && element2 === "Rock") ||
(element1 === "Rock" && element2 === "Tree") {
  return combination = "Spear";
}
}*/
/*function defensiveChoice(element1, element2) {
  // Normalize the combination order
  const normalizedCombination = [element1, element2].sort().join('-');
  switch (normalizedCombination) {
      case 'Fire-Water':
      case 'Water-Fire':
          return 'Mist';
      case 'Fire-Rock':
      case 'Rock-Fire':
          return 'Metal';
      case 'Water-Rock':
      case 'Rock-Water':
          return 'Tree';
      case 'Water-Metal':
      case 'Metal-Water':
          return 'Bucket of Water';
      case 'Metal-Fire':
      case 'Fire-Metal':
          return 'Sword';
      case 'Metal-Rock':
      case 'Rock-Metal':
          return 'Gun';
      case 'Mist-Water':
      case 'Water-Mist':
          return 'Rain';
      case 'Mist-Fire':
      case 'Fire-Mist':
          return 'Smoke';
      case 'Mist-Rock':
      case 'Rock-Mist':
          return 'Wet Rocks';
      case 'Tree-Water':
      case 'Water-Tree':
          return 'Antidote';
      case 'Tree-Fire':
      case 'Fire-Tree':
          return 'Torch';
      case 'Tree-Rock':
      case 'Rock-Tree':
          return 'Spear';
      default:
          return 'Unknown Combination';
  }
}*/
/*function defensiveChoice(element1, element2) {
  const combinations = {
      'Fire-Water': 'Mist',
      'Water-Fire': 'Mist',
      'Fire-Rock': 'Metal',
      'Rock-Fire': 'Metal',
      'Water-Rock': 'Tree',
      'Rock-Water': 'Tree',
      'Water-Metal': 'Bucket of Water',
      'Metal-Water': 'Bucket of Water',
      'Metal-Fire': 'Sword',
      'Fire-Metal': 'Sword',
      'Metal-Rock': 'Gun',
      'Rock-Metal': 'Gun',
      'Mist-Water': 'Rain',
      'Water-Mist': 'Rain',
      'Mist-Fire': 'Smoke',
      'Fire-Mist': 'Smoke',
      'Mist-Rock': 'Wet Rocks',
      'Rock-Mist': 'Wet Rocks',
      'Tree-Water': 'Antidote',
      'Water-Tree': 'Antidote',
      'Tree-Fire': 'Torch',
      'Fire-Tree': 'Torch',
      'Tree-Rock': 'Spear',
      'Rock-Tree': 'Spear'
  };
  // Normalize the combination order
  const key = [element1, element2].sort().join('-');
  return combinations[key] || 'Unknown Combination';
}*/
