import type { Chapter } from '../types';

export const mockChapters: Chapter[] = [
  // Chapter 1: Gardening
  {
    id: 1,
    title: "Gardening",
    subsections: [
      {
        id: 1,
        title: "Step 1: Basic Guide Intro",
        content: "<img src='/assets/1.png' alt='Gardening Step 1' class='w-full rounded-lg' /> Welcome to gardening! This section introduces you to the basics of starting your own garden.",
        questions: []
      },
      {
        id: 2,
        title: "Step 2: Gardening Tools",
        content: "<img src='/assets/2.png' alt='Gardening Step 2' class='w-full rounded-lg' /> Learn about essential gardening tools.",
        questions: [
          {
            id: 101,
            type: 'trueFalse',
            question: "Is a trowel a common gardening tool?",
            correctAnswer: true,
            explanation: "A trowel is a basic hand tool used for digging."
          },
          {
            id: 102,
            type: 'multipleChoice',
            question: "Which of the following is NOT a gardening tool?",
            options: ["Hoe", "Pruner", "Laptop", "Rake"],
            correctAnswer: "Laptop",
            explanation: "A laptop is not used for gardening!"
          }
        ]
      },
      {
        id: 3,
        title: "Step 3: Gloves, Pruner, and Caring",
        content: "<img src='/assets/3.png' alt='Gardening Step 3' class='w-full rounded-lg' /> Gloves and pruners help you care for your plants safely and effectively.",
        questions: [
          {
            id: 103,
            type: 'trueFalse',
            question: "Wearing gloves can protect your hands while gardening.",
            correctAnswer: true,
            explanation: "Gloves protect your hands from dirt and injury."
          },
          {
            id: 104,
            type: 'multipleChoice',
            question: "What is a pruner used for?",
            options: ["Cutting branches", "Watering plants", "Measuring soil", "Harvesting crops"],
            correctAnswer: "Cutting branches",
            explanation: "Pruners are used to trim and cut plant stems and branches."
          }
        ]
      },
      {
        id: 4,
        title: "Step 4: Compost",
        content: "<img src='/assets/4.png' alt='Gardening Step 4' class='w-full rounded-lg' /> Composting is a great way to recycle organic waste and enrich your soil.",
        questions: [
          {
            id: 105,
            type: 'trueFalse',
            question: "Compost helps improve soil quality.",
            correctAnswer: true,
            explanation: "Compost adds nutrients and improves soil structure."
          },
          {
            id: 106,
            type: 'multipleChoice',
            question: "What is compost made from?",
            options: ["Plastic", "Organic waste", "Metal", "Glass"],
            correctAnswer: "Organic waste",
            explanation: "Compost is made from decomposed organic materials."
          }
        ]
      },
      {
        id: 5,
        title: "Step 5: What to Add/Not Add in Compost",
        content: "<img src='/assets/5.png' alt='Gardening Step 5' class='w-full rounded-lg' /> Learn what materials are suitable for composting and what to avoid.",
        questions: [
          {
            id: 107,
            type: 'trueFalse',
            question: "You should not add meat or dairy products to compost.",
            correctAnswer: true,
            explanation: "Meat and dairy can attract pests and cause odor problems."
          },
          {
            id: 108,
            type: 'multipleChoice',
            question: "Which of these can you add to compost?",
            options: ["Banana peels", "Plastic bags", "Glass", "Metal cans"],
            correctAnswer: "Banana peels",
            explanation: "Fruit and vegetable scraps are great for compost."
          }
        ]
      },
      {
        id: 6,
        title: "Step 6: Types of Soil",
        content: "<img src='/assets/6.png' alt='Gardening Step 6' class='w-full rounded-lg' /> Different plants grow best in different types of soil.",
        questions: [
          {
            id: 109,
            type: 'trueFalse',
            question: "Sandy soil drains water quickly.",
            correctAnswer: true,
            explanation: "Sandy soil has large particles and drains well."
          },
          {
            id: 110,
            type: 'multipleChoice',
            question: "Which soil type is best for most garden plants?",
            options: ["Clay", "Sandy", "Loamy", "Rocky"],
            correctAnswer: "Loamy",
            explanation: "Loamy soil is rich, well-draining, and ideal for most plants."
          }
        ]
      },
      {
        id: 7,
        title: "Step 7: Sunlight and Placement",
        content: "<img src='/assets/7.png' alt='Gardening Step 7' class='w-full rounded-lg' /> Sunlight and proper placement are key to a healthy garden.",
        questions: [
          {
            id: 111,
            type: 'trueFalse',
            question: "Most vegetables need at least 6 hours of sunlight per day.",
            correctAnswer: true,
            explanation: "Sunlight is essential for vegetable growth."
          },
          {
            id: 112,
            type: 'multipleChoice',
            question: "Where should you place sun-loving plants?",
            options: ["In the shade", "Near a heater", "In a sunny spot", "In a closet"],
            correctAnswer: "In a sunny spot",
            explanation: "Sun-loving plants need plenty of direct sunlight."
          }
        ]
      }
    ],
    finalQuiz: [
      {
        id: 1001,
        type: 'multipleChoice',
        question: "Which tool is commonly used to prepare soil?",
        options: ["Hoe", "Scissors", "Rake", "Watering can"],
        correctAnswer: "Hoe",
        explanation: "A hoe is used to break up and prepare soil."
      },
      {
        id: 1002,
        type: 'multipleChoice',
        question: "What should you do after planting seeds?",
        options: ["Harvest", "Water regularly", "Remove weeds", "Provide sunlight"],
        correctAnswer: "Water regularly",
        explanation: "Seeds need water to start growing."
      },
      {
        id: 1003,
        type: 'multipleChoice',
        question: "Why is sunlight important for plants?",
        options: ["For decoration", "For photosynthesis", "For shade", "For warmth only"],
        correctAnswer: "For photosynthesis",
        explanation: "Sunlight is needed for plants to make food."
      },
      {
        id: 1004,
        type: 'multipleChoice',
        question: "What happens if you don't remove weeds?",
        options: ["Plants grow better", "Weeds take over", "Soil improves", "Nothing happens"],
        correctAnswer: "Weeds take over",
        explanation: "Weeds can outcompete your plants."
      },
      {
        id: 1005,
        type: 'multipleChoice',
        question: "When is the best time to harvest crops?",
        options: ["When they are ready", "Before planting", "After removing weeds", "Anytime"],
        correctAnswer: "When they are ready",
        explanation: "Harvest when crops are mature."
      },
      {
        id: 1006,
        type: 'trueFalse',
        question: "Weeds should be removed regularly from the garden.",
        correctAnswer: true,
        explanation: "Weeds compete with your plants for nutrients."
      },
      {
        id: 1007,
        type: 'trueFalse',
        question: "Plants do not need sunlight to grow.",
        correctAnswer: false,
        explanation: "Sunlight is essential for photosynthesis."
      }
    ]
  },
  // Chapter 2: Movie Classics
  {
    id: 2,
    title: "Movie Classics",
    subsections: [
      {
        id: 1,
        title: "Intro",
        content: "<img src='/movie/m1.png' alt='Movie Classics Intro' class='w-full rounded-lg' /> Welcome to Movie Classics!",
        questions: [
          {
            id: 201,
            type: 'trueFalse',
            question: "Is Bollywood the largest film industry in the world by number of films produced?",
            correctAnswer: true,
            explanation: "Bollywood produces more films annually than Hollywood."
          },
          {
            id: 202,
            type: 'multipleChoice',
            question: "Which of these is a famous Bollywood actor?",
            options: ["Amitabh Bachchan", "Tom Hanks", "Leonardo DiCaprio", "Brad Pitt"],
            correctAnswer: "Amitabh Bachchan",
            explanation: "Amitabh Bachchan is a legendary Bollywood actor."
          }
        ]
      },
      {
        id: 2,
        title: "Mughal-e-Azam",
        content: "<img src='/movie/m2.png' alt='Mughal-e-Azam' class='w-full rounded-lg' /> Mughal-e-Azam is a 1960 Indian epic historical drama film.",
        questions: [
          {
            id: 203,
            type: 'trueFalse',
            question: "Mughal-e-Azam was originally released in black and white.",
            correctAnswer: true,
            explanation: "The film was later colorized, but the original was black and white."
          },
          {
            id: 204,
            type: 'multipleChoice',
            question: "Who played the role of Anarkali in Mughal-e-Azam?",
            options: ["Madhubala", "Nargis", "Waheeda Rehman", "Meena Kumari"],
            correctAnswer: "Madhubala",
            explanation: "Madhubala played the iconic role of Anarkali."
          }
        ]
      },
      {
        id: 3,
        title: "Sholay",
        content: "<img src='/movie/m3.png' alt='Sholay' class='w-full rounded-lg' /> Sholay is a 1975 Indian action-adventure film.",
        questions: [
          {
            id: 205,
            type: 'trueFalse',
            question: "Sholay was released in the year 1975.",
            correctAnswer: true,
            explanation: "Sholay was released in 1975 and became a classic."
          },
          {
            id: 206,
            type: 'multipleChoice',
            question: "Who played the character of Gabbar Singh in Sholay?",
            options: ["Amjad Khan", "Dharmendra", "Sanjeev Kumar", "Amitabh Bachchan"],
            correctAnswer: "Amjad Khan",
            explanation: "Amjad Khan's portrayal of Gabbar Singh is legendary."
          }
        ]
      },
      {
        id: 4,
        title: "Guide (1965)",
        content: "<img src='/movie/m4.png' alt='Guide (1965)' class='w-full rounded-lg' /> Guide is a 1965 romantic drama film starring Dev Anand and Waheeda Rehman.",
        questions: [
          {
            id: 207,
            type: 'trueFalse',
            question: "Guide is based on a novel by R. K. Narayan.",
            correctAnswer: true,
            explanation: "The film is based on R. K. Narayan's novel 'The Guide'."
          },
          {
            id: 208,
            type: 'multipleChoice',
            question: "Who played the lead female role in Guide?",
            options: ["Waheeda Rehman", "Madhubala", "Hema Malini", "Rekha"],
            correctAnswer: "Waheeda Rehman",
            explanation: "Waheeda Rehman played Rosie in Guide."
          }
        ]
      },
      {
        id: 5,
        title: "Anand",
        content: "<img src='/movie/m5.png' alt='Anand' class='w-full rounded-lg' /> Anand is a 1971 Indian drama film starring Rajesh Khanna and Amitabh Bachchan.",
        questions: [
          {
            id: 209,
            type: 'trueFalse',
            question: "Rajesh Khanna played the title role in Anand.",
            correctAnswer: true,
            explanation: "Rajesh Khanna's performance as Anand is iconic."
          },
          {
            id: 210,
            type: 'multipleChoice',
            question: "Who played Dr. Bhaskar in Anand?",
            options: ["Amitabh Bachchan", "Rajesh Khanna", "Vinod Khanna", "Dharmendra"],
            correctAnswer: "Amitabh Bachchan",
            explanation: "Amitabh Bachchan played Dr. Bhaskar Banerjee."
          }
        ]
      }
    ],
    finalQuiz: [
      {
        id: 211,
        type: 'multipleChoice',
        question: "Which movie is known as the 'epic of Indian cinema'?",
        options: ["Sholay", "Mughal-e-Azam", "Guide", "Anand"],
        correctAnswer: "Mughal-e-Azam",
        explanation: "Mughal-e-Azam is often called the epic of Indian cinema."
      },
      {
        id: 212,
        type: 'multipleChoice',
        question: "Who played the role of Anand in the movie Anand?",
        options: ["Rajesh Khanna", "Amitabh Bachchan", "Dev Anand", "Dharmendra"],
        correctAnswer: "Rajesh Khanna",
        explanation: "Rajesh Khanna played Anand."
      },
      {
        id: 213,
        type: 'multipleChoice',
        question: "Which movie features the character Gabbar Singh?",
        options: ["Guide", "Anand", "Sholay", "Mughal-e-Azam"],
        correctAnswer: "Sholay",
        explanation: "Gabbar Singh is the villain in Sholay."
      },
      {
        id: 214,
        type: 'multipleChoice',
        question: "Who played Rosie in Guide?",
        options: ["Waheeda Rehman", "Madhubala", "Nargis", "Meena Kumari"],
        correctAnswer: "Waheeda Rehman",
        explanation: "Waheeda Rehman played Rosie."
      },
      {
        id: 215,
        type: 'multipleChoice',
        question: "Which year was Sholay released?",
        options: ["1975", "1965", "1980", "1971"],
        correctAnswer: "1975",
        explanation: "Sholay was released in 1975."
      },
      {
        id: 216,
        type: 'trueFalse',
        question: "Guide was released after Anand.",
        correctAnswer: false,
        explanation: "Guide (1965) was released before Anand (1971)."
      },
      {
        id: 217,
        type: 'trueFalse',
        question: "Mughal-e-Azam was colorized after its original release.",
        correctAnswer: true,
        explanation: "The original was black and white, later colorized."
      }
    ]
  },
  // Chapter 3: Indian Music & Motivation
  {
    id: 3,
    title: "Indian Music & Motivation",
    subsections: [
      {
        id: 1,
        title: "Intro",
        content: "<img src='/music/mm1.png' alt='Intro' class='w-full rounded-lg' /> Welcome to Indian Music & Motivation!",
        questions: []
      },
      {
        id: 2,
        title: "Types of Indian Music",
        content: "<img src='/music/mm2.png' alt='Types of Indian Music' class='w-full rounded-lg' /> Learn about the different types of Indian music.",
        questions: [
          {
            id: 301,
            type: 'trueFalse',
            question: "Classical and folk are two main types of Indian music.",
            correctAnswer: true,
            explanation: "Indian music is broadly classified into classical and folk."
          },
          {
            id: 302,
            type: 'multipleChoice',
            question: "Which is a type of Indian classical music?",
            options: ["Carnatic", "Jazz", "Rock", "Pop"],
            correctAnswer: "Carnatic",
            explanation: "Carnatic is a major form of Indian classical music."
          }
        ]
      },
      {
        id: 3,
        title: "Types of Musical Instruments",
        content: "<img src='/music/mm3.png' alt='Types of Musical Instruments' class='w-full rounded-lg' /> Explore Indian musical instruments.",
        questions: [
          {
            id: 303,
            type: 'trueFalse',
            question: "The sitar is a string instrument.",
            correctAnswer: true,
            explanation: "The sitar is a famous Indian string instrument."
          },
          {
            id: 304,
            type: 'multipleChoice',
            question: "Which of these is a percussion instrument?",
            options: ["Tabla", "Flute", "Sitar", "Violin"],
            correctAnswer: "Tabla",
            explanation: "Tabla is a popular Indian percussion instrument."
          }
        ]
      },
      {
        id: 4,
        title: "About Raaga",
        content: "<img src='/music/mm4.png' alt='About Raaga' class='w-full rounded-lg' /> What is a Raaga in Indian music?",
        questions: [
          {
            id: 305,
            type: 'trueFalse',
            question: "A raaga is a melodic framework for improvisation.",
            correctAnswer: true,
            explanation: "Raaga provides a structure for melody in Indian music."
          },
          {
            id: 306,
            type: 'multipleChoice',
            question: "Which element is essential to a raaga?",
            options: ["Melody", "Lyrics", "Dance", "Costume"],
            correctAnswer: "Melody",
            explanation: "Raaga is all about melody."
          }
        ]
      },
      {
        id: 5,
        title: "Practice and Riyaz",
        content: "<img src='/music/mm5.png' alt='Practice and Riyaz' class='w-full rounded-lg' /> The importance of practice (riyaz) in music.",
        questions: [
          {
            id: 307,
            type: 'trueFalse',
            question: "Riyaz means regular practice in music.",
            correctAnswer: true,
            explanation: "Riyaz is the term for disciplined practice in Indian music."
          },
          {
            id: 308,
            type: 'multipleChoice',
            question: "Why is riyaz important for musicians?",
            options: ["Improves skill", "Makes you famous instantly", "Is not needed", "Only for beginners"],
            correctAnswer: "Improves skill",
            explanation: "Regular riyaz improves musical skill and mastery."
          }
        ]
      },
      {
        id: 6,
        title: "Yoga",
        content: "<img src='/music/mm6.png' alt='Yoga' class='w-full rounded-lg' /> The connection between yoga and music.",
        questions: [
          {
            id: 309,
            type: 'trueFalse',
            question: "Yoga can help musicians with breath control.",
            correctAnswer: true,
            explanation: "Yoga improves breath control, which is useful for singing and playing wind instruments."
          },
          {
            id: 310,
            type: 'multipleChoice',
            question: "Which yoga practice is especially helpful for singers?",
            options: ["Pranayama", "Asana", "Mudra", "Bandha"],
            correctAnswer: "Pranayama",
            explanation: "Pranayama (breath control) is very helpful for singers."
          }
        ]
      },
      {
        id: 7,
        title: "Why Classical Music is Good",
        content: "<img src='/music/mm7.png' alt='Why Classical Music is Good' class='w-full rounded-lg' /> Benefits of listening to classical music.",
        questions: [
          {
            id: 311,
            type: 'trueFalse',
            question: "Listening to classical music can reduce stress.",
            correctAnswer: true,
            explanation: "Classical music is known to have a calming effect."
          },
          {
            id: 312,
            type: 'multipleChoice',
            question: "Which is a benefit of classical music?",
            options: ["Improves focus", "Makes you sleepy", "Is always loud", "None of these"],
            correctAnswer: "Improves focus",
            explanation: "Classical music can help improve concentration and focus."
          }
        ]
      },
      {
        id: 8,
        title: "Self Motivation",
        content: "<img src='/music/mm8.png' alt='Self Motivation' class='w-full rounded-lg' /> How music can inspire self-motivation.",
        questions: [
          {
            id: 313,
            type: 'trueFalse',
            question: "Music can inspire and motivate people.",
            correctAnswer: true,
            explanation: "Music is a powerful tool for motivation and inspiration."
          },
          {
            id: 314,
            type: 'multipleChoice',
            question: "Which type of music is often used for motivation?",
            options: ["Upbeat songs", "Lullabies", "Sad songs", "None"],
            correctAnswer: "Upbeat songs",
            explanation: "Upbeat and energetic music is often used for motivation."
          }
        ]
      }
    ],
    finalQuiz: []
  }
];

