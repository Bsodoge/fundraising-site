import PortableText from 'react-portable-text';
import Button from './components/Button';
import DonationPopup from './components/DonationPopup';
import FaqContainer from './components/FaqContainer';
import FaqFormContainer from './components/FaqFormContainer';
import ProgressBar from './components/ProgressBar';
import TierBox from './components/TierBox';
import { ICampaign } from './interfaces/ICampaign';
import styles from './page.module.css';
import { client } from './utils/configSanity';
import { IFaq } from './interfaces/IFaq';

const getCampaign = async () => {
  const query = `*[_type == 'campaign']`;
  const data = await client.fetch(query);
  return data as ICampaign[];
}

const getFaq = async () => {
  const query = `*[_type == "faq"]`;
  const data = await client.fetch(query);
  console.log(data);
  return data as IFaq[];
}

export default async function Home() {
  const camapigns = (await getCampaign()) as ICampaign[];
  const faqs = (await getFaq()) as IFaq[];
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.information}>
          {
            camapigns.map(campaign => <>
              <h1 className={styles.header}>{campaign?.title}</h1>
              <PortableText className={styles.description}  content={campaign?.description}/>
            </>
            )
          }
          <h1 className={styles.header}>Frequently Asked Questions:</h1>
          <ul className={styles.faq}>
            {
              faqs.map(faq => <FaqContainer key={faq._id} question={faq.question} answer={faq.answer}/>)
            }
            <FaqFormContainer />
          </ul>
        </div>
        <div className={styles.donation_container}>
          <h2 className={styles.currently_raised}>
            $X Raised of $Y Goal
          </h2>
          <ProgressBar />
          <div className={styles.tier_container}>
            <TierBox />
            <TierBox />
            <TierBox />
          </div>
          <Button button_text='Donate Now' />
        </div>
      </div>
    </main>
  )
}
