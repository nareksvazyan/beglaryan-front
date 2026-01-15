import React from "react";

const TeamIntro = ({teamPageInfo}) => {
  return (
    <section className="team-intro spacer p-bottom-md p-top-md">
      <div className="wrapper">
        <p className="about-title mb-5 font-weight-bold">
         {teamPageInfo?.description}
        </p>
      </div>
    </section>
  );
};

export default TeamIntro;
