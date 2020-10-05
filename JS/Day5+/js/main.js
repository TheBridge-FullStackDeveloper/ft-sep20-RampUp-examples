function teachLead(instructorObject) {
  console.log(instructorObject.teachAll());
  console.log(instructorObject.teachTo("Calimero"));
  document.write(instructorObject.teachAll());
}

let LeadInstructor = {
  // Properties
  name : "David",
  bootcamp : "FS",
  mode : "FT",
  promo : {
    month: "sep",
    year: 2020
  },
  // Methods
  teachAll: function () {
    return "Chavales, a aprender JS!";
  },
  teachTo: function (student) {
    return "No desfallezcas, " + student;
  }
};

teachLead(LeadInstructor);
console.log(LeadInstructor);

LeadInstructor.name = "Max Power";
LeadInstructor.bootcamp = "CS";
LeadInstructor.promo.month = "Feb";
LeadInstructor.promo.year = 2021;
LeadInstructor.teachAll = function() {
  return "Chavales a aprender a juankear";
};

teachLead(LeadInstructor);
console.log(LeadInstructor);