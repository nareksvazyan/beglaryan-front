import React from "react";

export default function Maps() {
  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.0521211393564!2d44.5264577893433!3d40.18937625682457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd063762f41f%3A0xb21f68b8867c906a!2sBeglaryan%20Medical%20Center!5e0!3m2!1shy!2sam!4v1760596302783!5m2!1shy!2sam"
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
