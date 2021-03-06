import "firebase/firestore";

const getMetadata = async (selectedStories) => {
  try {
    const lhBaseApi = `https://api.rappler.com/article/posts`;

    const metadata = await Promise.all(
      selectedStories.map(async (selected) => {
        const slug = selected.url.split("/").pop();
        const apiUrl = `${lhBaseApi}/${slug}`;
        const jsonData = await fetch(`${apiUrl}`);
        const articleData = await jsonData.json();

        return {
          href: selected.url,
          primaryTopic: articleData.primaryTopic[0].name,
          title: articleData.title,
          subhead: articleData.excerpt,
          featuredImage: articleData.featuredImage.url,
          thumbnailImage: articleData.thumbnailImages.url,
        };
      })
    );
    return metadata;
  } catch (err) {
    return null;
  }
};

export default getMetadata;
