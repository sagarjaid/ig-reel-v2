import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Timer from '../component/Timer'
import ReactPlayer from 'react-player'
import VideoBox from "../component/VideoBox";

const Home = () => {

  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [cdnMediaLink, setCdnMediaLink] = useState(null);
  const [reelLink, setReelLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [data, setData] = useState({});



  useEffect(() => {
    // setTimeout(()=>{
      setData({reelLink: reelLink, thumbnailUrl: thumbnailUrl});
    // }, 5000)
  }, [reelLink, thumbnailUrl]);


  const handleChange = (e) => {
    setUrl(e.target.value);
    
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setReelLink("");
    setIsLoading(true);
    console.log("handleSubmit got clicked");
    console.log(url);

    const res = await fetch(`http://localhost:3000/api/v1/ig-reel-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": 'Content-Type, Authorization'
    },
      body: JSON.stringify({url: url})
    });

    const data = await res.json()

    console.log(data, "data");
  
    const severVideoLink = data.igReelUrl
    const serverthumbnailName = data.thName
    const serverReelName = data.reelName

    
    console.log(severVideoLink, "severVideoLink");
    console.log(serverthumbnailName, "serverthumbnailName");
    setCdnMediaLink(severVideoLink)

      const res2 = await fetch(`http://localhost:3000/api/v1/make-ig-reel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Headers": 'Content-Type, Authorization'
      },
        body: JSON.stringify({thName: serverthumbnailName, reelName: serverReelName})
      })

      const data2 = await res2.json()
      console.log(data2, "data2");

      const severthumbnailLink = data2.thUrl
      const severReellLink = data2.reelUrl
  
      setThumbnailUrl(severthumbnailLink)
      setReelLink(severReellLink)

      console.log(severthumbnailLink, "severthumbnailLink");
      console.log(severReellLink, "severReellLink");
      console.log(thumbnailUrl, "thumbnailUrl");
      setDomLoaded(true);
      setData({reelLink: reelLink, thumbnailUrl: thumbnailUrl});
      setIsLoading(false);
  };



  return (
    <div className='text-black font-Poppins font-medium'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* nav */}
        <nav className='border-b'>
          <div className='py-2 px-6 sm:px-2 max-w-7xl m-auto'>
            <div className='flex items-center justify-between my-2'>
              <div>
                <span className='text-xl font-extrabold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600'>IgReel.com</span>
              </div>
              <div className='flex items-center cursor-pointer'>
                <span className='mx-2 pb-0.5'>English</span>
                <img className='inline' src='/assets/light-mode-ig.png' alt='light-mode-ig' width="20" />
              </div>
            </div>
          </div>
        </nav >
      {/* main content */}
        <div className="max-w-5xl pt-2 px-3 mx-auto pb-8 p-2">
          <div className="max-w-2xl mx-auto pb-24 p-2">
              <div className="flex justify-center items-center">
              <h2 className="text-center font-semibold text-2xl my-3">Instagram Downloader</h2>
              </div>

              <div className='mt-4 sm:mx-8 flex flex-row justify-around items-center overflow-x-auto'>
                <div className='m-2 ml-36 m:ml-2 z-10 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/reel-logo.png" alt="reel-logo"/>
                        Reel
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/photo-logo.png" alt="reel-logo"/>
                        Photo
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/igtv-logo.png" alt="reel-logo"/>
                        IGTV
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/video-logo.png" alt="reel-logo"/>
                        Video
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/music-audio-logo.png" alt="reel-logo"/>
                        Music
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/ig-stories-logo.png" alt="reel-logo"/>
                        Stories
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/highlights-logo.png" alt="reel-logo"/>
                        Highlights
                      </a>
                    </Link>
                  </div>
                  <div className='m-2 hover:text-blue-500'>
                    <Link href="/">
                      <a className='flex flex-col items-center justify-center text-sm'>
                        <img className='pb-1' src="/assets/ig-cover-pic-logo.png" alt="reel-logo"/>
                        <span>Profile</span>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="mt-4 text-center flex flex-col justify-center items-center">
                  <h2 className="font-medium font-sans text-lg">Instagram Reels Downloader</h2>
                  <p className='text-sm mt-2 font-light'>Paste the Instagram Reel Link to Download Instagram Reel </p>
                  </div>
          

                {/* input */}

          <form onSubmit={handleSubmit} className="text-gray-600 shadow-md rounded-full border-2 border-blue-600 flex justify-around items-center mt-4 px-6">
          <input
            type="text"
            name="url"
            placeholder="Paste Reel Link ..."
            className="w-full h-12  rounded-full text-sm focus:outline-none text-black "
            value={url}
            onChange={handleChange}
          />
          <span className='flex items-center'>
          <img className="inline mr-2 cursor-pointer" src="/assets/copy-icon.png" alt="reel-logo"/>
          <button
            type="submit"
            className="px-4 mr-3 bg-blue-600 w-min flex justify-center h-8 items-center rounded-full text-white"
          >
            <img className="mr-1" src="/assets/ig-downloder-logo.png" alt="reel-logo"/>
            <span className="mr-1">VIEW</span>
          </button>
          </span>
        </form>
        {/* <div className='flex justify-center'>
        <p className='text-sm mt-8 font-light w-max p-2 px-4 bg-yellow-50 rounded-lg'> ❗After clicking on download button long press/Right click to save reel in gallery as .mp4 </p>
        </div> */}

        {isLoading && (<div className='mt-8 flex flex-col justify-center items-center'>
          <div>
          <svg role="status"
            className="inline h-20 w-20 animate-spin mr-2 text-gray-200 dark:text-blue-600 fill-blue-600 dark:fill-blue-300"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeWidth="5px"
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              strokeWidth="5px"
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          </div>
          <Timer className="relative font-semibold text-xl bottom-[54px] right-1"/>
          <p className='text-sm -mt-4 font-medium text-center'>Getting the Reel data...</p>
        </div>)}
    

        
        

        <div className='mt-4 flex flex-col justify-center items-center'>
          <div>
            {/* {data.thumbnailUrl ? <img className="inline animate-pulse" src={`/data/${data.thumbnailUrl}`} alt="reel-logo"/> : <img className="inline animate-pulse" src="/assets/reel-placeholder.png" alt="reel-logo"/>} */}
            {/* <img className="inline animate-pulse" src="/assets/reel-placeholder.png" alt="reel-logo"/> */}
{/* 
             {reelLink && <video width="320" height="240" controls>
            <source src={`data/${reelLink}`} type="video/mp4"/>
            </video>
             }
               */}
            <div className='flex justify-center'>
                {/* {reelLink ?
                
                <ReactPlayer
              className='react-player fixed-bottom'
              url={`/data/${data.reelLink}`}
              width='40%'
              height='auto'
              controls = {true}
              /> :''} */}

              {console.log(data.reelLink, "data.reelLink-1")}
              {data.reelLink ?
                <>
                  <p className='text-sm mt-2 font-light text-center'>click on downloder button bellow 👇</p>
                  <video className='rounded-xl' width="40%" height="auto" controls preload="auto">
                    <source src={`/data/${data.reelLink}`} type="video/mp4"/>
                  </video>
                </> : ""}
              {console.log(data.reelLink, "data.reelLink-2")}

          </div>
          </div>
        {/* <button
            type="submit"
            className="px-4 mt-4 bg-blue-600 w-min flex justify-center h-8 items-center rounded-full text-white"
          >
            <img className="mr-1" src="/assets/ig-downloder-logo.png" alt="reel-logo"/>
            <span className="mr-1">Download</span>
          </button> */}
          <VideoBox videoLink={`/data/${data.reelLink}`}/>
          {console.log(`/data/${data.reelLink}`)}
          <Link 
            href={cdnMediaLink ? cdnMediaLink : "/"}
            target="_blank"
            rel="noopener noreferrer" >
          <a className='text-sm mt-4 font-light text-center text-blue-500 underline'>server 2 link</a>
          </Link>
        </div>
      
        </div>
        </div>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/v1/ig-reel-url`, {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({url: url})
//   })

//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home
