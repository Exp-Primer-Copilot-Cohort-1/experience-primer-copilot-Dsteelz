function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsList = document.getElementById("member-skills-list");
  var memberSkillsClose = document.getElementById("member-skills-close");
  var memberSkillsOpen = document.getElementById("member-skills-open");

  memberSkillsOpen.onclick = function() {
    memberSkills.style.display = "block";
    memberSkillsList.style.display = "block";
    memberSkillsClose.style.display = "block";
    memberSkillsOpen.style.display = "none";
    member.style.display = "none";
  }

  memberSkillsClose.onclick = function() {
    memberSkills.style.display = "none";
    memberSkillsList.style.display = "none";
    memberSkillsClose.style.display = "none";
    memberSkillsOpen.style.display = "block";
    member.style.display = "block";
  }
}