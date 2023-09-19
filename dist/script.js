const icons = [
  { id: "1", name: "Gmail",price:"free", src: "./assets/gmail.png" },
  { id: "2", name: "Saleforce",price:"premium", src: "./assets/salesforce.png" },
  { id: "3", name: "Slack",price:"free", src: "./assets/slack.png" },
  { id: "4", name: "Dropbox",price:"free", src: "./assets/dropbox.png" },
  { id: "5", name: "Google Drive",price:"free", src: "./assets/drive.png" },
  { id: "6", name: "Facebook",price:"free", src: "./assets/fbblue.png" },
  { id: "7", name: "Gmail",price:"free", src: "./assets/gmail.png" },
  { id: "8", name: "Slack",price:"free", src: "./assets/slack.png" },
  { id: "11", name: "Winderlist",price:"premium", src: "./assets/winderlist.png" },
  { id: "12", name: "Twillo",price:"free", src: "./assets/twillo.png" },
  { id: "13", name: "Twitter",price:"free", src: "./assets/twitterblue2.png" },
  { id: "14", name: "AgileCRM",price:"free", src: "./assets/AgileCRM.png" },
  { id: "15", name: "Office365",price:"premium", src: "./assets/Office365.png" },
  { id: "16", name: "Google Sheets",price:"free", src: "./assets/googlesheets.png" },
  { id: "12", name: "Winderlist",price:"free", src: "./assets/winderlist.png" },
  { id: "13", name: "Twitter",price:"free", src: "./assets/twitterblue2.png" },
  { id: "14", name: "Linkedin",price:"free", src: "./assets/linkedinblue.png" },
  { id: "15", name: "PayPal",price:"premium", src: "./assets/paypal.png" },

  { id: "16", name: "Todolist",price:"free", src: "./assets/todo.png" },

  { id: "17", name: "Trello",price:"free", src: "./assets/trello.png" },

  { id: "18", name: "Zoho Invoice",price:"free", src: "./assets/zoho.png" },
  { id: "19", name: "Harvest",price:"free", src: "./assets/Harvest.png" },
  { id: "20", name: "Linkedin",price:"free", src: "./assets/linkedinblue.png" },
  { id: "21", name: "Todolist",price:"free", src: "./assets/todo.png" },
];

const plansData = [
  {
    id: 1,
    color: "#DE593C",
    src1: "./assets/gmail.png",
    name2: "Slack",
    src2: "./assets/slack.png",

    content: "Get Slack notifications for new Salesforce opportunities",
  },
  {
    id: 2,
    color: "#3D599B",
    src1: "./assets/gmail.png",
    name2: "Facebook",
    src2: "./assets/fbblue.png",
    content:
      "Create new lead in Salesforce when a new lead submits their information through Facebook Lead Ads",
  },
  {
    id: 3,
    color: "#2FB88F",
    src1: "./assets/gmail.png",
    name2: "Salesforce",
    src2: "./assets/salesforce.png",
    content: "Get Slack notifications for new Salesforce opportunities",
  },
  {
    id: 4,
    color: "#2594C5",
    src1: "./assets/gmail.png",
    name2: "Twitter",
    src2: "./assets/twitterblue2.png",
    content:
      "Create new lead in Salesforce when a new lead submits their information through Twitter Lead Ads",
  },
];

const appIcons = document.getElementById("apps-container");
const plansContainer = document.getElementById("plans-container");

icons.map((icon) => {
  const div = document.createElement("div");
  div.classList.add("flex", "flex-col", "gap-3", "items-center");

  div.innerHTML = `<div title="${icon.price}" class="icon-box cursor-pointer relative grid place-content-center rounded-xl h-16 w-16 bg-white shadow-md" style="border: 1px solid #D6D6D6; box-shadow: 0px 5px 2px #00000014; ;">
     <img src="${icon.src}" alt="${icon.name}" class="object-contain h-10 w-10" />
    
     <img src="./assets/check.png" alt="check" class="check-mark" style="display: none; position: absolute; right: -3px;" />
     
   </div>
   <span class="text-xs text-gray-500">${icon.name}</span>`;

  appIcons.appendChild(div);
});
//<div class="h-[280px] w-[330px] bg-[${color}] px-8 text-white flex flex-col gap-6 justify-center items-center">

plansData.map((plan) => {
  const div = document.createElement("div");
  div.style.backgroundColor = plan.color;
  div.classList.add(
    "h-[280px]",
    "w-[330px]",
    "px-8",
    "py-6",
    "text-white",
    "flex",
    "flex-col",
    "gap-6",
    "justify-center",
    "items-center"
  );
  // div.setAttribute("key", `${plan.id}`);
  div.innerHTML += ` 
  <div class="flex gap-4 items-center">
    <div
      class="w-16 h-16 grid place-content-center rounded-xl bg-white shadow-md"
      style="border: 1px solid white; box-shadow: 0px 5px 2px #00000014"
>
      <img
        src="./assets/gmail.png"
        alt="gmail"
        class="object-contain h-10 w-10"
      />
    </div>
    <img src="./assets/plus.svg" alt="add" class="h-10 w-10">
    <div
      class="w-16 h-16 grid place-content-center rounded-xl bg-white shadow-md"
      style="border: 1px solid white; box-shadow: 0px 5px 2px #00000014"
    >
      <img
        src="${plan.src2}"
        alt="${plan.name2}"
        class="object-contain h-10 w-10"
      >
    </div>
  </div>
  <p class="text-sm font-semibold">${plan.content}</p>
  <button class="text-xs px-4 py-2 mt-8 rounded-sm" style="border: 1px solid #FFFFFF;">CONNECT THIS FLOW</button>
</div>`;

  plansContainer.append(div);
});

const iconBox = document.querySelectorAll(".icon-box");


iconBox.forEach((icon)=>{
  console.log(icon.title);
  if(icon.title==="premium"){
  icon.insertAdjacentHTML("afterbegin",'<span class="bg-orange-500 text-white text-[10px] absolute top-[-18px] px-[6px] right-[1%] rounded-sm">premium</span>')}
 
  icon.addEventListener("click",(e)=>{
    const checkElement=icon.lastElementChild; //check image is at the last inside icon box
  
   if(checkElement.style.display==='none'){
    checkElement.style.display="block";
    icon.style.borderColor="#737373";
   }else {
    checkElement.style.display="none";
    icon.style.borderColor="#D6D6D6";
   }
  })
})

