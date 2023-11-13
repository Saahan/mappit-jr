import L from "leaflet";

const hospitalIcon = new L.icon({
  iconUrl: require("./img/hospital.png"),
});

const universityIcon = new L.icon({
  iconUrl: require("./img/university.png"),
});

const parkIcon = new L.icon({
  iconUrl: require("./img/park.png"),
});

export const markerDetails = [
  {
    id: 1,
    name: "Brampton Civic Hospital",
    position: [43.74690776764767, -79.74378823917394],
    category: "Hospital",
    image1: require("./img/bch1.jpg"),
    image2: require("./img/bch2.jpg"),
    description:
      "Brampton Civic Hospital is an acute care hospital in Brampton, Ontario and part of the William Osler Health System. It is a community teaching hospital for the Michael G. DeGroote School of Medicine of McMaster University.",
    icon: hospitalIcon,
    address: "2100 Bovaird Dr E"
  },
  {
    id: 2,
    name: "University of Toronto",
    position: [43.66320256060444, -79.39396676069076],
    category: "University",
    image1: require("./img/UofT1.jpg"),
    image2: require("./img/uoft2.jpg"),
    description:
      "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park.",
    icon: universityIcon,
    address: "27 King's College Cir"
  },
  {
    id: 3,
    name: "North York General Hospital",
    position: [43.769301044243534, -79.36252202360295],
    category: "Hospital",
    image1: require("./img/nyg1.jpg"),
    image2: require("./img/nyg2.jpg"),
    description:
      "North York General Hospital is a teaching hospital in Toronto, Ontario, Canada. Primarily serving the North York district, as well as southern York Region, it offers acute care, ambulatory and long-term services at multiple sites.",
    icon: hospitalIcon,
    address: "4001 Leslie St"
  },
  {
    id: 4,
    name: "High Park",
    position: [43.64618726011998, -79.46376219259326],
    category: "Park",
    image1: require("./img/hp1.jpg"),
    image2: require("./img/hp2.jpg"),
    description:
      "High Park is a municipal park in Toronto, Ontario, Canada. High Park is a mixed recreational and natural park, with sporting facilities, cultural facilities, educational facilities, gardens, playgrounds and a zoo. One-third of the park remains in a natural state, with a rare oak savannah ecology.",
    icon: parkIcon,
    address: "1873 Bloor Street West"
  },
  {
    id: 5,
    name: "Port Credit",
    position: [43.55191665025876, -79.58923213039922],
    category: "Park",
    image1: require("./img/pc1.jpg"),
    image2: require("./img/pc2.jpg"),
    description:
      "Energetic park area featuring a playground, sports & picnic areas, trails & festivals by the water.",
    icon: parkIcon,
    address: "40 Lakeshore Rd E"
  },
  {
    id: 6,
    name: "York University",
    position: [43.773672094460274, -79.50483084614473],
    category: "University",
    image1: require("./img/York_1.jpg"),
    image2: require("./img/York_2.jpg"),
    description:
      "York University, also known as YorkU or simply YU, is a public research university in Toronto, Ontario, Canada. It is Canada's third-largest university, and it has approximately 55,700 students, 7,000 faculty and staff, and over 370,000 alumni worldwide.",
    icon: universityIcon,
    address: "4700 Keele St"
  },
];
