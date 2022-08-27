import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description?: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Typescript Support',
    Svg: require('@site/static/img/typescript-support.svg').default,
    description: 'This library is written in TypeScript and supports all modern browsers.',
  },
  {
    title: 'Customizable SVG Loaders',
    Svg: require('@site/static/img/customizable.svg').default,
    description: 'You can easily customize the loader by passing in custom props to the loader component.',
  },
  {
    title: 'Light Weight',
    Svg: require('@site/static/img/light-weight.svg').default,
    description: 'This library is lightweight and does not require any additional dependencies.',
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
