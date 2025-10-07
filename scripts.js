document.addEventListener("DOMContentLoaded", () => {
  const pastPapersBtn = document.getElementById("pastPapersBtn");
  const resourcesBtn = document.getElementById("resourcesBtn");
  const homeBtn = document.getElementById("homeBtn");
  const loginToggle = document.getElementById("loginToggle");
  const loginBtn = document.getElementById("loginBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");
  const startBtn = document.getElementById("startBtn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const gamesContainer = document.getElementById("gamesContainer");
  const dropdown = document.getElementById("markschemesDropdown");
  const dropdownParent = document.querySelector(".dropdown-parent");

  // Dropdown hover
  dropdownParent.addEventListener("mouseenter", () => dropdown.classList.remove("hidden"));
  dropdownParent.addEventListener("mouseleave", () => dropdown.classList.add("hidden"));

  // Sections
  function showSection(sectionId) {
    ["homeSection","paperGrid","resourcesList","gameViewer","loginScreen"]
      .forEach(id => document.getElementById(id).classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
    if (sectionId !== "markschemesDropdown") dropdown.classList.add("hidden");
  }

  function clearLoginFields() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginError").textContent = "";
  }

  // Past Papers Access Code
  pastPapersBtn.addEventListener("click", () => {
    const code = prompt("Enter access code:");
    if (code === "7355608") showSection("paperGrid");
    else if (code !== null) alert("Access denied.");
  });

  resourcesBtn.addEventListener("click", () => showSection("resourcesList"));
  homeBtn.addEventListener("click", () => showSection("homeSection"));
  loginToggle.addEventListener("click", () => showSection("loginScreen"));
  backHomeBtn.addEventListener("click", () => { showSection("homeSection"); clearLoginFields(); });

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("loginError");
    if (username === "student" && password === "gcse2025") {
      alert("Login successful! Welcome, " + username + ".");
      showSection("homeSection");
      clearLoginFields();
    } else loginError.textContent = "Incorrect username or password.";
  });

  startBtn.addEventListener("click", () => pastPapersBtn.click());

  // Full list of games
  const games = [
    {name:"OvO", url:"https://script.google.com/macros/s/AKfycbyDZOJq86UIFlMkKfvZtA_Sv86sKooVRpwVFS2rb38TOT8ExCt3PfR1Y5UAveVuVGlQLw/exec"},
    {name:"M0t0 X3M", url:"https://script.google.com/macros/s/AKfycbw7_zG02ZMXnPSdwCx0CcmN8eX_0Bk3715TSP-Eglb1DyVhp7RxShuXq4qJ8Q2s7cnW/exec"},
    {name:"M0t0 X3M 2", url:"https://script.google.com/macros/s/AKfycbxFMlvpCwA1vZ0hGwNZ32IZnqUoCVS3lJxBpIdjqU9Nf2Pp89i-Fmx0YaryI3fIc/exec"},
    {name:"M0t0 X3M 3", url:"https://script.google.com/macros/s/AKfycbw3x1GjtXTLFlreYVz4puHyTJRaf0-BRwYQcVBpFf3UeocoMwo_ZnUG6s-kgHLe4CqvSw/exec"},
    {name:"BTD Tower Defence", url:"https://script.google.com/macros/s/AKfycbzKR69hQK7HutG9tRM2cEM9H8vEX8xwkPDTeEjeju7G_P2Xf83RYqBoNT2S9NPo7NWN/exec"},
    {name:"Car Crash Test", url:"https://script.google.com/macros/s/AKfycbwnHhMofGNjZt4xEn7HZJTUBs2klhlPV7mk4-_LGHESeYIFmtQiGn0gr3VT52AZna0U/exec"},
    {name:"V3X 6", url:"https://script.google.com/macros/s/AKfycbzi5I00V5E4UoWKNwYMpazWyXDs1J4m0hui0937lFzMRKs31QGZ3rcUHRroAt13wmc9tw/exec"},
    {name:"Soccer Random", url:"https://script.google.com/macros/s/AKfycbwr79gF5RqgUkBr0YEX16ayQF4aqdcHxaLRubcOggFvXqp-PiG7tw0uyvr3vlUEpDnC/exec"},
    {name:"Boxing Random", url:"https://script.google.com/macros/s/AKfycbwWFVSflZjpFKgB73dzoNbl5d044y0_BcfrRyVqgfURdUZHpHJUDEeQS1ABGGqXmFoo/exec"},
    {name:"Volleyball Random", url:"https://script.google.com/macros/s/AKfycbySnSeOuxeNgXf_mRnxhgTNrI0GTf75ACkCgLZgNKFiH18b_MUvbqsW1x0wlUljppDQ/exec"},
    {name:"Basket Random", url:"https://script.google.com/macros/s/AKfycbwiQgeRHVDP8wzJ_CeSE1LyaKCMu1qdlopwylhD4LdBvBVd2y36VjlWY0iyk38WH0JiJA/exec"},
    {name:"World Cup 2010 Penalty", url:"https://script.google.com/macros/s/AKfycbwVK8rVs0-rdHBKCIe2p4oB4OYcS6MRXZdkpfLXvAqYGzeybVRyelV4LfydxjNgk4U4Ug/exec"},
    {name:"MC Classic", url:"https://firebasestorage.googleapis.com/v0/b/test-1e83a.appspot.com/o/mcc.html?alt=media&token=0692f613-2b3b-462e-9948-67179c0a13e6"},
    {name:"Cookie CIicker", url:"https://script.google.com/macros/s/AKfycbxGM35J29NkO-2LYjxWj_cA9IUaaXypkUy-LqXyLRbGTz0R6lXmAEapz1STN1jlTIRavw/exec"},
    {name:"Storm Ops", url:"https://script.google.com/macros/s/AKfycbyQIno9ZKoMkI8Wg7WqdTxYh6sfSfb54ecv-0Hlc-lshcocxIExNHEPPxdn5KZ8pr7E/exec"},
    {name:"Mini Golf", url:"https://script.google.com/macros/s/AKfycbw5p1tly8IoRN92yaOqJ49QCKGyleyB5HHjyKEbO_n0zlBCpUF1FYvWNjBbJZkcGQQ3Bg/exec"},
    {name:"Stickman Duel", url:"https://script.google.com/macros/s/AKfycbwAoTmRTzE6ydvLBsbUcwDvlzS36xbr263_ttMmz8pBgmf0ih3RHJNeYFe3-evGMeMF/exec"},
    {name:"Papa's Pizzeria", url:"https://script.google.com/macros/s/AKfycbxN6EVQbtkjn6NUiIyJscLGTyyMyAUABzuB_kp4relIe6rr9B8eWmlnlvDsBVtiRa5pPg/exec"},
    {name:"Football Legends", url:"https://script.google.com/macros/s/AKfycbz-ObfO1VCo7Q0GsJidFGSJlVrUf9KnnMj3xXzqlUy8joA4ULrEUkWpbm0LWBtdaD8Meg/exec"},
    {name:"Snowball IO", url:"https://script.google.com/macros/s/AKfycbxa3OjBw8KWer3YhEXl1wxoe1uQKNo-wgGuqPO3NTndX566TTs10-ioXopEPitTvE-B/exec"},
    {name:"Merge Fruits", url:"https://script.google.com/macros/s/AKfycbxWngUzKXgiuLw8NOMvvPpH22STOer33RrFCMx6aBgVObUJ7ArfNZoOe4m75_ahoTni8Q/exec"},
    {name:"Smash Karts", url:"https://script.google.com/macros/s/AKfycbx63iRe5mtf5PQGIn_eGwKePxCA1iU6w-YApn57Mh4phi2ZB-G-GCJA1YTV9jKrwoqb/exec"},
    {name:"BasketbaII L3G3NDS", url:"https://script.google.com/macros/s/AKfycbypcRAKupeX7kvdt4IDnmPNSI788HFppGG-P5V8QRCHzRKZ7AXFdtUjkNBi6QU9yYFc2Q/exec"},
    {name:"Prison Obby", url:"https://script.google.com/macros/s/AKfycbw_m8oBAcBdqjFb2W-O0v0zCEQEZ4FKCoz_vYUxK9KzvDexEkYBlxmSlgjXlBXnYlpk/exec"},
    {name:"Sun For Vampires", url:"https://script.google.com/macros/s/AKfycbw08DOpOvXnwu4rSVwjBEGpFYI9R7wp-9m296ow4dc7A5SWPffuv5_NSiwzrmzNlbgorw/exec"},
    {name:"5kibidi ToiIet.io", url:"https://script.google.com/macros/s/AKfycbzPpdXGhTUXl0-3tjIevKhtoEz5mRNlWaxfTie55tZB1w2Qc7Ahm31MBUQrVNlAJ-GjZQ/exec"},
    {name:"Geomtry D4SH", url:"https://script.google.com/macros/s/AKfycbydNb9Y8FIM3D0vcweKtYCYbjJcSXghedO6MN0aWbP5qIwamjjSkBDirvuMHR_6sc4/exec"},
    {name:"Helix Jump", url:"https://script.google.com/macros/s/AKfycbyaj6F4OyYFeZyMmmAIPsauWp8gnkO2EReikoreOJ_KZtX4coWQY9ljRW1kZQ2OqJ9T/exec"},
    {name:"Car Drawing", url:"https://script.google.com/macros/s/AKfycbx_sIQG2rUisJPhvCnaoOFGDwTou_89iDBoJTAB5RsdykYLw7IQF8vUYUKMBDoJDY0asQ/exec"}
  ];

  // Populate Games Grid
  games.forEach(game => {
    const div = document.createElement("div");
    div.className = "paper";
    div.textContent = game.name;
    div.addEventListener("click", () => loadGame(game.url));
    gamesContainer.appendChild(div);
  });

  // Load Game
  window.loadGame = function(url) {
    const gameViewer = document.getElementById("gameViewer");
    const gameFrame = document.getElementById("gameFrame");
    const loader = document.getElementById("loader");

    loader.style.display = "block";
    gameFrame.style.display = "none";
    fullscreenBtn.style.display = "inline-block";

    ["homeSection","paperGrid","resourcesList","loginScreen"]
      .forEach(id => document.getElementById(id).classList.add("hidden"));
    gameViewer.classList.remove("hidden");

    setTimeout(() => { gameFrame.src = url; }, 500);

    gameFrame.onload = () => {
      loader.style.display = "none";
      gameFrame.style.display = "block";
    };
  };

  // Fullscreen Button
  fullscreenBtn.addEventListener("click", () => {
    const iframe = document.getElementById("gameFrame");
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  });

});

// Back button
function goBack() {
  document.getElementById("gameViewer").classList.add("hidden");
  document.getElementById("gameFrame").src = "";
  document.getElementById("paperGrid").classList.remove("hidden");
}
