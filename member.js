function skillsMember() {
  const member = {
    name: "John",
    age: 25,
    getSkills: function() {
      return ["JavaScript", "React", "Node"];
    }
  };

  return member;
}