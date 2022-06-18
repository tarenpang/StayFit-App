import React from 'react';

export default function SponsorBar() {
    return (
      <React.Fragment>
        <footer style={{ position: "fixed",  display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
        <img alt ="Nike" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" style={{width:"27%"}}/>
        <img alt="Adidas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" style={{width:"27%"}}/>
        <img alt="Reebok" src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png" style={{width:"27%"}}/>
        </footer>
      </React.Fragment>
    );
  }