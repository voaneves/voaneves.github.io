function consoleText() {
  const styles = [
    "color: #fff",
    "background: rgba(0, 4, 40, 1)",
    "font-size: 18px",
    "padding: 12px",
    "margin: 6px 0 6px 14px",
  ].join(";");
  const styles2 = [
    "font-size: 14px",
    "padding: 16px",
    "margin: 6px 0 6px 0",
  ].join(";");
  console.log("%cHey there! I'm Victor.", styles);
  console.log("%cIt's a pleasure to have you here!", styles2);
  console.log("%cHave a look at my work ▼", styles2);
  const gradient = [
    "font-size: 14px",
    "color: #fff",
    "width: 200px",
    "padding: 8px",
    "margin: 6px 0 6px 14px",
    "border-radius: 4px",
    "background: rgba(238,58,136,1)",
    "background: linear-gradient( 109.6deg, rgba(0, 4, 40, 1) 11.2%, rgba(0, 78, 146, 1) 91.1% )",
  ].join(";");
  console.log("%cPortfolio%chttps://voaneves.com", gradient, styles2);
  console.log(
    "%cLinkedin %chttps://linkedin.com/in/voaneves",
    gradient,
    styles2
  );
  console.log("%cGithub   %chttps://github.com/voaneves", gradient, styles2);
  console.log(
    "%cThe README   %chttps://github.com/voaneves/voaneves.github.io",
    gradient,
    styles2
  );
  console.log("%cHope to see you again 🙂", styles2);
}
consoleText();
