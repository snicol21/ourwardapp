import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IMiniCard } from "../components/modules/cards/MiniCard"
import { config } from "../config"

const { apiUrl, apiWard, apiHeaders } = config

/**
 * REQUESTS
 */
export const dataCardsByTypeRequest = (type: string) => new Request(`${apiUrl}/datacard/${apiWard}/find/by-type/${type}`, apiHeaders)
export const dataCardByIdRequest = (id: string) => new Request(`${apiUrl}/datacard/${apiWard}/find/${id}`, apiHeaders)

/**
 * CONVERTER - MINI CARDS
 */
export const convertMiniCard = (miniCard: IDataCardResponse): IMiniCard => {
  return {
    title: miniCard?.title,
    subtitle: miniCard?.subtitle,
    ...(miniCard?.button && {
      button: {
        text: miniCard?.button?.text,
        ...(miniCard?.button?.link?.length === 1 && {
          link: {
            url: miniCard?.button?.link[0]?.url,
            ...(miniCard?.button?.link[0]?.label && { label: { text: miniCard.button.link[0].label } }),
            ...(miniCard?.button?.link[0]?.calendly && { calendly: miniCard.button.link[0].calendly }),
            ...(miniCard?.button?.link[0]?.external && { external: miniCard.button.link[0].external }),
          },
        }),
        ...(miniCard?.button?.link?.length > 1 && {
          link: [
            ...miniCard?.button?.link?.map((l) => {
              return {
                url: l?.url,
                ...(l?.label && { label: { text: l.label } }),
                ...(l?.calendly && { calendly: l.calendly }),
                ...(l?.external && { external: l.external }),
              }
            }),
          ],
        }),
      },
    }),
  }
}
export const convertMiniCards = (miniCards: IDataCardResponse[]): IMiniCard[] => {
  return miniCards.filter((miniCard) => miniCard.active).map((miniCard) => convertMiniCard(miniCard))
}

/**
 * CONVERTER - FACE CARDS
 */
export const convertFaceCard = (faceCard: IDataCardResponse): IContactCard => {
  // NOTE: face card is a mini-card plus an image array and paragraph (so we can grab the mini-card conversion and add the images)
  return {
    ...convertMiniCard(faceCard),
    ...(faceCard?.images?.length && {
      images: faceCard?.images?.map((image) => {
        return {
          src: image?.src,
          ...(image?.alt && { alt: image.alt }),
          ...(image?.width && { width: image.width }),
          ...(image?.height && { height: image.height }),
        }
      }),
    }),
  }
}
export const convertFaceCards = (faceCards: IDataCardResponse[]): IContactCard[] => {
  return faceCards.filter((faceCard) => faceCard.active).map((faceCard) => convertFaceCard(faceCard))
}

/**
 * CONVERTER - IMAGE CARDS
 */
export const convertImageCard = (imageCard: IDataCardResponse): IImageCard => {
  // NOTE: image card is a mini-card plus an image and paragraph (so we can grab the mini-card conversion and add the image)
  return {
    ...convertMiniCard(imageCard),
    ...(imageCard?.paragraph && { paragraph: imageCard.paragraph }),
    image: {
      src: imageCard?.images[0]?.src,
      ...(imageCard?.images[0]?.alt && { alt: imageCard.images[0].alt }),
      ...(imageCard?.images[0]?.width && { width: imageCard.images[0].width }),
      ...(imageCard?.images[0]?.height && { height: imageCard.images[0].height }),
    },
  }
}
export const convertImageCards = (imageCards: IDataCardResponse[]): IImageCard[] => {
  return imageCards.filter((imageCard) => imageCard.active).map((imageCard) => convertImageCard(imageCard))
}

/**
 * CONVERTER - HERO CARD
 * these are intended to exist one per page
 *
 */
export const convertHeroCard = (heroCard: IDataCardResponse, color: "dark" | "light"): IHeroCard => {
  // NOTE: hero card is a mini-card plus an image and a type (so we can grab the mini-card conversion and add the image)
  return {
    ...convertMiniCard(heroCard),
    ...(heroCard?.paragraph && { paragraph: heroCard.paragraph }),
    image: {
      src: heroCard?.images[0]?.src,
      ...(heroCard?.images[0]?.alt && { alt: heroCard.images[0].alt }),
      ...(heroCard?.images[0]?.width && { width: heroCard.images[0].width }),
      ...(heroCard?.images[0]?.height && { height: heroCard.images[0].height }),
    },
    type: color,
  }
}

/**
 * RESPONSE TYPE
 */
export type IDataCardResponse = {
  id: string
  wardPath: string
  title: string
  subtitle: string
  paragraph: string
  images: [
    {
      src: string
      alt: string
      width: number
      height: number
    }
  ]
  button: {
    text: string
    link: [
      {
        url: string
        calendly: boolean | null
        label: string
        external: boolean | null
      }
    ]
  }
  type: string
  active: boolean
}
