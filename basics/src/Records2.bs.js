// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


function toTeam(param) {
  return /* record */[
          /* name */param[0],
          /* titles */param[1],
          /* awsome */param[2]
        ];
}

toTeam(/* tuple */[
      "legia",
      -2063654984,
      true
    ]);

function getFirstName(mamal) {
  return mamal[/* name */0];
}

console.log("leo");

var legia = /* record */[
  /* name */"legia warszawa",
  /* titles */34242342,
  /* awsome */true
];

var aleks = /* record */[
  /* name */"aleks",
  /* age */34,
  /* cool */true,
  /* grade */3.3
];

var lion = /* record */[
  /* name */"leo",
  /* kind */"lion"
];

exports.legia = legia;
exports.toTeam = toTeam;
exports.aleks = aleks;
exports.lion = lion;
exports.getFirstName = getFirstName;
/*  Not a pure module */
