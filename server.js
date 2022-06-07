const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const toons = {
  'hammerman':{
    'tvShowTitle': 'Hammerman',
    'network': 'ABC',
    'years': '1991 - 1992',
    'mainCharacters': "Stanley Burell/Hammerman, Showbiz, Hammerman's Would-Be Girlfriend, Nigel Neatnik, Gramps/Soulman",
    'premise': 'Youth center worker Stanley Burrell owns a pair of magical dancing shoes (which are alive and can speak), which when worn cause Burrell to transform into the superhero Hammerman. He frequently gets advice from his "Gramps", who was a former owner of the shoes and was known as Soulman. While in the guise of Hammerman, Burrell was dressed in MC Hammer\'s signature purple Hammer pants and myriad golden chains.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/7/7f/Hammerman_Title_Card.jpg',
    'introVideo': 'https://youtu.be/hmZZG80TmME'
  },
  'freakazoid':{
    'tvShowTitle': 'Freakazoid',
    'network': 'The WB',
    'years': '1995 - 1997',
    'mainCharacters': 'Dexter Douglas/Freakazoid, Debbie Douglas, Sgt. Mike Cosgrove, Cave Guy',
    'premise': 'Washington, D.C. has a new defender: Freakazoid. The comedy and insanity never stop when he\'s around, and he\'s only one of the weird heroes of the series. It\'s better than a nice tub of good things.',
    'image': 'https://en.wikipedia.org/wiki/Freakazoid!',
    'introVideo': 'https://youtu.be/JZmw3jzX1t0'
  },
  'earthworm jim':{
    'tvShowTitle': 'Earthworm Jim',
    'network': 'The WB',
    'years': '1995 - 1996',
    'mainCharacters': 'Earthworm Jim, Peter Puppy, Princess What\'s-Her-Name, Evil the Cat, Psy-Cow, Bob the Killer Goldfish, Queen Slug-for-a-Butt, Professor Monkey-For-A-Head',
    'premise': 'An average Earthworm stumbles upon a supersuit that makes him a superheroic worm!',
    'image': 'https://upload.wikimedia.org/wikipedia/en/3/3d/Earthworm_Jim.jpg',
  'introVideo': 'https://youtu.be/xtw3f43gsYI'
  },
  'the tick':{
    'tvShowTitle': 'The Tick',
    'network': 'Fox',
    'years': '1994 - 1996',
    'mainCharacters': 'The Tick, Arthur, American Maid, Die Fledermaus, Chairface Chippendale, Batmanuel, Barry, Big Shot, Sewer Urchin',
    'premise': 'An invulnerable, somewhat dim, superhero protects The City from all manner of evil-doers.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/2/27/The_Tick_1994.png',
  'introVideo': 'https://youtu.be/VjKP82fIW7E'
  },
  'marsupilami':{
    'tvShowTitle': 'Marsupilami',
    'network': 'CBS',
    'years': '1993 - 1994',
    'mainCharacters': 'Marsupilami, Maurice the Gorilla, Stewart the Elephant, Eduardo the Jaguar, Norman',
    'premise': 'The marsupilami is a strange but adorable long-tailed creature that faces all types of enemies in the depths of the Colombian jungle.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/e/e8/Marsupilami_title.jpg',
  'introVideo': 'https://youtu.be/-rl58bsFhes' 
  },
  'tales from the cryptkeeper':{
    'tvShowTitle': 'Tales from the Cryptkeeper',
    'network': 'ABC',
    'years': '1993 - 1999',
    'mainCharacters': 'The Cryptkeeper, The Old Witch, The Vault Keeper',
    'premise': 'The series details the Cryptkeeper telling other horror stories to the viewers, each with a lesson to be learned.',
    'image': 'https://static.wikia.nocookie.net/tftc/images/9/9c/1118full-tales-from-the-cryptkeeper-poster.jpg/revision/latest?cb=20180515004211',
    'introVideo': 'https://youtu.be/N1j1ely4YoY'
  },
  'darkwing duck':{
    'tvShowTitle': 'Darkwing Duck',
    'network': 'ABC',
    'years': '1991 - 1992',
    'mainCharacters': 'Drake Mallard/Darkwing Duck, Launchpad McQuack, Gosalyn Mallard',
    'premise': 'Darkwing Duck tells the adventures of the titular superhero, aided by his sidekick and pilot Launchpad McQuack (from DuckTales). In his secret identity of Drake Mallard (a parody of Kent Allard, the alter ego of the Shadow), he lives in an unassuming suburban house with his adopted daughter Gosalyn, next door to the bafflingly dim-witted Muddlefoot family. Darkwing struggles to balance his egotistical craving for fame and attention against his desire to be a good father to Gosalyn and help do good in St. Canard.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/9/9e/Darkwing_Duck_logo.png',
    'introVideo': 'https://youtu.be/aTtYjOHByXU'
  },
  'spider-man':{
    'tvShowTitle': 'Spider-Man',
    'network': 'Fox',
    'years': '1994 - 1998',
    'mainCharacters': 'Peter Parker/Spider-Man, J. Jonah Jameson, Mary Jane Watson, May Parker',
    'premise': 'The series follows Peter Parker, a college student at Empire State University who struggles to balance his responsibilities as the hero Spider-Man with the problems of his personal life. Parker must navigate his romantic affections for love interests Felicia Hardy and Mary Jane Watson; maintain his friendship with Harry Osborn; focus on his academic performance as Dr. Curt Connors\' student; and help to support his Aunt May after the death of his Uncle Ben by working as a freelance photographer for the Daily Bugle. The Bugle is owned by loudmouth publisher J. Jonah Jameson, who often uses Parker\'s pictures of his alter-ego to discredit and carry out a smear campaign against Spider-Man. Parker\'s peers at ESU include football star Flash Thompson, popular barista Liz Allan, scientific genius Debra Whitman, and research rival Michael Morbius.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/d/d0/Spider-Man_%281994_TV_series%29_title_screen.png',
    'introVideo': 'https://youtu.be/DZGN9fZvQhc',
  },
  'pinky and the brain': {
    'tvShowTitle': 'Pinky and the Brain',
    'network': 'The WB',
    'years': '1995 - 1998',
    'mainCharacters': 'Pinky, The Brain, Snowball the hamster, Billie, Pharfignewton, Larry',
    'premise': 'In each episode, Brain devises a new plan to take over the world which ultimately ends in failure, usually due to the impossibility of Brain\'s plan, Brain\'s own overconfidence, Pinky\'s bumbling, an oversight on Brain\'s part, circumstances beyond their control, or multiples thereof.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pinky_and_The_Brain_%28logo%29.png',
    'introVideo': 'https://youtu.be/GBkT19uH2RQ',
  },
  'animaniacs': {
    'tvShowTitle': 'Animaniacs',
    'network': 'Fox, The WB', 
    'years': '1993 - 1998',
    'mainCharacters': 'Yakko, Wakko, Dot',
    'premise': 'The Warner siblings, Yakko, Wakko, and Dot, are three 1930s cartoon stars of an unknown species (one Tom Ruegger named "Cartoonus characterus") that were locked away in the WB Tower until the 1990s, when they escaped.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/8/8a/Animaniacs.png',
    'introVideo': 'https://youtu.be/P43dphUwpzo'
  },
  'eek the cat': {
    'tvShowTitle': 'Eek! The Cat, Eek! Stravaganza',
    'network': 'Fox',
    'years': '1992 - 1997',
    'mainCharacters': 'Eek the Cat, Sharky the Sharkdog, Annabelle, Mittens, Squishy Bearz, Mom, General Galapagos, Bill',
    'premise': 'Eek! the Cat is about a purple cat named Eek, living in the city of McTropolis whose motto is "it never hurts to help". This attitude generally gets him into trouble, from which much of the humor of the show is derived.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/f/f3/Eek_stravaganza_title.jpg',
    'introVideo': 'https://upload.wikimedia.org/wikipedia/en/f/f3/Eek_stravaganza_title.jpg'
  },
  "bobby's world": {
    'tvShowTitle': 'Bobby\s World',
    'network': 'Fox',
    'years': '1990 - 1998',
    'mainCharacters': 'Robert Adelvice "Bobby" Generic',
    'premise': 'A boy named Bobby Generic creates adventures using his overactive imagination. A boy named Bobby Generic creates adventures using his overactive imagination. A boy named Bobby Generic creates adventures using his overactive imagination.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/d/d8/Bobby%27s_World_Promotional_Poster%2C_Blue.gif',
    'introVideo': 'https://youtu.be/M-J4Myp-7Zk'
  },
  'captain n: the game master': {
    'tvShowTitle': 'Captain N: The Game Master',
    'network': 'NBC',
    'years': '1989 - 1991',
    'mainCharacters': 'Kevin Keene, Princess Lana, Duke, Simon Belmont, Kid Icarus, Mega Man, Game Boy, Mother Brain, King Hippo, Eggplant Wizard, Doctor Wily',
    'premise': 'At the outset of the first episode the hero of the series, Kevin Keene, a teenager from Northridge, Los Angeles, California, and his dog Duke are taken to another universe known as Videoland when they are sucked into a vortex called the Ultimate Warp Zone that formed in his television.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/2/28/Captaintitle.jpg',
    'introVideo': 'https://youtu.be/RyoUecpe_wU'
  },
  'garfield': {
    'tvShowTitle': 'Garfield and Friends',
    'network': 'CBS',
    'years': '1988 - 1994',
    'mainCharacters': 'Garfield, Jon Arbuckle, Odie, Orson the Pig',
    'premise': 'Stories about Garfield the cat, Odie the dog, their owner Jon and the trouble they get into, and Orson the Pig and his adventures on a farm with fellow farm animals.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/7/74/GandF.gif',
    'introVideo': 'https://youtu.be/kQllBwL8gZc'
  },
  'beetlejuice': {
    'tvShowTitle': 'Beetlejuice',
    'network': 'ABC, Fox',
    'years': '1989 - 1991',
    'mainCharacters': 'Beetlejuice, Lydia Deetz',
    'premise': 'The animated series focuses on the life of Goth girl Lydia Deetz and her undead friend Beetlejuice as they explore The Neitherworld, a ghoulish wacky monster supernaturalistic realm inhabited by monsters, ghosts, ghouls, goblins and zombies.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/4/49/Beetlejuice_cartoon_screenshot.jpg',
    'introVideo': 'https://youtu.be/KZIsSQQy96A'
  },
  'teenage mutant ninja turtles': {
    'tvShowTitle': 'Teenage Mutant Ninja Turtles',
    'network': 'CBS',
    'years': '1987 - 1996',
    'mainCharacters': 'Leonardo, Donatello, Raphael, Michaelangelo, Hamato Yoshi/Master Splinter, April O\'Neil',
    'premise': 'Set in New York City, the series follows the adventures of the Teenage Mutant Ninja Turtles and their allies as they battle the Shredder, Krang, and numerous other villains and criminals. The property was changed considerably from the darker-toned comics, to make it more suitable for children and the family.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/1/12/TMNT1987Series.png',
    'introVideo': 'https://youtu.be/WfznwNGZFNY'
  },
  'batman: the animated series': {
    'tvShowTitle': 'Batman: The Animated Series',
    'network': 'Fox',
    'years': '1992 - 1995',
    'mainCharacters': 'Bruce Wayne/Batman, Dick Grayson/Robin, Alfred Pennyworth, Commissioner James "Jim" Gordon, Detective Harvey Bullock, Barbara Gordon/Batgirl',
    'premise': 'This animated series conveys the dark mood of the original "Batman" comic books. Unlike the light action "Batman" show of the 1960s, Gotham City\'s Caped Crusader, Bruce Wayne, is sometimes moody. And Robin\'s alter ego, Dick Grayson, has a more-mature personality than in the original series.',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/BTAS_logo.png',
   'introVideo': 'https://youtu.be/wAG_7Ky4FY4', 
  },
  'x-men': {
    'tvShowTitle': 'X-Men',
    'network': 'Fox',
    'years': '1992 - 1997',
    'mainCharacters': 'Scott Summers/Cyclops, James "Logan" Howlett/Wolverine, Anna Marie/Rogue, Ororo Munroe/Storm, Dr. Henry Phillip "Hank" McCoy/Beast, Remy Etienne LeBeau/Gambit, Jubilation Lee/Jubilee, Jean Grey/Pheonix, Prof. Charles Francis Xavier/Professor X, Eric Magnus Lensherr/Magneto',
    'premise': 'Professor Charles Xavier and his band of courageous mutants strike back against corrupt and bigoted government agencies as well as mutant extremist Magneto in this animated series based on the Marvel Comics characters.',
    'image': 'https://upload.wikimedia.org/wikipedia/en/c/c9/X-men-animated-series-intro.jpg',
    'introVideo': 'https://youtu.be/di6DocEkruk'
  },
  'uknown': {
    'tvShowTitle': 'unknown',
    'network': 'unknown',
    'years': 'unknown',
    'mainCharacters': 'unknown',
    'premise': 'unknown',
    'image': 'unknown',
    'introVideo': 'unknown',
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:toonTitle',(request, response) => {
  const toonsTitle = request.params.toonTitle.toLowerCase()
  if(toons[toonsTitle]){
    response.json(toons[toonsTitle])
  } else {
    response.json(toons['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running.')
})