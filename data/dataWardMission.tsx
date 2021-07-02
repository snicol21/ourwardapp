import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"

export const dataHeroCard: IHeroCard = {
  title: "Ward Mission Fast",
  paragraph:
    "As a Stake, we're holding a 40 day fast in each Ward for missionary work. As a family, please select one of the 40 days between July 1st and August 9th to fast as a family for the missionary work in the ward and for your family mission plan.  Thanks for your willingness to combine your faith with those of our ward to support this effort.",
  image: {
    src: "/images/ward-mission/scriptures.png",
    alt: "Ward Fast",
  },
  button: {
    text: "Sign Up",
    link: {
      url: "https://www.signupgenius.com/go/10C0C4CACA62CA5F9C25-missionary",
      external: true,
    },
  },
  type: "light",
}

export const dataFaceCard: IContactCard = {
  title: "Brad\xa0Tingey",
  subtitle: "Ward Mission Leader",
  images: [
    {
      src: "/images/ward-mission/tingey.jpg",
      alt: "Brad Tingey",
      width: 100,
      height: 100,
    },
  ],
  soft: true,
}
