import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flujo para que una pelicula se muestre en la web',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        1. Agregar Fecha de Programación<br />
        2. Agregar Actividad<br />
        3. Agregar Pelicula<br />
        4. Agregar Pelí a Actividad
      </>
    ),
  },
  {
    title: 'Link de Administrador',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <a href="https://admin.festivalkunturnawi.com/login" target="_blank" rel="noopener noreferrer">
          https://admin.festivalkunturnawi.com/login
        </a>
      </>
    ),
  },
  {
    title: 'Credenciales de Administrador',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        correo: darday1980@gmail.com
        contraseña: 123456789
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
  );
}
