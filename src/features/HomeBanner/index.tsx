import Image from 'next/image';

export default function HomeBanner (): JSX.Element {
    return (
        <Image
            src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt="Picture of the author"
            layout="fill"
            objectFit='cover'
            width="1000"
            height="1000"
        />
    )
}
