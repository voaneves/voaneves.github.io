const styledConsoleLog = (message, style) => console.log(`%c${message}`, style);

const textStyle1 = `
  color: #fff;
  background: rgba(0, 4, 40, 1);
  font-size: 18px;
  padding: 12px;
  margin: 6px 0 6px 14px;
`;

const textStyle2 = `
  font-size: 14px;
  padding: 16px;
  margin: 6px 0 6px 0;
`;

const linkStyle = `
  font-size: 14px;
  color: #fff;
  width: 200px;
  padding: 8px;
  margin: 6px 0 6px 14px;
  border-radius: 4px;
  background: linear-gradient( 109.6deg, rgba(0, 4, 40, 1) 11.2%, rgba(0, 78, 146, 1) 91.1% );
`;

const urls = {
  portfolio: "https://voaneves.com",
  linkedin: "https://linkedin.com/in/voaneves",
  github: "https://github.com/voaneves",
  readme: "https://github.com/voaneves/voaneves.github.io",
};

const messages = [
  { text: "Hey there! I'm Victor.", style: textStyle1 },
  { text: "It's a pleasure to have you here!", style: textStyle2 },
  { text: "Have a look at my work ▼", style: textStyle2 },
  { text: `Portfolio ${urls.portfolio}`, style: `${linkStyle} ${textStyle2}` },
  { text: `Linkedin  ${urls.linkedin}`, style: `${linkStyle} ${textStyle2}` },
  { text: `Github    ${urls.github}`, style: `${linkStyle} ${textStyle2}` },
  { text: `The README   ${urls.readme}`, style: `${linkStyle} ${textStyle2}` },
  { text: "Hope to see you again 🙂", style: textStyle2 },
];

messages.forEach(({ text, style }) => styledConsoleLog(text, style));
