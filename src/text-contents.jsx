// contains the text for the card components

export const interlude = {
    "content-mission" : <p className="title-interlude">But...What are we <b>doing</b> exactly?</p>,
    "sub-mission" : <p><b>No, but seriously...</b></p>,
    "content-team" : <p className="title-interlude">Let us see the <b>team</b>, shall we?</p>,
    "sub-team" : <p><b>For dramatic effect...</b></p>,
    "InB-content" : <p className="title-interlude">Still <b>focusing</b> ? <b>Good.</b></p>,
    "Inb-sub" : <p><b>That is impressive, wow...</b></p>,
    "end" : <p className="title-interlude">&copy; {new Date().getFullYear()}<b> If you have questions, do not ask them here.</b></p>,

}

export const titles = {
    "intro" : <b>Who are we?</b>,
    "mission" : <b>Our mission</b>,
    "team" : <b>Our team</b>,
    "mechanics" : <b>Mechanics</b>,
    "elec" : <b>Electronics</b>,
    "control" : <b>Control</b>,
    "soft" : <b>Software</b>
}
export const content = {
    "intro" : <div>
                <p>A team of <b>french engineering students</b> from <b>ESME.</b> For a course, we are working on building a <b>5 axis robot.</b></p>
                <p>Our <b>project</b> is heavely inspired by the <b>BCN3D moveo model</b>, an open source robotic arm.</p>
                <p><a href="https://github.com/BCN3D/BCN3D-Moveo" target="_blank"> You can find the <b>link</b> here.</a></p>
            </div>,
    
    "mission" : <div>
                    <p>We were asked to create a <b>robotic arm</b>, following a number of <b>guidelines</b>.</p>
                    <p>The aim is to put on <b>caps</b> on <b>pencils.</b></p>
                    <p>We must have an <b>efficiency</b> of <b>one cap every 6 seconds.</b></p>
                    <p>We must <b>submit</b> the project before <b>June 14th 2024.</b></p>
                    <p>You may look up the <b>complete list of constrains</b> at <a href="https://docs.google.com/document/d/1SFokQEXgK9KJHtIE4oyPnSSPMC8bCZqjSiq9nAe0Rb0/edit#heading=h.lgalr8bm0sbh" target="_blank">this link.</a></p>
                </div>,

    "team" : <div>
                <p>Our <b>team</b> is composed of <b>4 poles.</b></p>
                <p><b>Mechanics</b></p>
                <p><b>Electronics</b></p>
                <p><b>Control</b></p>
                <p><b>Software</b></p>
                <p>Each <b>pole </b> has a specific <b>function.</b></p>
            </div>,
    "mechanics" : <div>
                    <p>The  <b>mechanics</b> pole aims to <b>design</b> and <b>understand</b> the structure of the robotic arm.</p>
                    <p>- <b>Create</b> the <b>3D piece</b>, using software such as <b>Fusion360.</b></p>
                    <p>- <b>Assemble</b> and <b>order</b> every necessary piece, <b>metallic</b> or <b>3D printed.</b></p>
                    <p>- <b>Understand</b> the <b>position</b> of the <b>hinges</b> and <b>captors.</b></p>
                    <br />
                    <p className="title"><b>[Members]</b></p>
                    <p><b>- Remi</b></p>
                    <p><b>- Lomig</b></p>
                    <p><b>- Thibaut</b></p>
                </div>,
    "elec" : <div>
                <p>The <b>electronics</b> pole aims to <b>design</b> and <b>understand</b> the wiring and <b>functionment</b> of the <b>electrical components.</b></p>
                <p>- <b>Properly wire</b> the robot and <b>communicate</b> these informations to the <b>mechanics pole.</b></p>
                <p>- <b>Understand</b> the functionment of the <b>driver motors</b> and communicate these informations to the <b>control pole.</b></p>
                <p>- <b>Ensure</b> the <b>alimentation</b> and the <b>ordering</b> of the <b>right materials.</b></p>
                <br />
                <p className="title"><b>[Members]</b></p>
                <p><b>- Louis. L</b></p>
                <p><b>- Ronnell</b></p>
            </div>,
    "control" : <div>
                    <p>The <b>control</b> pole aims to <b>understand</b> and <b>configurate</b> the motions of the robot using an <b>Arduino card.</b></p>
                    <p>- <b>Build</b> a <b>program</b> that allows the robot to <b>move</b> in-between <b>two positions.</b></p>
                    <p>- <b>Build</b> a <b>program</b> that handles the <b>activation</b> of the <b>sensors.</b></p>
                    <p>- <b>Understand</b> and <b>control</b> the motors via a <b>firmware.</b></p>
                    <br />
                    <p className="title"><b>[Members]</b></p>
                    <p><b>- Louis. A</b></p>
                    <p><b>- Théo</b></p>
                    <p><b>- Raphaël. K</b></p>
                </div>,
    "soft" : <div>
                <p>The <b>software</b> pole aims to create an <b>easy-to-use</b> and <b>intuitive</b> <b>UI (user interface).</b></p>
                <p>- <b>Design</b> the <b>frontend</b> using a combination of <b>HTML</b> and <b>CSS</b>, perhaps helped by a <b>framework</b> like <b>React Native.</b></p>
                <p>- <b>Build</b> interactivity with <b>Javascript</b>, <b>linking</b> the <b>arduino code</b> with the <b>webpage.</b></p>
                <p className="title"><b>[Members]</b></p>
                <p><b>- Louis. A</b></p>
                <p><b>- Théo</b></p>
                <p><b>- Raphaël. K</b></p>
            </div>

}

export const images = {
    "intro" : "https://pbs.twimg.com/profile_images/1630566606794379264/Fihyiy79_200x200.jpg",
    "mission" : "https://www.bcn3d.com/wp-content/uploads/2016/07/IMG_0015_2-1.jpg"
}

// kinda useless info, but PropTypes.shape is used to define an object
