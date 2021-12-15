export const challenges = {
  seasonName: "challenges",
  // prettier-ignore
  contestants: {
           "contestant-1": { id:"contestant-1", name: "Audition #3 - half eliminated", img: "/images/challenges/1.png" },
           "contestant-2": { id:"contestant-2", name: "Mystery Box", img: "/images/challenges/2.png" },
           "contestant-3": { id:"contestant-3", name: "Mystery Box - Pick 15 ingredients then swap", img: "/images/challenges/3.png" },
           "contestant-4": { id:"contestant-4", name: "Cook signature entree for potential cookbook", img: "/images/challenges/4.png" },
           "contestant-5": { id:"contestant-5", name: "Pick judges' dish",img: "/images/challenges/5.png",},
           "contestant-6": { id:"contestant-6", name: "Egs - 4 ways", img: "/images/challenges/6.png" },
           "contestant-7": { id:"contestant-7", name: "Migon Steaks - 3 ways", img: "/images/challenges/7.png" },
           "contestant-8": { id:"contestant-8", name: "Three soufflés", img: "/images/challenges/8.png" },
           "contestant-9": { id:"contestant-9", name: "Cooking for other contestants", img: "/images/challenges/9.png" },
           "contestant-10": { id:"contestant-10", name: "Cooking for Marines",img: "/images/challenges/10.png",},
           "contestant-11": { id:"contestant-11", name: "Cooking in hotel", img: "/images/challenges/11.png" },
           "contestant-12": { id:"contestant-12", name: "Cooking for cowboys", img: "/images/challenges/12.png" },
           "contestant-13": { id:"contestant-13", name: "Cooking for international judges", img: "/images/challenges/13.png" },
           "contestant-14": { id:"contestant-14", name: "Running kitchen at restaurant",img: "/images/challenges/14.png"},
           "contestant-15": { id:"contestant-15", name: "Team Food Trucks",img: "/images/challenges/15.png"},
           "contestant-16": { id:"contestant-16", name: "Pick equipment",img: "/images/challenges/16.png"},
           "contestant-17": { id:"contestant-17", name: "Pick ingredient",img: "/images/challenges/17.png"},
           "contestant-18": { id:"contestant-18", name: "Swapping roles every 15 minutes",img: "/images/challenges/18.png"},
           "contestant-19": { id:"contestant-19", name: "Final three-course menu",img: "/images/challenges/19.png"},
  
        },

  columns: {
    "column-start": {
      id: "column-start",
      title: "Challenges 🚧",
      contestantsIds: [
        "contestant-1",
        "contestant-2",
        "contestant-3",
        "contestant-4",
        "contestant-5",
        "contestant-6",
        "contestant-7",
        "contestant-8",
        "contestant-9",
        "contestant-10",
        "contestant-11",
        "contestant-12",
        "contestant-13",
        "contestant-14",
        "contestant-15",
        "contestant-16",
        "contestant-17",
        "contestant-18",
        "contestant-19",
      ],
    },
    "column-good": {
      id: "column-good",
      title: "S",
      img: "/images/emotes/OkayChamp.png",
      contestantsIds: [],
    },
    "column-good-content": {
      id: "column-good-content",
      title: "A",
      contestantsIds: [],
    },
    "column-content": {
      id: "column-content",
      title: "B",
      contestantsIds: [],
    },
    "column-content-bad": {
      id: "column-content-bad",
      title: "C",
      contestantsIds: [],
    },
    "column-bad": {
      id: "column-bad",
      title: "D",
      img: "/images/emotes/WeirdChamp.png",
      contestantsIds: [],
    },
  },
  columnOrder: [
    "column-start",
    "column-good",
    "column-good-content",
    "column-content",
    "column-content-bad",
    "column-bad",
  ],
};
