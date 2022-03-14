import type { ReactElement } from 'react';
import MainLayout from '../../layouts/mainLayout';
import HomeBanner from '../../features/HomeBanner';
import Intro from '../../features/Intro';
import Discovery from '../../features/Discover';

export default function Home (): JSX.Element {

    return (
       <>
           <section>
               <HomeBanner />
           </section>
           <section className="ftco-intro">
               <Intro />
           </section>
           <Discovery />
       </>
    )
}

Home.getLayout = (page: ReactElement) => {
    return (
        <MainLayout title="Home">
            {page}
        </MainLayout>
    )
}