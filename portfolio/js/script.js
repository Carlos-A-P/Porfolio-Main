/** ---- PROJECTS DATA ----
 * If you still have a JSON string elsewhere, this adapter handles both.
 * Prefer: define PROJECTS as a real array and delete any old `const projects = '...'`.
 */
const PROJECTS = [
  {
    title: "Hack For LA",
    image: "url(../portfolio/img/hfla.png)",
    description: "This project is a multipage website that enables the organization to interact with its volunteers, stakeholders, and donors. It is a great opportunity for new volunteers who want to improve their git protocol skills, such as branching, separation of concerns, and more.",
    live: "https://hackforla.org/",
    code: "https://github.com/hackforla/website",
    made_with: { "0":"HTML","1":"Sass/SCSS","2":"JavaScript","3":"Jekyll" },
    preview: "<img style=\"width:100%;\" src=\"../portfolio/img/hfla.png\" />",
    longer_description: "Developed and maintained a multi-page website enabling the organization to effectively communicate with volunteers, stakeholders, and donors. Implemented features and optimizations to improve accessibility, performance, and content management, ensuring the platform remains scalable and aligned with the organization’s mission."
  },
  {
    title: "Space Tourism Multi-Page Website",
    image: "url(../portfolio/img/space.png)",
    description: "This is a multipage website created using React and Sass. User should be able to: View the optimal layout for each of the website\'s pages depending on their device\'s screen size See hover states for all interactive elements on the page View each page and be able to toggle between the tabs to see new information",
    live: "https://space-tourism-multipage-cpwd.netlify.app/",
    code: "https://github.com/Carlos-A-P/space-tourism-website-react",
    made_with: { "0":"React.js","1":"Sass/SCSS","2":"React Hooks" },
    preview: `<div style="padding:65% 0 0 0;position:relative;">
		<iframe
			src="https://player.vimeo.com/video/651349702?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			loading="lazy"
			style="position:absolute;top:0;left:0;width:100%;height:100%;"
			title="space-tourism-multipage">
		</iframe>
		</div>`,
    longer_description: "Developed a responsive multi-page layout in React.js, leveraging React Router for navigation and React Hooks for state management. Integrated data from a JSON source to dynamically render content. Prioritized accessibility by ensuring full keyboard navigation support and screen reader compatibility. Combined React with Sass for modular, maintainable styling and an efficient development workflow."
  },
  {
    title: "La Liga Defensora — Official Website (The United Firm | La Liga Defensora, A.P.C.)",
    image: "url(../portfolio/img/la_liga_website.png)",
    description: "Built and maintained LaLigaDefensora.com, a Spanish-language legal brand site with IP-based geofencing for jurisdiction-specific content and compliance with regional advertising rules. Applied SEO best practices and designed high-conversion, mobile-optimized landing pages to enhance visibility and user engagement.",
    live: "https://laligadefensora.com/",
    code: "",
    made_with: {
      "0":"WordPress","1":"PHP","2":"JavaScript","3":"Python (automation)","6":"Wordfence"
    },
    preview: "<img src=\"../portfolio/img/la_liga_website.png\" alt=\"La Liga Defensora website preview\" loading=\"lazy\" style=\"width:100%;\" />",
    longer_description: "Led the redesign and ongoing development of LaLigaDefensora.com, enhancing performance, user experience, and brand consistency across devices. Implemented IP-based geofencing in coordination with FirmaDefensora.com to comply with Texas Bar advertising regulations, deploying state-specific site variants while preserving SEO rankings through canonical and noindex strategies. Built and integrated a custom Python automation tool that reduced web lead processing time from approximately 8 hours to 15 minutes, eliminating backlogs and improving response efficiency. Strengthened site security through Wordfence monitoring, proactive log analysis, and incident response procedures, and established a failover strategy to maintain uptime during hosting outages."
  }
];

/** ---- RENDERING ---- */
const grid = document.getElementById("grid");

function addCard(image, title, desc) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("div");
  img.classList.add("project-img");
  img.style.backgroundImage = String(image);

  const body = document.createElement("div");
  body.classList.add("card-body", "d-flex", "flex-column");

  const h3 = document.createElement("h3");
  h3.classList.add("card-title", "h4");
  h3.textContent = String(title);

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.textContent = String(desc);

  const btn = document.createElement("button");
  btn.classList.add("btn", "mt-auto");
  btn.type = "button";
  btn.setAttribute("data-bs-toggle", "modal");
  btn.setAttribute("data-bs-target", "#projectModal");
  btn.addEventListener("click", () => modalInfo(title));
  btn.textContent = "View more";

  card.append(img, body);
  body.append(h3, p, btn);
  grid.appendChild(card);
}

function displayProjects() {
  const count = Math.min(6, PROJECTS.length);
  for (let i = 0; i < count; i++) {
    const item = PROJECTS[i];
    addCard(item.image, item.title, item.description);
  }
}
console.log(Array.isArray(PROJECTS), PROJECTS.length);
displayProjects();

// Modal
const modalTitle = document.getElementById("projectModalLabel");
const card_description = document.getElementById("card-description");
const codeBtn = document.getElementById("viewCode");
const liveBtn = document.getElementById("viewLive");
const techList = document.getElementById("tech_List");
const cardPreview = document.getElementById("card-preview");

function modalInfo(title) {
  const item = PROJECTS.find(p => String(p.title) === String(title));
  if (!item) return;

  modalTitle.textContent = item.title;
  cardPreview.innerHTML = item.preview || "";
  card_description.textContent = item.longer_description || "";

  // Buttons
  if (item.code) {
    codeBtn.href = item.code;
    codeBtn.removeAttribute("disabled");
    codeBtn.classList.remove("disabled");
  } else {
    codeBtn.href = "#";
    codeBtn.setAttribute("disabled", "true");
    codeBtn.classList.add("disabled");
  }
  liveBtn.href = item.live || "#";

  // Tech list
  const mw = item.made_with || {};
  techList.innerHTML = Object.keys(mw)
    .sort((a,b)=>Number(a)-Number(b))
    .map(k => `<li>${mw[k]}</li>`)
    .join("");
}
