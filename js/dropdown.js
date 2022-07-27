// User Profile Dropdown
const userProfile = document.querySelector(".user-profile");
const userProfileDropdown = document.querySelector(".user-profile-dropdown");
userProfile.addEventListener("click", () => {
  userProfile.classList.toggle("active");

  switch (userProfile.classList.contains("active")) {
    case true:
      userProfileDropdown.classList.replace("invisible", "visibility");
      userProfileDropdown.classList.replace("opacity-0", "opacity-100");
      break;
    default:
      userProfileDropdown.classList.replace("visibility", "invisible");
      userProfileDropdown.classList.replace("opacity-100", "opacity-0");
      break;
  }
});

// Toggle Sidebar
const btnToggleSidebar = document.querySelector(".btn-toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const menuSidebar = sidebar.querySelector(".menu");

btnToggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menuSidebar.classList.toggle("hidden");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.replace("w-[15rem]", "w-[0]");
    sidebar.classList.remove("px-4");
    btnToggleSidebar.classList.replace("rotate-0", "rotate-180");
    // btnToggleSidebar.classList.remove("fa-regular", "fa-circle-arrow-right");

    return;
  }

  sidebar.classList.replace("w-[0]", "w-[15rem]");
  sidebar.classList.add("px-4");
  btnToggleSidebar.classList.replace("rotate-180", "rotate-0");

  // btnToggleSidebar.classList.remove("fa-solid", "fa-bars-staggered");
  // btnToggleSidebar.classList.add("fa-regular", "fa-circle-arrow-right");
});

// --------------------- Menu Dropdown Sidebar --------------------- //

const dropdownMenuSidebar = document.querySelectorAll(
  ".btn-toggle-dropdown-sidebar"
);

// Expand Dropdown Sidebar
const dropdownExpandMenuSidebar = document.querySelectorAll(
  ".dropdown-sidebar-expand-menu"
);

for (let i = 0; i < dropdownExpandMenuSidebar.length; i++) {
  const dropdownSidebar = dropdownMenuSidebar[i];
  const dropdownExpand = dropdownExpandMenuSidebar[i];

  // Default Height For Dropdown Expand
  dropdownExpand.style.maxHeight = 0;

  dropdownSidebar.addEventListener("click", () => {
    dropdownSidebar.classList.toggle("active");

    dropdownSidebar.classList.contains("active")
      ? setDisplayDropdownSidebar(true, dropdownExpand)
      : setDisplayDropdownSidebar(false, dropdownExpand);
  });
}

function setDisplayDropdownSidebar(status = false, dropdownExpand) {
  const dropdownExpandHeight = dropdownExpand.scrollHeight;
  if (status === true) {
    dropdownExpand.classList.add("mt-4");
    dropdownExpand.style.maxHeight = `${dropdownExpandHeight}px`;
    dropdownExpand.classList.replace("overflow-hidden", "overflow-visible");
    dropdownExpand.classList.replace("opacity-0", "opacity-100");
    return;
  }

  dropdownExpand.classList.remove("mt-4");
  dropdownExpand.style.maxHeight = 0;
  dropdownExpand.classList.replace("overflow-visible", "overflow-hidden");
  dropdownExpand.classList.replace("opacity-100", "opacity-0");
}

// --------------------- End Menu Dropdown Sidebar --------------------- //
