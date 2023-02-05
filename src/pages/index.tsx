import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowRightThinIcon from 'mdi-react/ArrowRightThinIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import TriangleSmallUpIcon from 'mdi-react/TriangleSmallUpIcon'
import Link from 'next/link'

import {
    ContentSection,
    CoreFeatures,
    CtaSection,
    Layout,
    IntegrationsSection,
    Background,
    Heading,
} from '../components'
import { DemoVideo } from '../components/DemoVideo'
import { DownloadAppButton } from '../components/DownloadAppButton'
import { buttonLocation } from '../data/tracking'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                "Big codebases are less painful with Sourcegraph's code intelligence: universal code search+nav and large-scale fixes/refactors.",
        }}
        heroAndHeaderClassName="tw-bg-black" // tw-bg-[color:var(--body-bg)]"
        className="navbar-dark"
    >
        <HomeHero />

        <ContentSection background="white">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <CtaSection />
    </Layout>
)

const HomeHero: FunctionComponent = () => (
    <Background variant="black" className="tw-pb-[450px]">
        <div className="tw-mx-auto tw-text-center container-xl">
            <div className="tw-py-lg tw-hidden">
                <div className="btn-group">
                    <div className="btn btn-sm btn-secondary tw-min-w-[150px]">About</div>
                    <div className="btn btn-sm btn-outline-secondary tw-min-w-[150px]">Search public code</div>
                </div>
            </div>
            <div className="tw-py-xl tw-hidden">
                <Link
                    href="https://sourcegraph.test:3443"
                    className="btn btn-outline-secondary tw-w-3/5 tw-text-left tw-pl-xs tw-py-xxs tw-border-2 tw-bg-gray-700 [&:not(:hover)]:tw-text-gray-400 [&:not(:hover)]:tw-border-gray-600"
                >
                    <SearchIcon className="tw-inline tw-mr-xxs" /> Search public code...
                </Link>
            </div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-lg tw-pt-3xl">
                <div className="tw-col-span-full md:tw-col-span-1">
                    <header className="tw-mb-md">
                        <h1 className="tw-text-xl md:tw-text-5xl lg:tw-text-6xl tw-mb-sm tw-whitespace-nowrap tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-violet-400 tw-to-vermillion-300">
                            Find. Fix. Flow.
                        </h1>
                        <p className="tw-text-lg md:tw-text-xl tw-mb-sm">
                            Big codebases are less painful with Sourcegraph's code intelligence:{' '}
                            <SubtleLink color="tw-text-white" href="TODO" className="tw-font-semibold">
                                universal&nbsp;code&nbsp;search+nav+AI
                            </SubtleLink>{' '}
                            and{' '}
                            <SubtleLink color="tw-text-white" href="TODO" className="tw-font-semibold">
                                large‑scale&nbsp;fixes/refactors
                            </SubtleLink>
                            .
                        </p>
                        <ul className="tw-text-sm tw-text-gray-300 tw-ml-0 tw-list-none">
                            <li className="tw-text-gray-300">
                                Works alongside your{' '}
                                <SubtleLink color="tw-text-gray-300" href="TODO">
                                    editor
                                </SubtleLink>{' '}
                                and{' '}
                                <SubtleLink color="tw-text-gray-300" href="TODO">
                                    code&nbsp;host
                                </SubtleLink>
                                .
                            </li>
                            <li className="tw-text-gray-300 tw-hidden">
                                Supports{' '}
                                <SubtleLink color="tw-text-gray-300" href="TODO">
                                    55 programming languages
                                </SubtleLink>
                                <SubtleLink color="tw-text-gray-300" href="TODO">
                                    Supports all&nbsp;languages&nbsp;&amp;&nbsp;repositories.
                                </SubtleLink>
                            </li>
                            <li>
                                <SubtleLink color="tw-text-gray-300" href="TODO">
                                    Anonymous and free.
                                </SubtleLink>
                            </li>
                        </ul>
                    </header>

                    <div className="tw-mx-auto tw-mt-md">
                        <HomeActions />
                    </div>
                </div>
                <div className="tw-col-span-full md:tw-col-span-2">
                    <DemoVideo video="homepage-demo-202301" className="tw-rounded tw-border" />
                </div>
            </div>
        </div>
    </Background>
)

const SubtleLink: React.FunctionComponent<{
    href: string
    color: 'tw-text-white' | 'tw-text-gray-300'
    className?: string
    children: React.ReactNode
}> = ({ href, color, className, children }) => {
    const colorClassName =
        color === 'tw-text-white'
            ? '[&:not(:hover):not(:focus)]:tw-text-white [&:not(:hover):not(:focus)]:tw-decoration-gray-400 tw-text-violet-300'
            : '[&:not(:hover):not(:focus)]:tw-text-gray-300 [&:not(:hover):not(:focus)]:tw-decoration-gray-600 tw-text-violet-300'
    return (
        <Link
            href={href}
            className={classNames(
                'tw-underline tw-decoration-1 tw-underline-offset-4 tw-decoration-dotted',
                colorClassName,
                className
            )}
        >
            {children}
        </Link>
    )
}

const HomeActions: React.FunctionComponent<{}> = () => (
    <div className="tw-flex tw-flex-col tw-items-center">
        <DownloadAppButton buttonLocation={buttonLocation.hero} />

        <div className="tw-text-sm tw-text-gray-300 tw-bg-[#252525] tw-rounded tw-p-xxs tw-mt-xs tw-relative tw-max-w-[293px]">
            <TriangleSmallUpIcon
                style={{ position: 'absolute', right: -3, top: -29, width: 50, height: 50, color: '#252525' }}
            />
            <Link href="TODO" className="tw-text-violet-300 tw-no-underline tw-font-normal">
                Web
            </Link>{' '}
            (public code only),{' '}
            <Link href="TODO" className="tw-text-violet-300 tw-no-underline tw-font-normal">
                build from source
            </Link>
            , or{' '}
            <Link href="TODO" className="tw-text-violet-300 tw-no-underline tw-font-normal">
                other platforms
            </Link>
            .
        </div>
        <Link
            href="/pricing"
            className="tw-text-violet-300 tw-no-underline tw-font-normal tw-block tw-text-left tw-mt-md"
        >
            <span className="tw-font-semibold tw-text-xl">
                Sourcegraph Enterprise <ArrowRightThinIcon className="tw-inline" />
            </span>
            <span className="tw-text-sm tw-text-gray-300 tw-block">For organizations using Sourcegraph at scale</span>
        </Link>
    </div>
)

const ActionsHeader: React.FunctionComponent<{ children: string }> = ({ children }) => (
    <Heading as="h2" size="h5" className="tw-text-gray-300 tw-text-sm tw-font-normal tw-pb-0">
        {children}
    </Heading>
)

const SubtleDescription: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <p className="tw-text-sm tw-text-gray-300">{children}</p>
)

export default Home
