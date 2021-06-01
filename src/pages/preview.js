import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

const Preview = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("stories");
    data = JSON.parse(data);
    generateHtml(data);
  }, []);

  const getDateToday = () => {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  const generateHtml = (data) => {
    let html = `
      <div class="previewBody">
      <div class="parentContainer" id="previewPane" mc:edit="main_content">
      <div class="parentContainer">
         <table align="center">
            <tbody>
               <tr>
                  <td align="center" class="masthead-emailer"> <a href="http://www.rappler.com" target="_blank"><img alt="Rappler" class="nolazy" src="https://mcusercontent.com/81b6ec9d9be6b6261a822deb0/images/fa6699ab-c280-465d-9d3b-31c635f75555.png" width="50"></a> </td>
               </tr>
            </tbody>
         </table>`;

    if (data && data.stories.length > 0) {
      html += `
       <table align="center">
          <tbody>
             <tr>
                <td> <a href="${data.stories[0].href}" target="_blank"><img alt="${data.stories[0].title}" src="${data.stories[0].featuredImage}" style="width: 100%;"></a> </td>
             </tr>
             <tr>
                <td>
                   <div class="content-container">
                      <div class="content">
                         <p class="caption" style="margin-bottom: -16px; margin-top: 8px;"></p>
                         <p class="tcaption"><strong>TODAY'S TOP STORY</strong></p>
                         <p class="ttitle"><a href="${data.stories[0].href}" target="_blank">${data.stories[0].title}</a></p>
                         <p class="ctop">${data.stories[0].subhead}</p>
                      </div>
                   </div>
                </td>
             </tr>
          </tbody>
       </table>`;
    }

    html += `
       <table align="center">
          <tbody>
             <tr>
                <td>
                   <div class="content-alt dwtitle">#DailyWrap: Things you need to know, ${getDateToday()}</div>
                   <div class="content-alt" style="margin-top: -10px;">
                      <p>Hello there *|FNAME|*!</p>
                      <p> ${data.text} </p>
                      <p></p>
                      <table>
                         <tbody id="mc-body">`;

    data.stories.forEach((story, i) => {
      if (i === 0) return;
      html += `<tr key=${i} class="wrap-item">
            <td class="text">
            <p class="caption" style="font-weight:bold;margin:0 0 5px;">${story.primaryTopic}</p>
            <a href="${story.href}">${story.title}</a>
            </td>
            <td class="spacer"> </td>
            <td class="thumbnail">
            <a href="${story.href}"><img alt=${story.title} border="0" class="rappler_asset" src="${story.featuredImage}"></a>
            </td>
         </tr>`;
    });
    html += `
                         </tbody>
                      </table>
                   </div>
                </td>
             </tr>
          </tbody>
       </table>
       <table align="center">
          <tbody>
             <tr>
                <td>
                   <div>
                      <div style="margin-top: 0px; margin-bottom: 30px; padding: 0px 50px 0px 40px;"> <a href="https://www.rappler.com/section/plus-membership-program"><img src="https://mcusercontent.com/81b6ec9d9be6b6261a822deb0/images/36f9b565-0618-44ff-8629-35c71c2cf7bb.jpg" <="" a=""> </a></div>
                   </div>
                </td>
             </tr>
          </tbody>
       </table>
       <table align="center">
          <tbody>
             <tr>
                <td class="footer">
                   <div class="footer-share" style="margin: 16px 8px;">
                   <a href="https://www.facebook.com/rapplerdotcom/"> <img alt="facebook-icon.png" class="nolazy" src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/ED1ED213E51A416893B0698137AF04C2/facebook-icon.png" style="width: 20px;"> </a> <a href="https://www.messenger.com/t/rapplerdotcom/"> <img alt="messenger-icon.png" class="nolazy" src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/E11AA4ECD8D1406CB0FE7479FDB3E100/messenger-icon.png" style="width: 20px;"> </a> <a href="https://www.instagram.com/rappler/"> <img alt="instagram-icon.png" class="nolazy" src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/98E3FC8103C149FAA4270DB09DC11944/instagram-icon.png" style="width: 20px;"> </a> <a href="https://twitter.com/rapplerdotcom"> <img alt="twitter-icon.png" class="nolazy" src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/035283FAA48A468785D387CCF9D49961/twitter-icon.png" style="width: 20px;"> </a> </div>
                   <p style="color: #fff; font-family: 'Roboto Condensed', sans-serif; font-weight: 500; margin: 10px 0 20px; line-height: 1.4em; font-size: 12px;"> If you no longer wish to receive emails from Rappler, please <a class="nostylelink" href="https://rappler.us4.list-manage.com/unsubscribe?u=81b6ec9d9be6b6261a822deb0&amp;id=d18b1557b8" target="_blank" style="color: #f1503c;">Unsubscribe</a> from our mailing list. </p>
                   <p style="color: #fff; font-family: 'Roboto Condensed', sans-serif; font-weight: 500; margin: 10px 0 20px; line-height: 1.4em; font-size: 12px;"> Rappler Inc. Unit B, 3/F, North Wing Estancia Offices, Capitol Commons, Ortigas. Center, Pasig City 1605.<br> Telephone: +632 661 9983 to 85 / Facsimile: +632 576 3931. </p>
                   <div class="mcnImage"> <img src="https://api.deep.bi/v1/pixel/TR8x0HLI2e7B/p.gif?accessKey=soI2uyBN7c7KXjgBwLE2s2oY&amp;event_type=newsletter_open&amp;subscription_type=rappler_daily_wrap&amp;gdpr=true&amp;newsletter_id=*|CAMPAIGN_UID|*&amp;newsletter_date=*|DATE:Y/m/d|*&amp;subscriber_id=*|USER:UID|*" alt="d|*&amp;subscriber_id=*|USER:UID|*" ibtf6eyjm=""> </div>
                </td>
             </tr>
          </tbody>
       </table>
    </div>
  </div></div>
  `;

    setHtml(html);
  };

  return ReactHtmlParser(html);
};

export default Preview;
