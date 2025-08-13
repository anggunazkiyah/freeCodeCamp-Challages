const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(recordCollection, id, prop, value) {
  if (value === "") {
    // If value is empty, delete the property
    delete recordCollection[id][prop];
  } else if (prop === "tracks") {
    // If the property is tracks and doesn't exist, create it
    if (!recordCollection[id].hasOwnProperty("tracks")) {
      recordCollection[id].tracks = [];
    }
    // Add the new track
    recordCollection[id].tracks.push(value);
  } else {
    // For other properties, just set the value
    recordCollection[id][prop] = value;
  }
  
  return recordCollection;
};

console.log("Before update:", recordCollection[5439]);
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log("After update:", recordCollection[5439]);
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log("After update:", recordCollection[5439]);