export const visualChapters: Chapter[] = [
  {
    id: 1,
    title: "THIS OR THAT",
    subsections: [
      {
        id: 1,
        title: "Choices in Life",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v1.png' alt='THIS OR THAT Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://youtu.be/G38nEzSsxrM', '_blank')" />
            <p>Click the thumbnail above to watch the video about making choices in life!</p>
          </div>
        `,
        questions: [
          { id: 401, type: 'trueFalse', question: "Making choices is a part of everyday life.", correctAnswer: true, explanation: "We make choices all the time." },
          { id: 402, type: 'trueFalse', question: "You should always follow what others say when making choices.", correctAnswer: false, explanation: "It's important to make your own decisions." },
          { id: 403, type: 'trueFalse', question: "Career choices can affect your future.", correctAnswer: true, explanation: "Career decisions shape your life." },
          { id: 404, type: 'trueFalse', question: "The color you wear never affects your mood.", correctAnswer: false, explanation: "Colors can influence mood." },
          { id: 409, type: 'multipleChoice', question: "What is an example of a daily choice?", options: ["What to eat", "Where to live", "What job to take", "All of these"], correctAnswer: "What to eat", explanation: "We choose what to eat every day." },
          { id: 410, type: 'multipleChoice', question: "Which is important when making career choices?", options: ["Interests", "Salary", "Skills", "All of these"], correctAnswer: "All of these", explanation: "All these factors matter." },
          { id: 411, type: 'multipleChoice', question: "Wearing bright colors can make you feel:", options: ["Happy", "Sad", "Angry", "Tired"], correctAnswer: "Happy", explanation: "Bright colors often boost mood." },
          { id: 412, type: 'multipleChoice', question: "If you make a mistake, you should:", options: ["Give up", "Try again", "Blame others", "Ignore it"], correctAnswer: "Try again", explanation: "Keep trying and learning." }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 2,
    title: "DESI HACKS AND FIXES",
    subsections: [
      {
        id: 1,
        title: "Simple Daily Fixes",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v2.png' alt='DESI HACKS AND FIXES Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://youtu.be/BARImjhAIQg', '_blank')" />
            <p>Click the thumbnail above to watch the video about simple hacks and fixes for daily life!</p>
          </div>
        `,
        questions: [
          { id: 501, type: 'trueFalse', question: "A simple hack can save you time in daily chores.", correctAnswer: true, explanation: "Small tricks can make tasks easier and faster." },
          { id: 502, type: 'trueFalse', question: "You should always buy new things instead of fixing them.", correctAnswer: false, explanation: "Fixing things can save money and resources." },
          { id: 503, type: 'trueFalse', question: "Using toothpaste can help clean foggy headlights.", correctAnswer: true, explanation: "Toothpaste is a common household fix for headlights." },
          { id: 504, type: 'trueFalse', question: "You cannot use a rubber band to open a stuck jar lid.", correctAnswer: false, explanation: "A rubber band can help grip and open tight lids." },
          { id: 509, type: 'multipleChoice', question: "What can you use to clean foggy headlights?", options: ["Soap", "Toothpaste", "Oil", "Water"], correctAnswer: "Toothpaste", explanation: "Toothpaste is mildly abrasive and helps clean headlights." },
          { id: 510, type: 'multipleChoice', question: "Which item helps open a stuck jar lid?", options: ["Spoon", "Rubber band", "Knife", "Cloth"], correctAnswer: "Rubber band", explanation: "A rubber band improves grip on the lid." },
          { id: 511, type: 'multipleChoice', question: "What is a quick fix for a broken zipper?", options: ["Glue", "Safety pin", "Tape", "String"], correctAnswer: "Safety pin", explanation: "A safety pin can hold the zipper together temporarily." },
          { id: 512, type: 'multipleChoice', question: "Which household item removes stains?", options: ["Vinegar", "Salt", "Sugar", "Pepper"], correctAnswer: "Vinegar", explanation: "Vinegar is effective for cleaning stains." }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 3,
    title: "Daily Life with AI",
    subsections: [
      {
        id: 1,
        title: "How AI Influences Us",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v3.png' alt='Daily Life with AI Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://youtu.be/nLAR_o-s6S0', '_blank')" />
            <p>Click the thumbnail above to watch the video about how AI influences our daily lives!</p>
          </div>
        `,
        questions: [
          { id: 601, type: 'trueFalse', question: "AI is used in smartphones for voice assistants.", correctAnswer: true, explanation: "Voice assistants like Siri and Google Assistant use AI." },
          { id: 602, type: 'trueFalse', question: "AI cannot help recommend movies or music.", correctAnswer: false, explanation: "AI powers recommendations on streaming platforms." },
          { id: 603, type: 'trueFalse', question: "Smart home devices often use AI to automate tasks.", correctAnswer: true, explanation: "Devices like smart lights and thermostats use AI." },
          { id: 604, type: 'trueFalse', question: "AI is only used in computers, not in cars.", correctAnswer: false, explanation: "Modern cars use AI for navigation and safety features." },
          { id: 609, type: 'multipleChoice', question: "Which device uses AI for voice commands?", options: ["Smartphone", "Microwave", "Fan", "Table"], correctAnswer: "Smartphone", explanation: "Smartphones use AI for voice assistants." },
          { id: 610, type: 'multipleChoice', question: "What does AI help with in emails?", options: ["Sending mail", "Detecting spam", "Writing addresses", "Printing"], correctAnswer: "Detecting spam", explanation: "AI filters out spam emails." },
          { id: 611, type: 'multipleChoice', question: "How does AI help in online shopping?", options: ["Product recommendations", "Packing boxes", "Driving trucks", "Making products"], correctAnswer: "Product recommendations", explanation: "AI suggests products you may like." },
          { id: 612, type: 'multipleChoice', question: "Which of these uses AI for safety?", options: ["Car", "Bicycle", "Book", "Spoon"], correctAnswer: "Car", explanation: "Modern cars use AI for safety features." }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 4,
    title: "Waste TO ART",
    subsections: [
      {
        id: 1,
        title: "Turning Waste into Art",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v4.jpeg' alt='Waste TO ART Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://youtu.be/0ATbcQsulAM', '_blank')" />
            <p>Click the thumbnail above to watch the video about creating art from waste materials!</p>
          </div>
        `,
        questions: [
          { id: 701, type: 'trueFalse', question: "Art can be made from materials that are usually thrown away.", correctAnswer: true, explanation: "Upcycling waste into art is creative and eco-friendly." },
          { id: 702, type: 'trueFalse', question: "Plastic bottles cannot be used to make art projects.", correctAnswer: false, explanation: "Plastic bottles are often used in creative art projects." },
          { id: 703, type: 'trueFalse', question: "Upcycling helps reduce the amount of waste in landfills.", correctAnswer: true, explanation: "Turning waste into art reduces landfill waste." },
          { id: 704, type: 'trueFalse', question: "Old newspapers can be used to make paper mache art.", correctAnswer: true, explanation: "Paper mache uses old newspapers and glue." },
          { id: 709, type: 'multipleChoice', question: "What is upcycling?", options: ["Throwing away waste", "Turning waste into something useful or beautiful", "Burning waste", "Buying new things"], correctAnswer: "Turning waste into something useful or beautiful", explanation: "Upcycling is creative reuse." },
          { id: 710, type: 'multipleChoice', question: "Which of these can be used in waste art?", options: ["Plastic bottles", "Old newspapers", "Egg cartons", "All of these"], correctAnswer: "All of these", explanation: "Many waste items can be used for art." },
          { id: 711, type: 'multipleChoice', question: "What can you make with old newspapers?", options: ["Paper mache", "Plastic bags", "Metal cans", "Glass jars"], correctAnswer: "Paper mache", explanation: "Old newspapers are used for paper mache." },
          { id: 712, type: 'multipleChoice', question: "Why is waste art good for the environment?", options: ["It reduces waste", "It uses new materials", "It creates more trash", "It is expensive"], correctAnswer: "It reduces waste", explanation: "Waste art helps reduce landfill waste." }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 5,
    title: "Cyber Fraud and Bank Credentials",
    subsections: [
      {
        id: 1,
        title: "Staying Safe from Cyber Fraud",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v5.webp' alt='Cyber Fraud and Bank Credentials Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://youtu.be/T6CpPhfI7dk', '_blank')" />
            <p>Click the thumbnail above to watch the video about cyber fraud, bank detail theft, and how to stay safe online!</p>
          </div>
        `,
        questions: [
          { id: 801, type: 'trueFalse', question: "You should never share your bank credentials with anyone.", correctAnswer: true, explanation: "Bank details are private and should not be shared." },
          { id: 802, type: 'trueFalse', question: "Cyber fraud can happen through fake emails and messages.", correctAnswer: true, explanation: "Phishing is a common method of cyber fraud." },
          { id: 803, type: 'trueFalse', question: "It is safe to click on unknown links in emails.", correctAnswer: false, explanation: "Unknown links can lead to scams or malware." },
          { id: 804, type: 'trueFalse', question: "Banks will never ask for your password over the phone or email.", correctAnswer: true, explanation: "Legitimate banks do not ask for passwords." },
          { id: 809, type: 'multipleChoice', question: "What is phishing?", options: ["A type of cyber fraud", "A fishing technique", "A bank service", "A password"], correctAnswer: "A type of cyber fraud", explanation: "Phishing tricks people into giving up sensitive info." },
          { id: 810, type: 'multipleChoice', question: "Which is a safe online practice?", options: ["Clicking unknown links", "Sharing passwords", "Using strong passwords", "Ignoring security"], correctAnswer: "Using strong passwords", explanation: "Strong passwords protect your accounts." },
          { id: 811, type: 'multipleChoice', question: "What should you do if you receive a suspicious email?", options: ["Click the links", "Reply with your details", "Report it to your bank", "Ignore it"], correctAnswer: "Report it to your bank", explanation: "Reporting helps prevent fraud." },
          { id: 812, type: 'multipleChoice', question: "What is two-factor authentication?", options: ["A type of scam", "A security feature", "A password", "A bank account"], correctAnswer: "A security feature", explanation: "2FA adds extra security to your accounts." }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 6,
    title: "7 Photography tips",
    subsections: [
      {
        id: 1,
        title: "Tips for Clear Photos",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/vid/v6.jpg' alt='7 Photography tips Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="window.open('https://drive.google.com/file/d/1DgxNOzDAuTCAqNk1xdf-EMPc4o0xee-Z/view?usp=sharing', '_blank')" />
            <p>Click the thumbnail above to watch the video about tips for taking clear, non-blurry photos!</p>
          </div>
        `,
        questions: [
          { id: 901, type: 'trueFalse', question: "Cleaning your camera lens helps you take clearer photos.", correctAnswer: true, explanation: "A clean lens prevents blurry images." },
          { id: 902, type: 'trueFalse', question: "It is okay to touch the camera lens with your fingers.", correctAnswer: false, explanation: "Fingerprints can make photos blurry." },
          { id: 903, type: 'trueFalse', question: "Good lighting is important for sharp photos.", correctAnswer: true, explanation: "Lighting affects photo clarity." },
          { id: 904, type: 'trueFalse', question: "You should always use a dirty cloth to clean your lens.", correctAnswer: false, explanation: "Use a clean, soft cloth for cleaning." },
          { id: 909, type: 'multipleChoice', question: "What should you use to clean your camera lens?", options: ["Shirt sleeve", "Tissue paper", "Microfiber cloth", "Paper towel"], correctAnswer: "Microfiber cloth", explanation: "Microfiber cloth is safe for lenses." },
          { id: 910, type: 'multipleChoice', question: "What causes blurry photos?", options: ["Dirty lens", "Shaky hands", "Poor lighting", "All of these"], correctAnswer: "All of these", explanation: "All can cause blurry photos." },
          { id: 911, type: 'multipleChoice', question: "How can you avoid motion blur?", options: ["Hold camera steady", "Move quickly", "Zoom in", "Use flash only"], correctAnswer: "Hold camera steady", explanation: "Steadiness prevents blur." },
          { id: 912, type: 'multipleChoice', question: "Which is best for sharp photos?", options: ["Good lighting", "Dirty lens", "Shaky hands", "Low battery"], correctAnswer: "Good lighting", explanation: "Lighting is key for clarity." }
        ]
      }
    ],
    finalQuiz: []
  }
];

export const audioChapters: Chapter[] = [
  {
    id: 1,
    title: "Vocabulary",
    subsections: [
      {
        id: 1,
        title: "Vocabulary Practice",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/aud/voc.webp' alt='Vocabulary Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="document.getElementById('audio-vocab').play()" />
            <audio id='audio-vocab' src='/aud/Vocabulary.mp3' controls class='mb-4'></audio>
            <p>Click the thumbnail above to listen to the vocabulary audio!</p>
          </div>
        `,
        questions: [
          { id: 1001, type: 'trueFalse', question: "Vocabulary means the set of words known and used by a person.", correctAnswer: true },
          { id: 1002, type: 'trueFalse', question: "Learning new words can improve communication skills.", correctAnswer: true },
          { id: 1003, type: 'trueFalse', question: "Synonyms are words with opposite meanings.", correctAnswer: false },
          { id: 1004, type: 'trueFalse', question: "Antonyms are words with similar meanings.", correctAnswer: false },
          { id: 1009, type: 'multipleChoice', question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correctAnswer: "Joyful" },
          { id: 1010, type: 'multipleChoice', question: "Which tool helps you find word meanings?", options: ["Calculator", "Dictionary", "Ruler", "Map"], correctAnswer: "Dictionary" },
          { id: 1011, type: 'multipleChoice', question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Boiling", "Sunny"], correctAnswer: "Cold" },
          { id: 1012, type: 'multipleChoice', question: "Which of these is a vocabulary-building activity?", options: ["Reading", "Sleeping", "Running", "Jumping"], correctAnswer: "Reading" }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 2,
    title: "Meditation",
    subsections: [
      {
        id: 1,
        title: "Meditation Basics",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/aud/med.jpg' alt='Meditation Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="document.getElementById('audio-med').play()" />
            <audio id='audio-med' src='/aud/meditation.mp3' controls class='mb-4'></audio>
            <p>Click the thumbnail above to listen to the meditation audio!</p>
          </div>
        `,
        questions: [
          { id: 1021, type: 'trueFalse', question: "Meditation can help reduce stress.", correctAnswer: true },
          { id: 1022, type: 'trueFalse', question: "You must sit cross-legged to meditate.", correctAnswer: false },
          { id: 1023, type: 'trueFalse', question: "Deep breathing is a part of meditation.", correctAnswer: true },
          { id: 1024, type: 'trueFalse', question: "Meditation is only for adults.", correctAnswer: false },
          { id: 1029, type: 'multipleChoice', question: "What is a benefit of meditation?", options: ["More stress", "Better focus", "Less sleep", "More anger"], correctAnswer: "Better focus" },
          { id: 1030, type: 'multipleChoice', question: "Which is a common meditation technique?", options: ["Deep breathing", "Running", "Jumping", "Eating"], correctAnswer: "Deep breathing" },
          { id: 1031, type: 'multipleChoice', question: "Who can meditate?", options: ["Only adults", "Anyone", "Only children", "Only teachers"], correctAnswer: "Anyone" },
          { id: 1032, type: 'multipleChoice', question: "What does guided meditation mean?", options: ["Someone leads you", "You run fast", "You eat food", "You sleep"], correctAnswer: "Someone leads you" }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 3,
    title: "1990's Storytime",
    subsections: [
      {
        id: 1,
        title: "Old Story",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/aud/story.avif' alt="1990's Storytime Thumbnail" class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="document.getElementById('audio-story').play()" />
            <audio id='audio-story' src='/aud/story.m4a' controls class='mb-4'></audio>
            <p>Click the thumbnail above to listen to a story from the 1990s!</p>
          </div>
        `,
        questions: [
          { id: 1041, type: 'trueFalse', question: "Stories can teach important lessons.", correctAnswer: true },
          { id: 1042, type: 'trueFalse', question: "Listening to stories can improve imagination.", correctAnswer: true },
          { id: 1043, type: 'trueFalse', question: "All stories are based on real events.", correctAnswer: false },
          { id: 1044, type: 'trueFalse', question: "Stories from the 1990s are always boring.", correctAnswer: false },
          { id: 1049, type: 'multipleChoice', question: "What can stories teach?", options: ["Lessons", "Nothing", "Math", "Science"], correctAnswer: "Lessons" },
          { id: 1050, type: 'multipleChoice', question: "What skill can improve by listening to stories?", options: ["Language", "Running", "Jumping", "Swimming"], correctAnswer: "Language" },
          { id: 1051, type: 'multipleChoice', question: "Are all stories true?", options: ["Yes", "No", "Always", "Never"], correctAnswer: "No" },
          { id: 1052, type: 'multipleChoice', question: "Who can listen to stories?", options: ["Anyone", "Only adults", "Only children", "Only teachers"], correctAnswer: "Anyone" }
        ]
      }
    ],
    finalQuiz: []
  },
  {
    id: 4,
    title: "Baking",
    subsections: [
      {
        id: 1,
        title: "Baking Bites",
        content: `
          <div class='flex flex-col items-center'>
            <img src='/aud/bak.png' alt='Baking Thumbnail' class='w-full max-w-xs rounded-lg mb-4 cursor-pointer' onclick="document.getElementById('audio-bak').play()" />
            <audio id='audio-bak' src='/aud/Making NO Bake Bites.mp3' controls class='mb-4'></audio>
            <p>Click the thumbnail above to listen to the baking audio!</p>
          </div>
        `,
        questions: [
          { id: 1061, type: 'trueFalse', question: "Baking is a way to make food using heat.", correctAnswer: true },
          { id: 1062, type: 'trueFalse', question: "You always need an oven to bake.", correctAnswer: false },
          { id: 1063, type: 'trueFalse', question: "No-bake bites do not require baking in an oven.", correctAnswer: true },
          { id: 1064, type: 'trueFalse', question: "Measuring ingredients is important in baking.", correctAnswer: true },
          { id: 1069, type: 'multipleChoice', question: "What is baking?", options: ["Making food with heat", "Running", "Jumping", "Sleeping"], correctAnswer: "Making food with heat" },
          { id: 1070, type: 'multipleChoice', question: "What is a no-bake bite?", options: ["A dessert", "A drink", "A fruit", "A vegetable"], correctAnswer: "A dessert" },
          { id: 1071, type: 'multipleChoice', question: "Why is measuring ingredients important?", options: ["For taste", "For fun", "For color", "For shape"], correctAnswer: "For taste" },
          { id: 1072, type: 'multipleChoice', question: "Who can bake?", options: ["Anyone", "Only chefs", "Only adults", "Only children"], correctAnswer: "Anyone" }
        ]
      }
    ],
    finalQuiz: []
  }
];
