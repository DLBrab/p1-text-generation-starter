const fillers = {
    story:          ["$pirates", "$space"],
    pirates:        ["$pGreeting I'm $pName, $pStoryType"],
    space:          ["$sGreeting$sProtagStory"],

    pGreeting:      ["Ahoy!", "Avast, ye harties!", "Yo ho ho ho!"],
    pName:          ["Brook", "Fiddlesticks", "Tartar Sauce", "Cap'n Knuckles", "Mr. Krabs"],
    pStoryType:     ["Captain of the $pShipName, and I $pCapEnding", "Scallywag of the $pShipName, and I $pScallEnding", "First Mate of the $pShipName, and I $pFMEnding"],
    pShipName:      ["S.S. Britannica", "Going Merry", "Thousand Sunny", "Poopdeck", "Bartlebelly"],
    pCapEnding:     ["sentence ye to walk the plank!", "demand ye fork over all ye cash!", "ain't never heard of ye", "need oranges, please give me oranges or me and me mates'll have skurrrvay! :("],
    pScallEnding:   ["am going to walk the plank soon. :(", "just wanna afford another Funko Pop...", "know why they call it the Poopdeck and I aint tellin ye."],
    pFMEnding:      ["actually am loyal and don't exist as a plot vehicle to create a conflict for the protagonist captain to learn his folly.", "AM TOTALLY GONNA MUTINY THIS SHIP LIKE EVERY OTHER FIRST MATE!!!"],

    sGreeting:      ["Hello ", "Good day ", "How are you ", ""],
    sProtagStory:   ["Commander Shepard, I see you've been killing plenty of $MEStoryMeme", "Doomguy, it seems we have committed the folly of trifling with demonic energy and $DoomMeme", "Gentlemen? All your base are belong to us. $AYBABTU"],
    AYBABTU:        ["You are on the way to destruction, make your time. Ha ha ha ha. $GetZiggyWithIt"],
    GetZiggyWithIt: ["For great justice, take off every zig.$MOVEZIG"],
    MOVEZIG:        [" Move, Zig, Move, Zig, Move, Zig, You know what you're doing? take off every zig.$MOVEZIG", "", "", "", ""],
    MEStoryMeme:    ["Reapers. Too bad theres 3 recolors of the same ending.", "Geth. I hope you're giving them a damn good time.", "Collectors. You're the best one around."],
    DoomMeme:       ["oops we spilled some of it and now theres demons, can you rip and tear them all up?"],
  };
  
  const template = `$story`;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
