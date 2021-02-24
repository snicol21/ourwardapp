export const hideBodyScroll = (hide: boolean) => {
  if (typeof document !== `undefined`) {
    hide ? document.body.classList.add("is-scrollLocked") : document.body.classList.remove("is-scrollLocked")
  }
}
