import Image from 'next/image';
import homeBannerImage from '../../static/images/bg_3.jpg';

export default function HomeBanner (): JSX.Element {
    return (
        <Image
            src={homeBannerImage}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            priority
        />
    )
}
