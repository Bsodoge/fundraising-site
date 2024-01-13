import Button from './components/Button';
import FaqContainer from './components/FaqContainer';
import FaqFormContainer from './components/FaqFormContainer';
import ProgressBar from './components/ProgressBar';
import TierBox from './components/TierBox';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.information}>
          <h1 className={styles.header}>Create Ad Campaign in the Tram</h1>
          <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, doloribus. Harum, aspernatur iste dolorem optio ratione nostrum dolor vitae dolores at error maiores id corrupti ad tempore molestias eveniet accusantium, doloremque quidem magnam suscipit officia amet eum. Nobis eius sint ratione eveniet sapiente officiis, accusantium modi maxime veniam vero quis commodi corrupti, perferendis dolor esse aspernatur delectus atque nemo. Veritatis est consequuntur provident enim, vel nostrum, natus animi sunt accusantium perferendis, amet illum ipsam fugit nihil dolores autem inventore praesentium vero quos odit ad beatae error magni. Nostrum veniam necessitatibus ipsam, vitae numquam quod dolorum obcaecati placeat cum esse aspernatur reiciendis commodi unde, modi est sit laudantium ea ut, natus velit eligendi assumenda tempora accusamus in! Maxime dolore quasi sapiente odio itaque officiis minima voluptate est architecto ea debitis quas vero quam aut laboriosam, nulla inventore? Esse aliquam vero laborum eaque. Eos, consequatur. Nemo commodi debitis soluta quis, laudantium ut cum, nisi possimus hic nulla est, dolorem consequuntur aliquid id rerum cupiditate nihil libero neque saepe facilis delectus? Tenetur quia sit modi, esse odio ratione repellat perspiciatis recusandae rerum exercitationem fugit ipsum eos eius sapiente distinctio officia pariatur, perferendis delectus nostrum id temporibus tempore. Aspernatur fugiat placeat dolore excepturi incidunt!</p>
          <h1 className={styles.header}>Frequently Asked Questions:</h1>
          <ul className={styles.faq}>
            <FaqContainer question='Lorem ipsum dolor sit.' answer='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vero debitis earum ipsa labore sequi unde obcaecati, eos tempore fuga reiciendis ex nisi odio quis amet illo sint quidem asperiores.' />
            <FaqContainer question='Lorem ipsum dolor sit.' answer='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vero debitis earum ipsa labore sequi unde obcaecati, eos tempore fuga reiciendis ex nisi odio quis amet illo sint quidem asperiores.' />
            <FaqContainer question='Lorem ipsum dolor sit.' answer='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vero debitis earum ipsa labore sequi unde obcaecati, eos tempore fuga reiciendis ex nisi odio quis amet illo sint quidem asperiores.' />
            <FaqContainer question='Lorem ipsum dolor sit.' answer='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vero debitis earum ipsa labore sequi unde obcaecati, eos tempore fuga reiciendis ex nisi odio quis amet illo sint quidem asperiores.' />
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
          <form action="">
            <label htmlFor="">Donation Amount:</label>
            <input type="text" name="donation_amount" id="donation_amount" />
          </form>
          <Button button_text='Donate Now' />
        </div>
      </div>
    </main>
  )
}
