// You can write your own logic here to determine the actual url
window.headerAppUrl = "http://localhost:3001";
window.footerAppUrl = "http://localhost:3002";
window.submainAppUrl = "http://localhost:3003";

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
