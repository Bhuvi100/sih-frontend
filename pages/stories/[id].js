import React, { useEffect, useState } from "react";
import { Nav } from "../../components/Navbar";
import Router, { useRouter } from "next/router";
import axios from "../../utils/axios";
import Loading from "../../components/Loading";

export default function Stories() {
  const { id } = useRouter().query;

  const [isLoading, setIsLoading] = useState(true);
  const [story, setStory] = useState(null);

  useEffect(async () => {
    if (isLoading && id) {
      if (id < 1 || id > 6) {
        await Router.push("/");
        return;
      }

      axios()
        .get(`stories/public/${id}`)
        .then((response) => {
          setStory(response.data);
        })
        .catch(async () => await Router.push("/"))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Nav />
      <div className="mx-10 my-10  px-4 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <a
          href={"/"}
          style={{ fontFamily: "Montserrat" }}
          className="button-active bg-indblue p-3 text-white rounded-lg w-40 flex mb-10"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
          <span className="ml-6">Back</span>
        </a>
        <div className={"flex justify-center"}>
          <div className="max-w-full">
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-indblue text-2xl"
            >
              {story.title}
            </h1>
            <br />
            <div className="mt-4">
            <div className="profile-img-outer" style={{float:'right',width:'250px'}}>
              <figure className="float-right pl-5 text-center">
                <img className="rounded-lg" src={story.user.picture}  />
                {/*<figcaption style={{ boxShadow : '0 5px 3px #3c3c3c', paddingTop: '5px', paddingBottom:'5px' }}>
                  <h3 style={{ fontFamily: "Montserrat",textTransform:'uppercase'}} className="text-black text-md mt-2">
                    by {story.user.name} </h3>
                    <h4 style={{fontWeight:'noraml',textTransform:'uppercase',fontSize:'1rem'}}>Java Developer</h4>
                    <h5 style={{fontWeight:'noraml',textTransform:'capitalize',fontSize:'1rem'}}>AICTE</h5>
                </figcaption>*/}
              </figure>
            </div>
              <h3 style={{ fontFamily: "Montserrat",textTransform:'uppercase'}} className="text-black text-md mt-2">
                  {story.user.name}
              </h3>
               <h3 style={{ fontFamily: "Montserrat",textTransform:'uppercase'}} className="text-black text-md mt-2">
                  Participated in : <span style={{fontWeight:'bolder'}}> SIH2018 Software</span>
              </h3>
               <h3 style={{ fontFamily: "Montserrat",textTransform:'uppercase'}} className="text-black text-md mt-2">
                  Startup Name : 
              </h3>
               <h3 style={{ fontFamily: "Montserrat",textTransform:'uppercase'}} className="text-black text-md mt-2">
                  <span style={{fontWeight:'bolder'}}>Achievements :</span>
              </h3>
              <p> 
                    Currently spearheading the growth operations at Finolet, my family business. 
                    Bringing in true financial inclusivity to the unserved and the underserved 
                    segment of the Indian society through an unique Phygital model. Previously 
                    handled digital promotion for a suite of 14 B2B SaaS products in the global
                     market under the ManageEngine IT security team of Zoho Corporation Pvt Ltd 
                     for 2 years 7 months. I am running a community for engineering students, 
                      where I mentor them on a regular basis. Through my community I have 
                    facilitated jobs to 150+ students so far. During my under graduation, 
                    I spearheaded the entrepreneurship development cell at my college as the Chief 
                    Executive Officer, where I mentored 11 start-ups and facilitated funding of 2.5 crores 
                    to 2 start-ups. Personally, I have participated in 42 hackathons and B school events, 
                    creating solutions to real time problems. I had won the best Innovation and Inspiration 
                    award at Smart India hackathon 2018. Apart from which, I have won 13 other hackathons.
              </p>
              {story.description
                .replace(/(?:\r\n|\r|\n)/g, "<br/>")
                .split("<br/>")
                .map((para, index) => (
                    <p key={index}>{para} {para ? <div><br/></div> : ""} </p>
                ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
