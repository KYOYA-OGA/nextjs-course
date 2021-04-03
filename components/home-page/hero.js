import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/kyoya.png"
          alt="Kyoya"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kyoya</h1>
      <p>I blog about web development - especially frontend.</p>
    </section>
  );
}

export default Hero;
