// Custom alert function
export function handleAlert(message, type) {
  let style;
  let icon;

  // Set color scheme
  if (type === "success") {
    style = "bg-[#8cb396]";
    icon = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-check-big-icon lucide-circle-check-big"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
        <path d="m9 11 3 3L22 4"/>
      </svg>
      `;
  } else if (type === "info") {
    style = "bg-[#e9fbff]";
    icon = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" class="lucide lucide-badge-info-icon lucide-badge-info"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <line x1="12" x2="12" y1="16" y2="12"/>
        <line x1="12" x2="12.01" y1="8" y2="8"/>
      </svg>
      `;
  } else if (type === "error") {
    style = "bg-red-300";
    icon = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-triangle-alert-icon lucide-triangle-alert"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
        <path d="M12 9v4"/>
        <path d="M12 17h.01"/>
      </svg>
      `;
  } else {
    style = "bg-[#e9fbff]";
    icon = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" class="lucide lucide-badge-info-icon lucide-badge-info"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <line x1="12" x2="12" y1="16" y2="12"/>
        <line x1="12" x2="12.01" y1="8" y2="8"/>
      </svg>
      `;
  }

  const div = document.createElement("div");
  div.classList.add(
    "p-4",
    "rounded-lg",
    "border",
    "border-black",
    "fixed",
    "top-10",
    "left-[50%]",
    "transform",
    "-translate-x-1/2",
    "z-20",
    "min-w-[20rem]",
    style,
  );

  div.innerHTML = `
    <div class="flex gap-4 items-center">
      ${icon}
      <p>${message}</p>
    </div>
    `;

  document.body.appendChild(div);

  // After a while remove div element
  setTimeout(() => {
    div.remove();
  }, 15000); // Displays alert for 15secs
}

export function setActiveLink() {
  const path = window.location.pathname.slice(1);
  // console.log(path);

  document.querySelectorAll(".link").forEach((element) => {
    // console.log(element.id);

    if (element.id === path) {
      element.classList.add("bg-[#1f583e]/60", "rounded-lg");
    } else {
      element.classList.remove("bg-[#1f583e]/60", "rounded-lg");
    }
  });

  // Highlight dropdowns button for active links
  document.querySelectorAll(".d-btn").forEach((element) => {
    if (element.classList.contains(`d-btn-${path}`)) {
      element.classList.add("bg-[#1f583e]/60", "rounded-lg");
    } else {
      element.classList.remove("bg-[#1f583e]/60", "rounded-lg");
    }
  });
}

