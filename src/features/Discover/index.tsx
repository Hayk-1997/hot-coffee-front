import Image from 'next/image';
import temporaryImage from '../../assets/images/about.jpg';

export default function Discovery (): JSX.Element {
    return (
        <section className="ftco-about d-md-flex">
            <div className="one-half img">
                <Image
                    src={temporaryImage}
                    layout="fixed"
                />
            </div>
            <div className="one-half">
                <div className="overlap">
                    <div className="heading-section">
                        <span className="subheading">Discover</span>
                        <h2 className="mb-4">Our Story</h2>
                    </div>
                    <div>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                            would have been rewritten a thousand times and everything that was left from its origin
                            would be the word "and" and the Little Blind Text should turn around and return to its own,
                            safe country. But nothing the copy said could convince her and so it didn’t take long until
                            a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged
                            her into their agency, where they abused her for their.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}