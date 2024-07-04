import SpeakerCardV2 from './daywiseoverview/SpeakerCardV2';
import speakers from '../data/speakers.json';
import clsx from 'clsx';

export default function SpeakersPanel() {
  return (
    <div
      className={clsx(
        'w-full mb-[120px] flex flex-col justify-center items-center sm:px-40',
      )}
    >
      <div
        id="speakers"
        className="text-white text-4xl md:text-6xl mb-10 lg:mb-20 font-sans font-medium"
      >
        <h1>Speakers</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        {speakers.map((e) => {
          return (
            <SpeakerCardV2
              key={e.name}
              title={e.name}
              experience={e.experience}
              imgSrc={e.imageUrl}
              data={e.details}
              className="mx-6 my-4"
            />
          );
        })}
      </div>
    </div>
    // <SpeakerCardV2
    //   title="Laisha Wadhwa"
    //   experience="Lead Researcher, Samsung India"
    //   imgSrc="/speakers/laisha_wadhwa.png"
    // />
  );
}
