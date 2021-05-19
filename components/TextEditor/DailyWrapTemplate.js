export function generateTemplatedStories(stories) {
  // Header
  let html = `<div class="parentContainer" id="previewPane" mc:edit="main_content">
        <div class="parentContainer">
        <table align="center">
          <tbody>
            <tr>
             <td align="center" style="background-color:#F04F3C;">
                <a href="http://www.rappler.com" target="_blank"><img alt="Rappler" class="nolazy" src="https://mcusercontent.com/81b6ec9d9be6b6261a822deb0/images/fa6699ab-c280-465d-9d3b-31c635f75555.png" width="50"></a>
             </td>
            </tr>
          </tbody>
      </table>`;

  if (stories && stories[0]) {
    html += `
      <table align="center">
          <tbody>
              <tr>
                  <td>
                    <a href="${stories[0].href}" target="_blank"><img alt="${stories[0].title}" class="nolazy" src="${stories[0].featuredImage}" style="width: 100%;"></a>
                  </td>
              </tr>
              <tr>
                  <td>
                      <div class="content-container">
                          <div class="content">
                              <p class="caption" style="margin-bottom:-16px;margin-top:8px;"><strong>TODAY'S TOP
                                      STORY</strong>
                              </p>
                               
                              <p class="ttitle"><a href="${stories[0].href}" target="_blank">
                              ${stories[0].title}
                                  </a>
                              </p>
                              <p class="ctop">
                              ${stories[0].subhead}
                              </p>
                          </div>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>`;
  }

  html += ` <table align="center">
        <tbody>
            <tr>
                <td>
                    <div class="content-alt dwtitle">
                        <a href="" target="_blank">#DailyWrap: Things you need to know, <%date-today%> </a>
                    </div>
                    <div class="content-alt">
                        <p>Hello there!</p>
                        <p>
                            INSERT BODY TEXT HERE...
                        </p>
                        <p> </p>
                        <table style="background-color:#fff;">
                              <tbody id="mc-body">`;
  stories.forEach((story, i) => {
    if (i === 0) return;
    html += `<tr key=${i} class="wrap-item">
            <td class="text">
            <p class="caption" style="font-weight:bold;margin:0 0 5px;">${story.primaryTopic}</p>
            <a href="${story.href}">${story.title}</a>
            </td>
            <td class="spacer"> </td>
            <td class="thumbnail">
            <a href="${story.href}"><img alt="" border="0" class="rappler_asset" src="${story.thumbnailImage}"></a>
            </td>
        </tr>`;
  });

  // Footer
  html += `</tbody>
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
  <div class="content" style="margin-top:0px;">
      <a
          href="https://www.amazon.com/Aquino-Years-Rappler-Inc-ebook/dp/B08GWW71S7/ref=sr_1_3?dchild=1&amp;keywords=Rappler&amp;qid=1598875996&amp;sr=8-3"><img
              alt="7ba7fb10-0b7e-4eb1-b556-9498ac73356e.jpg"
              src="https://mcusercontent.com/81b6ec9d9be6b6261a822deb0/images/7ba7fb10-0b7e-4eb1-b556-9498ac73356e.jpg"></a>
  </div>
</div>
</td>
</tr>
</tbody>
</table>
<table align="center">
<tbody>
<tr>
<td class="footer">
<div class="footer-share">
  <a href="https://www.facebook.com/rapplerdotcom/"><img alt="facebook-icon.png"
          class="nolazy"
          src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/ED1ED213E51A416893B0698137AF04C2/facebook-icon.png"
          style="width: 20px;"></a> <a href="https://www.messenger.com/t/rapplerdotcom/"><img
          alt="messenger-icon.png" class="nolazy"
          src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/E11AA4ECD8D1406CB0FE7479FDB3E100/messenger-icon.png"
          style="width: 20px;"></a> <a href="https://www.instagram.com/rappler/"><img
          alt="instagram-icon.png" class="nolazy"
          src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/98E3FC8103C149FAA4270DB09DC11944/instagram-icon.png"
          style="width: 20px;"></a> <a href="https://twitter.com/rapplerdotcom"><img
          alt="twitter-icon.png" class="nolazy"
          src="http://assets.rappler.com/190BE175DB8541BF9CBF1F2B7B1AA135/img/035283FAA48A468785D387CCF9D49961/twitter-icon.png"
          style="width: 20px;"></a>
</div>
<p>If you no longer wish to receive emails from Rappler, please <a
      href="https://rappler.us4.list-manage.com/profile?u=81b6ec9d9be6b6261a822deb0&amp;id=d18b1557b8&amp;e=4e63596e92"
      style="color:#f1503C;" target="_blank">Unsubscribe</a> from our mailing list.</p>
<p>Rappler Inc. Unit B, 3/F, North Wing Estancia Offices, Capitol Commons, Ortigas. Center,
  Pasig City 1605.<br>
  Telephone: +632 661 9983 to 85 / Facsimile: +632 576 3931.</p>
<div class="mcnImage"><img
      src="https://api.deep.bi/v1/pixel/TR8x0HLI2e7B/p.gif?accessKey=soI2uyBN7c7KXjgBwLE2s2oY&amp;event_type=newsletter_open&amp;subscription_type=rappler_daily_wrap&amp;gdpr=true&amp;newsletter_id=*|CAMPAIGN_UID|*&amp;newsletter_date=*|DATE:Y/m/d|*&amp;subscriber_id=*|USER:UID|*"
      alt="d|*&amp;subscriber_id=*|USER:UID|*">
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>`;
  return html;
}
