let language = localStorage.getItem("language");
if (language === null) {
  localStorage.setItem("language", "en");
}
if (language === "en") {
  var lang = {
    appName: "Maaloom.Edu",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
  };
} else {
  var lang = {
    appName: "معلوم Edu",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
  };
}
