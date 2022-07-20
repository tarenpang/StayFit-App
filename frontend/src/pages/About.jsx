import ResponsiveAppBar from '../components/Navbar';

const About = () =>{
    return(
        <>
        <ResponsiveAppBar/>
        <div>
        <h1 style={{textAlign: "center", color:"#0B4C8A"}}>About Us</h1>
        <br/>
        <p style={{marginLeft: "20%", marginRight: "20%"}}>
            Here at StayFit believe that everyone should live a fit and happy life. Our goal is to help make that fit lifestyle easy and accessible for everyone, whether youre looking to maintain a healthy weight or to become the best version of you possible. 
        </p>
        <p style={{marginLeft: "20%", marginRight: "20%"}}>
            If you find yourself not knowing where to start or looking for guidance, one of our licensed trainers would be happy to get you started on your path to success. Always remember, stay motivated, stay moving, StayFit!
        </p>
        <p style={{marginLeft: "20%", marginRight: "20%"}}>
            Always remember, stay motivated, stay moving, StayFit!
        </p>
        </div>
        </>
    )
}

export default About;