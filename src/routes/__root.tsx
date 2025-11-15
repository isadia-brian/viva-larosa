import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { useState, useEffect } from 'react'

import Navbar from '@/components/Navbar'
import { HeroSentinelContext } from '../context/HeroSentinelContext'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Viva Larosa',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [heroSentinel, setHeroSentinel] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!heroSentinel) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting)
    })

    observer.observe(heroSentinel)

    return () => {
      observer.unobserve(heroSentinel)
    }
  }, [heroSentinel])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar isHeroVisible={isHeroVisible} />
        <HeroSentinelContext.Provider value={setHeroSentinel}>
          {children}
        </HeroSentinelContext.Provider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
