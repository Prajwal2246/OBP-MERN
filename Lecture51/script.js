const itemsForm = document.querySelector("#item-form");
const itemName = document.querySelector("#item");
const itemDesc = document.querySelector("#desc");
const itemLocation = document.querySelector("#location");
const itemDate = document.querySelector("#date");
const itemContact = document.querySelector("#contact");
const formBtn = document.querySelector("#formBtn");
const lostContainer = document.querySelector("#lost-items-container");
const foundContainer = document.querySelector("#found-items-container");
const totalLostP = document.querySelector("#lost-count");
const totalFoundP = document.querySelector("#found-count");
const totalResolvedP = document.querySelector("#resolved-count");
const allinputsinform = document.querySelectorAll("input,textarea");

let allItems = [];

//store form details in session storage every 2 seconds
setInterval(()=>{
  const draft= {};

  allinputsinform.forEach((inp)=>{
    draft[inp.name]=inp.value;
  });

  sessionStorage.setItem("draftForm",JSON.stringify(draft));
  
},2000)

//restore saved form on reload
window.addEventListener("DOMContentLoaded",()=>{
    const saved = sessionStorage.getItem("draftForm");
    if(!saved) return;

    const draft = JSON.parse(saved);

    allinputsinform.forEach((inp) => {
    if (draft.hasOwnProperty(inp.name)) {

        // Restore radio buttons
        if (inp.type === "radio") {
            if (inp.value === draft[inp.name]) {
                inp.checked = true;
            }
        } 
        // Restore normal inputs
        else {
            inp.value = draft[inp.name];
        }
    }
});

})

// Function to render a card
function renderCard(item, container) {
  const card = document.createElement("div");
  card.className =
    "item-card border p-4 rounded bg-gray-200 text-gray-900 shadow flex flex-col gap-2";

  // store name and type as data attributes
  card.dataset.name = item.name;
  card.dataset.type = item.type;

  card.innerHTML = `
    <p class="item-title font-bold cursor-pointer"><strong>Item: ${item.name}</strong></p>
    <div class="details hidden flex flex-col gap-2">
    <p><strong>Description: ${item.desc}</strong></p>
    <p><strong>Location: ${item.location}</strong></p>
    <p><strong>Date: ${item.date}</strong></p>
    <p><strong>Contact:</strong> <span class="contact-hidden">Hidden</span></p>

    <div class="flex gap-2 mt-2">
      <button class="resolve-btn bg-green-500 text-white font-extralight px-2 py-1 rounded">Mark as Resolved</button>
      <button class="contact-btn bg-blue-500 text-white font-extralight px-2 py-1 rounded">Contact Owner</button>
    </div>
    </div>
  `;

  container.insertBefore(card, container.firstChild);
}

// Load items from localStorage
function loadItems() {
  let lostItems = JSON.parse(localStorage.getItem("lost-items")) || [];
  let foundItems = JSON.parse(localStorage.getItem("found-items")) || [];

  lostItems.forEach((item) => renderCard(item, lostContainer));
  foundItems.forEach((item) => renderCard(item, foundContainer));

  allItems = [...lostItems, ...foundItems];
  updateCounters();
}

// Update counters
function updateCounters() {
  totalLostP.textContent = allItems.filter(
    (item) => item.type === "lost"
  ).length;
  totalFoundP.textContent = allItems.filter(
    (item) => item.type === "found"
  ).length;
}

loadItems();

// Form submit
itemsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const itemTypeInput = document.querySelector("input[type='radio']:checked");
  if (!itemTypeInput) {
    alert("Please select lost or found");
    return;
  }
  const itemType = itemTypeInput.value;

  if (
    !itemName.value ||
    !itemDesc.value ||
    !itemLocation.value ||
    !itemDate.value ||
    !itemContact.value
  ) {
    alert("Please fill all details");
    return;
  }

  const newItem = {
    id: Date.now(),
    type: itemType,
    name: itemName.value.trim(),
    desc: itemDesc.value.trim(),
    location: itemLocation.value.trim(),
    date: itemDate.value,
    contact: itemContact.value.trim(),
  };

  allItems.push(newItem);

  const container = newItem.type === "lost" ? lostContainer : foundContainer;

  renderCard(newItem, container);

  // Save to localStorage
  if (newItem.type === "lost") {
    let lostItems = JSON.parse(localStorage.getItem("lost-items")) || [];
    lostItems.push(newItem);
    localStorage.setItem("lost-items", JSON.stringify(lostItems));
  } else {
    let foundItems = JSON.parse(localStorage.getItem("found-items")) || [];
    foundItems.push(newItem);
    localStorage.setItem("found-items", JSON.stringify(foundItems));
  }

  updateCounters();
  itemsForm.reset();
});

// Event delegation for resolve and contact buttons
[lostContainer, foundContainer].forEach((container) => {

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".item-card");
    if (!card) return;

    const itemNameText = card.dataset.name;
    const itemType = card.dataset.type;

    const item = allItems.find((i) => i.name === itemNameText);

    //EXPAND AND COLLAPSE CARD
    if(e.target.classList.contains("item-title")){
        const details = card.querySelector(".details");
        const isHidden=details.classList.contains("hidden");

        if(isHidden){
            details.classList.remove("hidden");
            details.classList.add("expanded");
        }else{
            details.classList.add("hidden");
            details.classList.remove("expanded");
        }
        return;
    }

    // MARK AS RESOLVED
    if (e.target.classList.contains("resolve-btn")) {
      if (!item) return;

      card.remove();

      // Remove from allItems
      allItems = allItems.filter((i) => i.name !== itemNameText);

      // Update counters
      updateCounters();
      totalResolvedP.textContent = parseInt(totalResolvedP.textContent) + 1;

      // Remove from localStorage
      if (itemType === "lost") {
        let lostItems = JSON.parse(localStorage.getItem("lost-items")) || [];
        lostItems = lostItems.filter((i) => i.name !== itemNameText);
        localStorage.setItem("lost-items", JSON.stringify(lostItems));
      } else {
        let foundItems = JSON.parse(localStorage.getItem("found-items")) || [];
        foundItems = foundItems.filter((i) => i.name !== itemNameText);
        localStorage.setItem("found-items", JSON.stringify(foundItems));
      }
    }

    // SHOW CONTACT
    if (e.target.classList.contains("contact-btn")) {
      const contactSpan = card.querySelector(".contact-hidden");
      if (item) {
        contactSpan.textContent = item.contact;
      } else {
        contactSpan.textContent = "Not found";
      }
    }
  });
});


