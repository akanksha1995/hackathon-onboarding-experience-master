import "./OnboardingCard.css";
// import Background from '/card-background.jpg'

const OnboardingCard = (props) => {
    return (
        <div className="onboarding-card" style={{ backgroundImage: "url('/card-background.png')"}}>
            <h4 className="onbarding-card-heading">Welcome to All Aboard</h4>
            <hr/>
            {props.children}
            <img className="logo" src="/Points_RGB_tagline_R.png"/>
        </div>
    )
}

export default OnboardingCard