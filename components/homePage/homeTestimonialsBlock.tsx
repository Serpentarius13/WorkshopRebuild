import HomeTestimonial from "./homeTestimonial";

const HomeTestimonialsBlock = () => {
  return (
    <>
      <HomeTestimonial
        author={"Carl Jung, swiss psychoanalyst"}
        text={
          "Knowing your own darkness is the best method for dealing with the darknesses of other people. One does not become enlightened by imagining figures of light, but by making the darkness conscious. The most terrifying thing is to accept oneself completely. Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes."
        }
        imageSource={"/Carl Jung.png"}
      />
      <HomeTestimonial
        author={"Friedrich Nietsczhe, german philosopher"}
        text={
          'What we experience in dreams - assuming that we experience it often - belongs in the end just as much to the over-all economy of our soul as anything experienced "actually": we are richer or poorer on account of it.'
        }
        imageSource="/Friedrich Nietsczhe.jpg"
        reversed={true}
      />
      <HomeTestimonial
        author={"Charles Dickens, english writer"}
        text={
          "Dreams are the bright creatures of poem and legend, who sport on earth in the night season, and melt away in the first beam of the sun, which lights grim care and stern reality on their daily pilgrimage through the world."
        }
        imageSource="/Charles Dickens.jpg"
      />
      <HomeTestimonial
        author={"Arthur Shopenhauer, german philosopher"}
        text={
          "Life and dreams are leaves of one and the same book. The systematic reading is real life, but when the actual reading hour (the day) has come to an end, and we have the period of recreation, we often continue idly to thumb over the leaves, and turn to a page here and there without method or connexion."
        }
        imageSource="/Arthur Shopenhauer.png"
        reversed={true}
      />

      <HomeTestimonial
        author={"William Shakespear, screenplay writer"}
        text={
          "Macbeth does murder sleep - the innocent sleep, Sleep that knits up the ravell'd sleave of care, The death of each day's life, sore labor's bath, Balm of hurt minds, great nature's second course, chief nourisher in life's feast."
        }
        imageSource="/William Shakespeare.jpg"
      />
    </>
  );
};
export default HomeTestimonialsBlock;
