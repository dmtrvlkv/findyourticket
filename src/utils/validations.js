export default {
  isOnlySymbols(value) {
    return value && value.trim().length > 0 &&
      !/[^a-zа-я]/gim.test(value.trim());
    }
}