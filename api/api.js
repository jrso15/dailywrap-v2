export async function getTopStories() {
  try {
    const res = await fetch(
      "https://api.cxense.com/public/widget/data?widgetId=eb5a39e78172d96ed743e3567a209a41d2e664d7&json={%22widgetId%22:%22eb5a39e78172d96ed743e3567a209a41d2e664d7%22}"
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
