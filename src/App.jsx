
import TitleCard from './Title-card.jsx'
import Header from './Header.jsx';
import Interlude from './Interlude.jsx';
import {titles, content, images, interlude} from './text-contents.jsx';


function App() {

  const headerTitle = "Innovation Project";
  const headerSubtitle = <p>Guinea-pig-like <b>React project</b> brought to you by <b>yours truly.</b></p>

  return(
    <>
    <Header header = {headerTitle} subtitle = {headerSubtitle}/>
    <TitleCard title={titles.intro} content={content.intro} image={images.intro}/>
    <Interlude content={interlude['content-mission']} subtitle={interlude['sub-mission']}/>
    <TitleCard title={titles.mission} content={content.mission} image = {images.mission}/>
    <TitleCard title={titles.team} content={content.team}/>
    <Interlude content={interlude['content-team']} subtitle={interlude['sub-team']}/>
    <TitleCard title={titles.mechanics} content={content.mechanics} image={images.mechanics}/>
    <TitleCard title={titles.elec} content ={content.elec} image={images.elec} />
    <Interlude content={interlude['InB-content']} subtitle={interlude['Inb-sub']}/>
    <TitleCard title={titles.control} content ={content.control} image={images.control} />
    <TitleCard title={titles.soft} content ={content.soft} image={images.soft} />
    <br />
    <Interlude content={interlude.end} />
    </>
  );

}

export default App
