import ReactHtmlParser from "react-html-parser";

const previewHtmlTemplate = () => {
  const html = `
  <div class="previewBody">
  <div class="parentContainer" id="previewPane" mc:edit="main_content">
  <div class="parentContainer">
     <table align="center">
        <tbody>
           <tr>
              <td align="center" class="masthead-emailer"> <a href="http://www.rappler.com" target="_blank"><img alt="Rappler" class="nolazy" src="https://mcusercontent.com/81b6ec9d9be6b6261a822deb0/images/fa6699ab-c280-465d-9d3b-31c635f75555.png" width="50"></a> </td>
           </tr>
        </tbody>
     </table>
     <table align="center">
        <tbody>
           <tr>
              <td> <a href="https://rappler.com/business/gallup-survey-covid-19-impact-income-jobs-may-2021" target="_blank"><img alt="1 in 2 people globally lost income due to pandemic – Gallup" class="nolazy" src="https://assets2.rappler.com/2021/05/cambodia-garment-factory-workers-april-7-2021-002-1620033115646.jpg" style="width: 100%;"></a> </td>
           </tr>
           <tr>
              <td>
                 <div class="content-container">
                    <div class="content">
                       <p class="caption" style="margin-bottom: -16px; margin-top: 8px;"></p>
                       <p class="tcaption"><strong>TODAY'S TOP STORY</strong></p>
                       <p class="ttitle"><a href="https://rappler.com/business/gallup-survey-covid-19-impact-income-jobs-may-2021" target="_blank">1 in 2 people globally lost income due to pandemic – Gallup</a></p>
                       <p class="ctop">In 57 countries including the Philippines, more than 65% of survey respondents say they stopped working for a time</p>
                    </div>
                 </div>
              </td>
           </tr>
        </tbody>
     </table>
     <table align="center">
        <tbody>
           <tr>
              <td>
                 <div class="content-alt dwtitle">#DailyWrap: Things you need to know, {DATE}</div>
                 <div class="content-alt" style="margin-top: -10px;">
                    <p>Hello there *|FNAME|*!</p>
                    <p> body text </p>
                    <p></p>
                    <table>
                       <tbody id="mc-body">
                          <tr class="wrap-item">
                             <td class="text">
                                <p class="caption" style="font-weight:bold;margin:0 0 5px;">government debt</p>
                                <a class="sencase" href="https://rappler.com/business/philippine-government-debt-march-2021">Philippine gov't debt climbs to P10.77 trillion in March 2021</a> 
                             </td>
                             <td class="spacer">&nbsp;</td>
                             <td class="thumbnail"> <a class="sencase" href="https://rappler.com/business/philippine-government-debt-march-2021"><img alt="" border="0" class="rappler_asset" src="https://assets2.rappler.com/7EAAA4EC1FCC4212B62D7308E3FDBD59/img/EC1EC4BBA1CF43C0B76FAA1B010EA03F/metro-manila-skyline-august-30-2017-005-1620030764600.jpg"></a> </td>
                          </tr>
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

  return ReactHtmlParser(html);
};

export default previewHtmlTemplate;
