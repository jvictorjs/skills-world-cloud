export { TECHS };

const JVICTOR_JS_TEXT_MENTION_HTML = '<a href="https://github.com/jvictorjs" target="_blank"><strong class="blue--text">@jvictorjs</strong></a>';

const TECHS = [
  { classType: 4, top: "27%", left: "78%", flags: { thisProj: true, pro: true, personal: true }, name: "Material Design Icons" },
  { classType: 5, top: "34%", left: "79%", flags: { thisProj: true, pro: true, personal: true }, name: "Phosphor Icons" },
  { classType: 5, top: "8%", left: "77%", flags: { thisProj: false, pro: false, personal: true }, name: "Canvas" },
  { classType: 5, top: "16%", left: "81%", flags: { thisProj: false, pro: false, personal: true }, name: "Audio" },
  { classType: 5, top: "10%", left: "86%", flags: { thisProj: false, pro: false, personal: true }, name: "Markdown" },

  { classType: 2, top: "62%", left: "34%", flags: { thisProj: false, pro: true, personal: true }, name: "REST APIs" },
  { classType: 4, top: "75%", left: "35%", flags: { thisProj: false, pro: false, personal: true }, name: "Twitter API" },
  { classType: 3, top: "69%", left: "33%", flags: { thisProj: false, pro: false, personal: true }, name: "Telegram Bots API" },
  { classType: 4, top: "56%", left: "35%", flags: { thisProj: false, pro: false, personal: true }, name: "JSON Server" },
  { classType: 5, top: "64%", left: "24%", flags: { thisProj: false, pro: false, personal: true }, name: "HTTP methods" },

  { classType: 3, top: "9%", left: "2%", flags: { thisProj: false, pro: false, personal: true }, name: "Google Sheets" },
  { classType: 2, top: "16%", left: "8%", flags: { thisProj: false, pro: false, personal: true }, name: "Google Apps Script" },
  { classType: 5, top: "23%", left: "23%", flags: { thisProj: false, pro: false, personal: true }, name: "Triggers" },
  { classType: 5, top: "11%", left: "17%", flags: { thisProj: false, pro: false, personal: true }, name: "Automation" },
  { classType: 5, top: "4%", left: "11%", flags: { thisProj: false, pro: false, personal: true }, name: "Custom Menus" },
  { classType: 5, top: "11%", left: "29%", flags: { thisProj: false, pro: false, personal: true }, name: "Web Apps" },

  { classType: 5, top: "35%", left: "40%", flags: { thisProj: false, pro: true, personal: true }, name: "DOM Manipulation" },
  { classType: 3, top: "46%", left: "9%", flags: { thisProj: false, pro: false, personal: true }, name: "Node.js" },
  { classType: 4, top: "55%", left: "18%", flags: { thisProj: false, pro: false, personal: true }, name: "Express.js" },
  { classType: 3, top: "32%", left: "8%", flags: { thisProj: false, pro: false, personal: true }, name: "Chart.js" },
  { classType: 3, top: "26%", left: "39%", flags: { thisProj: false, pro: false, personal: true }, name: "TypeScript" },
  { classType: 5, top: "49%", left: "28%", flags: { thisProj: false, pro: false, personal: true }, name: "Axios" },

  { classType: 4, top: "30%", left: "56%", flags: { thisProj: false, pro: false, personal: true }, name: "Angular" },

  { classType: 3, top: "9%", left: "43%", flags: { thisProj: false, pro: false, personal: true }, name: "React Native" },
  { classType: 2, top: "14%", left: "52%", flags: { thisProj: false, pro: false, personal: true }, name: "React" },
  { classType: 5, top: "4%", left: "40%", flags: { thisProj: false, pro: false, personal: true }, name: "Expo" },
  { classType: 5, top: "4%", left: "53%", flags: { thisProj: false, pro: false, personal: true }, name: "Android Studio" },
  { classType: 5, top: "42%", left: "43%", flags: { thisProj: false, pro: false, personal: true }, name: "Vite" },

  { classType: 2, top: "43%", left: "57%", flags: { thisProj: true, pro: true, personal: true }, name: "Vue" },
  { classType: 3, top: "49%", left: "62%", flags: { thisProj: true, pro: true, personal: true }, name: "Vuetify" },
  { classType: 5, top: "43%", left: "52%", flags: { thisProj: false, pro: false, personal: true }, name: "Vuex" },
  { classType: 5, top: "50%", left: "51%", flags: { thisProj: false, pro: false, personal: true }, name: "Vue router" },

  { classType: 4, top: "46%", left: "83%", flags: { thisProj: false, pro: false, personal: true }, name: "Tailwind CSS" },
  { classType: 5, top: "65%", left: "86%", flags: { thisProj: false, pro: false, personal: true }, name: "SASS" },
  { classType: 5, top: "44%", left: "75%", flags: { thisProj: true, pro: true, personal: true }, name: "Flexbox" },
  { classType: 4, top: "66%", left: "73%", flags: { thisProj: true, pro: false, personal: true }, name: "Animations" },
  { classType: 5, top: "59%", left: "69%", flags: { thisProj: true, pro: false, personal: true }, name: "Variables" },

  { classType: 4, top: "79%", left: "50%", flags: { thisProj: false, pro: false, personal: true }, name: "GraphQL" },
  { classType: 5, top: "75%", left: "52%", flags: { thisProj: false, pro: false, personal: true }, name: "Apollo Client" },
  { classType: 5, top: "84%", left: "48%", flags: { thisProj: false, pro: false, personal: true }, name: "codegen" },

  { classType: 3, top: "91%", left: "62%", flags: { thisProj: false, pro: true, personal: true }, name: "Pentaho Data Integration" },
  { classType: 5, top: "86%", left: "88%", flags: { thisProj: false, pro: true, personal: false }, name: "Power BI" },
  { classType: 5, top: "91%", left: "90%", flags: { thisProj: false, pro: true, personal: false }, name: "QlikSense" },
  { classType: 2, top: "83%", left: "63%", flags: { thisProj: false, pro: true, personal: true }, name: "SQL" },
  { classType: 5, top: "84%", left: "80%", flags: { thisProj: false, pro: true, personal: true }, name: "SQLite" },
  { classType: 5, top: "84%", left: "71%", flags: { thisProj: false, pro: true, personal: false }, name: "SQL Server" },
  { classType: 5, top: "90%", left: "56%", flags: { thisProj: false, pro: true, personal: false }, name: "DBeaver" },

  { classType: 3, top: "87%", left: "37%", flags: { thisProj: true, pro: true, personal: true }, name: "Git" },
  { classType: 4, top: "91%", left: "40%", flags: { thisProj: true, pro: true, personal: true }, name: "GitHub" },

  { classType: 5, top: "64%", left: "13%", flags: { thisProj: false, pro: false, personal: true }, name: "Socket.io" },

  { classType: 5, top: "53%", left: "8%", flags: { thisProj: false, pro: false, personal: true }, name: "NPM" },
  { classType: 5, top: "73%", left: "18%", flags: { thisProj: true, pro: false, personal: true }, name: "NGINX" },
  { classType: 3, top: "78%", left: "6%", flags: { thisProj: true, pro: false, personal: true }, name: "Ubuntu Linux" },
  { classType: 5, top: "79%", left: "2%", flags: { thisProj: false, pro: false, personal: true }, name: "Vim" },
  { classType: 5, top: "71%", left: "9%", flags: { thisProj: true, pro: false, personal: true }, name: "PuTTy" },
  { classType: 4, top: "91%", left: "24%", flags: { thisProj: false, pro: false, personal: true }, name: "Netlify" },
  { classType: 3, top: "86%", left: "10%", flags: { thisProj: true, pro: false, personal: true }, name: "Digital Ocean" },
  { classType: 5, top: "86%", left: "3%", flags: { thisProj: true, pro: false, personal: true }, name: "WinSCP" },
  { classType: 5, top: "80%", left: "20%", flags: { thisProj: true, pro: false, personal: true }, name: "Certbot SSL" },
  { classType: 5, top: "72%", left: "3%", flags: { thisProj: false, pro: false, personal: true }, name: "PM2" },
];
