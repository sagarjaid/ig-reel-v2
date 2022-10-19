import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import InputBox from "../component/InputBox";
import Navgation from "../component/Navgation";
import NavTabs from "../component/AllTabs";
import Lable from "../component/Lable";
import LodingSVG from "../component/LodingSVG";
import MediaDownlod from "../component/MediaDownlod";

const Home = () => {
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [cdnMediaLink, setCdnMediaLink] = useState(null);
  const [reelLink, setReelLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    setData({ reelLink: reelLink, thumbnailUrl: thumbnailUrl });
  }, [reelLink, thumbnailUrl]);

  const handleChange = (e) => {
    const santizedUrlArr = e.target.value.split("?");
    santizedUrlArr.pop();
    const santizedUrl = santizedUrlArr[0];
    setUrl(santizedUrl);
  };

  const handleClose = () => {
    console.log("handleClose got clicked");
    setUrl("");
    setThumbnailUrl(null);
    setCdnMediaLink(null);
    setReelLink(null);
    setData({});
  };

  function handlePaste() {
    console.log("handlePaste got clicked");
    navigator.clipboard.readText().then((cliptext) => {
      const santizedUrlArr = cliptext.split("?");
      santizedUrlArr.pop();
      const santizedUrl = santizedUrlArr[0];
      setUrl(santizedUrl);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setReelLink("");
    setIsLoading(true);

    // to avoid dubble click
    setDisabledBtn(true);
    setTimeout(() => {
      console.log("Button Deactveiated for 10 Sec");
      setDisabledBtn(false);
      console.log("Button Activated");
    }, 10000);

    console.log("handleSubmit got clicked");
    console.log(url);

    const res = await fetch(
      `https://courageous-rabanadas-0d979e.netlify.app/api/hello`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Headers": "Content-Type, Authorization",
        },
        body: JSON.stringify({ url: url }),
      }
    );

    const data = await res.json();

    console.log(data, "data");

    const severVideoLink = data.igReelUrl;
    const serverthumbnailName = data.thName;
    const serverReelName = data.reelName;

    console.log(severVideoLink, "severVideoLink");
    console.log(serverthumbnailName, "serverthumbnailName");
    setCdnMediaLink(severVideoLink);

    const res2 = await fetch(`/new/v1/make-ig-reel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify({
        thName: serverthumbnailName,
        reelName: serverReelName,
      }),
    });

    const data2 = await res2.json();
    console.log(data2, "data2");

    const severthumbnailLink = data2.thUrl;
    const severReellLink = data2.reelUrl;

    setThumbnailUrl(severthumbnailLink);
    setReelLink(severReellLink);

    console.log(severthumbnailLink, "severthumbnailLink");
    console.log(severReellLink, "severReellLink");
    console.log(thumbnailUrl, "thumbnailUrl");
    setData({ reelLink: reelLink, thumbnailUrl: thumbnailUrl });
    setIsLoading(false);
  };

  return (
    <div className="text-black font-Poppins font-medium">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="34gn5GZwsWz27cAZKc8NJkbWrysX4OapmLpwy8-3-Uw"
        />
      </Head>
      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-10V82FHBHZ"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-10V82FHBHZ");
        }}
      />
      <main>
        {/* nav */}
        <nav className="border-b">
          <Navgation />
        </nav>
        {/* main content */}
        <div className="max-w-5xl pt-2 px-3 mx-auto pb-8 p-2">
          <div className="max-w-2xl mx-auto pb-24 p-2">
            <div className="flex justify-center items-center">
              <h2 className="text-center font-semibold text-2xl my-3">
                Instagram Downloader
              </h2>
            </div>
            <NavTabs />
            <div className="mt-4 text-center flex flex-col justify-center items-center">
              <h2 className="font-medium font-sans text-lg">
                Instagram Reels Downloader
              </h2>
              <p className="text-sm mt-2 font-light">
                Paste the Instagram Reel Link to Download Instagram Reel{" "}
              </p>
            </div>
            <InputBox
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              url={url}
              handleClose={handleClose}
              handlePaste={handlePaste}
              disabledBtn={disabledBtn}
            />
            <Lable />
            <LodingSVG isLoading={isLoading} />
            <MediaDownlod
              type="reel"
              mediaLink={data.reelLink}
              url={url}
              cdnMediaLink={cdnMediaLink}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
