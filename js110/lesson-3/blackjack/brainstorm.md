# BlackJack

## To Do List:

- [x] Create the deck

  - [x] 4 suits (Club, Spade, Diamond, Heart)
  - [x] 9 Number cards, 4 Face Cards (2 - 10 numbers) (Jack, Queen, King, Ace)

- [x] Card distribution

  - [x] 2 Cards to player and dealer
    - [x] pass cards in this order:
      - Player
      - Dealer
      - Player
      - Hidden Dealer Card from player

- [x] Need a dealer hand

  - [x] Show 1 card and other card is hidden
  - [x] If card values equal to 17 or greater Stand
    - [x] Else keep hitting till 16 or greater

- [ ] Create a money system

  - [ ] Start w/ 100 chips
  - [ ] If player wins round get them double what was bet
  - [ ] If player loses round, house takes the money

- [x] Get player Selection

  - [x] Player needs a hand

    - [x] Player hand is an array
    - [x] Hand will start with 2 cards

  - [ ] Bet

    - [ ] If bet is less than amount give error
    - [ ] If bet is above or equal minimum bet start round

  - [x] Hit

    - [x] If below value of 21 then allow hitting
    - [x] If above value of 21 then player bust

  - [x] Stand

    - [x] Allow to stand as long as player is not over or at 21
