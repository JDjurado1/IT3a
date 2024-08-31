import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Lato, Open_Sans } from 'next/font/google';

const lato = Lato({ weight: '700', subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About James Daniel D. Jurado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={openSans.className}>
        {/* Center the image and add more space below */}
        <img
          src="/images/profile.jpg"
          alt="James Daniel D Jurado"
          style={{ borderRadius: '50%', width: '140px', height: '170px', marginBottom: '40px', display: 'block', margin: '0 auto' }}
        />

        <h1 className={`${styles.title} ${lato.className}`}>JAMES DANIEL D. JURADO</h1>

        <p className={`${styles.description} ${openSans.className}`}>
          Hello, My Name is James Daniel Jurado. <br />
          I am 21 Years Old. <br />
          I live at Mexico, Pampanga. <br />
          I am currently an Irregular 3rd year IT Student studying at the University of the Assumption.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={lato.className}>Hobbies</h3>
            <p>Watching movies</p>
            <p>Playing video games</p>
            <p>I love to listen to pop punk bands</p>
          </div>

          <div className={styles.card}>
            <h3 className={lato.className}>Favorite Food</h3>
            <p>My favorite food is everything that my mom cooks.</p>
          </div>

          <div className={styles.card}>
            <h3 className={lato.className}>Why did I take IT?</h3>
            <p>
              I have been fascinated by how things work from a young age, whether it was fixing gadgets at home or just understanding how my favorite video games ran smoothly.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={lato.className}>Career Exploration After Graduating</h3>
            <p>I want to be an IT tech or a quality assurance tester.</p>
          </div>

          <div className={styles.card}>
            <h3 className={lato.className}>What I Expect in This Subject</h3>
            <p>
              I want to learn everything in this subject that will help me in my career of being in IT.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={lato.className}>Topics I Want to Discuss</h3>
            <p>
              How to manage complex projects and navigate dynamic environments, offering lessons applicable in various professional and personal contexts.
            </p>
          </div>
        </div>
      </main>

      <footer className={openSans.className}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .description {
          text-align: center;
          line-height: 1.6;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${openSans.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
 