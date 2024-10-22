document.addEventListener("DOMContentLoaded", () => {
  const web2pdf = document.getElementById("web2pdf");

  web2pdf.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => {
            const hashnodeFloatingBar =
              document.querySelector(".post-floating-bar");
            const hashnodeReadMore = document.querySelector(
              ".blog-more-articles"
            );
            const hashnodeBlogFooter = document.querySelector(".blog-footer");
            const mediumHeader = document.querySelector(".p.q.r.ab.ac"); // medium's navbar
            const mediumAuthor = document.querySelector(".qp.qq.qr.qs.qt.l.bx"); // medium's author footer
            const linkedinFooter = document.querySelector(
              ".reader-related-content__footer"
            ); // linkedin's footer
            const linkedinComments = document.querySelector(
              ".scaffold-layout__aside"
            ); // linkedin's footer
            const linkedinGlobalFooter = document.querySelector(
              ".global-footer.global-footer--static"
            ); // linkedin's footer

            if (hashnodeFloatingBar && hashnodeReadMore && hashnodeBlogFooter) {
              hashnodeFloatingBar.style.display = "none";
              hashnodeReadMore.style.display = "none";
              hashnodeBlogFooter.style.display = "none";
            } else if (mediumHeader && mediumAuthor) {
              mediumHeader.style.display = "none";
              mediumAuthor.style.display = "none";
            } else if (
              linkedinFooter &&
              linkedinComments &&
              linkedinGlobalFooter
            ) {
              linkedinFooter.style.display = "none";
              linkedinComments.style.display = "none";
              linkedinGlobalFooter.style.display = "none";
            }
            window.print();
          },
        },
        (injectionResults) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else {
            console.log("Script injected successfully.");
          }
        }
      );
    });
  });
});
