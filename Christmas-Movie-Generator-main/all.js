var randPics = document.querySelector("#randPics");
var getPics = document.querySelector(".getPics");
var text = document.querySelector("#text");
var text2 = document.querySelector("#text2");

var picsGallery = [
  [
    "https://i.pinimg.com/originals/db/9e/ee/db9eee44e1c243a8c4094a2aca4d15b5.gif",
    "Last Christmas (2019)",
    "Kate is a young woman subscribed to bad decisions. Working as an elf in a year round Christmas store is not good for the wannabe singer. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true."
  ],
  [
    "https://media3.giphy.com/media/l2YWluoNgk342F3k4/giphy.gif",
    "Elf (2003)",
    "After discovering he is a human, a man raised as an elf at the North Pole decides to travel to New York City to locate his real father."
  ],
  [
    "https://static1.squarespace.com/static/5b8424eb1137a67b0a8c93cd/t/5c0ff70888251b6702df533f/1544550172046/Home+alone+tooth+2.gif?format=1500w",
    "Home Alone (1990)",
    "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  ],
  [
    "https://media3.giphy.com/media/l1ug5cBeXHsnQ4IaA/giphy.gif",
    "Love Actually (2003)",
    "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England."
  ],
  [
    "https://media1.giphy.com/media/AphxZxXiVklYQ/giphy.gif",
    "Die Hard (1988)",
    "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
  ],
  [
    "https://i.gifer.com/Qxm.gif",
    "How the Grinch Stole Christmas (2000)",
    "On the outskirts of Whoville lives a green, revenge-seeking Grinch who plans to ruin Christmas for all of the citizens of the town."
  ],
  [
    "https://thumbs.gfycat.com/DimAccomplishedChuckwalla-size_restricted.gif",
    "A Christmas Carol (2009)",
    "An animated retelling of Charles Dickens' classic novel about a Victorian-era miser taken on a journey of self-redemption, courtesy of several mysterious Christmas apparitions."
  ],
  [
    "https://media4.giphy.com/media/3otPoTnEzbhNz0dreU/giphy.gif",
    "It's a Wonderful Life (1947) ",
    "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
  ],

  [
    "https://i.pinimg.com/originals/6f/3a/18/6f3a18da80fdc7d71418f7cff90a81ae.gif",
    "Miracle on 34th Street (1947)",
    "When a nice old man who claims to be Santa Claus is institutionalized as insane, a young lawyer decides to defend him by arguing in court that he is the real thing."
  ],
  [
    "https://media2.giphy.com/media/xUPOqpEBkWSuS2cbug/giphy.gif",
    "Bad Santa (2003)",
    "A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid."
  ],
  [
    "https://i.pinimg.com/originals/6d/bb/15/6dbb157f5569f34082be221a31fdaaf4.gif",
    "The Nightmare Before Xmas (1993)",
    "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion."
  ],
  [
    "https://64.media.tumblr.com/1cd2161ad7e7798d2c0ce449e74ac987/a012d29c66521eb6-88/s500x750/6f433bdda38653583ef80ac94dc208a8a54d5759.gifv",
    "The Holiday (2006)",
    "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love."
  ],
  [
    "https://1.bp.blogspot.com/-mGM_62F7LvE/WGP42VWEvVI/AAAAAAAAjYM/nn0bZ8J6-x4N9QEHJ6YtBKkyPjAytS03gCLcB/s1600/200_s%2B%25281%2529.gif",
    "Love the Coopers (2006)",
    "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love."
  ],

  [
    "https://i.gifer.com/TFd.gif",
    "Gremlins (1984)",
    "A boy inadvertently breaks three important rules concerning his new pet and unleashes a horde of malevolently mischievous monsters on a small town."
  ],
  [
    "https://media4.giphy.com/media/3ohA2KGxiltfjFP0Ws/giphy.gif",
    "National Lampoon's Xmas Vacation (1989)",
    "It's Christmas time and the Griswolds are preparing for a family seasonal celebration, but things never run smoothly for Clark, his wife Ellen and their two kids"
  ],
  [
    "https://24.media.tumblr.com/3df41f3e7089efd46386d5b1de7d068c/tumblr_mj4a6kZaVO1riyibxo1_500.gif",
    "The Apartment (1960)",
    "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue."
  ],
  [
    "https://1.bp.blogspot.com/-lAYNZy57dlU/W9OFpoDHk4I/AAAAAAAABq8/1aJlX-n7bo4fkqdjqT9DnYoainV3tRQZgCLcBGAs/s640/deckthehall8.gif",
    "Deck the Halls (2006)",
    "Two neighbors have it out after one of them decorates his house for the holidays so brightly that it can be seen from space."
  ]
];

getPics.addEventListener("click", function () {
  var rnd = Math.floor(Math.random() * picsGallery.length);
  //change the pics locations of the source
  randPics.src = picsGallery[rnd][0];
  text.textContent = picsGallery[rnd][1];
  text2.textContent = picsGallery[rnd][2];
});
