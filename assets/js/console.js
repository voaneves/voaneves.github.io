function printText() {
  const style1 = [
    "color: #fff",
    "background: rgba(0, 4, 40, 1)",
    "font-size: 18px",
    "padding: 12px",
    "margin: 6px 0 6px 14px",
  ].join(";");

  const style2 = [
    "font-size: 14px",
    "padding: 16px",
    "margin: 6px 0 6px 0",
  ].join(";");

  const style3 = [
    "font-size: 14px",
    "color: #fff",
    "width: 200px",
    "padding: 8px",
    "margin: 6px 0 6px 14px",
    "border-radius: 4px",
    "background: rgba(238,58,136,1)",
    "background: linear-gradient( 109.6deg, rgba(0, 4, 40, 1) 11.2%, rgba(0, 78, 146, 1) 91.1% )",
  ].join(";");

  const url1 = "https://voaneves.com";
  const url2 = "https://linkedin.com/in/voaneves";
  const url3 = "https://github.com/voaneves";
  const url4 = "https://github.com/voaneves/voaneves.github.io";

  console.log(`%cHey there! I'm Victor.`, style1);
  console.log("%cIt's a pleasure to have you here!", style2);
  console.log("%cHave a look at my work ▼", style2);
  console.log("%cPortfolio%chttps://voaneves.com", style3, style2);
  console.log("%cLinkedin %chttps://linkedin.com/in/voaneves", style3, style2);
  console.log("%cGithub   %chttps://github.com/voaneves", style3, style2);
  console.log(
    "%cThe README   %chttps://github.com/voaneves/voaneves.github.io",
    style3,
    style2
  );
  console.log("%cHope to see you again 🙂", style2);
}
printText();
