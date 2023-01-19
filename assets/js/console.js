// This is the style used to print text in the console
const textStyle1 = [
  "color: #fff",
  "background: rgba(0, 4, 40, 1)",
  "font-size: 18px",
  "padding: 12px",
  "margin: 6px 0 6px 14px",
].join(";");

// This is the style used to print intro and call to action
const textStyle2 = [
  "font-size: 14px",
  "padding: 16px",
  "margin: 6px 0 6px 0",
].join(";");

// This is the style used to print the links
const linkStyle = [
  "font-size: 14px",
  "color: #fff",
  "width: 200px",
  "padding: 8px",
  "margin: 6px 0 6px 14px",
  "border-radius: 4px",
  "background: rgba(238,58,136,1)",
  "background: linear-gradient( 109.6deg, rgba(0, 4, 40, 1) 11.2%, rgba(0, 78, 146, 1) 91.1% )",
].join(";");

// These are the links used in the console text
const portfolioUrl = "https://voaneves.com";
const linkedinUrl = "https://linkedin.com/in/voaneves";
const githubUrl = "https://github.com/voaneves";
const readmeUrl = "https://github.com/voaneves/voaneves.github.io";

// This is the text sent to the console
const greetings = "%cHey there! I'm Victor.";
const intro = "%cIt's a pleasure to have you here!";
const callToAction = "%cHave a look at my work ▼";

// This is the function that prints the messages in the console
function printText() {
  console.log(greetings, textStyle1);
  console.log(intro, textStyle2);
  console.log(callToAction, textStyle2);
  console.log("%cPortfolio%c" + portfolioUrl, linkStyle, textStyle2);
  console.log("%cLinkedin %c" + linkedinUrl, linkStyle, textStyle2);
  console.log("%cGithub   %c" + githubUrl, linkStyle, textStyle2);
  console.log("%cThe README   %c" + readmeUrl, linkStyle, textStyle2);
  console.log("%cHope to see you again 🙂", textStyle2);
}

// This calls the printText function to display the message
printText();