export function handleSidebar() {
  try {
    const body = document.querySelector("#body");
    const sidebar = document.querySelector("#sidebar");
    const toggleSidebarBtn = document.querySelector("#toggle-sidebar-btn");
    const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    const authLayoutDiv = document.querySelector("#authlayout-div");
    const authSignOutDiv = document.querySelector("#auth-signout-div");
    const authSidebarContentDiv = document.querySelector("#auth-sidebar-content-div");

    // State
    let isSidebarCollapsed = false;
    let isMobileSidebarOpen = false;

    const sidebarMax = "w-[15rem]";
    const sidebarMin = "w-[4rem]";

    const sidebarBtnLeft = "left-[15rem]";

    const authLayoutDivMax = "md:ml-[16rem]";
    const authLayoutDivMin = "ml-[5rem]";

    // Check if device is mobile
    const isMobile = () => window.innerWidth < 768;

    // Check if mobile sidebar content should overflow
    const sidebarContentOverflow = () => {
      const isSmallScreen = () => window.innerHeight < 400;
      if (isSmallScreen()) {
        authSignOutDiv.classList.add(
          "sidebar-transition",
          "border-t",
          "border-r",
          "border-gray-600",
          "w-[15rem]",
          "bg-[#dceee0]",
        );
        authSidebarContentDiv.classList.add("overflow-auto", "max-h-[15rem]");
      } else {
        authSignOutDiv.classList.remove(
          "border-t",
          "border-r",
          "border-gray-600",
          "w-[15rem]",
          "bg-[#dceee0]",
        );
        authSidebarContentDiv.classList.remove("overflow-auto", "max-h-[15rem]");
      }
    };

    // Initialize mobile view
    if (isMobile()) sidebar.classList.add("hidden");
    sidebarContentOverflow();

    toggleSidebarBtn.addEventListener("click", () => {
      // console.log("clicked");

      if (isMobile()) {
        isMobileSidebarOpen = !isMobileSidebarOpen;

        if (isMobileSidebarOpen) {
          toggleSidebarBtn.classList.add(sidebarBtnLeft, "top-0");

          sidebar.classList.remove("hidden");
          sidebar.classList.add(sidebarMax, "flex");

          // Disable scrolling mobile sidebar is opened
          body.classList.add("overflow-y-hidden");
        } else {
          toggleSidebarBtn.classList.remove(sidebarBtnLeft, "top-0");

          sidebar.classList.remove(sidebarMax, "flex");
          sidebar.classList.add("hidden");

          // Enable scrolling mobile sidebar is opened
          body.classList.remove("overflow-y-hidden");
        }
      } else {
        isSidebarCollapsed = !isSidebarCollapsed;

        if (isSidebarCollapsed) {
          sidebarContentOverflow();
          sidebar.classList.remove(sidebarMax);
          sidebar.classList.add(sidebarMin);

          authSignOutDiv.classList.remove(
            "border-t",
            "border-r",
            "border-gray-600",
            "w-[15rem]",
            "bg-[#dceee0]",
          );
          authSidebarContentDiv.classList.remove("overflow-auto", "max-h-[15rem]");

          authLayoutDiv.classList.remove(authLayoutDivMax);
          authLayoutDiv.classList.add(authLayoutDivMin);

          // Hide text elements
          document.querySelectorAll(".sidebar-text").forEach((el) => {
            el.classList.add("hidden");
          });

          // Hide dropdown content
          document.querySelectorAll(".dropdown-content").forEach((el) => {
            el.classList.add("hidden");
          });

          // Add tooltip behavior for collapsed mode
          // document
          //     .querySelectorAll(".dropdown-trigger")
          //     .forEach((trigger) => {
          //         trigger.setAttribute("title", "Projects");
          //     });
        } else {
          sidebarContentOverflow();
          sidebar.classList.remove(sidebarMin);
          sidebar.classList.add(sidebarMax);

          authLayoutDiv.classList.add(authLayoutDivMax);
          authLayoutDiv.classList.remove(authLayoutDivMin);

          // Show text elements
          document.querySelectorAll(".sidebar-text").forEach((el) => {
            el.classList.remove("hidden");
          });

          // Show dropdown content if it was open
          document.querySelectorAll(".dropdown-content.is-open").forEach((el) => {
            el.classList.remove("hidden");
          });

          // Remove tooltips
          // document
          //     .querySelectorAll(".dropdown-trigger")
          //     .forEach((trigger) => {
          //         trigger.removeAttribute("title");
          //     });
        }
      }
    });

    // Handle resize events
    window.addEventListener("resize", () => {
      sidebarContentOverflow();

      if (isMobile()) {
        if (isMobileSidebarOpen) {
          toggleSidebarBtn.classList.add(sidebarBtnLeft, "top-0");
        } else {
          toggleSidebarBtn.classList.remove(sidebarBtnLeft, "top-0");
        }

        // Reset desktop styles
        if (isSidebarCollapsed) {
          document.querySelectorAll(".sidebar-text").forEach((el) => {
            el.classList.remove("hidden");
          });

          // Show dropdown content if it was open
          document.querySelectorAll(".dropdown-content.is-open").forEach((el) => {
            el.classList.remove("hidden");
          });

          isSidebarCollapsed = false;
        }

        // Apply mobile styles
        if (!isMobileSidebarOpen) {
          sidebar.classList.add("hidden");
          sidebar.classList.remove(sidebarMax);
        }
      } else {
        // Allow scrolling after resize
        body.classList.remove("overflow-y-hidden");

        if (isSidebarCollapsed) {
          authLayoutDiv.classList.remove(authLayoutDivMax);
          authLayoutDiv.classList.add(authLayoutDivMin);
        } else {
          authLayoutDiv.classList.add(authLayoutDivMax);
          authLayoutDiv.classList.remove(authLayoutDivMin);
        }

        toggleSidebarBtn.classList.remove(sidebarBtnLeft, "top-0");

        // Reset mobile styles
        sidebar.classList.remove("hidden");
        sidebar.classList.add(sidebarMax);
        isMobileSidebarOpen = false;
      }
    });

    // Toggle dropdown menus
    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const parent = trigger.closest(".dropdown-container");
        const content = parent.querySelector(".dropdown-content");
        const icon = trigger.querySelector(".dropdown-icon");

        // Toggle dropdown
        if (content.classList.contains("opacity-0")) {
          // Open dropdown
          content.classList.remove("max-h-0", "opacity-0");
          content.classList.add("max-h-48", "opacity-100", "is-open");
          icon.classList.add("rotate-180");

          // If sidebar is collapsed, don't show dropdown
          if (isSidebarCollapsed) {
            content.classList.add("hidden");
          } else {
            content.classList.remove("hidden");
          }
        } else {
          // Close dropdown
          content.classList.remove("max-h-48", "opacity-100", "is-open");
          content.classList.add("max-h-0", "opacity-0");
          icon.classList.remove("rotate-180");
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}
