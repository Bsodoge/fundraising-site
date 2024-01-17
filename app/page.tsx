import PortableText from 'react-portable-text';
import FaqContainer from './components/FaqContainer';
import FaqFormContainer from './components/FaqFormContainer';
import ProgressBar from './components/ProgressBar';
import TierBox from './components/TierBox';
import { ICampaign } from './interfaces/ICampaign';
import styles from './page.module.css';
import { client } from './utils/configSanity';
import { IFaq } from './interfaces/IFaq';
import { ITier } from './interfaces/ITier';

const getCampaign = async () => {
  const query = `*[_type == "campaign"]`;
  const data = await client.fetch(query);
  console.log(data)
  return data as ICampaign[];
}

const getFaq = async () => {
  const query = `*[_type == "faq"]`;
  const data = await client.fetch(query);
  return data as IFaq[];
}

const getTiers = async () => {
  const query = `*[_type == "tiers"] {
    name,
    description,
    requirement,
    image {
      asset -> {
        url
      }
    }
  }`;
  const data = await client.fetch(query);
  return data as ITier[];
}

export default async function Home() {
  const camapigns = (await getCampaign()) as ICampaign[];
  const faqs = (await getFaq()) as IFaq[];
  const tiers = (await getTiers()) as ITier[];
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.information}>
          <h1 className={styles.header}>{camapigns[0]?.title}</h1>
          <PortableText className={styles.description} content={camapigns[0]?.description} />
          <h1 className={styles.header}>Frequently Asked Questions:</h1>
          <ul className={styles.faq}>
            {
              faqs.map(faq => <FaqContainer key={faq._id} question={faq.question} answer={faq.answer} />)
            }
            <FaqFormContainer />
          </ul>
        </div>
        <div className={styles.right_container}>
          <div className={styles.donation_container}>
            <h2 className={styles.currently_raised}>
              $X Raised of ${camapigns[0].goal}
            </h2>
            <ProgressBar />
            <a className={styles.donation_link} href="https://buy.stripe.com/test_00g14vgho0Ei5Ko5kk" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </div>
          <div className={styles.tiers_container}>
            <h2 className={styles.tiers_header}>Tiers</h2>
            <div className={styles.tier_container}>
              {
                tiers.map(tier => <TierBox key={tier._id} tierName={tier.name} tierDescription={tier.description} tierImage={tier.image.asset.url} tierRequirment={tier.requirement}></TierBox>).reverse()
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
