/* ==========================================
   JAN KALYAN YOUTH CLUB
   JAVASCRIPT FILE

   MEMBER ଓ ACTIVITY ADD କରିବା
   ପାଇଁ ଏହି FILE EDIT କର।
========================================== */


/* ==========================================
   👥 MEMBERS
   ==========================================

   // EDIT HERE

   ନୂଆ Member add କରିବା ପାଇଁ
   { } ଭିତରେ data ଲେଖ।

   Photo:
   images/member1.jpg

========================================== */

const members = [

    {
        name: "Ranjan Kumar Sahu",
        designation: "President",
        mobile: "9937286184",
        photo: "images/member1.jpg"
    },

    {
        name: "Sunil Kumar Sahu",
        designation: "Secretary",
        mobile: "7609848299",
        photo: "images/member2.jpg"
    },

    {  name: "Nagendra Sahu",
        designation: "Vice President",
        mobile: "7750093984",
        photo: "images/member3.jpg"
     },

    {
        name: "Manas Ranjan Sahu",
        designation: "Cashier",
        mobile: "8658888894",
        photo: "images/member4.jpg"
    },
    //==== Leadership Ends =====
    

];


/* ==========================================
   📸 SOCIAL ACTIVITIES
   ==========================================

   // EDIT HERE

========================================== */

const activities = [

    /*
    {
        title: "Blood Donation Camp",
        photo: "images/activity1.jpg"
    },

    {
        title: "Tree Plantation",
        photo: "images/activity2.jpg"
    }
    */

];


/* ==========================================
   DISPLAY MEMBERS
========================================== */

const memberContainer =
    document.getElementById("memberContainer");


if (members.length === 0) {

    memberContainer.innerHTML =
        "<p>No members added yet.</p>";

} else {

    members.forEach(function(member) {

        const card =
            document.createElement("div");

        card.className =
            "member-card";

        card.innerHTML = `

            <img
                src="${member.photo}"
                alt="${member.name}"
            >

            <h3>
                ${member.name}
            </h3>
            <p class="designation">${member .designation}</p>

            <p>
                📱 ${member.mobile}
            </p>

            <a
                class="call-btn"
                href="tel:${member.mobile}"
            >
                📞 Call
            </a>

        `;

        memberContainer.appendChild(card);

    });

}


/* ==========================================
   DISPLAY SOCIAL ACTIVITIES
========================================== */

const activityContainer =
    document.getElementById("activityContainer");


if (activities.length === 0) {

    activityContainer.innerHTML =
        "<p>No social activities added yet.</p>";

} else {

    activities.forEach(function(activity) {

        const card =
            document.createElement("div");

        card.className =
            "activity-card";

        card.innerHTML = `

            <img
                src="${activity.photo}"
                alt="${activity.title}"
            >

            <h3>
                ${activity.title}
            </h3>

        `;

        activityContainer.appendChild(card);


        /* IMAGE CLICK */

        const image =
            card.querySelector("img");

        image.addEventListener(
            "click",
            function() {

                modal.style.display =
                    "flex";

                modalImage.src =
                    activity.photo;

            }
        );

    });

}


/* ==========================================
   📱 MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "show"
        );

    }
);


/* ==========================================
   🌙 DARK MODE
========================================== */

const darkBtn =
    document.getElementById("darkBtn");


darkBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark"
        );

        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            darkBtn.innerHTML =
                "☀️";

        } else {

            darkBtn.innerHTML =
                "🌙";

        }

    }
);


/* ==========================================
   🖼️ IMAGE POPUP
========================================== */

const modal =
    document.getElementById(
        "imageModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


closeModal.addEventListener(
    "click",
    function() {

        modal.style.display =
            "none";

    }
);


modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            modal.style.display =
                "none";

        }

    }
);
