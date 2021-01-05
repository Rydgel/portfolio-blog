import { FC } from 'react';
import { Twitter, Facebook, Instagram, GitHub } from 'react-feather';

const Bio: FC = () => {
    return (
        <section
            role="me"
            className="grid grid-cols-about-mobile lg:grid-cols-about gap-bio-mobile lg:gap-bio place-items-stretch my-8"
        >
            <img
                src="/me.png"
                alt="Jérôme Mahuet"
                className="w-avatar-mobile lg:w-avatar h-avatar-mobile lg:h-avatar rounded-full"
            />
            <div role="bio" className="self-center col-2-end">
                <h3 className="text-xl lg:text-3xl font-bold">Jérôme Mahuet</h3>
                <p role="info" className="text-base lg:text-2xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolorum laboriosam ex nemo. Eaque
                    nam quasi, illo voluptatibus, perspiciatis neque non similique corporis qui provident suscipit velit
                    obcaecati, assumenda ex.
                </p>
            </div>
            <div className="col-start-social-col">
                <a href="https://twitter.com/rydgel" target="_blank" rel="noreferrer">
                    <Twitter size={20} />
                </a>
            </div>
            <div>
                <a href="https://facebook.com/rydgel" target="_blank" rel="noreferrer">
                    <Facebook size={20} />
                </a>
            </div>
            <div>
                <a href="https://instagram.com/rydgel" target="_blank" rel="noreferrer">
                    <Instagram size={20} />
                </a>
            </div>
            <div>
                <a href="https://github.com/rydgel" target="_blank" rel="noreferrer">
                    <GitHub size={20} />
                </a>
            </div>
        </section>
    );
};

export default Bio;
