function getCardsOrder(input, cards) {
  // 把手上最下面一张牌放到最上面
  if (cards.length) {
    let popCard = cards.pop()
    cards.unshift(popCard)
  }
  // 把桌上的牌往回收
  let popItem = input.pop()
  cards.unshift(popItem)

  if (input.length == 0) {
    return cards
  } else {
    return getCardsOrder(input, cards)
  }
}