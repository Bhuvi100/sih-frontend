import React, { Component } from "react";
import EditProfile from "../components/EditProfile";
import News from "../components/News";
import SidebarMobile from "../components/SidebarMobile";
import { WelcomeHero } from "../components/WelcomeHero";
import ProjectComponent from "../components/ProjectComponent";
import HomeHero from "../components/HomeHero";
import Resources from "../components/Resources";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/Banner";
import requireAuth from "../utils/requireAuth";
import auth from "../utils/auth";
import Router from "next/router";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
  }

  state = {
    moduletypes: [
      {
        id: 1,
        type: "Home",
        icon: faHome,
      },
      {
        id: 2,
        type: "Project",
        icon: faBars,
      },
      {
        id: 3,
        type: "Resources",
        icon: faBookReader,
      },
      {
        id: 4,
        type: "Profile",
        icon: faUser,
      },
    ],
    selectedmoduletype: 1,
    user: null,
    isAuth: false,
    userId: 0
  };

  async componentDidMount() {
    let data = await requireAuth('/');

    if (data.isAuth){
      if (data.user?.signed_up_at == null) {
        await Router.push('/setup-profile');
      }

      this.setState({user: data.user, isAuth: data.isAuth, userId: data.user.id});
    }
  }

  setModuleType(selectedtype) {
    this.setState({ selectedmoduletype: selectedtype });
  }
  render() {
    if (this.state.selectedmoduletype === 1) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
           <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <HomeHero />
              </div>
            </div>
          </div>
          
        </>
      );
    }
    if (this.state.selectedmoduletype === 2) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <WelcomeHero h1="PROJECT" />
                <ProjectComponent />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 3) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <WelcomeHero h1="RESOURCES" />
                <Resources />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 4) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <WelcomeHero h1="PROFILE" />
                <EditProfile user={this.state.user} isAuth={this.state.isAuth} userId={this.state.userId} key={this.state.userId} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
                <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
                <div className="p-10 items-center md:ml-80">
                  <div class="flex flex-wrap -mx-1 overflow-hidden lg:-mx-3">
                    <div class="my-1 px-1 w-full overflow-hidden lg:my-3 lg:px-3">
                      <img
                        className="md:max-w-lg sm:max-w-md"
                        src="assets/startup2.gif"
                      />
                    </div>

                    <div class="my-1 px-1 w-full  lg:my-3 lg:px-3">
                      Welcome to the alumni portal. Navigate with the links in
                      the menu.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Dashboard;
