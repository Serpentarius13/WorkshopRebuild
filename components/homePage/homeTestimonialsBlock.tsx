import HomeTestimonial from "./homeTestimonial";

const HomeTestimonialsBlock = () => {
  return (
    <>
      <HomeTestimonial
        author={"Carl Jung, swiss psychoanalyst"}
        text={
          "The dream is the small hidden door in the deepest and most intimate sanctum of the soul, which opens to that primeval cosmic night that was soul long before there was conscious ego and will be soul far beyond what a conscious ego could ever reach"
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
        author={"Sigmund Freud, austrian psychoanalyst"}
        text={
          "The interpretation of dreams is the royal road to a knowledge of the unconscious activities of the mind."
        }
        imageSource="/Sigmund Freud.png"
      />
    </>
  );
};
export default HomeTestimonialsBlock;
