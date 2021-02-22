export const hideBodyScroll = (hide: boolean) => {
  if (typeof document !== `undefined`) {
    const setOverFlowY = (value) => (document.getElementsByTagName("body")[0].style.overflowY = value)
    hide ? setOverFlowY("hidden") : setOverFlowY("auto")
  }
}
