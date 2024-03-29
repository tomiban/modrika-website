import { useState, useEffect } from "react";
import followIg from "../assets/img/follow-ig.png";
import { BsPlayFill } from "react-icons/bs";

const Instagram = () => {
  const [feedIg, setFeedIg] = useState([]);

  const urlGallery = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,media_type,duration,thumbnail_url,permalink&limit=8&access_token=${import.meta.env.VITE_INSTAGRAM_KEY}`;

  const fetchGallery = async () => {
    try {
      const data = await fetch(urlGallery);
      const feed = await data.json();

      if (feed.data.length > 0) {
        setFeedIg({ data: feed.data, username: feed.data[0].username });
        const slicedData =
          window.innerWidth <= 640 ? feed.data.slice(0, 4) : feed.data;

        setFeedIg({ data: slicedData, username: feed.data[0].username });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="py-6 sm:py-8 sm:mt-16">
      <div className="mx-auto max-w-4xl xl:px-4 md:container relative">
        <div className="h-20 sm:h-32 absolute -left-4 -top-7 sm:-left-10 xl:-left-6 sm:-top-16">
          <a href={`https://www.instagram.com/${feedIg.username ?? ""}`} target="_blank">
            <img
              src={followIg}
              alt=""
              className="h-full w-full hover:brightness-90 transition-all duration-300"
            />
          </a>
        </div>
        {feedIg.data && feedIg.data.length > 0 ? (
          <div className={`grid grid-cols-4 gap-2 items-center border border-sm border-gray-300 bg-gray-50 p-4 rounded-md`}>
            <div className={`col-span-4 pb-2 w-full`}>
              <div className="flex justify-end border-b-2 items-end">
                <a href={`https://www.instagram.com/${feedIg.username}/`} target="_blank">
                  <h5 className="text-base sm:text-xl hover:text-indigo-500 transition-colors duration-200">
                    @{feedIg.username}
                  </h5>
                </a>
              </div>
            </div>
            {feedIg.data.map((item) => (
              <div key={item.id} className="group relative w-full overflow-hidden rounded-lg col-span-2 sm:col-span-1 shadow-lg">
                <a href={item.permalink || `https://www.instagram.com/${feedIg.username}/`} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center items-center h-60 w-full relative">
                    {item.media_type === "VIDEO" ? (
                      <>
                        <video
                          controls={false}
                          className="w-full h-full object-cover transition duration-200 group-hover:scale-110 hover:brightness-50"
                          poster={item.thumbnail_url}
                        >
                          <source src={item.media_url} type="video/mp4" />
                          Tu navegador no soporta etiquetas de video
                        </video>
                        <div className="absolute top-2 right-2">
                          <BsPlayFill size={"2rem"} color="white" />
                        </div>
                      </>
                    ) : (
                      <img
                        loading="lazy"
                        src={item.thumbnail_url || item.media_url}
                        alt={item.caption}
                        className="w-full h-full object-cover transition duration-200 group-hover:scale-110 hover:brightness-50"
                      />
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>No photos in the Instagram feed.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Instagram;

